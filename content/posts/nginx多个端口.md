---
title: nginx解决多个端口映射80的配置
date: 2021-04-16 10:12:11
draft: false
tags: ["Nginx","Linux"]
categories: ["Nginx"]
---


``` bash
$ server {
    listen       80;
    server_name  xx.cn;  #域名1

    location / {
        proxy_pass http://x.x.x.x:9001;   #域名1需要映射到80端口的服务端口
    }
}

server {
     listen       80;
     server_name   xx.cn;   #域名2

     location / {
         proxy_pass http://xx.xx.xx.xx:7300;    #域名2需要映射到80端口的服务端口
     }
 }
```


### 注意:

**俩个server服务要相对独立，这样就可以同时将服务1和服务2的端口映射到80端口了**


