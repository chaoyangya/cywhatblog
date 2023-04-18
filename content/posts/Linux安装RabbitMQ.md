---
title: "Linux安装RabbitMQ"
date: 2023-04-17T17:35:57+08:00
draft: false
tags: ["RabbitMQ","Erlang",Linux"]
categories: ["Python","Erlang","RabbitMQ"]
---

### 1、前景
`RabbitMQ是用Erlang编写的，所以需要先安装Erlang的编译环境`

{{< admonition type=note title="注意" open=false >}}
Erlang和RabbitMQ的版本是有一些版本匹配关系的，如果不匹配会导致RabbitMQ无法启动
{{< /admonition >}}

[点击查看版本关联信息](https://www.rabbitmq.com/which-erlang.html)

[Erlang](https://www.erlang.org/downloads)

[RabbitMQ](https://www.rabbitmq.com/download.html)

### 2、安装Erlang
```bash
# 下载
wget https://packages.erlang-solutions.com/erlang/rpm/centos/7/x86_64/esl-erlang_23.3.1-1~centos~7_amd64.rpm

# 安装
yum install esl-erlang_23.3.1-1~centos~7_amd64.rpm

# 如果有更高的版本需要覆盖安装使用这条
rpm -ivh esl-erlang_23.3.1-1~centos~7_amd64.rpm --replacefiles
```
#### 2.1、检查是否安装成功
```bash
erl -version
```

### 3、安装RabbitMQ
```bash
# 安装RabbitMQ密钥
rpm --import https://www.rabbitmq.com/rabbitmq-signing-key-public.asc

# 下载
wget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.8.14/rabbitmq-server-3.8.14-1.el7.noarch.rpm

# 安装
yum install rabbitmq-server-3.8.14-1.el7.noarch.rpm

# 配置Web页面
rabbitmq-plugins enable rabbitmq_management
```

#### 3.1、配置文件差异
{{< admonition type=note title="注意1" open=false >}}
RabbitMQ版本3.8以上的需要把该文件放在/etc/rabbitmq目录下
{{< /admonition >}}

{{< admonition type=note title="注意2" open=false >}}
RabbitMQ版本3.8以下的配置文件目录在：/usr/lib/rabbitmq/lib/rabbitmq_server-3.7.9/ebin/rabbit.app
{{< /admonition >}}


[下载配置](https://pan.baidu.com/s/1Ehhd5okPf1VHusan5l_11A)

`提取码: ribv`

#### 3.2、配置开机启动
```bash
systemctl enable rabbitmq-server.service
```

### 4、开放端口
```bash
/sbin/iptables -I INPUT -p tcp --dport 5672 -j ACCEPT
/sbin/iptables -I INPUT -p tcp --dport 15672 -j ACCEPT
```

### 5、启动RabbitMQ
```bash
# 启动（二选一）
systemctl start rabbitmq-server.service

# 启动（二选一）
/sbin/service rabbitmq-server start

# 查看启动状态
systemctl status rabbitmq-server.service
```

### 6、新增用户
```bash
# 新增用户 username为用户名  passwd为密码
rabbitmqctl add_user username passwd    

# 设置超管权限
rabbitmqctl set_user_tags username administrator

# 为username设置权限
rabbitmqctl set_permissions -p "/" username ".*" ".*" ".*" 

# 设置完重启服务
systemctl restart rabbitmq-server.service
```

### 7、疑难解决
#### 6.1、报错1
```bash
rabbitmq-server.service: main process exited, code=exited, status=1/FAILURE
```

#### 6.1.1、解决：
```text
/var/lib/rabbitmq/mnesia 目录下存在rabbit@localhost.pid、rabbit@localhost、rabbit@localhost-plugins-expand，删除这3项
```

#### 6.2、报错2
```bash
file /usr/bin/epmd from install of esl-erlang-25.0.3-1.x86_64 conflicts with file from package erlang-erts-24.3.4.1-1.el7.x86_64
```

#### 6.1.1、解决：
```text
该提示为Erlang和RabbitMQ版本不匹配导致
```

