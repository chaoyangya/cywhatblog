---
title: "Linux忘记mysql密码解决办法"
date: 2023-04-04T09:32:40+08:00
draft: false
tags: ["Python","Mysql"]
categories: ["Python","Mysql"]
---

### 1、前景
```text
mysql初始密码忘记

mysql密码忘记

mysql重置密码
```

### 2、设置

#### 1、编辑文件
```bash
vim /etc/my.cf
```

#### 2、找到文件位置
```text
[mysqld]
```

#### 3、加入忽略密码登录的设置
```text
skip-grant-tables
```

#### 4、保存退出
```bash
 :wq
```

#### 5、重启mysql
```bash
systemctl restart mysqld.service
```

### 3、修改密码
#### 1、进入mysql
```bash
mysql -uroot -p    #提示输入密码直接回车
```

#### 2、修改root密码
```sql
update mysql.user set authentication_string=password('123456') where User="root" and Host="localhost";
```

#### 3、刷新系统授权表
```sql
flush privileges;
```

#### 4、配置登录信息
```sql
grant all on *.* to 'root'@'localhost' identified by '123456' with grant option;
```

### 4、取消跳过
```bash
vim /etc/my.cf

# 删除/注释
skip-grant-tables

# 保存退出
:wq
```

### 5、重启mysql
```bash
systemctl restart mysqld.service
```

### 6、登录mysql
```bash
mysql -uroot -p

# 输入密码
123456 
```

### 7、登录成功
