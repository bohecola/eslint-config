const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

if (!TS)
	console.warn("[@bohecola/eslint-config] TypeScript is not installed, fallback to JS only.");

module.exports = {
	overrides: [
		{
			files: ["*.vue"],
			parser: "vue-eslint-parser",
			parserOptions: { parser: "@typescript-eslint/parser", },
			rules: {
				"no-unused-vars": "off",
				"no-undef": "off",
				...(TS
					? { "@typescript-eslint/no-unused-vars": "off" }
					: null),
			},
		},
	],
	extends: [
		"plugin:vue/vue3-recommended",
		TS
			? "@bohecola/eslint-config-ts"
			: "@bohecola/eslint-config-basic",
	],
	rules: {}
};
