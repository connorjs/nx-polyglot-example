module.exports = {
	// Note: Switch to array syntax if concurrency issues appear
	"*.{cjs,css,cts,graphql,html,js,json,jsonc,jsx,md,pcss,scss,ts,tsx}": `prettier --write`,
	"*.{cjs,cts,graphql,html,js,json,jsonc,jsx,ts,tsx}": `eslint --fix`,
};
