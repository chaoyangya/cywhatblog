---
title: "Linux安装newman生成postman脚本报告"
date: 2022-11-10T15:08:11+08:00
draft: false
tags: ["Newman","Linux","Postman"]
categories: ["Newman","Linux","Postman"]
---

### 1、安装node
```bash
# 1、下载node
wget https://nodejs.org/dist/v16.9.1/node-v16.9.1-linux-x64.tar.xz 

# 2、解压
tar -xvf node-v16.9.1-linux-x64.tar.xz

# 3.重命名
mv node-v16.9.1-linux-x64 node
```


### 2、配置环境变量
```bash
# 1、编辑环境变量文件
vim /etc/profile

# 2、添加node环境
export NODE_HOME=/usr/local/node
export PATH=$NODE_HOME/bin:$PATH  #放在后面

# 3、让配置生效
source /etc/profile
```

### 3、检查node是否安装完成
```bash
node -v

npm -v
```

### 4、安装newman
```bash
npm install -g newman  #全局安装
```

### 5、安装newman-html插件
```bash
npm install -g newman-reporter-htmlextra --registry=https://registry.npm.taobao.org
```

### 6、命令详解
```bash
newman run  A.postman_collection.json  -e B.postman_environment.json  -r htmlextra,cli --reporter-htmlextra-title "接口自动化测试报告" --reporter-htmlextra-browserTitle "测试报告" --reporter-htmlextra-template ./template.hbs --reporter-htmlextra-export ./reports/C.html

A.postman_collection.json           #postman的脚本集合
B.postman_environment.json          #postman的环境变量
-r htmlextra,cli                    #指定插件htmlextra
--reporter-htmlextra-title          #定义报告的title名称
--reporter-htmlextra-browserTitle   #定义浏览器title名称
--reporter-htmlextra-template       #生成报告的模板
./template.hbs                      #使用的模板路径
--reporter-htmlextra-export         #用htmlextra导出报告
./reports/C.html                    #生成到当前目录的reports并命名为C.html
```

