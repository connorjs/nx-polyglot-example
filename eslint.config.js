import connorjsConfig from "eslint-config-connorjs";

const config = [
	...connorjsConfig,
	{
		// Global ignores. Related to `.gitignore`
		// https://eslint.org/docs/latest/use/configure/configuration-files-new#globally-ignoring-files-with-ignores
		ignores: [`.nx`],
	},
];

export default config;
