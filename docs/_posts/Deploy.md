---
title: Deploy
date: 2023-07-10 23:26:25
tags: public
---

## 自动化部署

### shell 脚本介绍

1. 是什么：用户每输入一条命令，就相应执行一条命令。不是通过命令行实现，而是利用一个程序文件来执行。
2. 变量的定义，使用。用$定义

   - name 为变量：
   - echo $name
   - echo ${name}

   - 删除定义的变量 ：unset name

3. 流程控制：

```shell
if ...
then ...
else ...
fi
```

4. 一些标识符说明

- -ge 大于等于
- -le 小于等于
- -gt 大于
- -lt 小于
- -eq 等于
- -ne 不等于

5. Case

```shell
case 值 in
匹配值1)
    command1
    command2

    ;;
匹配值2）
    command1
    command2
    ;;
esac

```

6. For

```shell
for i in item1 item2 ... itemN
do
    command1
    command2
    ...
    commandN
done

```

7. 注释

- 单行注释：\#

8. 通用发布脚本参考
   https://github.com/showyouself/deploy.sh
9. my website 脚本部署化流程
