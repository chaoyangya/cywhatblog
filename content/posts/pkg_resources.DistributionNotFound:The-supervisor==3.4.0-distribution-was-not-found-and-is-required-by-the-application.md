---
title: "Pkg_resources.DistributionNotFound:The Supervisor==3.4"
date: 2023-03-30T14:51:14+08:00
draft: false
tags: ["Supervisor","Linux"]
categories: ["Supervisor"]
---

### 报错
``pkg_resources.DistributionNotFound: The 'supervisor==3.4.0' distribution was not found and is required by the application``


### 原因
```text
通过yum命令直接安装的supervisor只支持python2版本,所以python版本不兼容,改掉python版本即可
```

{{< admonition type=note title="注意" open=true >}}
执行哪个文件报错，改那个文件的python版本
{{< /admonition >}}

### 解决
```bash
vim /bin/echo_supervisord_conf    #这里的echo_supervisord_conf文件是我需要执行的
```

```text
#!/usr/bin/python   --->    改为    #!/usr/bin/python2


:wq 
```
{{< admonition type=note title="注意" open=true >}}
echo_supervisord_conf需要替换成你执行命令后报错的文件
{{< /admonition >}}
