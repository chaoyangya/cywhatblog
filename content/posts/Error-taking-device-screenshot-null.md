---
title: 'Error taking device screenshot: null'
date:  2018-10-11 19:42:00
draft: false
tags: ["Android","Appium"]
categories: ["Appium"]
---
### 前景
使用```uiautomatorviewer``` 查看Android某些页面元素，出现如图错误：

```bash
Error obtaining UI hierarchy Reason: Error taking device screenshot: null
```
![](https://img-blog.csdnimg.cn/img_convert/fc8af8463b3e6822ccdd940774759365.png)


在网上找了很多解决办法依然没解决

**总结了以下原因：**

    1、该app不支持该页面的截屏功能所以uiautomatorviewer捕捉不到
    
    2、手机需要重启
    
    3、非原装数据线
    
    4、appium服务异常需要重新连接
    
    5、可以尝试切换USB接口
    
    6、最后可以把手机开发者选项的USB调试撤销权限，在重新获取
    
    　　以上为个人观点，不代表百分百解决，仅供参考！
