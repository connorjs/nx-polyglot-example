export default {
	"*.cs": `dotnet csharpier`,
	"*.{cjs,cts,graphql,html,js,json,jsonc,jsx,ts,tsx}": [
		`eslint --format pretty --fix`,
		`prettier --write`,
	],
	"*.{css,md,pcss,scss,tsp,yaml,yml}": `prettier --write`,
};
