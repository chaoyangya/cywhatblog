---
title: "Linux生成自定义名称的ssh证书"
date: 2023-11-22T14:28:16+08:00
draft: false
tags: ["SSH","Linux"]
categories: ["SSH","Linux"]
---

### 1、前景
```text
多个git账号或者多个git地址，需要对应不同的ssh证书
```

### 2、创建证书
```bash
# your email 替换为你的邮箱
# id_rsa_hj  替换为自定义的证书名称
cd ~/.ssh 

ssh-keygen -t rsa -C "your email" -f id_rsa_hj
```


### 3、生成证书
```text
一路回车即可
```

### 4、检查证书
```bash
# 进入ssh目录
cd ~/.ssh 

# 查看证书目录
ll

# 查看证书内容
cat id_rsa_hj.pub
```

