import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as u,c as _,b as e,w as o,e as t,a as n}from"./app-oeiWhlCw.js";const h={},p={class:"hint-container info"},m=n("p",{class:"hint-container-title"},"情况一：无法启动游戏，Dsound Error",-1),f=n("p",null,[t("请检查电脑右下角任务栏音量喇叭如果存在红叉图标，音频设备是否连接正常，"),n("strong",null,[n("mark",null,"声卡驱动")]),t(" 是否正常，电脑能否正常播放声音")],-1),g=n("figure",null,[n("img",{src:"https://bu.dusays.com/2024/02/29/65e00037246ed.png",alt:"像这样右下角喇叭红叉，要么是没有插耳机，要么是声卡驱动异常，是无法打开游戏的",width:"300",tabindex:"0",loading:"lazy"}),n("figcaption",null,"像这样右下角喇叭红叉，要么是没有插耳机，要么是声卡驱动异常，是无法打开游戏的")],-1),v=n("p",null,[t("没有耳机或者插耳机也没用的话，可以尝试"),n("strong",null,"安装一个虚拟声卡软件例如 Voicemeeter")],-1),x={class:"hint-container important"},D=n("p",{class:"hint-container-title"},"已知的另一种情况是，Win7 系统且电脑声音和声卡正常",-1),k=n("p",null,"Win7 系统且电脑声音和声卡正常，使用新的mod加载器（d3d9.dll ModLoader）时会发生这种报错",-1),b={href:"https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/d3d9-old.dll",target:"_blank",rel:"noopener noreferrer"},B=n("strong",null,"旧版的mod加载器",-1),E=n("code",null,"d3d9.dll",-1),L=n("p",null,null,-1),S={class:"hint-container info"},w=n("p",{class:"hint-container-title"},"情况二：游戏中途报错DsoundBuffer",-1),A=n("p",null,[t("打开游戏后"),n("strong",null,"不要再次插拔耳机"),t("，非想天则不会自动切换音频输出设备，会崩溃或者依然保持旧设备播放声音")],-1),M=n("strong",null,"DSoundFix 修复插件",-1),V=n("strong",null,"其可修复中途音频设备切换导致的问题",-1),F=n("div",{class:"hint-container warning"},[n("p",{class:"hint-container-title"},"注意"),n("p",null,[t("DSoundFix 修复插件"),n("strong",null,"默认关闭")]),n("p",null,[t("原因是 "),n("strong",null,"“部分电脑”"),t(" 不支持，启用此插件时会由于未知原因而无法打开游戏")]),n("p",null,[n("strong",null,"你如果不知道自己电脑支不支持，推荐你先打开试试看，不支持再关掉即可")])],-1),N=n("p",null,null,-1);function T(W,y){const c=i("ExternalLinkIcon"),d=i("RouterLink"),r=i("Tabs");return u(),_("div",null,[e(r,{id:"0",data:[{id:"情况一：无法启动游戏，Dsound Error"},{id:"情况二：游戏中途报错DsoundBuffer"}]},{title0:o(({value:s,isActive:l})=>[t("情况一：无法启动游戏，Dsound Error")]),title1:o(({value:s,isActive:l})=>[t("情况二：游戏中途报错DsoundBuffer")]),tab0:o(({value:s,isActive:l})=>[n("div",p,[m,f,g,v,n("div",x,[D,k,n("p",null,[t("解决办法是换用"),n("a",b,[B,e(c)]),t("，下载后改名为 "),E,t("，替换进游戏文件夹内")])])]),L]),tab1:o(({value:s,isActive:l})=>[n("div",S,[w,A,n("p",null,[t("可以尝试开启"),e(d,{to:"/mods/QoLMods/DSoundFix.html"},{default:o(()=>[M]),_:1}),t("，"),V]),n("p",null,[e(d,{to:"/mods/WhatsMod.html"},{default:o(()=>[t("如何开关配置mod")]),_:1})]),F]),N]),_:1})])}const I=a(h,[["render",T],["__file","DSound.html.vue"]]);export{I as default};
