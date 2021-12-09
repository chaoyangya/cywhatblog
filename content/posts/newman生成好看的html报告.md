---
title: newman生成好看的html报告
date: 2021-08-18 10:38:09
draft: false
tags: ["Postman","Newman","Jenkins"]
categories: ["Newman"]
---
PS:运行newman需要```node``` 版本大于10

## 1.安装newman
```bash
$ npm install -g newman
```

## 2.安装普通html报告插件(建议安装)
```bash
$ npm install -g newman-reporter-html
```

## 3.安装美化html插件
```bash
$ npm install -g newman-reporter-htmlextra
```

## 4.newman命令详解
```bash
$ newman run  SX.postman_collection.json -e environment.json -r htmlextra,cli --reporter-htmlextra-title "实训平台接口 测试报告" --reporter-htmlextra-browserTitle "实训平台接口报告" --reporter-htmlextra-export Bapi.html
#参数解释:
run 后面跟接口脚本json格式的文件
-e 后面添加环境变量
-r 指定生成的报告格式
--reporter-htmlextra-title 指定生成的报告title
--reporter-htmlextra-browserTitle 指定生成的浏览器title
--reporter-htmlextra-export 指定生成的html文件名和路径
```

![img6](/img/img6.png)
