---
title: Python+virtualenv+Django+nginx+uwsgi+centos7部署web应用
date: 2021-03-11 17:09:24
draft: false
tags: ["Linux","Nginx","Django"]
categories: ["Python"]
---

给公司写的一个工具平台，先部署到自己的服务器上进行测试，真是困难重重，此文章仅记录自己踩坑过程和搭建教程，不保证你能按照教程成功搭建，但能把坑提前暴露出来，避免大家重复踩坑！

## 我的环境


 1. **部署服务器** ：CentOS Linux release 7.8.2003 (Core)
 2. **Python**：3.7.0
 3. **Django** ：1.11.7
 4. **Nginx**：1.16.1
 5. **Uwsgi**：2.0.19.1
 6. **操作机**：mac + iterm2
 


## 1、上传/clone项目至服务器
```bash
$ git/xftp均可
```


## 2、安装python3.7.0

安装python3.7.0：

```bash
$ wget http://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz
```
解压

```bash
$ tar -xvzf Python-3.7.0.tgz
```

进入文件夹

```bash
$ cd Python-3.7.0
```

执行配置文件

```bash
$ ./configure --with-ssl
```

编译

```bash
$ make    
```

安装

```bash
$ sudo make install
```

建立软连接

```bash
$ ln -s /usr/local/python3/bin/python3.7 /usr/bin/python3
$ ln -s /usr/local/python3/bin/pip3.7 /usr/bin/pip3
```

检测python3版本

```bash
$  python3 -V
```


## 安装虚拟环境
1、安装虚拟环境

```bash
$ pip3 install virtualenv
```

2、新建虚拟环境文件夹

```bash
$ mkdir pyenv
```

3、进入虚拟环境文件夹

```bash
$ cd pyenv
```

4、安装虚拟环境

```bash
$ virtualenv  -p python3 myenv
```

5、激活虚拟环境

```bash
$ source /myenv/bin/activate
```

6、安装项目所需组件

```bash
$ pip3 install -r requriements.txt
```

7、pip安装依赖太慢使用douban源

```bash
$ pip install xx -i http://pypi.douban.com/simple/
```

## 安装uwsgi

1、安装uwsgi

```bash
$ pip3 install uwsgi
```

2、在项目根目录添加 .ini 结尾的uwsgi配置文件

```bash
$ touch uwsgi.ini (这里的uwsgi可以自己命名)
```

3、修改uwsgi.ini配置文件

```bash
[uwsgi]
#http只能用于wusgi自己调试 要跟nginx通信需要用sockt 使用内网ip
#http=111.11.11.1:9003  
socket = 111.11.11.1:9001

#项目根目录
chdir = /root/mydjango/

#django应用的wsgi文件
wsgi-file = mydjango/wsgi.py

#弃用主进程
master = true

#
vacuum = true


processes = 4


threads = 2

#启动uwsgi之后的pid文件存储位置
pidfile = /root/mydjango/uwsgi.pid

#启动uwsgi产生的日志存放位置
daemonize = /root/mydjango/uwsgi.log
```

这里先不启动uwsgi，后面等nginx安装好了一起启动即可



## 安装nginx
1、安装依赖

```bash
$ yum -y install gcc pcre-devel zlib-devel openssl openssl-devel
```

2、下载nginx

```bash
$  wget http://nginx.org/download/nginx-1.16.1.tar.gz 
```

3、新建文件夹

```bash
$ mkdir /usr/loacl/nginx
```

4、解压nginx包

```bash
$ tar -zxvf nginx-1.16.1.tar.gz
```

5、进入解压后的nginx目录

```bash
$ cd nginx-1.16.1/
```

6、编译

```bash
$ ./configure  --prefix=/usr/local/nginx
```

7、安装

```bash
$ make && make install
```

8、修改nginx.conf配置即可

```bash
$ vim /usr/local/nginx/conf/nginx.conf
```

修改内容如下

```bash
server {
        listen       80; #这里80端口要注意别被其他程序占用
        listen       [::]:80
        server_name  xxx.xxx.xx.x; #这里的ip要换成外网可以访问的ip

        #charset koi8-r;

        #access_log  logs/host.access.log  main;
		location /static {
            alias /root/mydjango/web/static/; #这里放的是django的静态文件目录
        }
        
        location / {
            include uwsgi_params;    
            uwsgi_pass XXX.XX.XX.X:9001;#这里的ip就是上面配置的uwsgi的ip和端口
            uwsgi_read_timeout 2;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
```

启动nginx

```bash
$ cd /usr/loacl/nginx/sbin
```

```bash
$ ./nginx
```


## django项目数据库迁移
1、进入虚拟环境

```bash
$ source /myenv/bin/activate
```

2、迁移数据库

```bash
$ python3 manage.py makemigrations
```

```bash
$ python3 manage.py migrate
```

3、迁移静态文件

```bash
$ python3 manage.py collectstatic
```



## 启动uwsgi

1、启动uwsgi

```bash
$ uwsgi -d --ini uwsgi.ini # -d 可以让uwsgi保持在后台运行
```


## 疑难解答

1、启动uwsgi.ini报错

WARNING: Can't find section "uwsgi" in INI configuration file uwsgi.ini

```bash
$ 原因：uwsgi.ini头部没有添加[uwsgi] 头部文件 添加完成以后即可
```

2、部署项目完成以后，而且静态资源也已经迁移，访问资源还是403，修改nginx的使用用户为root即可


```bash
$ vim /usr/local/nginx/conf/nginx.conf
```

```bash
#有些nginx安装完成后这句是注释的 打开即可
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210311170330559.png)


3、nginx部署完成后，出现-bash: nginx: command not found 添加nginx的环境变量即可

```bash
$ vim /etc/profile
```

在末尾加入：

```bash
$ PATH=$PATH:/var/local/nginx/sbin
$ export PATH
```

然后让配置生效

```bash
$ source /etc/prifile
```

然后就可以使用nginx快捷命令了

