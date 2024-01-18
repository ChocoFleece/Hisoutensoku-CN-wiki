import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as b,o as n,c as l,a as e,d as r,b as o,e as s}from"./app-9P_FlYdU.js";const i={},d=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"功能简介"),e("p",null,"MemoryPatch 默认开启，里面各个详细部分可自己选择"),e("p",null,"打开对应ini文件，会看到各个部分 （th123\\Modules\\MemoryPatch\\MemoryPatch.ini）"),e("p",null,"Enabled=1 为开启"),e("p",null,"Enabled=0 为关闭")],-1),c={class:"hint-container tip"},p=s('<p class="hint-container-title">默认的MemoryPatch.ini内容如下</p><p>[General]<br> Hash=df35d1fbc7b583317adabe8cd9f53b2e<br> ; MD5 检测游戏版本 1.10a</p><p>[AllowMultiInstance]<br> Enabled=1<br> 007FB5C8=B8<br> ; 允许游戏多开</p><p>[AlwaysRandomMusic]<br> Enabled=0<br> 00420A61=BF0000000090<br> ; 总是随机BGM（单机有效）【联机时是由1P开不开来决定，2P开不开不影响】</p><p>[DisableWeatherEffect]<br> Enabled=0<br> 00470619=00<br> ; 禁用天气背景特效（下雨、飘雪、刮风）</p><p>[RemiAnyStageAsHost]<br> Enabled=0<br> 0043F206=EB4B<br> ; 允许蕾咪选择室外地图（联机下1P开启才有效）</p><p>[DisableElevator]<br> Enabled=0<br> 00473613=83C000<br> ; 禁用电梯地图旋转特效</p><p>[CalmMaxHPFix]<br> Enabled=1<br> ; lea eax,[ecx+05]<br> ; add ax,[esi+000004CE]<br> ; mov cx,[esi+00000186]<br> ; cmp ax,cx<br> ; jle th123.exe+88F98<br> ; mov ax,cx<br> ; mov [esi+00000184],ax<br> ; 8 nop<br> 00488F7F=8D4105660386CE040000668B8E860100006639C87E036689C8668986840100009090909090909090<br> ; 修复血量超过一万时无风天气反而掉血的bug</p><p>[FullScreenSoku]<br> Enabled=0<br> 00429581=40EBD7<br> 0042955B=88462EEB24<br> ; 全屏视角，会影响部分招数，需要双方使用</p><p>[NoDamage]<br> Enabled=0<br> 0047B11C=90909090909090<br> ; 锁血 (可以联机使用，额，当然了双方使用)</p><p>[MorePalette]<br> Enabled=0<br> 004223B1=0A<br> ; 可以选择隐藏配色 (联机单方面启用可能会造成配色不同步)</p><p>[GUIBegone]<br> Enabled=0<br> 0047d7a0 = C3<br> ; 隐藏UI，和CharacterInForeground-血条不挡人插件 冲突</p><p>[DisableWeather]<br> Enabled=0<br> ; xorw cx, cx; nop<br> 00482428=6631C9 90<br> ; 禁用天气（功能）【当然了，需要双方使用】</p><p>[FilesystemFirst]<br> Enabled=0<br> 0040d1FB=EB<br> 0040D27A=7491<br> 0040D245=1C<br> 0040D27C=90909090909090<br> ; 快速导入mod文件 th123内新建data文件夹，然后按照解包格式即可，支持cv2，不支持png<br> ; （警告：开启后会严重增加进入对局的加载时间！）</p><p>[FixNum9]<br> Enabled =1<br> 0043DC7D = 0A<br> ; 修复右下角数字9显示问题</p><p>[16bitsColor]<br> Enabled=0<br> ; D3DFORMAT_R5G6B5<br> 0041514D=17<br> ; 16bit配色兼容，基本没人会再遇到的问题吧</p><p>[InputFreedom]<br> Enabled=0<br> ; DISCL_NONEXCLUSIVE|DISCL_BACKGROUND<br> 0040DDA4=0A<br> ; 窗口不在前台时也可以用手柄操控游戏</p><p>[DefaultDenyWatch]<br> Enabled=0<br> ; jmp short xxxxxxxxh<br> 00446E8A=EB16<br> ; push byte 0; mov byte [esi+9], bl; jmp yyyyyyyyh<br> 00446EA2=6A00 885E09 E9E2FFFFFF<br> ; 作为1P时默认不允许观战（2023.7.2已查错修复）</p><p>[DefaultDenyBattle]<br> Enabled=0<br> ; push 0<br> 00448AAE=00<br> ; 作为2P加入时默认不加入对战（而是观战）</p>',19),h=e("br",null,null,-1),E=e("br",null,null,-1),m=e("br",null,null,-1),u=e("br",null,null,-1),_=e("br",null,null,-1),x={href:"https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt",target:"_blank",rel:"noopener noreferrer"},F=e("br",null,null,-1),D=e("br",null,null,-1);function C(y,B){const t=b("ExternalLinkIcon");return n(),l("div",null,[d,e("div",c,[p,e("p",null,[r("; use the gamepad DPad rather than the circle pad"),h,r(" ; warning: try using the DPadFix mod first, only recommended for XInput devices"),E,r(" ; warning: disable DPadFix before enabling this mod, as they conflict with each other"),m,r(" [NativeDPadFix]"),u,r(" Enabled=0"),_,r(" ; technical details: "),e("a",x,[r("https://github.com/delthas/SWRSToys/blob/master/modules/MemoryPatch/NativeDPadFix.txt"),o(t)]),F,r(" 0040A1C7=8B482083CAFF39F97F07897E387515EB0880F90C750601563801563C80F9787506015638897E3C80F9E47505015638EB0980F9BC75088346380183463C0180F950750783463C01897E3880F9287505897E3CEB0880F994750701563C834638018B480490"),D,r(" ; 与DPadFix mod不兼容")])])])}const A=a(i,[["render",C],["__file","MemoryPatch.html.vue"]]);export{A as default};
