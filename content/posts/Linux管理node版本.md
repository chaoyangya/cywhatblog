---
title: Linux管理node版本
date: 2021-04-07 17:39:32
draft: false
tags: ["Linux","Node"]
categories: ["Node"]
---


1、安装nvm

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```
或者

```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

2、nvm会自己添加环境变量，但是需要我们手动让环境变量生效

```bash
$ source ~/.bashrc
```

ps：如果没有环境变量，需要手动添加：

```bash
$ export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3、nvm安装指定版本node

```bash
$ nvm install v8.9.0
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210407173742911.png)

4、切换node版本

```bash
$ nvm use v8.9.0
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210407173820659.png)

5、查看node版本

```bash
$ node -v
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210407173858582.png)
