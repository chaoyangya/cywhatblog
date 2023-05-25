---
title: "Python创建并上传自己的pip依赖包"
date: 2023-05-25T17:42:27+08:00
draft: false
tags: ["Pip","Django"]
categories: ["Pip","Django"]
---

### 1、前景
写工具的过程中，发现`if-else`用的很频繁，如果条件很多的时候，传统的`if-else`不但不美观，而且效率低，网上参考了`edgedb`的思路后，秉承着前人栽树后人乘凉的原则于是封装了优化`if-else`的函数，并且萌生了上传到`pypi`用来服务大家


### 2、注册Pypi

[点我注册Pypi](https://pypi.org/account/register/)

![img77.png](/img/img77.png)


### 3、创建github项目

[点我注册github](https://github.com/new)


#### 3.1、下载项目
```bash
git clone https://github.com/chaoyangya/conditionevaluatortool.git   # 这里的conditionevaluatortool替换为新建的工程名称
```

#### 3.2、创建必要工程目录

```
conditionevaluatortool          
├── /conditionevaluator/
│  ├── __init__.py
│  ├── conditionevaluator.py
├── /test/
│  ├── __init__.py
│  ├── test.py
├── README.md
└── setup.py
```

#### 3.3、工程目录详解
```python
# 工程名称
conditionevaluatortool

# pip_name模块名称文件夹
/conditionevaluator/

# 引入模块
__init__.py

# pip_name模块名称的函数文件
conditionevaluator.py

# 占位
/test/

# 模块设置
setup.py

# 阅读文件
README.md
```

#### 3.4、模块设置文件
```python
import setuptools
import pathlib

here = pathlib.Path(__file__).parent.resolve()
long_description = (here / "README.md").read_text(encoding="utf-8")

setuptools.setup(
    # 模块名(pip install conditionevaluator)
    name="conditionevaluator",
    # 版本
    version="1.0.1",
    # 作者
    author="cy what",
    # 邮箱
    author_email="45204307@qq.com",
    # 描述
    description="Package of modules that encapsulate the if else multi-condition judgment",
    # 长描述
    long_description=long_description,
    # 长描述格式
    long_description_content_type="text/markdown",
    # github地址
    url="https://github.com/chaoyangya/conditionevaluator",
    # 安装的包
    packages = ['conditionevaluator'],
    # License
    license="conditionevaluator",
    classifiers=[
        "Development Status :: 3 - Alpha",
        "Intended Audience :: Developers",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Programming Language :: Python :: 3 :: Only",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",

    ],
    # 搜索词
    keywords="conditionevaluator, conditionevaluator_python",
)
```

### 4、编译
#### 4.1、编译
```bash
python3 setup.py build
```

#### 4.2、生成发版的压缩包
```bash
# 压缩
python3 setup.py sdist
```

### 5、发布到Pypi
```bash
# 安装依赖
pip3 install twine

# 发布
twine upload dist/*

#输入账号密码即可
```

### 6、更新Pypi包
```bash
# 1、修改版本号

# 2、重新编译打包
python3 setup.py sdist bdist

# 3、发布
twine upload dist/xxx.tar.gz    # xxx.tar.gz为最新压缩后的包名
```


### 7、验证
![img78.png](/img/img78.png)

#### 7.1、安装
```bash
# 安装
pip install conditionevaluator
```

#### 7.2、使用
```python
# 引入
from conditionevaluator.conditionevaluator import conditionevaluator

# 使用
@conditionevaluator
def doorType(door):
    """
    条件1
    :param door: 门类型  2  --> 双开门
    :return: bool
    """
    return "门类型错误"


@doorType.register(1)
def params_door_type_1(door):
    """
    条件2
    :param door:
    :return: False
    """
    count = 1
    return count
```


### 8、conditionevaluator使用教程
- [Pypi](https://pypi.org/project/conditionevaluator/1.0.1/)
- [GitHub](https://github.com/chaoyangya/conditionevaluator)




