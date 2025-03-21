---
title: 如何线下联机打则
# 标题
icon: circle-info
# 图标
order: 3
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-08-01
#文章编辑日期
---

## 线下联机视频教程

::: info 线下联机视频教程

[**【⑨都能看懂的线下非想天则联机教程-哔哩哔哩】**](https://www.bilibili.com/video/BV1QU411d7P8)

:::
::: caution 注意，线下联机进入 NETWORK 后，按 S 键退出大厅界面切换回原版菜单


![注意，线下联机进入 NETWORK 后，按 S 键退出大厅界面切换回原版菜单](https://bu.dusays.com/2024/01/21/65acb556e19fb.webp =600x)

:::




## 图文教程，线下联机三种方式


::: details 如果连不上的话，试试关掉 Windows 防火墙，或者换对方建主
::: important 如果连不上的话，试试关掉 Windows 防火墙，或者换对方建主

![关闭防火墙](https://bu.dusays.com/2024/01/21/65acbef5331e0.webp =900x)

:::

::: info 如何线下联机打则

::: tabs
<!-- @tab 方法一：通过网线直连两台电脑玩游戏
::: tip 方法一：通过网线直连两台电脑玩游戏

- 首先使用网线直接互联两台电脑
- 按 `Win+R` 输入 `ncpa.cpl` 回车 
- 找到`以太网`，右键-属性-双击 `Internet协议版本4`，把自动获取IP地址改成手动设置，并设置IP地址

- A 电脑当 2P，设置 IP 地址 `192.168.1.100`，网关和DNS可以不设置
- B 电脑当 1P，设置 IP 地址 `192.168.1.101`，网关和DNS可以不设置
- **注意：A 和 B 的 IP 地址前三个数字要相同，但是最后第四个数字不能相同**
- 如果连不上的话，==试试关掉 **Windows 防火墙**，或者**换对方建主**==

> [!caution]
> **结束本地联机后，记得 ==改回“自动获取 IP”，否则会无法联网==**

![手动设置 IP](https://bu.dusays.com/2024/01/21/65acbc2fa7e61.webp =800x)

![默认就写好了 192.168.1.101 了，A电脑直接连接这个IP和B电脑联机](https://bu.dusays.com/2024/07/28/66a5d7cdb883e.png =500x)
 -->

 @tab 方法一：通过网线直连两台电脑玩游戏
::: tip 方法一：通过网线直连两台电脑玩游戏

1. 首先使用网线直接互联两台电脑

2. 网线连接后，查看 ipconfig，应该会看到以太网显示 169 打头的 IP，一台电脑不显示默认网关，一台电脑会有默认网关

3. 以不显示“默认网关”的那台机子为1P，就叫他A电脑，它来建主。假设A电脑就是如图所示的 `169.254.100.144`

4. 现在我们的B电脑就是有显示“默认网关”，来当2P。随便打开一个输入框比如文件夹的地址栏，把A电脑的IP地址 `169.254.100.144:10800` 手敲上去然后复制，进IP，而不要在游戏里使用那个密码锁连接IP。

5. 如果进不去，尝试用B电脑建主，用A电脑进B电脑的IP。还不行那就检查是不是找错了位置，要找“以太网”。

![网线连接后，查看 ipconfig，应该会看到以太网显示 169 打头的 IP，一台电脑会有默认网关，一台电脑不显示默认网关](https://bu.dusays.com/2024/10/26/671caa6161761.webp =600x)

![以太网，也叫本地连接](https://bu.dusays.com/2024/10/26/671caa614d79e.webp =600x)


![不要使用图中这个密码锁一个个调，效率太低  👆](https://bu.dusays.com/2024/10/26/671c9c9780941.webp =600x)

@tab 方法二：通过路由器/手机热点连接两台电脑玩游戏
::: tip 方法二：通过路由器/手机热点连接两台电脑玩游戏

通过同一个 **路由器** 或 **WIFI** 或 **手机热点** 连接两台电脑，确保两台电脑处于同一个局域网内（有线无线都可以）

- 分别在两台电脑上 `Win+R` 输入 `cmd`

- 在黑框内输入 `ipconfig`，查看对应网络`（以太网适配器）`下的 `IPv4 地址`

- **检查双方的 ==默认网关== 是否相同，相同才是属于同一局域网内**

- 尝试 `ping 对方电脑的 IPv4 地址`，ping 通说明 OK。

![ipconfig 查看本机IP](https://bu.dusays.com/2024/01/21/65acbede3a8ff.webp =600x)


例如：
若 A电脑的 IP 显示为 `192.168.100.101` 使用默认 `10800` 端口建立主机，那么 B电脑就可以使用 `192.168.100.101:10800` 来连接 A电脑
- ==如果连不上的话，检查默认网关，是不是输入了错误的IP地址，以太网，或者WIFI无线适配器，试试关掉 **Windows 防火墙**，或者换对方建主==

@tab 方法三：在一台电脑上用两个键盘玩游戏
::: tip 方法三：在一台电脑上用两个键盘玩游戏

使用软件 **Keyboard Splitter**（将第二个键盘虚拟成手柄，或者你本身就有手柄） 

- **注意要给模拟键盘玩家的机签 Profile 重新设置键位。**

- [**软件下载链接（汉化版 by 鱼的千千，内含使用说明）**](https://www.123pan.com/s/scmzVv-EnA6v.html) | [**Keyboard Splitter原Github地址**](https://github.com/djlastnight/KeyboardSplitterXbox/)

- 详细的还可以看我 [**2V2 说明里的部分**](https://docs.qq.com/aio/p/sckx6x9a9t2qquv)

![KeyboardSplitter 模拟键盘使用方法.gif](https://bu.dusays.com/2024/04/05/660f77d6974cf.gif =400x)

> 使用说明和参考：
> [《格斗游戏本地键盘双人，多个键盘分别模拟多个控制器，KeyboardSplitter 软件使用演示 Keyboard Splitter Xbox](https://www.bilibili.com/video/BV1hT411h7uw/)
> [《Touhou How To : Multiplayer with 2 keyboards on same PC》](https://www.youtube.com/watch?v=_hvoFs_amT8)
:::