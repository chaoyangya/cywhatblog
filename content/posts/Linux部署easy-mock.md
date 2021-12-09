---
title: Linux部署easy_mock
date: 2021-04-16 10:01:27
draft: false
tags: ["Easy_mock","Linux"]
categories: ["Easy_mock"]
---
前期准备：
1、Linux：CentOS Linux release 7.8.2003 (Core)
2、mongodb：3.4.24
3、redis：4.0.14
4、node：8.9.0

**PS：**

> node版本不要超过8.x.x  
> mongodb版本不要超过3.6.x


## mongodb安装

```bash
$ cd /usr/local/

#下载mongodb包
$ curl -O https://fastdl.mongodb.org/linux/mongodb-linux-x86_64-3.4.24.tgz  

#解压  
$ tar -zxvf mongodb-linux-x86_64-3.4.24.tgz

#重命名mongodb
$ mv mongodb-linux-x86_64-3.4.24 mongodb
 
#编辑环境变量
$ vi ~/.bashrc

#环境变量
$ export MONGO_HOME=/usr/local/mongodb
$ export PATH=$MONGO_HOME/bin:$PATH

#让环境变量生效
$ source ~/.bashrc
```

安装好mongodb以后创建mongodb数据存放目录和日志存放目录

```bash
##  创建数据目录
$ cd /root/
$ mkdir -p /mongodb/data
$ mkdir -p /mongodb/log/
```

启动mongodb(并保持后台运行)

```bash
#后台启动mongodb
$ mongod  --dbpath=/root/mongodb/data --logpath=/root/mongodb/log/mongodb.log --logappend &
```

解释：

```bash
--fork    	 后台运行
--dbpath  	 数据存放目录
--logpath 	 日志存放目录
--logappend  防止日志被删除
```
## redis安装

```bash
#下载redis包
$ wget http://download.redis.io/releases/redis-4.0.14.tar.gz

#解压
$ tar -xvzf redis-4.0.14.tar.gz

#重命名
$ mv redis-4.0.14 redis
$ cd redis-4.0.14/

#安装gcc依赖
$ yum -y install gcc          

#编译
$ make

# 如报错可使用命令 
$ make MALLOC=libc

#拷贝执行程序到bin
$ cp src/redis-server /usr/local/bin/
$ cp src/redis-cli /usr/local/bin/

#编辑redis配置文件
$ vi redis.conf 修改daemonize=no为yes，保存

#启动redis并保持后台运行
$ redis-server redis.conf &
```

## 安装node

```bash
$ cd /usr/local/
 
#安装wget               
$ yum install -y wget

#wget下载node包
$ wget https://npm.taobao.org/mirrors/node/v8.9.0/node-v8.9.0-linux-x64.tar.xz

#解压安装
$ tar -zxvf node-v8.9.0-linux-x64.tar

#重命名node文件
$ mv node-v8.9.0 node

# 修改环境变量
$ vi ~/.bashrc              

#环境变量
$ export NODE_HOME=/usr/local/node
$ export PATH=${PATH}:$NODE_HOME/bin

#让环境变量生效
$ source ~/.bashrc

#查看node版本
$ node -v
```


## 安装easy_mock

```bash
#安装git
$ yum install -y git     

#下载easymock包                              
$ git clone https://github.com/easy-mock/easy-mock.git

#进入文件夹
$ cd easy-mock

#安装
$ npm install            

#安装较慢，可以多试几次。也可以使用cnpm安装，需要先执行命令
$ npm install -g cnpm --registry=https://registry.npm.taobao.org

#然后在执行
$ cnpm install

#关闭防火墙
$ systemctl stop firewalld.service(这里如果是阿里云服务器需要安全组给7300端口放行)

#安装pm2 守护进程
$ npm install -g pm2

#编译
$ npm run build

#启动
$ NODE_ENV=production pm2 start app.js  注意这里如果是Windows系统前面需要加cross-env  反之mac或者linux不需要

#如启动报错File ecosystem config.js not found
$ pm2 ecosystem 然后在重新运行即可
```

```bash
#运行
$ npm run start
```




疑难杂症

```bash
#如遇无法登录注册，js报错net::ERR_CONNECTION_REFUSED

说明你的mongodb有问题，可能是没有后台运行导致，查看mongodb状态即可
```



```bash
#最后的最后，作为重度强迫症患者，必须要把下载到/usr/local/中的包删除掉

$ rm -rf mongodb-linux-x86_64-3.4.24.tgz redis-4.0.14.tar.gz node-v8.9.0-linux-x64.tar
```

如报错如下图
![在这里插入图片描述](https://img-blog.csdnimg.cn/202106021623202.png)


```bash
#先修改easy_mock/config目录下的default.json
{
  "port": 7300,
  "host": "0.0.0.0",
  "pageSize": 30,
  "proxy": false,
  "db": "mongodb://127.0.0.1/easy-mock",   这里要把mongodb更改为127.0.0.1
  "unsplashClientId": "",
}
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021060216262774.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)

```bash
#然后重新build
$ npm run build 

#启动app
$ NODE_ENV=production pm2 start app
```
