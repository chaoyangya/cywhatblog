---
title: "Linux卸载python"
date: 2021-12-23T15:49:42+08:00
draft: false
tags: ["Python","Linux"]
categories: ["Python"]
---


### 1.rpm镜像安装方式卸载
#### 1.卸载Python3(仅适合通过rpm安装的python)

```bash
rpm -qa|grep python3|xargs rpm -ev --allmatches --nodeps
```

#### 2.删除残留文件
```bash
whereis python3 |xargs rm -frv
```

#### 3.删除软链接
```bash
rm -rf /usr/bin/python3

rm -rf /usr/bin/pip3
```



### 2.解压方式安装卸载
#### 1.直接删除python路径文件夹

```bash
rm -rf /usr/local/python3
```

#### 2.删除软链接
```bash
rm -rf /usr/bin/python3

rm -rf /usr/bin/pip3
```




### 3.检查是否还存在Python
```bash
whereis python3

which python3
```