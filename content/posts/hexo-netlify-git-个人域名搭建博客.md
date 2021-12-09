---
title: hexo+netlify+git+个人域名搭建博客
date: 2021-07-12 14:52:22
draft: false
tags: ["Hexo","Netlify","Git"]
categories: ["Hexo"]
---

**部署过程需要用到一些```Linux```命令,且本文部署操作机为Mac,如是Windows不保证能100%成功噢**


## 部署准备
    操作机: Mac(iterm)
    Git: 创建好个人项目(Public) #注意这里项目命名 XX.github.io.git
    Netlify: 注册好自己的项目和团队
    Hexo: 5.4.0
    Node: 15.12.0(注意Node版本)

**PS:以上软件自行安装**


# 安装步骤
## 1.安装Hexo
```bash
$ npm install -g hexo-cli
```

## 2.初始化博客文件夹
```bash
$ hexo init blog   #(blog可根据自己情况更改)
```

## 3.安装node_moudles
```bash
$ cd blog

$ npm install
```

## 4.blog目录详解
```bash
node_modules: node依赖包
public: 存放生成的页面
scaffolds: 生成文章的一些模板
source: 存放文章
themes: 主题
_config.yml: 博客的配置文件
```
## 5.本地启动Hexo
```bash
$ hexo s    #(默认为4000端口)
```

## 6.hexo新建文章发布步骤
```bash
hexo clean  #清理静态文件和缓存数据

hexo new "新文章"

hexo g      #生成静态数据(按日期归类的文件夹/html等)

hexo s      #本地启动hexo
```


## 7.安装git部署插件
```bash
$ npm install hexo-deployer-git --save
```

## 8.修改hexo配置文件,关联git地址
```bash
$ vim _config.yml

deploy:
  type: git
  repo: https://github.com/chaoyangya/chaoyangya.github.io.git
  branch: master
```

## 9.第一次提交代码
```bash
$ git init    #初始化项目文件夹

$ git add .  #将所有文件添加到暂存区

$ git commit -m "first commit"   #提交到本地仓库，双引号内是提交的备注信息

$ git remote add origin https://github.com/chaoyangya/chaoyangya.github.io.git

$ git pull    #拉取远程主分支信息，首次拉取合并信息

$ git push -u -f origin master  #提交到远程仓库，这个命令中的 -f 是强制推送，因为远程仓库只有初始化的文件，所以强制推送上去就行了，不加-f 会报当前分支没有远程分支，强制推送可以覆盖master，这样就完成了第一次提交的步骤)
```

# 10.将hexo内容部署到生产环境
```bash
$ hexo d -g 
```

## 11.关联Netlify
登录Netlify建议使用github账号登录,会方便很多

![img](/img/img.png)

## 12.关联git仓库和分支
登录之后点击醒目的绿色的```New site fomr Git```按钮来新建站点并选取刚刚创建的仓库：

## 13.部署
点击完```Deploy site```之后，Netlify 会自动构建并发布你的网站内容，最重要的是Netlify支持分支部署和部署预览，这样可以提高开发效率，降低发布风险和成本。当我还没有打完这行字，Netlify已经完成网站的发布了，它会提供一个由随机字符串组成且以 .netlify.com 为后缀结尾的网站供你访问.

## 14.关联个人域名(如果不是从Netlify购入域名,需要将域名DNS指向Netlify)
选择```Add domain alias```添加个人域名,这里Netlify会默认给你新添加的域名多加一个重定向的www网址

![img1](/img/img1.png)



## 15.开启Https
Netlify免费提供SSL证书,支持添加自己的SSL,需要新增三个证书.或者将自己域名的```CNAME```记录类型指向你的.com结尾的域名也可以

![img2](/img/img2.png)



添加好之后等一会就可以通过你的域名来访问了


# 注意
推荐使用各个代码编辑器(大多数支持Markdown),方便快捷
