---
title: avn自动切换node版本
date: 2021-09-29 17:23:33
draft: false
tags: ["Avn","Node"]
categories: ["Avn"]
---

**前景：**

`服务器中俩个服务需要用到node，但是其中一个服务需要使用低版本的node，另一个则需要高版本node`


## 1.首先安装nvm
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash

#添加环境变量
vim ~/.bashrc

#内容如下：
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

#让配置生效
source ~/.bashrc
```

## 2.安装avn
```bash
nvm i -g avn
```

## 3.设置avn
```bash
avn setup
```

## 4.进入想启动项目的根目录新建文件
```bash
cd XX

#新建 .node-version文件
touch .node-version

#配置需要使用的node版本
echo v8.9.0 >> .node-version   #V后面跟版本号
```

## 5.把avn加入系统变量
```bash
echo `source "$HOME/.avn/bin/avn.sh" # load avn` >> ~/.bashrc    #这里如果是zshrc的话自行更改
```

## 6.然后在根目录查看node和npm版本
```bash
node -v

npm -v
```
