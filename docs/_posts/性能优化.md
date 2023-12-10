---
layout: layout
title: 性能优化
date: 2023-05-30 15:44:15
tags: public
---

## js
1. 少用for in，会枚举到原型
2. 用map代替if-else 和switch

## 静态资源优化
1. 图片优化：
响应式图片
使用srcset(https://zhuanlan.zhihu.com/p/197567126),sizes <picture>

## 交付优化
1. 异步无阻塞加载js defer async 动态创建script标签
2. 使用Intersection Observer实现懒加载
3. Preload 使用预编译

## 构建优化
1. Tree-shaking 清除无用代码
2. Scope hosting检查import链，并尽可能的将散乱的模块放到一个函数
3. Code-splitting 代码分离到不同的bundle中
4. 服务端渲染 SSR。等js渲染完后再渲染页面，可能会出现白屏。使用服务端渲染静态HTNL获取跟快的首次回执。
5. 使用import函数动态导入模块
6. 使用HTTP缓存头 cache-control:immutable

## 图片优化
1. png->svg svg压缩体积小，无限缩放，不失真。
2. webpack 的loader可以有效压缩svg体积
- 用svg-logo去除无用属性
- 用svg-sprite-loader合并多个svg