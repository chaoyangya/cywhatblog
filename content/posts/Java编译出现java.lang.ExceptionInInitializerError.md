---
title: "Java编译出现java.lang.ExceptionInInitializerError"
date: 2024-02-26T14:27:58+08:00
draft: false
tags: ["Java"]
categories: ["Java"]
---


### 1、Java编译出现如下错误
```java
java: java.lang.ExceptionInInitializerError
com.sun.tools.javac.code.TypeTags
```

### 2、问题原因
```text
JDK和pom文件中的`lombok`版本不匹配导致
```

### 3、解决问题【二选一】
#### 3.1、修改JDK版本
```text
1、File -->  Project Structure --> Project

2、修改SDK版本，重新编译即可
```

#### 3.2、修改lombok版本
```text
1、pom文件中修改lombok版本

2、重新编译即可
```

