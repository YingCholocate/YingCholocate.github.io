---
title: 前后端分离部署
tags: public
---
<!-- 部署 云服务器-->
https://developer.aliyun.com/article/933729#slide-2
## 步骤
1. 购买云服务器
2. 链接远程服务器，linux系统
3. 安装nginx 
4. 连接云服务器MySQL：
（1）查看mysql是否启动，才能确定是否能够连接 `service mysqld status`或`ps -e |grep mysqld`     查看你mysql运行对应的进程
（2）进入mysql服务器 `mysql -uroot -p`
5. 部署前端
6. 部署后端
## 遇到的问题：
### 1. nginx安装注意的点
(1) nginx不能使用该命令
```shell 
https://blog.csdn.net/t8116189520/article/details/81909574
//一键安装上面四个依赖
yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel
//创建一个文件夹
cd /usr/local
mkdir nginx
cd nginx
//下载tar包
wget http://nginx.org/download/nginx-1.13.7.tar.gz
tar -xvf nginx-1.13.7.tar.gz
//进入nginx目录
cd /usr/local/nginx
//进入目录
cd nginx-1.13.7
//执行命令 考虑到后续安装ssl证书 添加两个模块
./configure --with-http_stub_status_module --with-http_ssl_module
//执行make命令
make
//执行make install命令
make install
# 启动nginx服务
 ​​​​​​​/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
 # 打开配置文件
vi /usr/local/nginx/conf/nginx.conf
# 将端口号改成8089(随便挑个端口)，因为可能apeache占用80端口，apeache端口尽量不要修改，我们选择修改nginx端口。
# 
# 重启nginx

/usr/local/nginx/sbin/nginx -s reload
# 查看nginx进程是否启动：

ps -ef | grep nginx
```
(2)nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
一般原因是nginx端口被占用了.
解决方法：
ps -ef|grep nginx
 
kill pad
或者

切换到nginx sbin目录
-- 停止
sudo ./nginx -s stop
 
-- 启动
./nginx