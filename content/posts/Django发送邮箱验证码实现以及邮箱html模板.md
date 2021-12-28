---
title: Django发送邮箱验证码实现以及邮箱html模板
date: 2021-09-08 14:40:18
draft: false
tags: ["Django","Html"]
categories: ["Django"]
---

### 1.setting配置
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = "smtp.163.com"  # 服务器
EMAIL_PORT = 25  # 一般情况下都为25
EMAIL_HOST_USER = "xxxx@163.com"  # 账号
EMAIL_HOST_PASSWORD = "XXXXXXXXXXXX"  # 密码 (注意：这里的密码指的是授权码)
EMAIL_USE_TLS = False  # 一般都为False
EMAIL_FROM = "xxxx@163.com"  # 邮箱来自 一般和邮箱账号保持一致
```

### 2.邮箱配置
```python
#登录邮箱-设置-POP3/SMTP/IMAP,开启服务，保存授权码，切记要保存，授权码就是密码
如图:
```

![img20](/img/img20.png)


### 3.代码部分
```python
from django.core.mail import EmailMessage
from django.template import loader


def clean_email(self):
    email_title = "验证码" 
    
    #这里是生成随机验证码 我是4位的，可以自定义
    code = random.randrange(1000, 9999)   
    
    #这个context这里定义的字段，是要给html模板中的验证码使用的，HTML中{% code %}引用即可
    context = {
        'code': str(code)
    }
    
    #这里的html文件就是发送验证码部分的html模板我放在下面
    email_template_name = 'tools_email.html'     
    t = loader.get_template(email_template_name)
    
    #发送html验证码到邮箱有三种方式，我觉得这种最方便，其他自行百度
    html_content = t.render(context)
    email = self.cleaned_data['email']
    
    #判断邮箱是否存在
    exists = models.UserInfo.objects.filter(email=email).exists()
    if exists:
        msg = EmailMessage(email_title,  # 邮件主题
                           html_content,  # 邮件内容，使用html模板
                           settings.EMAIL_FROM,  # 用于发送邮件的用户
                           [email]  # 接收邮件的用户列表
                           )
        
        #指定邮箱发送的类型
        msg.content_subtype = 'html'
        
        #发送邮箱
        send_status = msg.send()
        if not send_status:
            return ValidationError('发生邮箱失败,{}'.format(send_status['errmsg']))
        
        #放到redis中，有效时长2min
        conn = get_redis_connection()
        conn.set(email, code, ex=120)
        return email
    return ValidationError('邮箱未注册')
```


### 4.html模板
```html
{% load static %}
<head>
    <meta charset="utf-8">
    <base target="_blank"/>
    <style type="text/css">::-webkit-scrollbar {
        display: none;
    }</style>
    <style id="cloudAttachStyle" type="text/css">#divNeteaseBigAttach, #divNeteaseBigAttach_bak {
        display: none;
    }</style>
    <style id="blockquoteStyle" type="text/css">blockquote {
        display: none;
    }</style>
    <style type="text/css">
        body {
            font-size: 14px;
            font-family: arial, verdana, sans-serif;
            line-height: 1.666;
            padding: 0;
            margin: 0;
            overflow: auto;
            white-space: normal;
            word-wrap: break-word;
            min-height: 100px
        }

        td, input, button, select, body {
            font-family: Helvetica, 'Microsoft Yahei', verdana
        }

        pre {
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
            width: 95%
        }

        th, td {
            font-family: arial, verdana, sans-serif;
            line-height: 1.666
        }

        img {
            border: 0
        }

        header, footer, section, aside, article, nav, hgroup, figure, figcaption {
            display: block
        }

        blockquote {
            margin-right: 0px
        }
    </style>
</head>

<body tabindex="0" role="listitem">
<table width="700" border="0" align="center" cellspacing="0" style="width:700px;">
    <tbody>
    <tr>
        <td>
            <div style="width:700px;margin:0 auto;border-bottom:1px solid #ccc;margin-bottom:30px;">
                <table border="0" cellpadding="0" cellspacing="0" width="700" height="39"
                       style="font:12px Tahoma, Arial, 宋体;">
                    <tbody>
                    <tr>
                        <td width="210"></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div style="width:680px;padding:0 10px;margin:0 auto;">
                <div style="line-height:1.5;font-size:14px;margin-bottom:25px;color:#4d4d4d;">
                    <strong style="display:block;margin-bottom:15px;">尊敬的用户，您好：<span
                            style="color:#f60;font-size: 16px;"></span></strong>
                    <strong style="display:block;margin-bottom:15px;">
                        您正在进行<span style="color: red">修改密码</span>操作，请在验证码输入框中输入：<span
                            style="color:#f60;font-size: 24px">{{ code }}</span>，以完成操作。
                    </strong>
                </div>
                <div style="margin-bottom:30px;">
                    <small style="display:block;margin-bottom:20px;font-size:12px;">
                        <p style="color:#747474;">
                            注意：验证码2分钟有效，此操作可能会修改您的密码。如非本人操作，请及时登录并修改密码以保证帐户安全
                            <br>（工作人员不会向你索取此验证码，请勿泄漏！)
                        </p>
                    </small>
                </div>
            </div>

            <div style="width:700px;margin:0 auto;">
                <div style="padding:10px 10px 0;border-top:1px solid #ccc;color:#747474;margin-bottom:20px;line-height:1.3em;font-size:12px;">
                    <p>此为系统邮件，请勿回复<br>
                        请保管好您的邮箱，避免账号被他人盗用
                    </p>
                    <p>XXXXXXX QA团队</p>
                </div>
            </div>
        </td>
    </tr>
    </tbody>
</table>
</body>

{% block js %}{% endblock %}
```

### 5.效果图如下：

![img19](/img/img19.png)
