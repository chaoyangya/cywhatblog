---
title: App跟web定位元素页面相互切换
date: 2018-10-11 19:54:00
draft: false
tags: ["Android","Appium"]
categories: ["Appium"]
---
很多QA在做UI自动化或者App自动化的时候，会遇到在web页面要抓取App模式的元素，或者是在App要抓取H5页面的元素，从网上整理了一些方法，不一定能解决，但是试一下也未尝不可，如果解决了就记得关注一波咯！！！```python噢```~~~


    self.driver.switch_to.context()
    self.driver.switch_to.context('WEBVIEW_1')app --> web
    self.driver.switch_to.context('NATIVE_APP')web --> app


如果是从App转到web 选择```WEBVIEW_1```，
如果web转到App 选择 ```NATIVE_APP```

