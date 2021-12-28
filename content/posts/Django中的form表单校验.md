---
title: Django中的form表单校验 
date: 2021-09-24 18:20:37 
draft: false
tags: ["Django"] 
categories: ["Django"] 
---

**前景：**

``我在使用django的form组件时，发现在view函数中的`form.is_valid()`在form表单校验未通过的情况下，返回的仍然是True，最后发现还是form表单的问题，异常函数并没有传递给view函数``

### 问题代码：

```python
form部分


def clean_email(self):
    """
    邮箱校验
    :return:
    """
    email_title = "验证码"
    code = random.randrange(1000, 9999)
    context = {
        'code': str(code)
    }
    email_template_name = 'tools_email.html'
    t = loader.get_template(email_template_name)
    html_content = t.render(context)
    email = self.cleaned_data['email']
    msg = EmailMessage(email_title,  
                       html_content,  
                       settings.EMAIL_FROM,  
                       [email]
                       )
    msg.content_subtype = 'html'
    exists = models.UserInfo.objects.filter(email=email).exists()
    if not exists:
        return ValidationError('邮箱未注册')   #注意就是这个异常函数ValidationError，没有将异常传给view
    send_status = msg.send()
    if not send_status:
        self.add_error("email", '发送邮箱失败,{}'.format(send_status['errmsg']))
    conn = get_redis_connection()
    conn.set(email, code, ex=120)
    return email
```

```python
view部分

def send_sms(request):
    form = SendEmailSmsForm(request, data=request.POST)
    if form.is_valid():     #这里接收form传过来的异常，如果有异常则返回false，反之true
        return JsonResponse({'status': True})
    return JsonResponse({'status': False, 'error': form.errors})
```


### 原因：

``我也不知道为什么 ValidationError 为什么没有把异常抛给view 更换另一个抛出异常的函数即可``


### 解决：
```python
return ValidationError('邮箱未注册')   #改为


self.add_error("email", "邮箱未注册")   # email为异常参数的field "邮箱未注册" 为报错文案

```
