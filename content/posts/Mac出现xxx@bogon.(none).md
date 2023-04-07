---
title: "Mac出现xxx@bogon"
date: 2023-04-04T10:41:47+08:00
draft: false
tags: [Mac,Brew]
categories: ["Mac"]
---


### 1、问题
```bash
chaoyang@bogon.(none)'  # 用户名被篡改成了bogon
```

### 2、解决
#### 1、修改电脑名称
```bash
sudo scutil --set ComputerName 你想要的计算机名称
```

#### 2、修改本地主机名
```bash
sudo scutil --set LocalHostName 你想要的计算机名称
```

#### 3、修改主机hostname
```bash
sudo scutil --set HostName 你想要的计算机名称
```

#### 4、重启
```text
重启终端
```

### 3、检查
```bash
scutil --get ComputerName

scutil --get HostName
```


