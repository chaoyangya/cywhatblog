---
title: web服务 访问Linux中的静态文件
date: 2021-03-29 18:04:20
draft: false
tags: ["Nginx","Linux"]
categories: ["Nginx"]
---

报错404，NOT FOUND可能是因为nginx.conf配置文件的俩处地方配置有误，按照下面，检查你的配置之后99.9999%是可以在浏览器访问Linux的静态文件的


1、检查nginx是否打开允许访问本地文件的配置

```bash
$ vim nginx.conf
```


2、查找如下图的配置项，没有的话添加即可，注意是在http这个服务中
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329180009631.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)

```bash
$ proxy_intercept_errors on;
```

3、检查需要访问文件的路径是否配置正确，例如我要访问的静态文件名称为Bapi.html，文件存放路径为root/cccc/Bapi.html，配置如下

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329180232275.png)

4、访问静态文件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210329180310114.png)
可以访问，我是有域名的，所以我的访问直接就是域名+Bapi.html 其他格式的文件同理。
