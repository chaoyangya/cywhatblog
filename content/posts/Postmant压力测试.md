---
title: Postmant压力测试
date: 2019-03-28 18:16:00
draft: false
tags: ["Postman"]
categories: ["Postman"]
---

Postman请自行下载

下面是在网上随便抓了一个请求地址来做演示，把请求地址填入地址栏，此请求为GET请求。点击Send发送请求，请求结果将会在下方显示出来。每次的请求历史数据，会被记录下来，但是经常使用的请求，还是保存一下，这么每次用的时候，选择就行了，及其方便。

另外，最好创建一个账号，这样数据将会永久保存下来，不至于重装了系统或者换了台电脑数据都没了的尴尬。
![](https://img-blog.csdnimg.cn/img_convert/3fea11cd00cc15c65ffa0d8b20d86677.png)


保存的时候起个好听的名字
![](https://img-blog.csdnimg.cn/img_convert/93990e6ee3e367ae2cf87a9116a26bdd.png)


Header会传输一些我们需要的一些通用的数据，定义好之后，每个接口几乎都是一样的。所以，把这些数据进行预置，这样就不用每新建一个请求，都要重复的添加Header了。

请求的时候，会把请求状态，请求的时间，以及返回的数据大小返回回来。这样一目了然。最常见的status就是200表示成功，400表示未找到资源。500开头的基本都是服务端异常等等。我之前写了一篇很详细的状态说明，请参见[HTTP状态码大全](https://cywhat.cn/2019/03/07/http%E5%90%84%E4%B8%AAstatus-code%E4%BB%A3%E8%A1%A8%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D/)
![](https://img-blog.csdnimg.cn/img_convert/21001692b3f24989dd93c7370f6c0fe9.png)

![](https://img-blog.csdnimg.cn/img_convert/1ee94aec5573735267fb282f90377d93.png)


点击params可以把url里的参数以列表的形式展现出来，方便编写
![](https://img-blog.csdnimg.cn/img_convert/ea54d62217323e9b20b0d03b28306f3e.png)


还有一种更方便的编辑方式，点击Bulk Edit ，直接修改字符串的方式修改，而且可以复制粘贴，方便迁移到其它地方。而且这个功能在其它参数编辑的地方都适用。
![](https://img-blog.csdnimg.cn/img_convert/ce04535d4f95cd16f1c858a42a7724b3.png)


我们来看看如何发送POST接口
![](https://img-blog.csdnimg.cn/img_convert/50e16c6c51ccd922142639c8bc06e7c9.png)


form-data、x-www-form-urlencoded、raw、binary的区别

x-www-form-urlencoded

当用户通过form表单提交数据的时候，例如：

    <form method="post"action="http://api.test.com/user" >
     <inputtype="text" name="name">
     <inputtype="text" name="age">
    </form>
提交时会向服务器端发出这样的数据（已经去除部分不相关的头信息），数据如下：

    POST /user HTTP/1.1
    Content-Type:application/x-www-form-urlencoded
    Accept-Encoding: gzip, deflate
    Host: api.test.com
    Content-Length: 21
    Connection: Keep-Alive
    Cache-Control: no-cache
    name=互扯程序&age=18

它的Content-Type是application/x-www-form-urlencoded，这表示消息内容会经过URL编码

form-data

当需要上传文件（可以上传多个文件），并且有参数同时传递的时候，选择这个选项可以上传文件。

举个例子

    <form method="post"action="http://api.test.com/user/upload.do" enctype=”multipart/form-data”>
    <inputtype="text" name="desc">
    <inputtype="file" name="pic">
    </form>
浏览器将会发送以下数据：

    POST /user/upload.do HTTP/1.1
    Accept-Language: zh-cn,zh;q=0.5
    Accept-Charset: GBK,utf-8;q=0.7,*;q=0.7
    Connection: keep-alive
    Content-Length: 60408
    Content-Type:multipart/form-data; boundary=ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
    Host: api.test.com
我们看到Content-Type:multipart/form-data;

当需要上传数据的时候，必须设置enctype=“multipart/form-data”，

enctype：规定在发送到服务器之前应该如何对表单数据进行编码，他有如下的三个值：

1. application/x-www-form-urlencoded。默认的编码方式。所有字符都会进行编码（空格转换为 "+" 加号，特殊符号转换为 ASCII HEX 值）。

2. multipart/form-data 。 指定传输数据为二进制类型，比如图片、mp3、文件。 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。

3. text/plain。纯文体的传输。空格转换为 “+” 加号，但不对特殊字符编码。

其实form表单在你不写enctype属性时，也默认为其添加了enctype属性值，默认值是enctype="application/x- www-form-urlencoded"，所以上面注册用户的时候虽然没写，其实默认加上了。

raw

当需要给服务端传递json，xml等数据的时候选择raw，当选择了raw的时候，header里会自动加上

Content-Type: application/json

例如：

    $.ajax({
        url:"/user/",
        data:JSON.stringify(user),
         method:"POST",
         contentType:"application/json",
         success: function(res){
            console.info("添加成功")
        }
    });
![](https://img-blog.csdnimg.cn/img_convert/bb7480fa9fc9f24c23f6d9be8029e579.png)

binary（注意了这个格式这里可以上传你的压测数据文件）

PS：压测文件可以是csv格式跟json格式的

这里还可以在Pre-requestScript"中设置环境变量 "username", "password",在Body 中选取"form-data" 格式，输入所需的key-value, value即为变量{{username}}, {{password}}。

    postman.setEnvironmentVariable("username",data["username"]);
    postman.setEnvironmentVariable("password",data["password"]);

然后再Tests里添加断言

    tests["Status code is 200"] = responseCode.code === 200;
    tests["Response time is less than 10000ms"] = responseTime < 10000;
    console.log(responseTime);

只能上传一个文件，也不能添加参数。
![](https://img-blog.csdnimg.cn/img_convert/6c381a1e9ae7b4a4c0c44e6e95059f97.png)


压力测试

当你需要验证你的接口的抗压能力的时候，可以点击Runner，进行压力测试
![](https://img-blog.csdnimg.cn/img_convert/c0d4f4547adb0e3cdc15e54704abf20a.png)


注意：压力测试只能以文件夹的方式执行多个接口，不能单独执行，如果想要测试某一个接口，就创一个文件夹，这个文件夹里只有一个要测试的接口。
![](https://img-blog.csdnimg.cn/img_convert/59da6db4f53379ce7f7d72a91ff303c1.png)


点击执行，并发执行了500次。每次再100毫秒内返回结果。
![](https://img-blog.csdnimg.cn/img_convert/d5a05c7b0316c18fd005f72ed4a16f63.png)

