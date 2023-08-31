module.exports = {
	extends: [
		"@bohecola/eslint-config-basic",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended"
	],
	settings: { "import/resolver": { node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] } } },
	overrides: [],
	rules: {}
};
