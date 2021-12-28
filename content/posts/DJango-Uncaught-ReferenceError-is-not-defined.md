---
title: 'DJango Uncaught ReferenceError: $ is not defined'
date: 2021-08-31 17:12:16
draft: false
tags: ["Django","Jquery"]
categories: ["Jquery"]
---

### 前提
**用django和jquery写的web应用,html页面js报错,信息如下:**

```bash
DJango Uncaught ReferenceError: $ is not defined
```

![img8](/img/img8.png)


### 原因
`js语法有问题,未识别为js语法`

### 解决
`需要引入jquery`
```bash
<script type="text/javascript" src="../static/main/js/jquery-2.1.1.min.js"></script> #src后面加js文件路径
```

![img9](/img/img9.png)
