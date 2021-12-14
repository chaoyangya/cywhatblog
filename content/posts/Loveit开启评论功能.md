---
title: "Loveit开启评论功能"
date: 2021-10-21T17:07:26+08:00
draft: false
tags: ["Hugo","Loveit"]
categories: ["Hugo","Loveit"]
---

{{< admonition type=tip title="小tips" open=true >}} 
该文章仅仅针对Loveit主题有效，其他自己尝试。 
{{< /admonition >}}

## Loveit开启评论
loveit自带的有valine的配置，我们需要先注册一些要用到的信息

### 1.注册Leancloud 

评论系统依赖于 leancloud，所以需要先在leancloud中进行相关的准备工作。

登录 或 注册 [LeanCloud（国际版）](https://leancloud.app/) 必须验证邮箱和手机号

成功后，进入后台点击左上角的创建应用：

![img21.png](/img/img21.png)

![img22.png](/img/img22.png)

![img23.png](/img/img23.png)

### 2.域名绑定

![img24.png](/img/img24.png)

### 3.绑定安全域名

设置--安全中心--web安全域名


![img40.png](/img/img40.png)

### 4.修改配置
在 `config.toml`中找到 `valine` 将需要内容加入

```
[params.page.comment.valine]
        enable = true                                       # true为开启 false为关闭
        appId = "XWDPvzYoXXXXXGqOm-MdYXbMMI"                # 需要更换为自己的
        appKey = "U3pRXXXXXSADAXAaAaoRQ"                    # 需要更换为自己的
        placeholder = "说点什么吧"
        avatar = "mp"
        meta= ""
        pageSize = 10
        lang = ""
        visitor = true
        recordIP = true
        highlight = true
        enableQQ = false
        serverURLs = "https://mukjinfv.api.lncldglobal.com" # URL不需要替换
```

{{< admonition type=tip title="注意" open=true >}} 
如果不希望该文章被评论，在title加入字段 `comment` 且值为 `false` 即可
{{< /admonition >}}
```code
title: "关于"
date: 2021-10-19T22:01:44+08:00
reward: false
comment: false                                # comment为false时 该文章不可被评论
```
