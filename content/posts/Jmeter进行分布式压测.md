---
title: "Jmeter进行分布式压测"
date: 2023-06-27T14:47:42+08:00
draft: false
tags: ["Jmeter","Linux","压测"]
categories: ["Jmeter","Linux","压测"]
---

### 1、前期准备
- jmeter
- jdk
- 同一局域网的多台压力机


### 2、什么是分布式压测
```text
分布式压力测试是指通过局域网&Internet，把不同的节点连接起来，以达到测试资源共享、分散操作、集中管理、协同工作、负载均衡、测试过程监控等目的的计算机网络测试。
```

### 3、注意事项
```text
1、master和各个slave机器必须使用同一局域网，尽可能减少网络带宽的影响

2、使用非GUI模式，避免不必要的cpu、内存损耗

3、减少查看结果树/聚合报告等元件的个数

4、jdk和jmeter版本需要一致

5、有csv参数化的文件需要上传到每台slave，且路径一致

6、只保存你需要的数据，减少断言
```

### 4、安装jdk

- [Linux安装jdk11](https://cywhat.cn/Linux%E5%AE%89%E8%A3%85jdk11/)

### 5、安装jmeter
#### 5.1、下载jmeter

- [下载jmeter](https://jmeter.apache.org/download_jmeter.cgi)

![下载jmeter](/img/img82.png)

#### 5.2、上传解压
```bash
# 1、上传文件到服务器

# 2、解压文件
unzip apache-jmeter-5.6.zip
```

#### 5.3、修改hosts配置
```bash
# 1、查看本机名
hostname

# 2、修改本机hosts
vim /etc/hosts

# 3、加入以下数据
本机ip       hostname名【eg：  x.x.x.x  localhost】
```

#### 5.4、修改jmeter-server配置
```bash
# 1、编辑jmeter启动文件
sudo vim jmeter-server

# 2、修改回环地址[x.x.x.x 为本机ip]
# One way to fix this is to define RMI_HOST_DEF below
RMI_HOST_DEF=-Djava.rmi.server.hostname=x.x.x.x

# 3、保存退出
: wq
```

#### 5.5、修改jmeter.properties配置
```bash
# 1、编辑jmeter启动文件
sudo vim jmeter.properties

# 2、禁用ssl
# Set this if you don't want to use SSL for RMI
server.rmi.ssl.disable=true    #[把flase改为 true 并且去掉注释]

# 3、修改启动端口
# the following property before starting the server:
server.rmi.localport=8009   # 自定义启动端口

# 4、修改远程连接端口
# RMI port to be used by the server (must start rmiregistry with same port)
server_port=8009            #自定义远程连接端口

# 保存请求和响应数据
jmeter.save.saveservice.output_format=xml
jmeter.save.saveservice.response_data=true
jmeter.save.saveservice.samplerData=true
```


#### 5.6、启动jmeter-server
```bash
./jmeter-server    #启动后没有报错且端口号为自定义的端口即为安装成功，如下图
```
![启动jmeter-server](/img/img83.png)



### 6.配置其他节点压力机
```bash
# 编辑配置文件
sudo vim  jmeter.properties 

# 2、写入其他节点配置
# Remote Hosts - comma delimited
remote_hosts=10.150.31.54:8009
#remote_hosts=localhost:1099,localhost:2010

# 3、保存
:wq
```

#### 6.1、启动其他压力机
```bash
./jmeter-server   # 如图即为启动成功
```
![启动jmeter-server](/img/img88.png)


### 7.master节点运行脚本
#### 7.1、启动脚本
```bash
# 1、进入到jmeter的bin目录
cd /home/apache-jmeter-5.6/bin

# 2、执行脚本
./jmeter -n -t /home/oldtest.jmx -l /home/jmeter/result/result.jtl  -JthreadNum=20 -JloopNum=1 -JrampupTime=1 -JcsvFile=/home/login-user.csv  -e   -o  /home/jmeter/report/
```

#### 7.2、命令详解

**命令解析:**
- -n : 命令行模式
- -t : 指定jmx脚本地址[最好是绝对路径]
- -l : 记录测试结果围巾[指定路径需要给出明确的结果文件名 eg：result.jtl]
- -JthreadNum :   自定义参数[threadNum]    '线程数'
- -JloopNum :     自定义参数[loopNum]      '循环次数'
- -JrampupTime :  自定义参数[loopNum]      '运行时间'
- -JcsvFile :     自定义参数[csvFile]      '指定CSV文件路径'
- -e : 测试完成后生成测试报表
- -o : 指定测试报告生成文件夹[文件夹可以不存在&如果存在该文件夹必须为空]

**对比jmeter脚本-用户自定义变量**

- 默认值均为`1`

![jmeter脚本详解](/img/img89.png)

![jmeter脚本详解](/img/img90.png)

![jmeter脚本详解](/img/img91.png)


#### 7.3、压测结果查看

- 1、打开jmeter的G-UI页面，添加`查看结果树`和`聚合报告`等其他监控器，导入`result.jtl`文件查看数据

- 2、也可打开`report`中生成的`index.html`来分析数据，详情查看移步下方`《8.报告详解》`


### 8、报告详解
#### 8.1、dashboard详解

![jmeter报告详解](/img/img84.png)


#### 8.2、charts详解
- Over Time

    ![jmeter报告详解-charts](/img/img85.png)

- Throughput
    
    ![jmeter报告详解-Throughput](/img/img86.png)

- Response Times

    ![jmeter报告详解-Response Times](/img/img87.png)



### 9、问题记录
#### 问题1：
```text
报告中的http请求会出现 -0/-1，且样本总数不符合 线程数 * 循环次数
```
![jmeter问题1](/img/img93.png)

#### 问题1解决：
```text
PS:该类问题一般出现在有重定向的接口，只需要关闭jmeter中该接口的`跟随重定向`即可
```
![jmeter问题1](/img/img92.png)


**其他问题随时更新~**