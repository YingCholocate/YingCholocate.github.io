---
title: Hello World
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

### Hexo工作原理
基于Node.js，将markdown文件转为html静态界面的博客框架
Hexo启动后，
1. 读Scripts下所有脚本并执行
2. 读取layout目录下的layout.ejs文件
3. 根据<%-body%>在layout.ejs的位置进行渲染，包括主页的渲染、分类的渲染、归档的渲染以及自定义页面的渲染。

### Hexo自定义主题
1. 在theme目录下新建文件夹，如base
2. 修改——config.yml文件，将主题修改为base
3. base
    layout
        laout.ejs :整个主题的入口
        index.ejs :主页，显示最近文章，含分页
        achive.ejs：归档，包含分类归档，标签归档
        category.ejs: 显示某一类的所有文章，含分页
        tag.ejs:显示某一标签的所有文章，含分页
        post.ejs:某篇文章的详细内容，一般包含前一篇，后一篇的功能
        page.ejs:

