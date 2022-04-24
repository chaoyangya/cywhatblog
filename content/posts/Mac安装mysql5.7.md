---
title: "Mac安装mysql5.7"
date: 2022-04-24T10:59:14+08:00
draft: false
tags: ["Mac","Mysql"]
categories: ["Mac","Mysql"]
---

### 1.下载Dmg安装包

[安装包下载](https://downloads.mysql.com/archives/community/)

我选择的`Mysql`版本是`5.7.30`

![img55.png](/img/img55.png)


### 2.安装并启动

![img56.png](/img/img56.png)

![img57.png](/img/img57.png)

### 3.记录Mysql初始密码

![img58.png](/img/img58.png)

### 4.设置别名
```bash
alias mysql=/usr/local/mysql/bin/mysql
alias mysqladmin=/usr/local/mysql/bin/mysqladmin
```

### 5.重置密码
```bash
mysqladmin -u root -p password `新密码`   #回车后输入临时密码

mysql -u root -p  #输入新密码即可命令行登录
```

### 6.本地Navicat客户端登录

**连接不上(报错)：** `2059 - Authentication plugin 'caching_sha2_password' cannot be loaded: dlopen(`

#### 原因:
`由于从mysql5.7版本之后 验证方式默认从原来的mysql_native_password改成了caching_sha2_password`

#### 解决:
```mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '新密码';   #即可用客户端连接
```

{{< admonition type=tip title="注意" open=true >}} 
`客户端连接的主机为:` localhost
{{< /admonition >}}