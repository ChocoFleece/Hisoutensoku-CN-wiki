import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as u,c as p,b as n,w as o,d as e,a as t}from"./app-DgWOmJ-B.js";const _={},h={class:"hint-container info"},m=t("p",{class:"hint-container-title"},"情况一：无法启动游戏，Dsound Error",-1),g=t("p",null,[e("请检查电脑右下角任务栏音量喇叭如果存在红叉图标，音频设备是否连接正常，"),t("strong",null,[t("mark",null,"声卡驱动")]),e(" 是否正常，电脑能否正常播放声音")],-1),f=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/02/29/65e00037246ed.png",alt:"像这样右下角喇叭红叉，要么是没有插耳机，要么是声卡驱动异常，是无法打开游戏的",width:"300",tabindex:"0",loading:"lazy"}),t("figcaption",null,"像这样右下角喇叭红叉，要么是没有插耳机，要么是声卡驱动异常，是无法打开游戏的")],-1),y=t("p",null,[e("没有耳机或者插耳机也没用的话，可以尝试"),t("strong",null,"安装一个虚拟声卡软件例如 Voicemeeter")],-1),D=t("p",null,"有人也遇到手柄带扬声器，插入后电脑识别为音频设备的原因",-1),v={class:"hint-container important"},S=t("p",{class:"hint-container-title"},"已知的另一种情况是，Win7 系统且电脑声音和声卡正常",-1),T=t("p",null,"建议加我QQ 1434716883 让我看看情况，有新的ModLoader可能修复了问题",-1),x=t("p",null,"根据之前的案例，部分电脑Win7 系统且电脑声音和声卡正常，使用新的mod加载器（d3d9.dll ModLoader）时会发生这种报错",-1),b={href:"https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/d3d9-old.dll",target:"_blank",rel:"noopener noreferrer"},k=t("strong",null,"旧版的mod加载器",-1),F=t("code",null,"d3d9.dll",-1),w=t("p",null,null,-1),A={class:"hint-container info"},L=t("p",{class:"hint-container-title"},"情况二：游戏中途报错DsoundBuffer",-1),B=t("p",null,[e("打开游戏后"),t("strong",null,"不要再次插拔耳机"),e("，非想天则不会自动切换音频输出设备，会崩溃或者依然保持旧设备播放声音")],-1),E=t("strong",null,"DSoundFix 修复插件",-1),M=t("strong",null,"其可修复中途音频设备切换导致的问题",-1),N=t("div",{class:"hint-container warning"},[t("p",{class:"hint-container-title"},"注意"),t("p",null,[e("DSoundFix 修复插件"),t("strong",null,"默认关闭")]),t("p",null,[e("原因是 "),t("strong",null,"“部分电脑”"),e(" 不支持，启用此插件时会由于未知原因而无法打开游戏")]),t("p",null,[t("strong",null,"你如果不知道自己电脑支不支持，推荐你先打开试试看，不支持再关掉即可")])],-1),Q=t("p",null,null,-1);function Z(z,C){const r=i("ExternalLinkIcon"),a=i("RouteLink"),d=i("Tabs");return u(),p("div",null,[n(d,{id:"0",data:[{id:"情况一：无法启动游戏，Dsound Error"},{id:"情况二：游戏中途报错DsoundBuffer"}]},{title0:o(({value:l,isActive:s})=>[e("情况一：无法启动游戏，Dsound Error")]),title1:o(({value:l,isActive:s})=>[e("情况二：游戏中途报错DsoundBuffer")]),tab0:o(({value:l,isActive:s})=>[t("div",h,[m,g,f,y,D,t("div",v,[S,T,x,t("p",null,[e("解决办法是换用"),t("a",b,[k,n(r)]),e("，下载后改名为 "),F,e("，替换进游戏文件夹内")])])]),w]),tab1:o(({value:l,isActive:s})=>[t("div",A,[L,B,t("p",null,[e("可以尝试开启"),n(a,{to:"/mods/QoLMods/DSoundFix.html"},{default:o(()=>[E]),_:1}),e("，"),M]),t("p",null,[n(a,{to:"/mods/WhatsMod.html"},{default:o(()=>[e("如何开关配置mod")]),_:1})]),N]),Q]),_:1})])}const q=c(_,[["render",Z],["__file","DSound.html.vue"]]),I=JSON.parse('{"path":"/FAQ/Failed-to-Start/DSound.html","title":"DSound相关弹窗报错","lang":"zh-CN","frontmatter":{"title":"DSound相关弹窗报错","icon":"circle-info","order":12,"editLink":false,"author":"三回転Tstar","date":"2024-03-21T00:00:00.000Z","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/FAQ/Failed-to-Start/DSound.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/FAQ/Failed-to-Start/DSound.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"DSound相关弹窗报错"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/02/29/65e00037246ed.png =300x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-03T10:28:16.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-03T10:28:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DSound相关弹窗报错\\",\\"image\\":[\\"https://bu.dusays.com/2024/02/29/65e00037246ed.png =300x\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-03T10:28:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1690016709000,"updatedTime":1722680896000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":7}]},"readingTime":{"minutes":1.74,"words":523},"localizedDate":"2024年3月21日","excerpt":"\\n"}');export{q as comp,I as data};
