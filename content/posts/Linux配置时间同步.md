---
title: "Linux配置时间同步"
date: 2022-01-05T10:49:45+08:00
draft: false
tags: ["Ntpdate","Linux"]
categories: ["Linux"]
---

### 前景
**排查售后问题发现一个奇葩BUG是因为`Linux`服务器时间不同步导致**


#### 1.安装ntpdate
```bash
yum install -y ntpdate
```

#### 2.同步时间
```bash
ntpdate 0.asia.pool.ntp.org   #0.asia.pool.ntp.org 为ntp时间服务器name
```

#### 3.同步系统时间到硬件
```bash
hwclock --systohc
```

#### 4.设置定时任务
```bash
crontab -e 


#输入以下定时任务
0 */2 * * * /usr/sbin/ntpdate  0.asia.pool.ntp.org    #每2小时执行一次
```


#### 5.备用的时间服务器
```bash
cn.pool.ntp.org

ntp.sjtu.edu.cn

time.nist.gov

time.nuri.net

0.asia.pool.ntp.org

1.asia.pool.ntp.org

2.asia.pool.ntp.org

3.asia.pool.ntp.org

```