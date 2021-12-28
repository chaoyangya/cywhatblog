---
title: Centos7安装mysql5.7亲测可用
date: 2020-03-30 15:54:01
draft: false
tags: ["Linux","Mysql"]
categories: ["Mysql"]
---
## 一、安装前准备
### 1.检查是否已经安装过mysql，执行命令
	

```bash
$ rpm -qa | grep mysql
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020033015134267.png)
### 2.查询所有Mysql对应的文件夹

```bash
$ whereis mysql
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200330151234488.png)

如果有的话请删除相关目录或文件

```bash
$ rm -rf /usr/local/mysql
```

并再次执行`whereis mysql `验证是否删除完毕


### 3.检查mysql用户组和用户是否存在，如果没有，则创建


#### 1)、查看是否存在组
	
```bash
$ cat /etc/group | grep mysql
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200330151632701.png)
我的是已经创建过了，所以就不创建了

没有的话需要创建用户跟用户组

#### 2)、创建用户组跟用户
	

```bash
$ groupadd mysql   创建用户组
```

```bash
$ useradd -r -g mysql mysql   创建用户且属于mysql用户组
```

### 4.从官网下载是用于Linux的Mysql安装包

下载命令：
```bash
$ wget https://dev.mysql.com/get/Downloads/MySQL-5.7/mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200330152105124.png)
也可以直接到mysql官网选择其他版本进行下载。


## 二、安装Mysql
### 1.解压mysql安装包：

```bash
$ tar -zvxf mysql-5.7.24-linux-glibc2.12-x86_64.tar.gz
```
解压完之后会在当前目录生成 `mysql-5.7.24-linux-glibc2.12-x86_64`这样的文件夹

移动该文件到/usr/local/下 并将文件夹名称修改为mysql 如果/usr/local/下已经存在mysql 将已存在mysql文件修改为其他名称 否则后续步骤可能无法正确进行 

移动并将文件夹命名为mysql

```bash
$ mv mysql-5.7.24-linux-glibc2.12-x86_64 /usr/local/mysql
```

### 2.在/usr/local/mysql目录下创建data目录

```bash
$ mkdir /usr/local/mysql/data  
```

### 3.更改mysql目录下所有的目录及文件夹所属的用户组和用户，以及权限

```bash
$ cd /usr/local/ 

$ chown -R mysql mysql/

$ chgrp -R mysql mysql/
```


### 4.编译安装并初始化mysql,务必记住初始化输出日志末尾的密码（数据库管理员临时密码）

```bash
$ cd /usr/local/mysql/bin/ 进入到bin目录进行编译安装
```

```bash
$ ./mysqld --initialize --user=mysql --basedir=/usr/local/mysql/ --datadir=/usr/local/mysql/data/ --lc_messages_dir=/usr/local/mysql/share --lc_messages=en_US 
```

补充说明：
第4步时，可能会出现错误：

依次执行以下命令安装编译mysql需要的插件

```bash
$ yum install  libaio-devel.x86_64
```

```bash
$ yum -y install numactl
```


### 5.运行初始化命令成功后，输出日志如下：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200330153759390.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)
记录日志最末尾位置root@localhost:后的字符串，此字符串为mysql管理员临时登录密码。

### 6.编辑配置文件my.cnf，添加配置如下

```bash
$ vi /etc/my.cnf   如果 my.cnf 文件没有的话自行添加
```

```bash
[mysqld]
basedir=/usr/local/mysql/
datadir=/usr/local/mysql/data/
port = 3306
symbolic-links=0
symbolic-links=0
max_connections=400
innodb_file_per_table=1
lower_case_table_names=1
explicit_defaults_for_timestamp=1
```

```bash
$ 按esc 输入 ：wq 保存退出即可
```
配置如下图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200330153940629.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70)
### 7.设为开机启动

```bash
$ cd /usr/local/mysql/support-files/
```

```bash
$ cp mysql.server /etc/init.d/mysql
```

```bash
$ vi /etc/init.d/mysql 打开编辑之后会看到下面有俩个字段(basedir和datadir)没有key 我们添加好key
```

```bash
$ basedir=/usr/local/mysql/
$ datadir=/usr/local/mysql/data/
```
### 8.授权为可执行状态

```bash
$ chmod +x /etc/init.d/mysql
```
### 9.开机启动

```bash
$ chkconfig --add mysql
```
### 10.启动mysql

```bash
$ service mysql start  
```

显示如下结果，说明数据库安装成功

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200330154854471.png)
如果出现如下提示信息

```bash
$ Starting MySQL... ERROR! The server quit without updating PID file
```

查看是否存在mysql和mysqld的服务，如果存在，则结束进程，再重新执行启动命令

```bash
$ 这里上面的错误孤岛了很久没效果的话 建议卸载了mysql重新安装一次
```

### 11.、查询mysql服务

```bash
$ ps -ef|grep mysql
```

### 12.、登录mysql，修改密码(密码为步骤5生成的临时密码)

```bash
$ ./mysql -u root -p 如果提示mysql：未找到命令 请进入/usl/local/mysql/bin/目录下执行
```

Enter password:

```bash
$ mysql>set password for root@localhost = password('yourpass');
```

### 13.开放远程连接

```bash
$ mysql>use mysql;
$ msyql>update user set user.Host='%' where user.User='root';
$ mysql>flush privileges; 如果是云服务器的话，需要设置安全组，请自行百度
```
