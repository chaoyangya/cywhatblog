---
title: "Django的csrf防御机制"
date: 2022-07-04T14:31:30+08:00
draft: false
tags:  ["Django","Ajax"]
categories: ["Django","Ajax"]
---



### 前景：

Html页面的表单没有完全使用`Django`的form进行渲染，故`Js`不能使用`$('#ClassID').serialize()`来获取`Csrf`和`Data`，然后报错`CSRF token missing or incorrect.`


### 原因：
`Django`第一次响应来自某个客户端的请求时，会在服务器端随机生成一个`Token`，把这个`Token`放在`Cookie`里。然后每次`Post`请求都会带上这个`Token`， 这样可以能避免被`Csrf`攻击。所以会在每个`Html`模板中增加一个` {% csrf_token %}`标签。

#### 视图函数返回Csrf的三种方式
```python
return render_to_response('Account/Login.html',data,context_instance=RequestContext(request))

return HttpResponse(_template.render(context, request))

return render(request, 'xxx.html', data)
```

#### Html中的展现形式

![img60](/img/img60.png)


### 解决

#### 1.通过Js先获取到Csrf值
```js
<script>
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
</script>
```

#### 2.通过在Ajax设置请求头传递
````js
<script>
    $.ajax({
        headers: {'X-CSRFToken': csrf_token},     
    })
</script>
````


