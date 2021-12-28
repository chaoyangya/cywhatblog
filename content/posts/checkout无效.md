---
title: checkout无效
date: 2018-10-29 16:29:00
draft: false
tags: ["Git"]
categories: ["Git"]
---

### 前景
**日常工作中，遇到的一些`checkout`无效或者```commit```提交不了的情况**


### 1.首先 你需要update的项目 会告诉你更改了那些配置，必须要还原或者提交
```bash
git pull
```


### 2.暂存提交
```bash
git stash
```
`命令的意思是将这些更改过的配置 暂存起来，注意是暂存`



### 3.更新
```bash
git pull     #拉取最新代码
```



### 4.取暂存
```bash
git statsh pop
```



### 5.检查是否可以checkout或者commit

`最后你发现之前暂存的配置，以及取出来并且成功替换了update之后的配置`

