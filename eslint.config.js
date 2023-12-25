import connorjsConfig from "eslint-config-connorjs";

export default [
	...connorjsConfig,
	{
		// Customize JSONC rules for Nx files
		files: [`nx.json`, `project.json`],
		rules: {
			"jsonc/no-comments": `off`,
		},
	},
	{ ignores: [`.nx`] },
];
