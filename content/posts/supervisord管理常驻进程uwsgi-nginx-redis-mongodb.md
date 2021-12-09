---
title: supervisord管理常驻进程uwsgi/nginx/redis/mongodb
date: 2021-05-24 11:35:23
draft: false
tags: ["Supervisord","Linux"]
categories: ["Supervisord"]
---

解决部署的一些项目,因机器关机/重启导致项目需要手动重新启动的问题

## 1 `安装supervisor

yum安装
```bash
$ yum install supervisor
```

pip安装

```bash
$ pip install supervisor
```

easy_install安装

```bash
$ easy_install supervisor
```


## 2 `配置supervisor

```bash
#生成配置supervisor文件
$ echo_supervisord_conf > /etc/supervisord.conf
```

```bash
#创建存放配置文件目录
$ mkdir -p /etc/supervisord.d/conf
```

## 3 `修改默认配置

```bash
#文件最后一行,目录修改为配置文件地址,我的.ini文件是在/etc/supervisord.d/conf/存放,而且本身配置文件也在etc中,所以目录直接写supervisord.d/conf/就可以了
$ [include]
$ files = supervisord.d/conf/*.ini
```


## 4 `通过配置文件启动supervisor

```bash
#这里一定要用配置文件的绝对路径
$ supervisord -c /etc/supervisord.conf
```


## 5 `编写要管理进程的配置文件

```bash
#因为我这里配置文件中通配符是以.ini结尾 所以新建的文件后缀为.ini
$ touch my_uwsgi.ini
```

```bash
#配置如下
$ [program:uwsgi]  #uwsgi这个名称是管理进程的别名,可以自定义
  user=root #启动用户
  command=/root/pyenv/myenv/bin/uwsgi --ini  /root/pyenv/myenv/my_uwsgi.ini   #启动的命令
  directory=/root/pyenv/myenv    #文件目录
  autostart=true   #是否跟随supervisor启动
  autorestart=true   #程序故障是否重启
  stopasgroup=true   #
  startsecs=3   #启动3s后无异常判断为正常
  startretries=3   #启动尝试次数
  redirect_stderr=true   #把stderr重定向到stdout,默认为flase
  stdout_logfile=/var/log/uwsgi_out.log   #标准输出日志路径 这里一定要把uwsgi本身的日志输出关掉
  stderr_logfile=/var/log/uwsgi_err.log   #输出错误日志路径
```


## 6 `启动应用

```bash
#重启supervisor配置中的所有程序
$ supervisorctl reload
```

```bash
#查看supervisor状态 出现启动项目name即可
$ supervisorctl status
```


## 7 `supervisor命令详解

```bash
$ supervisorctl restart <application name>  #重启指定应用
$ supervisorctl stop <application name>  #停止指定应用
$ supervisorctl start <application name>  #启动指定应用
$ supervisorctl restart all  #重启所有应用
$ supervisorctl stop all  #停止所有应用
$ supervisorctl start all  #启动所有应用
$ supervisorctl update  #配置文件修改后可以使用该命令加载新的配置
$ supervisorctl reload  #重新启动配置中的所有程序
```


## 注意事项

使用supervisorctl status查看发现有进程被不断重启,报错如下:

```bash
XXX(项目名)      FATAL     Exited too quickly (process log may have details)
```

原因:

```bash
supervisor只支持前台程序的托管到后台(启动前需要kill掉已经存在的进程),例如:

	#uwsgi
	uwsgi如果出现不断重启,一定是启动命令中加了-d的参数,去掉就好了

	#redis
	redis就需要把redis.conf配置文件中的daemonize设置为no

	#nginx
	nginx就需要在命令行后缀增加 -g ‘daemon off;’

	#mongodb
	mongodb如果不断重启,多半也是因为启动命令中加了后台运行的参数 & 同样的去掉就可以了
```
