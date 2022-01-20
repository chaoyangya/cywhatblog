---
title: "Linux部署granafa+node_exporter+prometheus监控"
date: 2022-01-20T11:06:19+08:00
draft: false
tags: ["Granafa","Linux","node_exporter","prometheus"]
categories: ["Granafa"]
---

### 1、下载安装Node_exporter
```bash
#1.下载
wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz

#2.解压
tar -zvxf node_exporter-1.3.1.linux-amd64.tar.gz 

#3.重命名
mv node_exporter-1.3.1.linux-amd64.tar.gz  /usr/local/soft/node_exporter

#4.启动并常驻后台,默认端口为9100
/usr/local/soft/node_exporte/node_exporter &   
```

### 2.下载安装prometheus
```bash
#1.下载
wget https://github.com/prometheus/prometheus/releases/download/v2.33.0-rc.1/prometheus-2.33.0-rc.1.linux-amd64.tar.gz


#2.解压
tar -zvxf prometheus-2.33.0-rc.1.linux-amd64.tar.gz

#3.重命名
mv prometheus-2.33.0-rc.1.linux-amd64.tar.gz /usr/local/soft/prometheus

#4.修改node节点端口
vim prometheus.yml

eg:
    - job_name: "node"
    static_configs:
      - targets: ["localhost:9100"]     #这里的locahost可以更改为其他机器的ip，但是监控机需要和被监控机互相通信
      

#5.启动并常驻后台,默认端口为9090
/usr/local/soft/prometheus/prometheus --config.file=/usr/local/soft/prometheus/prometheus.yml  &  
```


### 3.下载安装granafa
```bash
#1.下载
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-8.3.4.linux-amd64.tar.gz

#2.解压
tar -zxvf grafana-enterprise-8.3.4.linux-amd64.tar.gz

#3.重命名
mv grafana-8.3.4 /usr/local/soft/grafana

#4.修改granafa端口
cd /usr/local/soft/grafana/conf

vim defaults.ini

eg:
    #根据自己需要修改
    http_port = 9200   
      

#5.启动并常驻后台,修改端口为9200  grafana-server
/usr/local/soft/grafana/bin/grafana-server &
```

### 4.web访问granafa-url

PS：默认用户名密码都是admin,第一次登录需要修改密码

![img42.png](/img/img42.png)

### 5.添加数据源

![img43.png](/img/img43.png)


### 6.选择prometheus

![img44.png](/img/img44.png)

### 7.输入prometheus-url&port

![img45.png](/img/img45.png)


### 8.官网下载仪表盘

[下载中文版node仪表盘](https://grafana.com/grafana/dashboards/8919)

**下载JSON包**

![img46.png](/img/img46.png)


### 9.上传JSON包到granafa

![img47.png](/img/img47.png)

![img48.png](/img/img48.png)


### 10.查看仪表监控图

![img49.png](/img/img49.png)
