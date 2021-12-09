---
title: hexo优化加载速度
date: 2021-07-14 15:38:49
draft: false
tags: ["Hexo"]
categories: ["Hexo"]
---
# 注意该方法利用插件更改配置,如主题中有Google字体导致加载缓慢,请移步其他内容


利用插件 ```hexo-all-minifier```

# 安装插件
```bash
$ npm install hexo-all-minifier --save
```

**如果安装失败,请使用```cnpm```**
```bash
$ cnpm install hexo-all-minifier --save
```

# 更改Hexo配置
```bash
$ vim  _config.yml
```
加入如下配置:
```bash
#启用all_minifier
all_minifier: true
# html压缩
html_minifier:
  enable: true
  ignore_error: false
  exclude:

# css压缩
css_minifier:
  enable: true
  exclude:
    - '*.min.css'
    
# js压缩
js_minifier:
  enable: true
  mangle: true
  compress:
  exclude:
    - '*.min.js'
js_concator:
  enable: false
  bundle_path: '/js/bundle.js'
  front: false
  silent: false

# 图片优化
image_minifier:
  enable: true
  interlaced: false
  multipass: false
  optimizationLevel: 2
  pngquant: false
  progressive: false
```

# 重新发布
```bash
$ hexo d -g
```
