---
title: "Zsh Problem Compinit503 No Such File or Directory Usr Local Share Zsh Site"
date: 2022-10-13T10:32:12+08:00
draft: false
tags: ["Zsh"]
categories: ["Mac"]
---

### 1、报错信息
`no such file or directory: /usr/local/share/zsh/site-functions/_brew_cask`


### 2、原因
`升级到BigSur出现该问题，似乎是brew因为BigSur和之前系统的版本不一致导致`

### 3、解决
```bash
brew doctor

brew cleanup

source ~/.zshrc
```