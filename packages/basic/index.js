module.exports = {
	root: true,
	env: {
		"browser": true,
		"es2021": true,
		"node": true
	},
	reportUnusedDisableDirectives: true,
	extends: [
		"eslint:recommended",
		"plugin:jsonc/recommended-with-jsonc",
	],
	ignorePatterns: [
		"*.min.*",
		"*.d.ts",
		"CHANGELOG.md",
		"dist",
		"LICENSE*",
		"output",
		"out",
		"coverage",
		"public",
		"temp",
		"package-lock.json",
		"pnpm-lock.yaml",
		"yarn.lock",
		"__snapshots__",
		"!.github",
		"!.vitepress",
		"!.vscode",
	],
	overrides: [
		{
			files: ["*.json", "*.json5"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/array-bracket-spacing": ["error", "never"],
				"jsonc/comma-dangle": ["error", "never"],
				"jsonc/comma-style": ["error", "last"],
				"jsonc/indent": ["error", 2],
				"jsonc/key-spacing": ["error", { beforeColon: false, afterColon: true }],
				"jsonc/no-octal-escape": "error",
				"jsonc/object-curly-newline": ["error", { multiline: true, consistent: true }],
				"jsonc/object-curly-spacing": ["error", "always"],
				"jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }],
			},
		},
		{
			files: ["package.json"],
			parser: "jsonc-eslint-parser",
			rules: {
				"jsonc/sort-keys": [
					"error",
					{
						pathPattern: "^$",
						order: [
							"publisher",
							"name",
							"displayName",
							"type",
							"version",
							"private",
							"packageManager",
							"description",
							"author",
							"license",
							"funding",
							"homepage",
							"repository",
							"bugs",
							"keywords",
							"categories",
							"sideEffects",
							"exports",
							"main",
							"module",
							"unpkg",
							"jsdelivr",
							"types",
							"typesVersions",
							"bin",
							"icon",
							"files",
							"engines",
							"activationEvents",
							"contributes",
							"scripts",
							"peerDependencies",
							"peerDependenciesMeta",
							"dependencies",
							"optionalDependencies",
							"devDependencies",
							"pnpm",
							"overrides",
							"resolutions",
							"husky",
							"simple-git-hooks",
							"lint-staged",
							"eslintConfig",
						],
					},
					{
						pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
						order: { type: "asc" },
					},
					{
						pathPattern: "^exports.*$",
						order: [
							"types",
							"require",
							"import",
						],
					},
				],
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		ecmaFeatures: { jsx: true },
		sourceType: "module",
	},
	rules: {
		// ????????????
		"indent": ["error", "tab"],
		// ???????????????
		"linebreak-style": ["error", "unix"],
		// ????????????
		"quotes": ["error", "double"],
		// ????????????
		"semi": ["error", "always"],
		// ????????????????????????
		"no-unused-vars": ["off"],
		// ????????????
		"padded-blocks": ["error", {
			"blocks": "never",
			"classes": "always",
			"switches": "always"
		}],
		// ??????????????????
		"space-before-blocks": ["error", {
			"functions": "always",
			"keywords": "always",
			"classes": "always"
		}],
		// ?????????????????????????????????????????????
		"operator-linebreak": ["error", "before"],
		// switch??????????????????
		"switch-colon-spacing": ["error", { "after": true, "before": false }],
		// ????????????????????????
		"no-whitespace-before-property": ["error"],
		// ??????????????????
		"space-in-parens": ["error", "never"],
		// ????????????
		"no-trailing-spaces": ["error"],
		// ??????????????????
		"comma-spacing": ["error", { "before": false, "after": true }],
		// ??????????????????
		"eol-last": ["error", "always"],
		// ?????????????????????
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
		// ??????????????????
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			"objectsInArrays": false,
			"arraysInArrays": true
		}],
		"array-element-newline": ["error", "consistent"],
		// ??????????????????
		"object-curly-newline": ["error", { "multiline": true }],
		"object-curly-spacing": ["error", "always"],
		"key-spacing": ["error", { "beforeColon": false }],
		// ??????????????????
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		"arrow-spacing": ["error", { "before": true, "after": true }],
		// ??????????????????
		"spaced-comment": ["error", "always", {
			"line": {
				"markers": ["/"],
				"exceptions": ["-"],
			},
			"block": {
				"markers": ["!"],
				"exceptions": ["*"],
				"balanced": true
			}
		}],
		// ES6
		// ??????????????????
		"no-duplicate-imports": ["error", { "includeExports": true }],
	}
};
