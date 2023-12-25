module.exports = {
	"*.cs": `dotnet csharpier`,
	"*.{cjs,cts,graphql,html,js,json,jsonc,jsx,ts,tsx}": [
		`prettier --write`,
		`eslint --format pretty --fix`,
	],
	"*.{css,md,pcss,scss,tsp,yaml,yml}": `prettier --write`,
};
