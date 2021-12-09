---
title: Linux/macos安装newman
date: 2021-03-22 16:06:15
draft: false
tags: ["Linux","Newman","Node"]
categories: ["Newman"]
---
[已解决]Linux/macos安装newman

一、安装Node环境（**1/2选其一即可**）
1. 官网下载node包，并上传到linux服务器
	
```bash
https://nodejs.org/en/download/
```


2. wget安装

```bash
$ wget https://nodejs.org/dist/v15.12.0/node-v15.12.0-linux-x64.tar.xz
```

3. 安装解压

```bash
$ tar -xvf node-v15.12.0-linux-x64.tar.xz
```

4.  移动文件夹并重命名

```bash
$ mv node-v15.12.0-linux-x64 /opt/node-15
```


5.  配置环境变量

```bash
$ vim ~/.bashrc
```
加入以下内容

```bash
#node 
$ export NODE_HOME=/opt/node-15
$ export PATH=$NODE_HOME/bin:$PATH
```

6.  让配置生效

```bash
$ source ~/.bashrc
```

7.  查看node版本

```bash
$ node -v  如跟你安装版本一致即安装成功
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210322160240981.png)


8.  查看npm版本

```bash
$ npm -v  出现版本号即安装成功
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210322160257886.png)

二、安装newman

```bash
$ npm install -g newman --registry https://registry.npm.taobao.org/

```

提示如下图无需理会

![](https://img-blog.csdnimg.cn/20210322160330423.png)

查看版本

```bash
$ newman -v
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210322160401214.png)

