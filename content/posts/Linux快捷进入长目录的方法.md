---
title: Linux快捷进入长目录的方法
date: 2018-11-02 16:16:00
draft: false
tags: ["Linux"]
categories: ["Linux"]
---

### 1.设置环境变量
```bash
vim ~/.bashrc

alias cywhat ='cd /root/XX/XX/XX/XX'
```


### 2.然后让配置生效
```bash
source ./bashrc
```



### 3.验证
最后我们输入设置的```cywhat```（这个名字自己设置）就可以快速进入设置的长目录了

