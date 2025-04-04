---
title: 连段试炼-Trialmode

# 标题
icon: circle-info
# 图标
order: 10
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2023-12-01
#文章编辑日期
---

## Trialmode简介
::: info 功能简介

- ==Trialmode 默认关闭，请手动打开== [**如何开关配置mod**](/mods/WhatsMod.html)

- TrialMode 是制作连段包和打连段试炼的 mod，**主菜单原本 Result 的位置替换为了 Trial**

- **从主菜单选择 Trial，进入菜单后，最底部有导航栏，已有汉化**

- 装了较多连段包的话，进入 Trial 时卡一会是正常的，在加载

- [**非想天则Trialmode 快速上手 - 编辑与游玩**](https://www.bilibili.com/video/BV1eY4y1r7A5/)

- 若游玩时发现无法重新观看演示，是因为制作者使用了“第二种录制模式”而导致的 Bug，可以返回菜单重进或者查看 gif 演示

::: tip 连段包下载
[**网盘里可以下载连段包**](/about/)

**连段包的压缩包下载完毕后，将其中包含的文件夹拖到 `th123\Modules\TrialMode\packs` 内，注意不要多包了一层文件夹**

提示Soku2 is missing的连段包，其中某些关卡需要下载并开启则2才可以启用特殊角色
:::

## 连段包编辑教程
::: info

`(待填坑，我会做个视频，示范一下从零开始做一个连段包)`

- `Trialmode排版工具 by 鱼的千千.exe` 可在[网盘的连段包文件夹](/about/)内下载

- ==做完连段包后，准备打包发给别人之前，记得删掉`.backup`文件和`score.dat`文件==

:::

### 手动编辑（微调）格式

:::: details 手动编辑（微调）格式

::: info 有两种记录模式


一是记录字面，按照字面重播（可编辑字面来改变重播）,记录得笨，但是可以编辑，而且文件小（2kb）

二是记录按键，按照按键重播（编辑字面不改变重播），记录得精准，但是不可再编辑，而且连段越长文件越大（6kb以上）

所以没有设置说两种选项随便用，而是强制迫不得已才使用第二种模式，来减小文件大小，省的打包太大，加载太慢
:::






Type Combo连段编辑语法：

|           英语           |        中文         |
| :----------------------: | :-----------------: |
|           J5A            |       空中JA        |
|         66A/B/C          |       DA/B/C        |
|         HJ7/8/9          |      7/8/9大跳      |
|       Flight, J6D        |       空中6D        |
|           J6D2           |       空中6D2       |
|         DASH, 6D         |       地面6D        |
|           6D8            |       地面6D8       |
| 5A 5AA 5AAA 5AAAA 5AAAAA | Dial-A、近A（连打） |
|            4A            |         4A          |
|            2A            |         2A          |
|           F5A            |         远A         |
|            1A            |   1A（妖梦专属）    |
|           f2A            |  远2A（妖梦专属）   |

`<br>` 是换行符，用于简介描述中

- 不需要手动换行，可以用鱼的千千做的排版工具，可在[网盘的连段包文件夹](/about/)内下载

`/` 表示或的意思，可以并列招数，作为连段组件变体

`6a:5` 冒号后的数字表示延迟多少帧

`6a[15]` 方括号表示蓄力按住多少帧

`!j5a` 感叹号表示可选，忽略或任意的步骤

`d214` d表示default，原214

`a1623 a2623` a表示alt，改卡1号623，改卡2号623

`sc203`  203号SC（不同角色不同）


::::

### ①基础篇

- 旧视频： [非想天则Trialmode 快速上手-编辑与游玩](https://www.bilibili.com/video/BV1eY4y1r7A5/)

- [连段包制作教程 ①基础篇 Trialmode非想天则Mod](https://www.bilibili.com/video/BV1nybUeuE9Q/)
:::: details ①基础篇


编辑建议使用0.5版本
游玩建议使用0.6版本

按D进入编辑模式
按C创建新连段包
==注意：机签名不能带中文，否则创建连段包时会报错==
输入名称，不可中文
下面有操作提示

名称改一下
把前面的路径删掉

可以选择外部文件
我这里展示
选择个内部文件

按A创建新连段
第二项输入combo
下面有操作提示

选择角色，卡组中
每个SC都塞一个就行
根据连段调整位置

系统设置
耗卡量建议改为1

中文版BGM乱码了
可以选择外部音乐文件

系统设置
连段设置
打完后设置合格标准
简单连段可自动获取

其他设置
隐藏HUD方便录制gif

方向键右 →
可编辑连段信息
简介可打中文

按C复制连段
输入新的连段名
连段名不能带中文
也不能带非法字符
否则无法创建

重点！修改书面连段
注意下面的操作提示
按C是标记可选
就是不管做没做都行
一般6D和飞翔为可选
按Z直接编辑，斜杠
添加连段组件变体

回到手操界面
自己打下变体连段
打完了有音效即OK




::::

### ②基础篇
- [连段包制作教程 ②基础篇 Trialmode非想天则Mod](https://www.bilibili.com/video/BV1SLb9eYEe7/)
::: details ②基础篇
按C给大跳标记为可选

直接手动编辑连段
添加连段组件变体
皆有格式要求
如 d22b a122b
a2623b f5a 等
详细请查看文档

将JA标记为可选
作为“妥协连”

可以将最次的连段
记为C级的合格标准

自己打一遍验证
有慢放和音效说明OK

这里我复制一个3-1
来表示版中距离较远时
接不上JA
直接J6A的情况
所以有时可以忽略JA

录制连断失误了
直接按ESC重新即可

把HJ9大跳标记为可选
你往哪个方向跳都一样

编辑 AAA/F5A 组件变体
直接手动选择 编辑连段
检查伤害和HIT数
以及Limit等，修改标准
然后验证修改合理


:::

### ③微调进阶篇
- [连段包制作教程 ③微调进阶篇 Trialmode非想天则Mod](https://www.bilibili.com/video/BV1j1bYepEAB/)
::: details ③微调进阶篇
目前版本对飞翔判定等
有点问题 近期不会修复
这篇视频来演示一个
常见案例和解决思路

调下位置
录个J2A康连段
然后看它的回放

录完了 看第一遍回放
发现第一遍他接不上
于是他进入第二种模式
就是不按照书面，而是
直接读取了我们的按键
所以不支持继续微调
而且游玩模式下有BUG
不能重看演示
顺便展示下为什么
我们要标记这些为可选

游玩模式下我们连段
成功了 但是却没通过
就是因为没有按照
书面上指定的行动
而后面招数就不被识别
所以给这些标记可选
就能避免其死板不通过

回到编辑模式
我们重新录制连段
在第一遍失败前按ESC
打断即可留在第一种模式
否则会进入第二种模式
演示一下微调的思路
我们是J6D后放帧接JA
但是录制时没有放帧
所以我们给JA加个延迟
同时尝试缩短J6D持续
观察结果微调即可

再次返回游玩模式
验证一下刚才的微调
OK完美 怎么连都行
只要连上就能过
不存在连上不给过情况

再看一篇很早前录的
一个小爱的带飞翔连段
可以再结合刚才的示例
理解一下微调的思路

:::



## 0.5版本编辑模式已知BUG
::: caution 0.5版本编辑模式已知BUG

- 【不确定】开着`CharactersInForeground` mod的时候去设置卡组会频发随机性崩溃

![开着`CharactersInForeground` mod的时候去设置卡组会频发随机性崩溃](https://bu.dusays.com/2024/10/26/671ca6c521a67.webp =300x)

- 编辑连段时的输入框，部分人或部分时候用鼠标互动可能会发生卡死无响应

![](https://bu.dusays.com/2024/10/26/671ca6c523b4e.webp =300x)

:::

