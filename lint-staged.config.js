export default {
	"*.cs": `dotnet csharpier`,
	"*.{cjs,cts,graphql,html,js,json,jsonc,jsx,ts,tsx}": [
		`eslint --format pretty --fix`,
		`prettier --write`,
	],
	"*.{csproj,css,esproj,md,pcss,scss,tsp,xml,yaml,yml}": `prettier --write`,
};
