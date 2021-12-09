---
title: npm缺少css-loader，/style-compiler，stylus-loader问题，npm没有权限无法全局更新问题
date: 2018-10-17 16:08:00
draft: false
tags: ["Node","Npm"]
categories: ["Npm"]
---
​
ERROR in ./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-a5e4f82a","scoped":false,"hasInlineConfig":false}!./node_modules/stylus-loader?{"import":["~@didi/ada/style/mixins.styl","/home/xiaoju/manhattan-hera-webapp/client/style/base.styl"]}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./client/components/panel_links.vue
Cannot find module 'postcss-import'
@ ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"vue":true,"id":"data-v-a5e4f82a","scoped":false,"hasInlineConfig":false}!./node_modules/stylus-loader?{"import":["~@didi/ada/style/mixins.styl","/home/xiaoju/manhattan-hera-webapp/client/style/base.styl"]}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./client/components/panel_links.vue 4:14-454
@ ./client/components/panel_links.vue
@ ./client/app.ts
@ multi ./client/app.ts

如下图：



在测试项目的时候，部署前端在启动前端环境的时候遇到缺少组件css-loader，/style-compiler，stylus-loader，尝试了开启外网，npm的全局安装，单独安装组件( npn install stylus-loader css-loader style-loader style-compiler  --save-dev)后无果，最后在前端大神的指导下，发现是npm的目录没有权限，然后找到了破解npm无法全局安装下载的最新办法！亲测有效！

##方法一：

更改npm的默认安装目录

1、为全局安装创建一个安装目录
```bash
$ mkdir ~/.npm-global
```

2、配置npm以使用新的目录路径

```bash
$ npm config set prefix '~/.npm-global'
```

3、打开或创建一个~/.profile文件并添加以下行

```bash
$ export PATH=~/.npm-global/bin:$PATH
```

4、然后全局安装npm即可

```bash
$ npm install
```

5、然后你惊奇的会发现之前全局安装不下来的东西都可以下载下来了

在success出现的那一刻，会觉得整个虚拟机都美艳不可方物~

##方法二：使用节点版本管理器重新安装（高效适合高手）

1、由于npm和node.js产品由不同的实体管理，因此更新和维护可能变得复杂。此外，Node.js安装过程将npm安装在仅具有本地权限的目录中。当您尝试全局运行包时，这可能会导致权限错误。

为了解决这两个问题，许多开发人员选择使用节点版本管理器或nvm来安装npm。版本管理器将避免权限错误，并将解决更新Node.js和npm的复杂性。

此外，开发人员可以使用nvm在多个版本的npm上测试他们的应用程序。nvm使您可以轻松切换npm以及节点版本。这样可以更轻松地确保您的应用程序适用于大多数用户，即使他们使用的是其他版本的npm。如果您决定安装版本管理器，请使用您选择的版本管理器的说明来学习如何切换版本，并了解如何使用最新版本的npm保持最新。

nvm如何安装具体请参考

https://github.com/creationix/nvm/blob/master/README.md#installation

2、安装完之后验证登陆系统将提示您输入用户名，密码和电子邮件。请务必使用与在网站上输入的用户名完全相同的方式拼写您的用户名，否则您将创建一个新帐户。
```bash
$ npm login
```

3、要测试您是否已成功登录
```bash
$ npm whoami
```

4、然后尝试更新你的npm版本
```bash
$ npm install npm@next -g
```

