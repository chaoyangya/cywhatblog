---
title: Iterm2/Mac自带终端工具快速ssh
date: 2019-01-26 11:13:00
draft: false
tags: ["Iterm2","Mac"]
categories: ["Iterm2"]
---

### 1、新建文件(最好在根目录)
```bash
touch login.sh
```
下面就是脚本文件，比较`low`，大神勿喷，会更炫酷写法的小伙伴可以自己参考这个思路写，不会的/懒得写的直接复制就好

　　

```bash
   #!/usr/bin/expect -f
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

### 2、安装expect
```bash
sudo yum install expect
```


### 3、设置别名(快捷登录需要输入的名称)

```bash
vim bash_profile

alias 别名='expect login.sh 机器ip 登录账户 登录密码'
```

**ps**：别名就是你登陆终端之后输入这个别名就会自动登陆/或者操作你的指令！

![](https://img-blog.csdnimg.cn/img_convert/81b5757e6ba93a39660195244f1b4d1b.png)
　　　
