import path from "node:path";

import {
	configDefaults,
	coverageConfigDefaults,
	defineConfig,
} from "vitest/config";

const vitestToolsRoot = import.meta.dirname;
const workspaceRoot = path.resolve(vitestToolsRoot, `../..`);

export function vitestConfig(projectRoot) {
	const projectName = path.basename(projectRoot);
	return defineConfig({
		server: { fs: { allow: [vitestToolsRoot] } },
		test: {
			coverage: {
				all: true,
				clean: false, // Workspace-wide coverage directory; do not clean
				exclude: [
					...coverageConfigDefaults.exclude,
					`**/*.d{,.css}.ts`, // Ignore type definitions
					`**/*.stories.{ts,tsx}`, // Storybook stories
					`**/export.ts`, // Expo${projectRoot}/rt files should just export
				],
				include: [`src`],
				provider: `v8`,
				reporter: [[`cobertura`, { file: `${projectName}.cobertura.xml` }]],
				reportsDirectory: `${workspaceRoot}/coverage/raw`,
				thresholds: {
					branches: 80,
					functions: 100,
					lines: 80,
					perFile: true,
				},
			},
			environmentMatchGlobs: [[`**/*.tsx`, `happy-dom`]],
			exclude: [...configDefaults.exclude, `**/build/**`],
			reporters: [`dot`], // Unit test reporter (not coverage)
			restoreMocks: true,
			setupFiles: `${vitestToolsRoot}/vitest-dom-setup.js`,
		},
	});
}
