---
title: Mac忽略系统更新提醒，并取消小红点
date: 2021-09-07 14:58:29
draft: false
tags: ["Mac"]
categories: ["Mac"]
---
## 1.首先关掉系统的自动更新设置**
```bash
$ 1.系统偏好设置--软件更新

$ 2.取消选择"自动保持我的Mac最新"

$ 3.高级--取消所有按钮勾选
```

![img16](/img/img16.png)


## 2.执行代码
**以下操作需要在终端中进行**

### 1.忽略大版本更新
```bash
$ sudo softwareupdate --ignore "macOS Catalina"

$ sudo softwareupdate --ignore "macOS Mojave"

$ sudo softwareupdate --ignore "macOS Big Sur"
```

### 2.取消小红点
```bash
$ defaults write com.apple.systempreferences AttentionPrefBundleIDs 0

$ killall Dock  
```

### 3.恢复更新提示
```bash
$ sudo softwareupdate --reset-ignored
```
