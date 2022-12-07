---
title: "Jenkins添加html报告并发送到邮箱"
date: 2022-12-06T16:18:30+08:00
tags: ["Jenkins","Linux","Html"]
categories: ["Jenkins","Linux","Html"]
---

### 1、插件安装

```text
1、Manage Jenkins ---> Manage Plugins ---> Available 搜索框输入下面几款插件

2、插件安装以及插件的说明：
    1) HTML Publisher plugin    # 推送生成的html报告到jenkins
    2) Email Extension Plugin   # jenkins配置email的插件
    3) Groovy                   # 让jenkins可以识别css样式
```

PS：[无法安装插件请点击跳转连接进行解决](https://cywhat.cn/Jenkins%E6%8F%92%E4%BB%B6%E6%97%A0%E6%B3%95%E5%AE%89%E8%A3%85%E8%A7%A3%E5%86%B3/)

### 2、jenkins全局配置

```text
Manage Jenkins ---> Configure System 
```

![img_62.png](/img/img62.png)

![img_63.png](/img/img63.png)

### 3、jenkins-job配置

#### 1、添加识别css脚本【构建后】

```bash
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
```

![img_64.png](/img/img64.png)

#### 2、添加并配置email

![img_65.png](/img/img65.png)

``Default Content``里添加**html**模板，模板如下，可以自行修改

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${ENV, var="JOB_NAME"}-自动化测试报告结果</title>
</head>

<body leftmargin="8" marginwidth="0" topmargin="8" marginheight="4"
      offset="0">
<table width="95%" cellpadding="0" cellspacing="0"
       style="font-size: 11pt; font-family: Tahoma, Arial, Helvetica, sans-serif">
    <tr>
        (本邮件由系统自动发出，无需回复！)<br/>
        各位好，以下是${PROJECT_NAME}项目构建信息<br/>
        <td><font color="#CC0000">构建结果 - ${BUILD_STATUS} Tips：如需查看报告需要连接VPN查看噢</font></td>
    </tr>
    <tr>
        <td><br/>
            <b><font color="#0B610B">构建信息 - ${BUILD_STATUS}</font></b>
            <hr size="2" width="100%" align="center"/>
        </td>
    </tr>
    <tr>
        <td>
            <ul>
                <li>项目名称：${PROJECT_NAME}</li>
                <li>构建版本：1.0.0</li>
                <li>触发原因：${CAUSE}</li>
                <li>构建状态：${BUILD_STATUS}</li>
                <li>构建日志：<a href="${BUILD_URL}console">${BUILD_URL}console</a></li>
                <li>项目地址：<a href="${PROJECT_URL}">${PROJECT_URL}</a></li>
                <li>
                    <a href="http://10.150.31.54:9898/job/iot-auto/IOT_e68ea5_e58fa3_e887aa_e58aa8_e58c96_e6b58b_e8af95_e68aa5_e5918a/">查看测试报告</a>
                </li>
            </ul>

            <h4><font color="#0B610B">测试结果</font></h4>
            <hr size="2" width="100%"/>
            <div>
                本次测试共执行<b>${TEST_COUNTS,var="total"}</b>个用例，
                成功<b style="color: green">${TEST_COUNTS,var="pass"}</b>个，
                失败<b style="color: red">${TEST_COUNTS,var="fail"}</b>个，
                跳过<b style="color: #FFEB3B">${TEST_COUNTS,var="skip"}</b>个。
            </div>

            <h4><font color="#0B610B">失败用例</font></h4>
            <hr size="2" width="100%"/>
            $FAILED_TESTS<br/>

            <h4><font color="#0B610B">变更记录</font></h4>
            <hr size="2" width="100%"/>
            <!-- <ul>
            ${CHANGES_SINCE_LAST_SUCCESS,reverse=true,format="%c",changestFormat="%d[%a]%m"}  
            </ul>
             -->变更明细：<a href="${PROJECT_URL}changes">${PROJECT_URL}changes</a><br/>


        </td>
    </tr>

</table>
</body>
</html>

```

#### 4、高级配置解析

![img_66.png](/img/img66.png)

#### 5、配置html推送报告

![img_67.png](/img/img67.png)

![img_68.png](/img/img68.png)

#### 6、配置junit推送报告

**这一条必须配置，如果不配置报告的用例条数无法读取**

![img_69.png](/img/img69.png)


### 4、邮件效果展示

![img_70.png](/img/img70.png)
















