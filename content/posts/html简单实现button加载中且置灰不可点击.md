---
title: html简单实现button加载中且置灰不可点击 
date: 2021-09-09 11:26:12 
draft: false
tags: ["Html","JS"]
categories: ["Html"]
---

## 简单js几行代码实现点击按钮,实现加载中，且置灰不可点击

### 1.html部分

```html

<button id="Submit" type="button"
        class="btn btn-rounded btn-primary mb-6" value="获取验证码">
</button>
```

### 2.JS部分
```javascript
function ClickBtnSms() {
    $('#Submit').click(function () {
        //按钮校验，disable = true不可点击 val里面的内容替换成你想实现的加载中/loading...等
        $('#Submit').val('加载中...').prop('disabled', true);
        $.ajax({
            url: "url", 
            type: "GET",
            data: {data: data},
            dataType: "JSON", // 将服务端返回的数据反序列化为字典
            success: function (res) {
                if (res.status) {
                    //这里放拿到res状态想要执行的函数
                } else {
                    //如果报错，需要恢复获取验证码的按钮
                    $('#Submit').val('获取验证码').prop('disabled', false);
                }
            }
        })
    })
}
```
