---
title: "搭建IOS和Android性能监控工具"
date: 2022-12-28T17:33:31+08:00
draft: false
tags: ["IOS","Android","性能"]
categories: ["IOS","Android","性能"]
---

### 1、安装前准备
```text
1. Python:3.6+ 

2. Pip3
```

### 2、安装
```bash
pip3 install -U solox

#注意: 如果Windows用户需要测试ios，先安装并启动iTunes
```

#### 2.1、源代码地址
[下载地址](https://pypi.org/project/solox/#files)

### 3、检查是否安装成功
```bash
pip3 list

# 查看列表中是否已经安装soloX
```

### 4、启动
#### 4.1、默认启动
```bash
python3 -m solox

#ip：localhost  port：50003    
```

#### 4.2、自定义启动
```bash
python3 -m solox --host=0.0.0.0 --port=50003

#ip：本地ip  
#port：50003    
#host和port可以自定义
```

#### 4.3、后台启动
```bash
macOS/Linux: nohup python3 -m solox &
Windows: start /min python3 -m solox &

#可以把命令替换为自定义启动命令
```

### 4、api收集
```html
http://{ip}:50003/apm/collect?platform=Android&deviceid=ca6bd5a5&pkgname=com.bilibili.app.in&apm_type=cpu

apm_type in ['cpu','memory','network','fps','battery']
```

### 5、可导出监控
![img71.png](/img/img71.png)




