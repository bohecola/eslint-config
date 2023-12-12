module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	reportUnusedDisableDirectives: true,
	extends: [
		"eslint:recommended",
		"plugin:jsonc/recommended-with-jsonc"
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
		"!.vscode"
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
				"jsonc/object-property-newline": ["error", { allowMultiplePropertiesPerLine: true }]
			}
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
							"eslintConfig"
						]
					},
					{
						pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
						order: { type: "asc" }
					},
					{
						pathPattern: "^exports.*$",
						order: [
							"types",
							"require",
							"import"
						]
					}
				]
			}
		}
	],
	parserOptions: {
		ecmaVersion: "latest",
		ecmaFeatures: { jsx: true },
		sourceType: "module"
	},
	rules: {
		// 缩进风格
		"indent": ["error", "tab", { SwitchCase: 1 }],
		"no-mixed-spaces-and-tabs": ["off"],
		"space-infix-ops": ["error", { int32Hint: false }],
		// 链式调用换行
		"newline-per-chained-call": ["error", { ignoreChainWithDepth: 2 }],
		// 引号风格
		"quotes": ["error", "double"],
		"quote-props": ["error", "consistent-as-needed"],
		// 结尾分号
		"semi": ["error", "always"],
		// 末尾逗号
		"comma-dangle": ["error", {
			arrays: "never",
			objects: "never",
			imports: "never",
			exports: "never",
			functions: "never"
		}],
		// 未使用的变量检查
		"no-unused-vars": ["warn"],
		// 块内填充
		"padded-blocks": ["error", {
			blocks: "never",
			classes: "always"
		}],
		// 语句块前空格
		"space-before-blocks": ["error", {
			functions: "always",
			keywords: "always",
			classes: "always"
		}],
		// 强制操作符使用一致的换行符风格
		"operator-linebreak": ["error", "before"],
		// switch冒号左右空格
		"switch-colon-spacing": ["error", { after: true, before: false }],
		// 禁止属性前有空白
		"no-whitespace-before-property": ["error"],
		// 括号左右空白
		"space-in-parens": ["error", "never"],
		// 行尾空白
		"no-trailing-spaces": ["error"],
		// 逗号前后空白
		"comma-spacing": ["error", { before: false, after: true }],
		// 文件结尾换行
		"eol-last": ["error", "always"],
		// 不允许多个空行
		"no-multiple-empty-lines": [
			"error", {
				max: 2,
				maxEOF: 0,
				maxBOF: 0
			}
		],
		// 数组风格配置
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			objectsInArrays: false,
			arraysInArrays: true
		}],
		"array-element-newline": ["error", "consistent"],
		// 对象风格配置
		"object-curly-newline": ["error", {
			ObjectExpression: { multiline: true, consistent: true },
			ObjectPattern: { multiline: true },
			ImportDeclaration: { multiline: true },
			ExportDeclaration: { multiline: true, minProperties: 3 }
		}],
		"object-curly-spacing": ["error", "always"],
		"key-spacing": ["error", { beforeColon: false }],
		// 函数风格配置
		"space-before-function-paren": ["error", {
			anonymous: "always",
			named: "never",
			asyncArrow: "always"
		}],
		"arrow-spacing": ["error", { before: true, after: true }],
		// 注释风格配置
		"spaced-comment": ["error", "always", {
			line: {
				markers: ["/"],
				exceptions: ["-"]
			},
			block: {
				markers: ["!"],
				exceptions: ["*"],
				balanced: true
			}
		}],
		// ES6
		// 禁止重复导入
		"no-duplicate-imports": ["error", { includeExports: true }]
	}
};
