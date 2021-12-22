---
title: >-
  selenium.common.exceptions.WebDriverException: Message: unknown error: cannot
  find Chrome binary
date: 2021-08-20 17:23:21
draft: false
tags: ["Selenium","Linux"]
categories: ["Selenium"]
---

报错: selenium.common.exceptions.WebDriverException: Message: unknown error: cannot find Chrome binary

原因是:
运行脚本的环境中没有找到chrome浏览器

解决:
windows/mac: 指定浏览器位置
```bash
$ chrome_path = r"/Library/Frameworks/Python.framework/Versions/3.6/bin/chromedriver"  #mac地址 win自己更换路径即可
  driver = webdriver.Chrome(chrome_path)
```

linux: 安装chrome浏览器

  [Linux安装chrome浏览器](https://cywhat.cn/centos7%E5%AE%89%E8%A3%85chrome%E6%B5%8F%E8%A7%88%E5%99%A8/)
