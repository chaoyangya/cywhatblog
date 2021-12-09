---
title: "Raid磁盘阵列"
date: 2021-11-18T10:01:24+08:00
draft: false
tags: ["Linux"]
categories: ["Linux","Raid"]
---

### 1.什么是Raid
{{< admonition type=tip title="什么是Raid" open=true >}}
Raid 是英文(Redundant Array of Independent Disks)的缩写，翻译成中文是“独立磁盘冗余阵列”, 简称磁盘阵列（Disk Array）。
简单的说，RAID是一种把多块独立的硬盘（物理硬盘）按不同的方式组合起来形成一个硬盘组（逻辑硬盘），从而提供比单个硬盘更高的存储性能和提供数据备份技术。
组成磁盘阵列的不同方式称为RAID级别（RAID Levels），现在已拥有了从 RAID 0 到 6 七种基本的RAID 级别。另外，还有一些基本RAID级别的组合形式，如RAID 10（RAID 0与RAID 1的组合）等等.
{{< /admonition >}}


### 2.Raid的特点
{{< admonition type=tip title="Raid的特点" open=true >}}
1.速度

2.安全
{{< /admonition >}}


### 3.Raid的几种模式
#### Raid 0(性能最佳)
Raid 0 把多块物理硬盘设备（至少两块）通过硬件或软件的方式串联在一起，组成一个大的卷组，并将数据一次写入到各个物理硬盘中。这样硬盘设备的读写性能会提升数倍，但是若任意一块硬盘发生故障将导致整个系统的数据都受到破坏。

    个人俗解：2块硬盘，将数据均分成`俩份`，每块磁盘存`半份`

{{< admonition type=tip title="`Raid 0`的特点" open=true >}}
1.使用`N`块硬盘，获得`N`倍性能，但`N>=2`

2.不允许磁盘损坏，任何一块磁盘损坏，即无法使用。
{{< /admonition >}}

![img.png](/img/img26.png)
#### Raid 1(最安全)
Raid 1 将数据备份到每块磁盘中，使用空间相当于一块硬盘的容量，但是数据再每块硬盘中备份，相对安全性较高

    个人俗解：2块硬盘，每块硬盘存`整份`数据，且相互备份

{{< admonition type=tip title="`Raid 1`的特点" open=true >}}
1.使用`N`块硬盘，备份`N`份数据，且`N>=2` 硬盘使用率为 `(N/100)%`，较为浪费资源，但安全性为`N`。

2.允许磁盘损坏
{{< /admonition >}}

![img.png](/img/img27.png)

#### Raid 5(性能和安全 55开)
Raid 5 把多块硬盘设备（至少三块）的数据奇偶校验信息保存到其他硬盘设备中。
Raid 5 磁盘阵列组中数据的奇偶校验信息并不是单独保存到某一块硬盘设备中，而是存储到除自身以外的其他每一块硬盘设备上，这样的好处是其中任何一设备损坏后不至于出现致命缺陷；

    个人俗解：3块硬盘，每块硬盘分`3`份，存`2`份数据，`1`份校验，且互相为奇偶

{{< admonition type=tip title="`Raid 5`的特点" open=true >}}
1.使用`N`块硬盘，备份`N`份数据，且`N>=3` 硬盘使用率为 `(N-1/N)%`，较为浪费资源，但安全性为`N`。

2.允许磁盘损坏且仅能坏`1`块
{{< /admonition >}}

![img.png](/img/img28.png)


#### Raid 10(性能和安全 55开)
Raid 10 是Raid1 + Raid 0技术的一个组合体。如下图，Raid 10 技术需要至少四块硬盘来组建，其中先分别两两制作成Raid 1磁盘阵列，以保证数据的安全性；然后再对两个Raid 1磁盘阵列实施Raid 0技术，进一步提高硬盘设备的读写速度。这样子从理论上讲，只要坏的不是同一组中的所有硬盘，那么最多可以损坏50%的硬盘设备而不丢失数据。Raid 10技术继承了Raid 0的高读写速度和Raid 1的数据安全性。
    个人俗解：4块硬盘，每`2`块硬盘分`1`份数据，组合成 Raid 1，俩个Raid 1 再组合成Raid 0

{{< admonition type=tip title="`Raid 10`的特点" open=true >}}
1.使用`N`块硬盘，备份`N`份数据，且`N>=4` 硬盘使用率为 `(50)%`，较为浪费资源，但安全性为`N`。

2.允许一组Raid 磁盘损坏且仅能坏`1`块
{{< /admonition >}}

![img.png](/img/img29.png)

### 4.Raid容错对比图

![img.png](/img/img30.png)