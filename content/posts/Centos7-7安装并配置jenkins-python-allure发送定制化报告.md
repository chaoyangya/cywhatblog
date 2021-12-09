---
title: Centos7.7安装并配置jenkins+python+allure发送定制化报告
date: 2020-09-03 15:34:13
draft: false
tags: ["Python","Jenkins","Allure","Linux"]
categories: ["Python"]
---


# 【全网最全】Centos7.7安装并配置jenkins+python+allure发送定制化报告



目前测试开发方向的接口自动化脚本很多，这里就不一一列举了，有兴趣的可以baidu/google 一大堆，本次主要根据自己公司/业务需要搭建了一套基于python3.7+pytest+allure的接口自动化脚本，由于工作原因，源码就不放了，最下面会放一个很简单的脚本，不想写的可以暂时先用下，调试通过以后，再进行业务代码的编写也是ok的，话不多说，开整。

## Centos版本的选择

这里我选择的是阿里云的服务器，配置很低的那种，自己练手搭个小项目已经完全ok啦。

说一下为什么我选择centos7.7版本吧，目前别的版本，也有人一直在用，但是会有一些不支持的功能，比如说我上次使用的7.3中的启动服务的时候，会有一些权限问题，总之层出不穷，大家可以去踩一下坑，只有你想不到没有出现不了的新问题，当时几乎快崩溃了，然后突然google发现一位国外大神，通过更换centos版本完美的解决了这个问题，我就重新选择版本，重新开始，当自己需要的一些服务慢慢变绿的时候，心中的喜悦大概只有自己知道吧。
 

## Python3.7的安装和配置

1、先用root账号登录你的服务器，注意后面的操作都是在root权限进行的噢

	PS：安装python3 需要很多的依赖包，所以我们先安装依赖包建议在根目录上执行

	切换到根目录：`cd  /`

	安装命令如下：`yum -y groupinstall "Development tools"`

	然后继续安装下一个依赖：`yum -y install zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel gdbm-devel db4-devel libpcap-devel xz-devel`

	最后一个依赖：`yum install libffi-devel -y`

	如果安装上面的依赖没有出错的话，就可以下载python3.7的包了，如果安装依赖出现错误，请自行百度解决



2、下载python3.7 安装包

	下载：``wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz`
	
	**如果wget没有安装的话，请先安装wget：yum -y install wget (已安装忽略这一步)**

	解压：`tar -xvJf  Python-3.7.0.tar.xz`



3、解压完成后，编译安装

	创建编译安装目录：`mkdir /usr/local/python3`

	解压完成后会创建一个Python-3.7.0文件夹，进入该文件夹：`cd Python-3.7.0`

	配置到创建编译安装目录：`./configure --prefix=/usr/local/python3 `

	然后开始编译安装：`make && make install `



4、创建软件连接

	创建python3软链接：`ln -s /usr/local/python3/bin/python3 /usr/local/bin/python3`

	创建pip3软链接：`ln -s /usr/local/python3/bin/pip3 /usr/local/bin/pip3
`


5、到这里就安装完成了，验证安装是否成功

	查看python3版本：`python3 -V`

	查看pip3版本：`pip3 -V` 

	分别指向安装路径就安装成功啦

6、配置环境变量

	环境变量内容：`export PYTHON_HOME=/usr/local/python3/`
				`export PATH=$PYTHON_HOME/bin:$PATH`

	编辑环境变量文件：`vim /etc/profile`
	
	把环境变量内容粘贴到环境变量文件最后一行保存：`：wq`

	让刚刚更改的环境变量生效：`source /etc/profile`

	上面让环境变量生效只是本次有效，下次连接就失效了，这里要把命令放到 ：`vim ~/.bashrc` 中，如下图

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903145729665.png#pic_center)


	

## Python测试脚本

这里的脚本可以使用我的(Github)，也可以自己写一个，目的主要是为了接下来的jenkins配置使用

[Github](https://github.com/chaoyangya/xiaowangapi)


## 安装Jenkins
1、安装jenkins必须安装jdk

	下载jdk:`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" https://download.oracle.com/otn-pub/java/jdk/8u201-b09/42970487e3af4f5aa5bca3f542482c60/jdk-8u201-linux-x64.tar.gz`

	或者：`wget --no-check-certificate --no-cookies --header "Cookie: oraclelicense=accept-securebackup-cookie" http://download.oracle.com/otn-pub/java/jdk/8u131-b11/d54c1d3a095b4ff2b6607d096fa80163/jdk-8u131-linux-x64.rpm`

	我这里下载的是rpm的文件类型

	下载完成之后解压：`rpm -ivh  jdk-8u151-linux-x64.rpm`
 

2、配置java环境变量

	编辑系统环境变量：`vim /etc/profile`

	变量内容(根据自己安装的jdk路径更改)：`export JAVA_HOME=/usr/lib/jvm/java`
									`export PATH=$JAVA_HOME/bin:$PATH`

	让配置生效 ：`source /etc/profile`



3、安装Jenkins

	首先下载jenkins：`wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo`
	
	然后导入公钥：`rpm --import https://pkg.jenkins.io/redhat/jenkins.io.key`

	安装jenkins：`yum install -y jenkins --nogpgcheck`

4、配置jenkins

	更改端口：`vi /etc/sysconfig/jenkins`  ：`JENKINS_PORT="8080"`

	更改用户：`vi /etc/sysconfig/jenkins`  ：`JENKINS_USER="root"`

	然后让配置生效：`source /etc/sysconfig/jenkins`

5、重新启动jenkins

	启动：`service jenkins restart`

6、打开jenkins网址

	浏览器打开：`你的ip+8080`




## 配置Jenkins

因为我这里已经安装过jenkins了，一开始的jenkins安装配置就不说了，其他博主的都ok，主要说一下怎么配置allure

1、安装allure插件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152249782.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)

	找到![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152325565.png#pic_center)

	搜索 `allure` 安装就好了

2、配置jdk和allure

jdk：![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152425965.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)

allure：![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152446147.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)


3、新建job(选择自由风格)

配置git地址：![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152526480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)

配置shell：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152552342.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)

	这里要注意一下，最好找到你的jenkins的工作空间路径，把项目放到你的工作空间路径去

4、添加allure报告插件

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152752887.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)

5、在Advanced中配置html生成的目录

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200903152847803.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)
	
6、具体路径配置相关，可以参考下我项目中的目录结构，自己亲自动手配置一遍就懂了

7、打开报告
	
	Build Now完成后会生成报告
![在这里插入图片描述](https://img-blog.csdnimg.cn/2020090315310831.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)

8、查看报告


	查看报告：
![1](https://img-blog.csdnimg.cn/20200903153229539.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoYW95YW5nX28=,size_16,color_FFFFFF,t_70#pic_center)


