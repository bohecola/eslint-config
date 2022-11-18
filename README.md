# @bohecola/eslint-config
自己写的一个ESLint配置规则，方便平时写代码时进行格式规范

## Usage
```sh
pnpm add eslint @bohecola/eslint-config -D
```

## Config `.eslintrc`
```json
{
  "extends": "@bohecola"
}
```

## Config VS Code auto fix
Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and create .vscode/settings.json

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
