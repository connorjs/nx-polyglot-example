module.exports = {
	// Note: Switch to array syntax if concurrency issues appear
	"*.cs": `dotnet csharpier`,
	"*.{cjs,css,cts,graphql,html,js,json,jsonc,jsx,md,pcss,scss,ts,tsp,tsx}": `prettier --write`,
	"*.{cjs,cts,graphql,html,js,json,jsonc,jsx,ts,tsx}": `eslint --fix`,
};
