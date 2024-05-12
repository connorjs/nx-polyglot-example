import { vitestConfig } from "@connorjs/nx-polyglot-example-vitest";
import react from "@vitejs/plugin-react-swc";
import type { GetManualChunk } from "rollup";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const projectRoot = import.meta.dirname;

// https://vitejs.dev/config/
export default defineConfig({
	...vitestConfig(projectRoot),
	build: {
		rollupOptions: {
			output: {
				manualChunks,
			},
		},
	},
	cacheDir: `build/.vite`,
	css: {
		modules: {
			// https://github.com/madyankin/postcss-modules#localsconvention
			localsConvention: `dashesOnly`,
		},
	},
	plugins: [
		react(),
		tsconfigPaths({ projects: [`tsconfig.json`] }),
		// Visualizer should be last
		visualizer({
			brotliSize: true,
			filename: `${projectRoot}/build/stats.json`,
			template: `raw-data`, // Used by `visualize` target
		}),
	],
});

/** Name chunks to improve caching and help bundle analysis. */
function manualChunks(id: string): ReturnType<GetManualChunk> {
	// Chunk `react` and `react-dom` (with their dependencies).
	// They change less often and can visualize the runtime bundle cost of React.
	// Last checked dependencies: v18.3 in 2024.05
	if (
		chunkMatches(id, [
			`/react/`,
			`/react-dom/`,
			`/react-is/`, // Also an official react package
			`/loose-envify/`,
			`/scheduler/`,
		])
	) {
		return `react`;
	}

	// Defer to default chunking
	return undefined;
}

/**
 * Returns true if `id` matches one of the `patterns` (packages).
 *
 * @param id - The chunk ID being matched.
 * @param patterns - List of patterns to check.
 *   An element of the form `/foo/` would match the `foo` package.
 * @returns true if one of the patterns matches; otherwise, false
 */
function chunkMatches(id: string, patterns: string[]) {
	return patterns.some((pattern) => id.includes(pattern));
}
