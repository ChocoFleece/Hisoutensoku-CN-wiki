---
title: 感觉游戏画面模糊

# 标题
icon: circle-info
# 图标
order: 7
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-07-09
#文章编辑日期
---


::: info 


- 按 Alt + Enter 切换全屏

1、 **请检查 `[修复]【 重置游戏窗口的位置和大小 】.bat` 或 `th123\modules\WindowResizer\WindowResizer.ini` ,建议使用 一倍 两倍 三倍 的整数倍窗口缩放，而不要手动拖拉窗口，否则不规则倍数缩放可能会导致游戏内文字或图片显示模糊等问题**

2、 可以试试右键 `th123.exe`，选择属性，兼容性，勾选 “高DPI缩放替代”，选择 “应用程序”
**不要选择“系统(增强)”，会导致游戏打不开**

![可以试试勾选“高DPI缩放替代”，选择“应用程序”](https://bu.dusays.com/2024/10/26/671cac0b857ea.webp =900x)


3、 游戏本身就是 640*480 的分辨率，游戏本身美术素材就是像素画 ㄟ( ▔, ▔ )ㄏ
同时也可能你的显示屏太大，放大倍数过大当然就糊了

:::

::: details WindowResizer-back-2x.ini
```

; https://wiki.514.live/FAQ/In-Games/Blurred.html
; 感觉游戏画面模糊

[Size]
; 设置为 1 允许调整窗口和自由拖拉窗口（保持比例），设置为 0 不允许调整和拖拉窗口
; 建议使用固定的整数倍窗口缩放，而不要手动拖拉窗口，否则不规则倍数缩放可能会导致游戏内文字或图片显示模糊等问题
Enabled=1

; 一倍窗口 1x
; Width=640
; Height=480

; 两倍窗口 2x
Width=1280
Height=960

; 三倍窗口 3x
; Width=1920
; Height=1440


[Position]
; 设置为 1 表示记忆游戏上次运行时的位置，设置为 0 表示不记忆
Enabled=1
X=1
Y=1

[Bars]
; 设置为 1 表示全屏（无边框全屏，非独占全屏）时两边添加黑边，设置为 0 表示不添加黑边（但是依然是 4:3 比例，不会铺满屏幕）
Enabled=1

```
:::
