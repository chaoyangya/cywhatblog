---
title: Linux中常用来查看进程的命令
date: 2018-12-25 20:12:00
draft: false
tags: ["Linux"]
categories: ["Linux"]
---
查看所有运行中的进程:
```bash
$ ps aux | less
```

显示所有进程: 
```bash
$ ps -A  
$ ps -e
```

显示进程的树状图:
```bash
$ pstree
```

查看进程:
```bash
$ netstat -ntlp
```

