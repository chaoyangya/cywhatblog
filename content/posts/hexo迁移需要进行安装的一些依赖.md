---
title: hexo迁移需要进行安装的一些依赖
date: 2021-09-24 17:51:42
draft: false
tags: ["Hexo"]
categories: ["Hexo"]
---

前景：

更换新设备 ``or`` 更换新工作环境需要重新本地部署hexo环境,需要有整个工程的文件夹


## 1.安装hexo
```bash
npm install -g hexo-cli
```

## 2.安装node_moudles
```bash
cd blog   #blog是你的工程名

npm install
```

## 3.安装git部署插件
```bash
npm install hexo-deployer-git --save

#安装好需要去git地址配置ssh密钥，用来本地push和pull
```

## 4.安装优化图片加载速度插件
```bash
npm install hexo-all-minifier --save && cnpm install hexo-all-minifier --save
```
[更改hexo配置](https://cywhat.cn/hexo%E4%BC%98%E5%8C%96%E5%8A%A0%E8%BD%BD%E9%80%9F%E5%BA%A6/)

## 5.更改hexo添加图片方式
```bash
npm install https://github.com/CodeFalling/hexo-asset-image --save
```

[解决hexo图片不展示问题](https://cywhat.cn/%E8%A7%A3%E5%86%B3hexo%E5%9B%BE%E7%89%87%E4%B8%8D%E5%B1%95%E7%A4%BA%E9%97%AE%E9%A2%98/)
