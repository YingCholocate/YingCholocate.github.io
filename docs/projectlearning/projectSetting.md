---
title: projectSetting
date: 2023-09-09 23:42:27
tags: project
---

## Eslint+stylelint+prettier+commitlint规范项目开发
> https://juejin.cn/post/7033552881374461960

### 1. ESLINT

```shell
pnpm add stylelint stylelint-order stylelint-config-standard  stylelint-config-prettier -D

npx eslint --init
```
- stylelint:检验工具
- stylelint-order：css样式书写顺序插件
- stylelint-config-standard:stylelint的推荐配置
- stylelint-config-prettier：关闭所有不必要的或可能与 Prettier 冲突的规则
并设置选项
  "extends": ["prettier"]
### 2. prettier
```shell
pnpm add prettier -D
```
## 配置 Git Husky 代码提交约束
```shell
pnpm add husky -D
npx huxky install
pnpm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
 pnpm add @commitlint/cli -D
pnpm add @commitlint/config-conventional -D
```
```bash
#.husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint

```
新建文件 commitlint.config.cjs 导入 @commitlint/config-conventional 规则。
js复制代码module.exports = {
  extends: ['@commitlint/config-conventional'],
};

