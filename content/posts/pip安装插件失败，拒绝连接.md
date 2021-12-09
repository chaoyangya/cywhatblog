---
title: pip安装插件失败，拒绝连接
date: 2021-03-30 11:51:17
draft: false
tags: ["Pip","Python"]
categories: ["Pip"]
---

WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ConnectTimeoutError(<pip._vendor.urllib3.connection.HTTPSConnection object at 0x7ff8fba5f080>, 'Connection to mirrors.aliyn.com timed out. (connect timeout=15)')': /pypi/simple/python-jenkins/


```bash
$ pip3 install python-jenkins
```
安装python-jenkins报错如下
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330114856815.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)

解决办法：

```bash
$ pip3 install -i https://pypi.tuna.tsinghua.edu.cn/simple python-jenkins
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330115051235.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)
如上已经安装好了
