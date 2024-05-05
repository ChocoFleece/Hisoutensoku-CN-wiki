import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as p,c as g,a as t,b as o,w as l,d as n,e as s}from"./app-RIOBN3kC.js";const m={},h=t("h2",{id:"原版练习模式功能",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#原版练习模式功能"},[t("span",null,"原版练习模式功能")])],-1),F={class:"hint-container info"},b=t("p",{class:"hint-container-title"},"原版练习模式功能",-1),v=t("ul",null,[t("li",null,[t("strong",null,"F1 木桩减 1000 血（满血10000）")]),t("li",null,[t("strong",null,"F2 卡槽补满")]),t("li",null,[t("strong",null,"F3 卡槽清空且卡组重置为20张卡")]),t("li",null,[t("strong",null,"木桩的卡组是你 1P 自己机签的卡组"),n("（原版是 2P 机签的卡组）")])],-1),_={class:"hint-container warning"},k=t("p",{class:"hint-container-title"},"按F1、F2、F3这些键都没有效果可能是因为Fn Lock问题",-1),f=t("p",null,[n("部分"),t("strong",null,"笔记本键盘"),n("按热键无效的话，请检查是否有"),t("strong",null,"Fn锁定")],-1),y={href:"https://www.baidu.com/s?ie=UTF-8&wd=Fn%E9%94%81%E5%AE%9A",target:"_blank",rel:"noopener noreferrer"},E=t("strong",null,"百度搜索“Fn锁定”",-1),A=t("p",null,"一般按 Fn+ESC 或者 Fn+空格 可以解除锁定，或者按 Fn+F2，Fn+F3 来使用热键",-1),P=s('<h2 id="practiceex" tabindex="-1"><a class="header-anchor" href="#practiceex"><span>PracticeEX</span></a></h2><div class="hint-container info"><p class="hint-container-title">PracticeEX 默认快捷键</p><p><strong>可以看到“快捷键设置”，你可以在那个页面查看和修改各个热键</strong></p><ul><li>默认按 <code>ESC</code> 或<code>“机签的暂停键”</code>调出高级菜单</li></ul><figure><img src="https://bu.dusays.com/2024/02/29/65e0a4e773202.png" alt="默认按  或调出高级菜单" width="400" tabindex="0" loading="lazy"><figcaption>默认按 <code>ESC</code> 或<code>“机签的暂停键”</code>调出高级菜单</figcaption></figure><ul><li>默认是按 <code>HOME</code> 键录制动作</li><li>按 <code>INSERT</code> 键播放动作</li><li>按 <code>DELETE</code> 键新建一个空白动作并切换过去</li><li>按 <code>PAGE UP</code> 键切换下一个动作</li><li>也可以在<code>“录制的动作”</code>这一页中上下选择然后按 <code>确认键（体术攻击键？默认是 Z）</code> 来切换到那个动作</li></ul><figure><img src="https://bu.dusays.com/2024/02/02/65bd0d6f4b3c6.png" alt="默认按 ESC 可以打开高级练习模式菜单，可以看到“快捷键设置”，你可以在那个页面查看和修改各个热键" width="450" tabindex="0" loading="lazy"><figcaption>默认按 ESC 可以打开高级练习模式菜单，可以看到“快捷键设置”，你可以在那个页面查看和修改各个热键</figcaption></figure></div><div class="hint-container tip"><p class="hint-container-title">给木桩录制动作和播放</p><p>一般情况下，右上角没有指示或者是显示黑色背景的“就绪”</p><p>黑色“就绪”时，按 <strong>录制动作键（HOME）</strong>，右上角会显示黄色背景的“控制木桩中”，就可以开始控制木桩的角色<br> 黑色“就绪”时，或者切换到想要的动作按<strong>播放动作键（INSERT）</strong>，右上角变为绿色，并且木桩开始执行动作</p><p>黄色“控制木桩中”时，再按 <strong>录制动作键（HOME）</strong>，右上角就会变成红色“录制中”并开始记录时间（帧数）和按键；<br> 黄色“控制木桩中”时，按 <strong>播放动作键（INSERT）</strong>，就会取消控制木桩，返回黑色背景“就绪”控制 1P 角色</p><p>红色“录制中”时，按 <strong>录制动作键（HOME）</strong>，就会<strong>结束录制并保存覆盖</strong>，返回黑色背景“就绪”控制 1P 角色<br> 红色“录制中”时，按 <strong>播放动作键（INSERT）</strong>，会结束录制<strong>不保存</strong>，并返回【黄色“控制木桩中”】，方便录制失误时重新录制动作</p><figure><img src="https://bu.dusays.com/2024/02/02/65bd100e0750a.png" alt="可以在“录制的动作”这一页中上下选择然后按 确认键（体术攻击键？默认是 Z） 来切换到那个动作" width="450" tabindex="0" loading="lazy"><figcaption>可以在“录制的动作”这一页中上下选择然后按 确认键（体术攻击键？默认是 Z） 来切换到那个动作</figcaption></figure></div><div class="hint-container warning"><p class="hint-container-title">BUG 注意</p><ul><li><p><strong>注意在录制木桩动作操作2P的时候，不要按F7</strong><br><strong>F5、F6、F7在原本练习模式中就是用来给手柄2P录制重播动作的，F5开始录制 F6结束录制 F7播放动作，所以在用插件录制时按F7会导致无法移动，此时按F5或F6即可恢复</strong></p></li><li><p><s><code>不要设置随机空中受身 Random Airtech，会让游戏崩溃</code></s> <strong>练习模式汉化 2.1.1 版本已修复 “空中受身为Random随机时崩溃” 的 BUG，可以正常使用随机受身了</strong></p></li><li><p><strong>木桩设置一直大跳或者一直做某些动作，而无法进入空闲待机状态时，木桩不会回复血量。</strong><br><strong><code>【解决办法：此时可以让木桩在浮空时按大键盘2保存木桩位置，然后再按1恢复位置，可以让木桩落地前处于待机状态而回血】</code></strong></p></li><li><p><strong>偶尔会出现右上角有控制栏但是却调不出菜单的情况，重开游戏</strong></p></li><li><p><strong>偶尔会出现菜单卡住，然后过一会儿恢复，按的按键一次性全出来的情况，忍受一下</strong></p></li><li><p><strong>不要既设置防御时DD又设置防御后执行动作（如灵击、4A等），否则会在防御瞬间触发DD又触发动作</strong></p></li></ul></div><div class="hint-container info"><p class="hint-container-title">使用技巧 - 逐帧操作</p><figure><img src="https://bu.dusays.com/2024/02/29/65e0a4e773202.png" alt="默认按  或调出高级菜单" width="400" tabindex="0" loading="lazy"><figcaption>默认按 <code>ESC</code> 或<code>“机签的暂停键”</code>调出高级菜单</figcaption></figure><p><strong>把 开关菜单键(默认 ESC) 改为其他按键，或者按“机签的暂停键”，就可以在 F11 暂停逐帧的同时，调出练习菜单来设置</strong></p><p>比如你用妖梦 AAA 6A打木桩防御，你想让木桩在 6A 之前的那个缝里做动作，而不想在 AAA 这个缝里做动作，两个缝都是 1F 的缝，也没法设置木桩延迟<br> 这个时候就可以先设置木桩不执行任何动作，然后按 AAA，木桩防御第三下A时，按 F11 暂停，然后按自己修改的开关菜单键就可以在暂停时打开菜单，给木桩设置最速升龙或 44 等动作，在关掉菜单，按 F12 下一帧或者按 F11 取消暂停，即可实现目标了</p><p><strong>此外这样做也可以在 ESC 时调出原版菜单，方便快速返回主菜单</strong></p></div>',5),x={class:"hint-container tip"},w=t("p",{class:"hint-container-title"},"使用技巧 - 录制木桩最速执行动作（如升龙等）",-1),M=t("p",null,[t("strong",null,"自带的那个 “防御后执行动作” 会有点问题，做用卡和执行动作会慢 1F ；"),t("br"),t("strong",null,"此时我们想要最速，可以使用防御时刷键的方法：")],-1),T=t("p",null,[t("strong",null,"就是切换到 “防御时执行动作”，并搭配木桩延迟，可以实现模拟防御后刷键预输入的情景，通过预输入我们就可以让木桩最速了")],-1),D={href:"https://www.bilibili.com/video/BV11p4y177Ng/",target:"_blank",rel:"noopener noreferrer"},B=t("strong",null,"配套教程视频 传送门： 【非想天则】新则 - 练习模式 EX - 让木桩最速出招的录制技巧",-1),L=t("p",null,"操作方法举例 —— 录制 5A 或者 用卡：",-1),C=t("ol",null,[t("li",null,[n("按 "),t("mark",null,"录制热键（默认是 HOME）"),n(" 切换到操控木桩模式，此时右上角显示"),t("mark",null,"黄条")]),t("li",null,[n("按 "),t("mark",null,"F11"),n(" 暂停，然后按 "),t("mark",null,"录制热键（默认是 HOME）"),n("，然后右上角显示"),t("mark",null,"红条")]),t("li",null,[n("按住 A 或者 "),t("code",null,"用卡键"),n("，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧")]),t("li",null,[n("按 "),t("mark",null,"F11"),n(" 取消暂停，不要按键，差不多走到十几帧的时候就可以再按一次 "),t("mark",null,"录制热键（默认是 HOME）"),n("，就是结束录制并保存")]),t("li",null,[n("按 "),t("mark",null,"播放热键"),n(" 让它播放一次看看，一般是没问题的")]),t("li",null,[n("在 "),t("mark",null,"木桩触发设置菜单"),n("里，选择 "),t("mark",null,"地面防御后 -> 动作"),n("，Delay 设置为 "),t("mark",null,[t("strong",null,"0F")])])],-1),O=t("p",null,"操作方法举例 —— 录制 623B：",-1),S=t("ol",null,[t("li",null,[n("按 "),t("mark",null,"录制热键（默认是 HOME）"),n(" 切换到操控木桩模式，此时右上角显示"),t("mark",null,"黄条")]),t("li",null,[n("按 "),t("mark",null,"F11"),n(" 暂停，然后按 "),t("mark",null,"录制热键（默认是 HOME）"),n("，然后右上角显示"),t("mark",null,"红条")]),t("li",null,[n("按住 6，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧")]),t("li",null,[n("按住 2，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧")]),t("li",null,[n("按住 3 和 B，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧 "),t("code",null,"（或者3 和 B 分开，这样需要录四帧，下面的 Delay 值也要调到 4F）")]),t("li",null,[n("按 "),t("mark",null,"F11"),n(" 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 "),t("mark",null,"录制热键（默认是 HOME）"),n("，就是结束并保存录制了")]),t("li",null,[n("按 "),t("mark",null,"播放热键"),n(" 让它播放一次看看，一般是没问题的")]),t("li",null,[n("在 "),t("mark",null,"木桩触发设置菜单"),n("里，选择 "),t("mark",null,"地面防御后 -> 动作"),n("，Delay 设置为 "),t("mark",null,[t("strong",null,"3F")])])],-1),q=t("p",null,"操作方法举例 —— 录制 DA(66A)：",-1),H=t("ol",null,[t("li",null,[n("按 "),t("mark",null,"录制热键（默认是 HOME）"),n(" 切换到操控木桩模式，此时右上角显示"),t("mark",null,"黄条")]),t("li",null,[n("按 "),t("mark",null,"F11"),n(" 暂停，然后按 "),t("mark",null,"录制热键（默认是 HOME）"),n("，然后右上角显示"),t("mark",null,"红条")]),t("li",null,[n("按住 6，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧")]),t("li",null,[t("strong",null,"什么都不按"),n("，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧")]),t("li",null,[n("按住 6 和 A，然后在此基础上，按 "),t("mark",null,"F12"),n(" 下一帧")]),t("li",null,[n("按 "),t("mark",null,"F11"),n(" 取消暂停，不要按键，差不多走到 十几F 的时候就可以再按一次 "),t("mark",null,"录制热键（默认是 HOME）"),n("，就是结束并保存录制了")]),t("li",null,[n("按 "),t("mark",null,"播放热键"),n(" 让它播放一次看看，一般是没问题的")]),t("li",null,[n("在 "),t("mark",null,"木桩触发设置菜单"),n("里，选择 "),t("mark",null,"地面防御后 -> 动作"),n("，Delay 设置为 "),t("mark",null,[t("strong",null,"3F")])])],-1),N=s('<h2 id="labtool" tabindex="-1"><a class="header-anchor" href="#labtool"><span>Labtool</span></a></h2><figure><img src="https://bu.dusays.com/2024/01/21/65aceba6bc3b4.webp" alt="" width="600" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="hint-container info"><p class="hint-container-title">Labtool说明，注意这些热键都是大键盘上的数字</p><ol><li><p><strong>按 1 可恢复双方位置</strong><br> 控制 1P 时，<mark>按住 “← ↙ ↓ ↘ →” 这五个方向的同时，再按 1</mark>，就可以将自己和木桩一起瞬移至五等份点位置，非常方便<br> （注意，角色被某些招式和击飞或演出时复位会出现角色卡住的情况）</p></li><li><p><strong>按 2 可记录双方当前位置</strong>，练习连段和微调位置(逐帧走路卡距离)等用非常方便！<br> （最好不要在角色非静止时保存位置）</p></li><li><p><strong>按 4 可将 1P 的必杀恢复为初始默认状态</strong></p></li><li><p><strong>按 5 可启用状态颜色显示</strong>（可被康状态红色，擦弹状态透明，硬直状态紫色，无敌状态蓝色）</p></li></ol><div class="hint-container tip"><p class="hint-container-title">黑框内信息举例说明</p><ul><li><strong>没显示Gap说明是无缝或是缝太大</strong></li><li><code>Gap：0F</code> 表示 1P的两次攻击之间有 1F 缝，非无缝 <code>（以0为1，以此类推）</code></li><li><code>P1 is +5F</code> 表示 1P有利 5F，最速出手7F招中间有2F缝</li><li><code>P1 is -6F</code> 表示 1P不利 6F，可被6F的招确反</li><li><code>P1 is [+24F]</code> 表示 1P大跳取消后有利 24F</li></ul></div><div class="hint-container caution"><p class="hint-container-title">警告</p><ul><li><p><strong>注意不要点窗口右上角的X关掉这个LabTool的程序框，他是和游戏程序共生的。<br>你点了X游戏也会被关掉，你不想看它可以点最小化，或者关掉 Labtool 这个 mod</strong></p></li><li><p><strong>若有时候切回游戏发现莫名卡住操作不了，<br>很有可能是因为 LabTool 的控制台窗口的”属性“里开启了“快速编辑模式”，<br>然后你选中了窗口出现光标闪烁，会导致窗口不能刷新显示新的文字，游戏就会卡住等待<br>【解决办法】：右键取消光标选中，在标题栏右键-属性-关闭快速编辑模式，即可恢复正常</strong></p></li></ul></div></div><h2 id="replayinputview" tabindex="-1"><a class="header-anchor" href="#replayinputview"><span>ReplayInputView</span></a></h2><figure><img src="https://bu.dusays.com/2024/01/21/65acec0c1ddb1.webp" alt="F6 数据含义" width="600" tabindex="0" loading="lazy"><figcaption>F6 数据含义</figcaption></figure><div class="hint-container info"><p class="hint-container-title">使用说明</p><p><strong>单机和观战下才能使用，网战中不能使用</strong></p><ul><li><mark>F4</mark> 显示 <strong>判定框</strong> 以及 <strong>受身时间条</strong></li><li><mark>F6</mark> 显示帧数、位置、速度等<strong>信息</strong></li><li><mark>F7</mark> 显示<strong>按键输入</strong>（继续按F7可以调整布局；观战下按键识别有点小瑕疵，需要花点耐心调整）</li><li><mark>F9</mark> 让游戏速度变慢，50F，40F，35F，30F，15F，10F，5F</li><li><mark>F10</mark> 让游戏速度变快，</li><li><mark>F11</mark> 暂停，<strong>F12</strong>下一帧（<strong>逐帧操作</strong>） <mark>（不要在观战时按）</mark></li><li><mark><strong>绿框是受击判定</strong></mark>，绿框变蓝色代表此时<strong>可被康</strong>，绿框变空心代表此时有体术无敌状态（不一定是完全无敌，也不是所有无敌状况都会- 空心显示）</li><li><mark><strong>红框是攻击判定</strong></mark>（某些招数或者弹幕会有判定残留显示或者假判定）</li><li><mark><strong>黄框是占位判定</strong></mark>（相当于投技的受击判定）</li></ul></div>',6),R={class:"hint-container tip"},z=t("p",{class:"hint-container-title"},"如何逐帧输入指令",-1),Z=t("p",null,[t("strong",null,"在暂停状态下，按住某个键再按F12即可逐帧输入按键（注意三键冲突，可能会导致按不下去F12）")],-1),I=t("p",null,[n("先按住 6 不松，再按下 F12 下一帧"),t("br"),n(" 接着按住 2 不松，再按下 F12 下一帧"),t("br"),n(" 随后按住 3 以及 B 不松，再按下 F12 下一帧（若冲突键位了可按住 3 下一帧再按 B 下一帧）")],-1),V=t("p",null,[n("先按住 2 不松，再按下 F12 下一帧"),t("br"),n(" 接着什么都不按，再按下 F12 下一帧"),t("br"),n(" 随后按住 2 以及 B 不松，再按下 F12 下一帧")],-1),X=s(`<div class="hint-container caution"><p class="hint-container-title">警告</p><p><strong>不要在开启 giuroll 的同时，在“观战”或“观看 Rep”时打开 F6，其与 giuroll 共存时触发内存泄漏 bug，会使游戏崩溃</strong></p></div><details class="hint-container details"><summary>关于&quot;1hst&quot;和&quot;2hst&quot;这个值</summary><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>hst 是 hit state 的 缩写，暂时只知道触发和变化的规律，并不知道有什么实际意义

&quot;1hst&quot;和&quot;2hst&quot;值变化规律：
- 游戏初始状态为“0”；
- 变成“0”的条件：开始出招；体术挥空；进入防御（但是破防和挨打不变）；
- 变成“1”的条件：体术命中；成功丢出弹幕；青蛙成功遁地；
- 变成“2”的条件：对手防御了自己的体术；
- 一些例外情况，尤其是SC，如：青蛙四卡蛙狩，启动时会置0，但是后续无论如何也不会变成1或2；

青蛙L姿水蛙神不能取消的Bug：
当&quot;1hst&quot;或&quot;2hst&quot;值为“0”的时候，1P或2P青蛙L姿（荷叶）214改水蛙神炸弹就不能跳跃取消或者出招取消，为“1”或“2”时可正常取消
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="另一个mod-可联机的练习模式-advancedpracticemode" tabindex="-1"><a class="header-anchor" href="#另一个mod-可联机的练习模式-advancedpracticemode"><span>另一个MOD-可联机的练习模式-AdvancedPracticeMode</span></a></h2>`,3),G={class:"hint-container info"},U=t("p",{class:"hint-container-title"},"相关信息",-1),j=t("strong",null,"可联机的练习模式 - AdvancedPracticeMode",-1);function J(K,Q){const r=a("ExternalLinkIcon"),c=a("Tabs"),d=a("RouteLink");return p(),g("div",null,[h,t("div",F,[b,v,t("div",_,[k,f,t("p",null,[t("a",y,[E,o(r)])]),A])]),P,t("div",x,[w,M,T,t("p",null,[t("a",D,[B,o(r)])]),o(c,{id:"162",data:[{id:"情况一：最速 5A、用卡 等（需要一帧输入）"},{id:"情况二：最速 623 或 236 等（需要三帧输入）"},{id:"情况三：最速 DA DB DC 等（需要三帧输入）"}]},{title0:l(({value:i,isActive:e})=>[n("情况一：最速 5A、用卡 等（需要一帧输入）")]),title1:l(({value:i,isActive:e})=>[n("情况二：最速 623 或 236 等（需要三帧输入）")]),title2:l(({value:i,isActive:e})=>[n("情况三：最速 DA DB DC 等（需要三帧输入）")]),tab0:l(({value:i,isActive:e})=>[L,C]),tab1:l(({value:i,isActive:e})=>[O,S]),tab2:l(({value:i,isActive:e})=>[q,H]),_:1})]),N,t("div",R,[z,Z,o(c,{id:"431",data:[{id:"例如逐帧输入623B时"},{id:"逐帧输入22B时"}]},{title0:l(({value:i,isActive:e})=>[n("例如逐帧输入623B时")]),title1:l(({value:i,isActive:e})=>[n("逐帧输入22B时")]),tab0:l(({value:i,isActive:e})=>[I]),tab1:l(({value:i,isActive:e})=>[V]),_:1})]),X,t("div",G,[U,t("p",null,[o(d,{to:"/mods/AdvancedMods/AdvancedPracticeMode.html"},{default:l(()=>[j]),_:1})])])])}const $=u(m,[["render",J],["__file","PracticeMods.html.vue"]]),tt=JSON.parse('{"path":"/mods/PracticeMods.html","title":"练习模式Mod使用说明","lang":"zh-CN","frontmatter":{"title":"练习模式Mod使用说明","icon":"fa-solid fa-lightbulb","order":2,"editLink":false,"author":"三回転Tstar","date":"2023-12-08T00:00:00.000Z","description":"原版练习模式功能 原版练习模式功能 F1 木桩减 1000 血（满血10000） F2 卡槽补满 F3 卡槽清空且卡组重置为20张卡 木桩的卡组是你 1P 自己机签的卡组（原版是 2P 机签的卡组） 按F1、F2、F3这些键都没有效果可能是因为Fn Lock问题 部分笔记本键盘按热键无效的话，请检查是否有Fn锁定 百度搜索“Fn锁定” 一般按 Fn+E...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/PracticeMods.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"练习模式Mod使用说明"}],["meta",{"property":"og:description","content":"原版练习模式功能 原版练习模式功能 F1 木桩减 1000 血（满血10000） F2 卡槽补满 F3 卡槽清空且卡组重置为20张卡 木桩的卡组是你 1P 自己机签的卡组（原版是 2P 机签的卡组） 按F1、F2、F3这些键都没有效果可能是因为Fn Lock问题 部分笔记本键盘按热键无效的话，请检查是否有Fn锁定 百度搜索“Fn锁定” 一般按 Fn+E..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/02/29/65e0a4e773202.png =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-12T12:57:39.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-12-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-12T12:57:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"练习模式Mod使用说明\\",\\"image\\":[\\"https://bu.dusays.com/2024/02/29/65e0a4e773202.png =400x\\",\\"https://bu.dusays.com/2024/02/02/65bd0d6f4b3c6.png =450x\\",\\"https://bu.dusays.com/2024/02/02/65bd100e0750a.png =450x\\",\\"https://bu.dusays.com/2024/02/29/65e0a4e773202.png =400x\\",\\"https://bu.dusays.com/2024/01/21/65aceba6bc3b4.webp =600x\\",\\"https://bu.dusays.com/2024/01/21/65acec0c1ddb1.webp =600x\\",\\"https://bu.dusays.com/2023/10/30/653e91c4c5846.png =640x\\"],\\"datePublished\\":\\"2023-12-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-12T12:57:39.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[{"level":2,"title":"原版练习模式功能","slug":"原版练习模式功能","link":"#原版练习模式功能","children":[]},{"level":2,"title":"PracticeEX","slug":"practiceex","link":"#practiceex","children":[]},{"level":2,"title":"Labtool","slug":"labtool","link":"#labtool","children":[]},{"level":2,"title":"ReplayInputView","slug":"replayinputview","link":"#replayinputview","children":[]},{"level":2,"title":"另一个MOD-可联机的练习模式-AdvancedPracticeMode","slug":"另一个mod-可联机的练习模式-advancedpracticemode","link":"#另一个mod-可联机的练习模式-advancedpracticemode","children":[]}],"git":{"createdTime":1702125519000,"updatedTime":1712926659000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":29}]},"readingTime":{"minutes":11.26,"words":3378},"filePathRelative":"mods/PracticeMods.md","localizedDate":"2023年12月8日","autoDesc":true,"excerpt":"<h2>原版练习模式功能</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">原版练习模式功能</p>\\n<ul>\\n<li><strong>F1 木桩减 1000 血（满血10000）</strong></li>\\n<li><strong>F2 卡槽补满</strong></li>\\n<li><strong>F3 卡槽清空且卡组重置为20张卡</strong></li>\\n<li><strong>木桩的卡组是你 1P 自己机签的卡组</strong>（原版是 2P 机签的卡组）</li>\\n</ul>\\n<div class=\\"hint-container warning\\">\\n<p class=\\"hint-container-title\\">按F1、F2、F3这些键都没有效果可能是因为Fn Lock问题</p>\\n<p>部分<strong>笔记本键盘</strong>按热键无效的话，请检查是否有<strong>Fn锁定</strong></p>\\n<p><a href=\\"https://www.baidu.com/s?ie=UTF-8&amp;wd=Fn%E9%94%81%E5%AE%9A\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>百度搜索“Fn锁定”</strong></a></p>\\n<p>一般按 Fn+ESC 或者 Fn+空格 可以解除锁定，或者按 Fn+F2，Fn+F3 来使用热键</p>\\n</div>\\n</div>"}');export{$ as comp,tt as data};
