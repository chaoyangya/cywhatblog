---
title: hexo修改新建文章的默认字段
date: 2021-07-09 14:33:15
draft: false
tags: ["Hexo"]
categories: ["Hexo"]
---

**因为每次新建文章都需要自己新增字段,所以就找到了修改新建文章的默认字段所在地,果然社会的进步跟人的偷懒也不是毫无关系(啊哈哈哈)**


默认使用命令新建只有
```bash
title date tags
```

我是把 ```categories``` 也加上了 

修改项目根目录下```scaffolds```中的```post```模板即可,如下:

```bash
---
title: {{ title }}
date: {{ date }}
tags: 
categories: 
---
```

然后在新建文章的时候就有了```categories```字段
