// Only for plugins; see .editorconfig for values
export default {
	overrides: [
		{
			files: `*.{csproj,esproj,props,xml}`,
			options: {
				parser: `xml`,
				xmlQuoteAttributes: `double`, // Match prettier
				xmlSortAttributesByKey: true, // Instead of adding ESLint XML
			},
		},
	],
	plugins: [`@prettier/plugin-xml`],
};
