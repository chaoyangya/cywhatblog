---
title: 'sed: -e expression #1, char 24: unknown option to ''s'' '
date: 2021-08-17 18:15:24
draft: false
tags: ["Linux","Sed"]
categories: ["Linux"]
---

在使用 ```sed -e``` 批量替换命令时候,报错如下:
```bash
$ "sed: -e expression #1, char 24: unknown option to `s` "
```

原因:
```bash
$ 需要替换的内容中有符号,且该符号和你用来分割的符号一样,所以该条命令无法使用,详情如下图:
```
![img5](/img/img5.png)

也就是说如果你需要替换的内容中存在 ``` | ```  那么你的命令中用来分割的符号就需要使用 ```@``` 或者 ``` \ ``` 否则就会报错
