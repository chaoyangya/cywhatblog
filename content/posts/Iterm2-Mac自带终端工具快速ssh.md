---
title: Iterm2/Mac自带终端工具快速ssh
date: 2019-01-26 11:13:00
draft: false
tags: ["Iterm2","Mac"]
categories: ["Iterm2"]
---

## 一、
首先我们在终端本地要写一个登录的脚本，eg：

当然首先要```touch login.sh``` 啦，下面就是脚本文件，比较low，大神勿喷，会更炫酷写法的小伙伴可以自己参考这个思路写，不会的直接复制就好啦

　　

```bash
$ #!/usr/bin/expect -f
　　set hostname [lindex $argv 0]
　　set user [lindex $argv 1]
　　set password [lindex $argv 2]
　　set timeout 30
　　spawn ssh -tt $user@$hostname;
　　expect {
　　　　"yes/no" { send "yes\r";exp_continue }
　　　　"*password:" { send "$password\r";}
　　}
　　interact
　　~
```

如果写好了在sh login.sh 的时候，发现expect不是一个可执行的命令的话，我们还需要下载expect依赖噢，命令如下
```bash
$ sudo apt install expect
```
这个是mac版本的哈,如果小伙伴是windows的推荐去下载cygwin灰常好用哈,下载的时候一路下

一步就好了,中途会让你安装需要的功能,记得安装一下三个依赖包,很重要!(tcl、expect、apt-cyg),

下完就可以奔放了哈,

##二、

下面就来编写我们的懒人登陆ssh啦，其实就是利用“起别名”来实现的，同样的哈，大神勿喷

首先找到启动终端就运行的一个文件```bash_profile```然后编辑这个文件，输入以下内容：

　　　　

```bash
$ alias 别名='expect login.sh sship root passwd'
```

**ps**：别名就是你登陆终端之后输入这个别名就会自动登陆/或者操作你的指令啦！


具体图示如下，因为我是wsl的终端，所以跟mac的启动文件名不一致，但是原理是一样的（windows小伙伴如果也想体验mac终端，可以评论或者私聊）
![](https://img-blog.csdnimg.cn/img_convert/81b5757e6ba93a39660195244f1b4d1b.png)
　　　
