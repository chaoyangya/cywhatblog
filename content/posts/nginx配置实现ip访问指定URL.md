---
title: nginx配置实现ip访问指定URL
date: 2021-04-01 17:51:03
draft: false
tags: ["Nginx"]
categories: ["Nginx"]
---

**我的需求是这样的，nginx+uwsgi启动的web服务，访问域名XX.CN之后，nginx报错404，我需要实现的是访问XX.CN，自动映射到XX.CN/login 因为我server是80端口，所以不需要加端口即可访问**

nginx配置如下：

```bash
$ vim nginx.conf
```


在你启动的server中加入如下配置

```bash
if ( $request_uri = "/" ) {
    rewrite "/" http://XX.CN/login break;
  }
```


然后现在去访问XX.CN 就会映射到 XX.CN/login 


大功告成！！！
