import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as r,c as d,a as o,e,b as t,f as i}from"./app-JdZK2Bds.js";const a={},c=i('<div class="hint-container info"><p class="hint-container-title">方式一，SokuLauncher启动器</p><p><strong>在更新器内修改，记得点右上角保存</strong></p><figure><img src="https://bu.dusays.com/2024/01/21/65acec4d9e149.webp" alt="右上角" width="300" tabindex="0" loading="lazy"><figcaption>右上角</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acec60cfc0e.webp" alt="记得点右上角保存" width="300" tabindex="0" loading="lazy"><figcaption>记得点右上角保存</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">方式二，游戏内D菜单</p><p><strong>“12-8 版本”后使用ModLoader（d3d9-loader-debug.dll），则 SWRStoys.ini 作废，而是使用 ModLoaderSettings.json 文件</strong></p><p><strong>主菜单里按D，有修改mod配置的菜单，也有添加新mod的选项</strong></p><figure><img src="https://bu.dusays.com/2024/01/21/65acecd975153.webp" alt="看右上角，主菜单里按D，有修改mod配置的菜单" width="300" tabindex="0" loading="lazy"><figcaption>看右上角，主菜单里按D，有修改mod配置的菜单</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acece85cf42.webp" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">方式三、直接修改配置文件</p><p>若 th123 文件夹内存在 ModLoaderSettings.json 文件，则根据此文件为配置，忽略 SWRSToys.ini 的内容</p><p>若不存在 ModLoaderSettings.json 文件，则根据 SWRSToys.ini 内的文件，生成一份 ModLoaderSettings.json 文件，再根据此文件为配置</p><figure><img src="https://bu.dusays.com/2024/01/31/65ba670fc88a0.png" alt="ModLoaderSettings.json 文件" width="400" tabindex="0" loading="lazy"><figcaption>ModLoaderSettings.json 文件</figcaption></figure></div><div class="hint-container warning"><p class="hint-container-title">不小心搞砸了的话，点击这里就可以恢复默认了</p><figure><img src="https://bu.dusays.com/2024/02/18/65d1d3683f7a8.png" alt="不小心搞砸了的话，点击这里就可以恢复默认了。 【 恢复默认 SWRStoys 配置 】.bat" width="750" tabindex="0" loading="lazy"><figcaption>不小心搞砸了的话，点击这里就可以恢复默认了。 【 恢复默认 SWRStoys 配置 】.bat</figcaption></figure></div><div class="hint-container tip"><p class="hint-container-title">进一步设置mod，自定义按键和开关功能等</p><p>某些插件的ini配置文件内或者游戏内可以进行设置，如自定义热键和开关某些功能<br> 大多数是无需调整的</p><figure><img src="https://bu.dusays.com/2024/01/31/65ba67f4278ce.png" alt="在 modules 文件夹内，各个 mod 的文件夹，有些含有 ini 文件可供设置" width="700" tabindex="0" loading="lazy"><figcaption>在 modules 文件夹内，各个 mod 的文件夹，有些含有 ini 文件可供设置</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/31/65ba67fa51352.png" alt="有些含有 ini 文件可供设置" width="500" tabindex="0" loading="lazy"><figcaption>有些含有 ini 文件可供设置</figcaption></figure></div>',5),p={class:"hint-container info"},u=o("p",{class:"hint-container-title"},"什么是 SWRSToys 插件",-1),h=o("strong",null,"SWRSToys 的 Github 项目仓库",-1),b={href:"https://github.com/SokuDev/SokuMods/",target:"_blank",rel:"noopener noreferrer"},_=o("strong",null,"国际非想天则 Disocrd 社区群（需梯子）",-1),m={href:"https://discord.gg/hisouten",target:"_blank",rel:"noopener noreferrer"},g=o("p",null,[e("我的mod群200803640"),o("br"),e(" 欢迎对mod感兴趣，有疑问需要帮助的朋友。")],-1),f=o("figure",null,[o("img",{src:"https://bu.dusays.com/2024/01/21/65aced2c30715.webp",alt:"三件套组成 SWRSToys",width:"700",tabindex:"0",loading:"lazy"}),o("figcaption",null,"三件套组成 SWRSToys")],-1),y={class:"hint-container details"},S=o("summary",null,"以下是 [1-5] SWRSToys-default.ini 默认 mod 配置的内容",-1),w=o("p",null,[e(";################################################"),o("br"),e(" ; 在每行语句开头加英文分号，代表关闭插件，语句是绿色"),o("br"),e(" ; 在每行语句开头删英文分号，代表启用插件，语句是黑色"),o("br"),e(" ; 若新添加mod，将mod文件放入modules文件夹，并在此添加路径语句"),o("br"),e(" ; 各插件详细信息请看chm手册"),o("br"),e(" ; th123 文件夹内有备份的配置文件")],-1),k=o("br",null,null,-1),M={href:"https://wiki.514.live",target:"_blank",rel:"noopener noreferrer"},v={href:"https://tstar00.github.io",target:"_blank",rel:"noopener noreferrer"},P=o("br",null,null,-1),D=o("p",null,[e("[Module]"),o("br"),e(" ;##### 1、不需要关闭的mod ################################")],-1),R=o("p",null,[e(";Easydeck开启后，可以在网战选人时也能按C来即可修改卡组"),o("br"),e(" EasyDecks=modules/EasyDecks/EasyDecks.dll")],-1),x=o("br",null,null,-1),F=o("br",null,null,-1),L={href:"https://www.bilibili.com/video/BV1L5411a7vK",target:"_blank",rel:"noopener noreferrer"},B=o("br",null,null,-1),I={href:"https://www.bilibili.com/video/BV1wy4y1C77F",target:"_blank",rel:"noopener noreferrer"},C=o("p",null,[e("; 目前只能侦测天气不同步，可单方面使用且正常生效"),o("br"),e(" ; 需要和 giuroll 0.6.14 以上版本一起运行才能生效"),o("br"),e(" ;giuroll_desync_detector=modules/giuroll_desync_detector/giuroll_desync_detector.dll")],-1),T={href:"https://wiki.514.live/FAQ/Play/LobbyGuide.html",target:"_blank",rel:"noopener noreferrer"},V=o("br",null,null,-1),W=o("br",null,null,-1),E={href:"https://wiki.514.live/mods/PracticeMods/PracticeEX.html",target:"_blank",rel:"noopener noreferrer"},N=o("br",null,null,-1),z={href:"https://wiki.514.live/mods/PracticeMods/Labtool.html",target:"_blank",rel:"noopener noreferrer"},O=o("br",null,null,-1),A={href:"https://wiki.514.live/mods/PracticeMods/ReplayInputView_.html",target:"_blank",rel:"noopener noreferrer"},U=o("br",null,null,-1),G=i("<p>;计分插件<br> ScoreTracker=Modules/ScoreTracker/ScoreTracker.dll</p><p>;语言插件，可修改中文、日文、英文版本<br> th123intl=Modules/th123intl/th123intl.dll</p><p>;可以修复更换设备导致需要重开游戏的情况<br> ControlPnP=Modules/ControlPnP/ControlPnP.dll</p><p>;惩罚显示插件，提示出招被打断或者被确反被抓乱动<br> PunishDisplay=Modules/PunishDisplay/PunishDisplay.dll</p><p>;替换游戏资源使用的mod，游戏内主菜单按F2可展开设置，你看到的随机主菜单界面就是它的功劳<br> shady-loader=modules/shady-loader/shady-loader.dll</p><p>;请看它的 ini 配置文件<br> MemoryPatch=modules/MemoryPatch/MemoryPatch.dll</p><p>;修复美铃原236芳波联机时造成不同步的bug<br> FixMeiling236=modules/FixMeiling236/FixMeiling236.dll</p><p>; 修复手柄和摇杆的十字键问题<br> DPadFix=modules/DPadFix/DPadFix.dll</p><p>SokuReplays=modules/SokuReplays/SokuReplays.dll</p><p>UPnPNat=modules/UPnPNat/UPnPNat.dll</p><p>; 简称 AP，UDP打洞直连工具<br> Autopunch=modules/Autopunch/Autopunch.dll</p><p>;修复蕾米莉亚锁链招数数据异常而不同步的问题（Windows环境基本不会发生，Linux环境下非常容易发生），最好双方都启用才能保证效果<br> ChainCFix=modules/ChainCFix/ChainCFix.dll</p>",12),K={href:"https://www.bilibili.com/video/BV1eB4y1f7ML/",target:"_blank",rel:"noopener noreferrer"},j=o("br",null,null,-1),X=i("<p>; SaveRep 0.2.1版本：开启此 mod 时，VS PLAYER 本地对战、网络对战、观战中，在以下情况下可以保存 replay：<br> ; 对方或自己 esc 结束对局，或自己取消观战时<br> ; 不同步导致对局提前结束时<br> ; 网络连接断开时<br> ; 游戏窗口被关闭时<br> ; 游戏崩溃时<br> SaveRep=modules/SaveRep/SaveRep.dll</p><p>;拖拉放大窗口的插件，按alt+enter来全屏，不要去设置里开全屏 （old版没有全屏优化，需要配合AltFullscreen）<br> WindowResizer=modules/WindowResizer/WindowResizer.dll<br> ;WindowResizer-old=modules/WindowResizer/WindowResizer-old.dll</p><p>;双击rep即可播放，右键render to mp4可以把rep快速录制为mp4 （Win7需要用old版，不能使用rep快速录制为mp4的功能）<br> ;ReplayDnD=modules/ReplayDnD/ReplayDnD.dll<br> ReplayDnD-old=modules/ReplayDnD/ReplayDnD-old.dll</p><p>;######################################################</p><p>;##### 2、可选打开的mod ################################</p><p>;血条不挡人插件，但是会遮挡住伤害信息面板<br> CharactersInForeground=modules/CharactersInForeground/CharactersInForeground.dll</p>",6),H={href:"https://wiki.514.live/mods/GameplayMods/SOKU2general.html",target:"_blank",rel:"noopener noreferrer"},Y=o("br",null,null,-1),Q=o("br",null,null,-1),q=o("br",null,null,-1),J=o("p",null,[e(";录比赛视频或者直播用，激活后在OBS内添加浏览器 127.0.0.1，观战和看rep时有效"),o("br"),e(" ;SokuStreaming=Modules/SokuStreaming/SokuStreaming.dll")],-1),Z=o("p",null,[e(";跳过游戏开头动画，若跳过的话进入 VS NETWORK 时需要等待一会儿加载大厅mod"),o("br"),e(" ;SkipIntro=modules/SkipIntro/SkipIntro.dll")],-1),$=o("p",null,[e(";v1.2 将网战模式下按下 Esc 键中断对局改为按住 Esc 键两秒的mod，以避免发生误触而中断对局的意外，只对自己有效（不能防止对面误触，除非对面也装mod）可以单方面使用此mod"),o("br"),e(" ;HoldEscOnline=Modules/HoldEscOnline/HoldEscOnline.dll")],-1),oo=o("p",null,[e(";把卡组从喜怒哀乐四套改成无限套卡组且可以自定义命名和在选人时预览"),o("br"),e(" ;【开启前提前备份卡组，开启后会丢失喜卡组，看说明后再来使用】"),o("br"),e(" ;InfiniteDecks=modules/InfiniteDecks/InfiniteDecks.dll")],-1),eo=o("br",null,null,-1),lo={href:"https://www.bilibili.com/video/BV1eY4y1r7A5/",target:"_blank",rel:"noopener noreferrer"},to=o("br",null,null,-1),io={href:"https://www.bilibili.com/opus/792989024813842456",target:"_blank",rel:"noopener noreferrer"},no=o("br",null,null,-1),so=o("br",null,null,-1),ro=o("br",null,null,-1),ao=i("<p>;修复插拔耳机导致需要重开游戏的情况，但是有些人由于未知原因，开启后会导致游戏打不开，进程假死在初始阶段，所以没有默认开启<br> ;DSoundFix=Modules/DSoundFix/DSoundFix.dll</p><p>;打开后游戏不在焦点时不播放BGM<br> ;NoFocusNoBgm=Modules/NoFocusNoBgm/NoFocusNoBgm.dll</p><p>;替换BGM用的插件，请看chm说明<br> ;BGMChanger=modules/BGMChanger/BGMChanger.dll</p><p>;突破一次性8个角色配色的数量上限并可快速添加自定义配色<br> ;palette-picker=Modules/palette-picker/palette-picker.dll</p><p>;黑名单插件，看chm手册说明<br> ;Blacklist=modules/Blacklist/Blacklist.dll</p><p>;方便换掉网战X入时那个“叮”的声效<br> ;NetBellChanger=modules/NetBellChanger/NetBellChanger.dll</p><p>;可在 Disocrd 桌面端APP上显示游戏具体信息<br> ;DiscordIntegration=modules/DiscordIntegration/DiscordIntegration.dll</p><p>;######################################################</p>",8);function co(po,uo){const l=s("ExternalLinkIcon");return r(),d("div",null,[c,o("div",p,[u,o("p",null,[h,e(),o("a",b,[e("https://github.com/SokuDev/SokuMods/"),t(l)])]),o("p",null,[_,e(),o("a",m,[e("https://discord.gg/hisouten"),t(l)])]),g]),f,o("details",y,[S,w,o("p",null,[e("; 【整合包常见问题速查-实时更新】"),k,e(" ; "),o("a",M,[e("https://wiki.514.live"),t(l)]),e(" 或 "),o("a",v,[e("https://tstar00.github.io"),t(l)]),P,e(" ;################################################")]),D,R,o("p",null,[e(";帧数补丁+网络回滚，是改善联机质量和游戏体验的必要插件 国内默认用62F版本，国外用60F"),x,e(" giuroll=modules/giuroll/giuroll.dll"),F,e(' ;【转载/中文字幕】Core-A分析：格斗游戏"回滚型网络代码"的好处 '),o("a",L,[e("https://www.bilibili.com/video/BV1L5411a7vK"),t(l)]),B,e(" ;【FTG】Code Mystics 解释网络代码：输入延迟 vs. 网络回滚 "),o("a",I,[e("https://www.bilibili.com/video/BV1wy4y1C77F"),t(l)])]),C,o("p",null,[e(";新版的网络大厅mod，按S切换原本联机界面，开启后打网战可计入统计和解锁成就（不必非到大厅里面打网战） "),o("a",T,[e("https://wiki.514.live/FAQ/Play/LobbyGuide.html"),t(l)]),V,e(" SokuLobbiesMod=modules/SokuLobbiesMod/SokuLobbiesMod.dll"),W,e(" ;SokuLobbiesModDebug=modules/SokuLobbiesMod/SokuLobbiesModdebug.dll")]),o("p",null,[e(";新版练习模式相关，详情 "),o("a",E,[e("https://wiki.514.live/mods/PracticeMods/PracticeEX.html"),t(l)]),N,e(" PracticeEx=modules/PracticeEx/PracticeEx.dll")]),o("p",null,[e(";就是那个练习模式蹦出来的黑命令框，可以查看有利不利帧数的功能，大键盘1 2可使角色复位或保存角色位置，详情 "),o("a",z,[e("https://wiki.514.live/mods/PracticeMods/Labtool.html"),t(l)]),O,e(" LabTool=modules/LabTool/LabTool.dll")]),o("p",null,[e(";查看输入指令，判定框，游戏信息等，详情 "),o("a",A,[e("https://wiki.514.live/mods/PracticeMods/ReplayInputView_.html"),t(l)]),U,e(" ReplayInputView+=modules/ReplayInputView/ReplayInputView+.dll")]),G,o("p",null,[e(";使游戏支持 IPV6 联机（且适配大厅mod），可直接复制 IPV6 地址，默认补充端口10800，从剪贴板加入连接即可，详情 "),o("a",K,[e("https://www.bilibili.com/video/BV1eB4y1f7ML/"),t(l)]),j,e(" IPv6MapSokuMod=modules/IPv6MapSokuMod/IPv6MapSokuMod.dll")]),X,o("p",null,[e("; 则2 mod（要额外单独下载 ） 详情 "),o("a",H,[e("https://wiki.514.live/mods/GameplayMods/SOKU2general.html"),t(l)]),Y,e(" ;SOKU2=Modules/SOKU2/SOKU2.dll"),Q,e(" ;MemoryPatchSOKU2FIX=Modules/MemoryPatchSOKU2FIX/MemoryPatchSOKU2FIX.dll"),q,e(" ; 上面两个要保持一起开或者一起关")]),J,Z,$,oo,o("p",null,[e(";TrialMode 是制作连段包和打连段挑战的mod"),eo,e(" ;【非想天则】Trialmode 快速上手 - 编辑与游玩 "),o("a",lo,[e("https://www.bilibili.com/video/BV1eY4y1r7A5/"),t(l)]),to,e(" ;连段包下载（网盘） "),o("a",io,[e("https://www.bilibili.com/opus/792989024813842456"),t(l)]),no,e(" ; 编辑制作推荐用0.5.12版本，游玩推荐用0.6.1版本"),so,e(" ;TrialMode-0.6.1=modules/TrialMode/TrialMode-0.6.1.dll"),ro,e(" ;TrialMode-0.5.12=modules/TrialMode/TrialMode-0.5.12.dll")]),ao])])}const _o=n(a,[["render",co],["__file","WhatsMod.html.vue"]]);export{_o as default};
