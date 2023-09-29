# YingCholocate.github.io

my blog. Under development... keep learning

some knowledge and shell of project
some knowledge of coding
my artwork

### 内容介绍

1. 首页
2. 文章 (分标签)
3. 作品（一些做出的项目)

### 部署的步骤

hexo clean
hexo g
hexo d

# 查看hexo的开发的网页

hexo server

### 创建新文件

hexo new [layout] <title>
如果没有设置 layout 的话，默认使用 \_config.yml 中的 default_layout 参数代替。如果标题包含空格的话，请使用引号括起来

### 文件夹介绍

1. scaffolds 设置模板格式:post；draft :草稿；
2. source 放置Markdown文档
3. attrives存放归档的文档
4. public 文件夹 archives按年份 tag 按标签

### blog 技术方案调研

#### 主题制作介绍

1. 使用[Tailwindcss ui] (https://www.tailwindcss.cn/)框架编写。
   （1）为什么使用：

- 只需书写 HTML 代码，无需书写 css，即可快速构建完整
- 体积小，不包含任何用不到的 css 代码
- 响应式页面的设计，不用写一大堆媒体查询
  （2） 适用于：react、vue、using HTML and own js

#### 框架使用

1. 使用 Hexo+next.js 快速搭建 blog
2. 使用 react+next.js 制作
