---
title: "Jenkins报错 Bash:newman:command Not Found"
date: 2022-11-15T15:19:31+08:00
draft: false
tags: ["Jenkins","Linux","Newman"]
categories: ["Jenkins","Linux","Newman"]
---

### 1、报错查看
```bash
# 报错如下：
bash: newman: command not found
Build step 'Execute shell' marked build as failure
```

### 2、原因分析
```text
1、Linux环境变量配置没问题

2、Linux中任意位置都可以执行

3、jenkins构建报错not found
```

### 3、问题解决1
```text
检查jenkins的全局配置是否和linux中的环境变量版本是否一致
```

### 4、问题解决2(90%可以解决)
```bash
# 软链接配置
ln -s /usr/local/node/bin/npm  /usr/bin/npm
ln -s /usr/local/node/bin/newman  /usr/bin/newman
ln -s /usr/local/node/bin/node  /usr/bin/node
```