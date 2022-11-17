module.exports = {
	"root": true,
	// 环境变了支持
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	// 继承规则
	"extends": ["eslint:recommended"],
	"overrides": [],
	// 解析器选项
	"parserOptions": {
		// 支持的 EcmaScript 版本
		"ecmaVersion": "latest",
		// 支持的模块规 script(默认)和 module(ESM)
		"sourceType": "module",
	},
	// 规则
	"rules": {
		// 缩进风格
		"indent": ["error", "tab"],
		// 换行符风格
		"linebreak-style": ["error", "unix"],
		// 引号风格
		"quotes": ["error", "double"],
		// 结尾分号
		"semi": ["error", "always"],
		// 未使用的变量检查
		"no-unused-vars": ["off"],
		// 块内填充
		"padded-blocks": ["error", {
			"blocks": "never",
			"classes": "always",
			"switches": "always"
		}],
		// 语句块前空格
		"space-before-blocks": ["error", {
			"functions": "always",
			"keywords": "always",
			"classes": "always"
		}],
		// 强制操作符使用一致的换行符风格
		"operator-linebreak": ["error", "before"],
		// switch冒号左右空格
		"switch-colon-spacing": ["error", { "after": true, "before": false }],
		// 禁止属性前有空白
		"no-whitespace-before-property": ["error"],
		// 括号左右空白
		"space-in-parens": ["error", "never"],
		// 行尾空白
		"no-trailing-spaces": ["error"],
		// 逗号前后空白
		"comma-spacing": ["error", { "before": false, "after": true }],
		// 文件结尾换行
		"eol-last": ["error", "always"],
		// 不允许多个空行
		"no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
		// 数组风格配置
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never", {
			"objectsInArrays": false,
			"arraysInArrays": true
		}],
		"array-element-newline": ["error", "consistent"],
		// 对象风格配置
		"object-curly-newline": ["error", { "multiline": true }],
		"object-curly-spacing": ["error", "always"],
		"key-spacing": ["error", { "beforeColon": false }],
		// 函数风格配置
		"space-before-function-paren": ["error", {
			"anonymous": "always",
			"named": "never",
			"asyncArrow": "always"
		}],
		"arrow-spacing": ["error", { "before": true, "after": true }],
		// 注释风格配置
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
		// 禁止重复导入
		"no-duplicate-imports": ["error", { "includeExports": true }],
	}
};
