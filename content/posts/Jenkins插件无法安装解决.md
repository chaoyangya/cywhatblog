---
title: "Jenkins插件无法安装解决"
date: 2022-11-15T15:27:31+08:00
draft: false
tags: ["Jenkins","Linux"]
categories: ["Jenkins","Linux"]
---

### 1、问题
```text
jenkins各种改源地址都不行，都无法安装更新插件
```

### 2、可行方案
```text
1、更改源地址(http://mirror.esuni.jp/jenkins/updates/update-center.json)

2、更改配置
    a. vim jenkins/updetes/default.json
    
    b.把："http://www.google.com/" 改成 "http://www.baidu.com/"
    把："https://updates.jenkins.io/download 全部替换成 "http://mirrors.tuna.tsinghua.edu.cn/jenkins"

3、添加跳过SSL证书检查的插件【强烈推荐】，详情查看步骤3
```

### 3、问题解决
```text
1、下载安装`skip-certificate-check`插件，该插件为跳过SSL证书检查插件

2、打开jenkins安装插件 Jenkins—>系统管理—>插件管理->高级-上传下载的插件->重启jenkins
```
![img61](/img/img61.png)