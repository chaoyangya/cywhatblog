---
title: Jenkins启动报错原因分析
date: 2021-09-18 17:58:18
draft: false
tags: ["Jenkins"]
categories: ["Jenkins"]
---

## 1.启动jenkins
```bash
systemctl start jenkins   #如果命令不可使用，首先要把jenkins放到系统启动配置中，详情请百度
```

## 2.查看jenkins启动状态
```bash
systemctl status jenkins.service
```

## 3.分析报错原因
```bash
查看位置 /system.slice/jenkins.service 后面是原因
```

