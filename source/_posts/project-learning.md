---
title: project-learning
---

# #Could not find a declaration file for module '@/views/Home.vue'.

1. 缺少相关声明文件
   在 ts 项目里面，.ts 文件是识别不了.vue 文件，.vue 文件也识别不了.ts 文件，这时候就需要.d.ts 声明文件来填好这个坑啦。
2. Unhandled error during execution of setup function
   组件事件处理程序执行期间未处理的错误操作流程。
3. vue2 Mixins 的基本使用以及 vue3 组合 API 的替代
   https://juejin.cn/post/6955876995603365896

## pnpm 安裝包出現問題

执行`pnpm config set auto-install-peers true`会生成.npmrc 文件
https://zhuanlan.zhihu.com/p/600213330
