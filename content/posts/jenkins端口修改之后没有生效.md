---
title: "Jenkins端口修改之后没有生效"
date: 2023-04-07T09:24:59+08:00
draft: false
tags: ["Jenkins","Linux","Html"]
categories: ["Jenkins","Linux","Html"]
---

### 1、问题

jenkins通过`systemctl start jenkins.service`启动服务，端口不是配置文件里自定义的端口



### 2、排查
#### 1、系统service配置
```bash
vim /lib/systemd/system/jenkins.service

# 修改端口号
Environment="JENKINS_PORT=9898"
```
![img73.png](/img/img73.png)


#### 2、etc下的系统配置
```bash
vim /etc/sysconfig/jenkins

# 修改端口号
JENKINS_PORT="9898"
```
![img74.png](/img/img74.png)

#### 3、通过systemctl status查看启动配置文件的路径
```bash
systemctl status jenkins.service
```
![img75.png](/img/img75.png)

```text
注意需要排查上面图片中框选出来的`1`和`2`

1：系统配置文件路径，上面已经更改了没问题

2：该文件是一个重写文件，问题就在这里，需要把里面的端口号也更改为9898
```

```bash
vim /etc/systemd/system/jenkins.service.d/override.conf
```
![img76.png](/img/img76.png)


### 3、解决
```bash
# 重新加载systemctl配置
systemctl daemon-reload

# 重启jenkins
systemctl restart jenkins.service
```


### 4、查看jenkins服务
```bash
netstat -ntlp   #有端口为9898的服务已经在运行了
```