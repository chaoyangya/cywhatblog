---
title: "Docker部署wordpress站点"
date: 2022-04-15T14:14:09+08:00
draft: false
tags: ["Docker"]
categories: ["Docker","Blog"]
---

### 1.拉取docker镜像
```bash
docker pull wordpress

docker pull mysql
```

### 2.创建mysql容器
```bash
docker run -d --name mysql -v mysql-data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=wordpress mysql
```
{{< admonition type=tip title="参数解析" open=true >}}
`-d`                    后台运行容器，并返回容器id

`--name`                自定义容器名  

`-v`                    将容器内的目录挂载到宿主机中(前是宿主机路径/后是容器路径)

`-e`                    用来指定环境变量以及后续的键值对

`MYSQL_ROOT_PASSWORD`   数据库密码

`MYSQL_DATABASE`        数据库表名

`mysql`             镜像仓库中的镜像标签版本
{{< /admonition >}}


### 3.创建 wordpress 容器
```bash
docker run -d --name wordpress -e WORDPRESS_DB_HOST=mysql:3306 --link mysql -p 8083:80 wordpress
```
{{< admonition type=tip title="参数解析" open=true >}}
`-d`                    后台运行容器，并返回容器id

`--name`                自定义容器名  

`-e`                    用来指定环境变量以及后续的键值对

`WORDPRESS_DB_HOST`     数据库链接

`--link`                关联到另一台容器，后面加容器名

`-p`                    指定端口映射(前是宿主机/后是容器端口)

`wordpress`             wordpress镜像
{{< /admonition >}}

### 4.访问地址
```bash
https://服务器ip:8083
```

### 5.异常问题解决
url访问后，页面出现以下问题
```bash
Error establishing a database connection
```

{{< admonition type=success title="解决办法" open=true >}}
1.进入容器
docker exec -it 容器id /bin/bash

2.编辑配置文件
vim wp-config.php

3.修改数据库账号和密码
**修改下图红框中的内容为你的数据库账号和密码,注意不要去掉引号**
![img54](/img/img54.png)
{{< /admonition >}}