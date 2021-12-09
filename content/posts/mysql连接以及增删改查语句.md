---
title: mysql连接以及增删改查语句
date: 2021-08-18 16:41:15
draft: false
tags: ["Mysql"]
categories: ["Mysql"]
---

好久没操作数据库语句,都快忘光了,记录一下

## 1.连接数据库(mysql)
```bash
$ mysql  -h机器ip -u用户名 -p密码 
```

## 2.查看所有数据库
```bash
$ show databases;
```

## 3.进入某个数据库
```bash
$ use xxx;   # xxx为数据库名
```

## 4.查看数据库中的表
```bash
$ show tables;
```

## 4.查看数据库中的表
```bash
$ show tables;
```

## 5.增
```bash
$ insert into 表名 ( field1, field2,...fieldN )
                       VALUES
                       ( value1, value2,...valueN );
```

## 6.删
```bash
$ delete from 表名 where 字段名=字段值;
```

## 7.改
```bash
$ update 表名 set 字段名=字段值;
```

## 8.查
```bash
$ select * from 表名 where 字段名=字段值;
```

