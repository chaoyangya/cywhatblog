---
title: "Linux卸载RabbitMq"
date: 2023-04-18T14:31:47+08:00
draft: false
tags: ["RabbitMQ","Erlang",Linux"]
categories: ["Python","Erlang","RabbitMQ"]
---

### 1、卸载Erlang
```bash
# 查看erlang安装的相关列表
yum list|grep erlang

# 卸载erlang
yum -y remove erlang-*

# 删除erlang目录
rm -rf /usr/lib64/erlang
```

### 2、卸载RabbitMQ
```bash
# 停止服务
systemctl stop rabbitmq-server.service

# 查看erlang安装的相关列表
yum list|grep rabbitmq

# 卸载erlang
yum -y remove rabbitmq-server.noarch


# 删除erlang目录
rm -rf /var/lib/rabbitmq
rm -rf /usr/lib/rabbitmq
```

