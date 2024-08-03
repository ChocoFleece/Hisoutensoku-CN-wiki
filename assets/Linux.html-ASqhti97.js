import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as s,c as l,a as e,d as t,b as r,e as o}from"./app-BH2ZeLxR.js";const d={},c={class:"hint-container info"},h=e("p",{class:"hint-container-title"},"From ask-help channel pins",-1),p={href:"https://discord.com/channels/167593473854144512/282570000705912842/1141596048943489145",target:"_blank",rel:"noopener noreferrer"},u=e("br",null,null,-1),m={href:"https://ptb.discord.com/channels/167593473854144512/282570000705912842/968484014522511381",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),_=e("br",null,null,-1),b={href:"https://ptb.discord.com/channels/167593473854144512/282570000705912842/828267328570654740",target:"_blank",rel:"noopener noreferrer"},f=e("br",null,null,-1),x=e("br",null,null,-1),w={href:"https://ptb.discord.com/channels/167593473854144512/282570000705912842/1144336327622537308",target:"_blank",rel:"noopener noreferrer"},y=e("br",null,null,-1),k=e("p",null,"本篇内容是关于如何在 GNU/Linux 使用 wine 运行非想天则及相关程序的。",-1),v=e("h1",{id:"安装-wine-并运行带-mod-的非想天则-包括新则",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-wine-并运行带-mod-的非想天则-包括新则"},[e("span",null,"安装 Wine 并运行带 Mod 的非想天则（包括新则）")])],-1),E=e("p",null,"Wine 是类 Unix 系统上运行 Windows 程序的兼容层。",-1),S={href:"https://wiki.winehq.org/Debian",target:"_blank",rel:"noopener noreferrer"},C={href:"https://wiki.winehq.org/Fedora",target:"_blank",rel:"noopener noreferrer"},L={href:"https://wiki.winehq.org/Ubuntu",target:"_blank",rel:"noopener noreferrer"},W={href:"https://github.com/lutris/lutris",target:"_blank",rel:"noopener noreferrer"},B=o(`<p>运行 <code>winecfg</code>，在函数库（<code>Libraries</code>）选项卡中添加 <code>d3d9.dll</code> 的配置，设为“原装先于内建”（native, builtin），之后在非想天则目录里运行 <code>wine th123.exe</code> 就可以打则了（在确认能够正常运行前请先在虚拟终端中运行，而非直接在文件管理器中点击运行，以便获取日志定位可能存在的问题）。</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>若不使用 Mod，那么不需要进行上面这个设置。非想天则的 mod 是通过劫持 <code>d3d9.dll</code> 来加载的，因此需要配置 Wine 让它此时优先使用 mod 加载器的 <code>d3d9.dll</code>。亦可在环境变量 <code>WINEDLLOVERRIDES=d3d9=n,b</code> 下启动非想天则来做到这一点，反过来说当需要在同一路径下使用原版非想天则时，使用环境变量 <code>WINEDLLOVERRIDES=d3d9=b,n</code> 来运行即可。</p></div><p>此外，<strong>请务必启用 ChainCFix mod！</strong> 详见<a href="#%E8%95%BE%E7%B1%B3%E8%8E%89%E4%BA%9A-c-%E9%93%BE%E4%B8%8D%E5%90%8C%E6%AD%A5%E3%80%81c-%E9%93%BE%E5%8F%98%E6%88%90%E4%B8%8D%E6%AD%A3%E5%B8%B8%E7%9A%84%E7%9F%AD%E9%93%BE">下文</a>。</p><p>若使用中遇到问题可查询下面的文档，若下面文档也未涵盖或无法解决你的问题请向我们反馈。</p><h1 id="已知问题-有解决方案" tabindex="-1"><a class="header-anchor" href="#已知问题-有解决方案"><span>已知问题（有解决方案）</span></a></h1><h2 id="游戏一般性问题" tabindex="-1"><a class="header-anchor" href="#游戏一般性问题"><span>游戏一般性问题</span></a></h2><h3 id="运行带-mod-的非想天则时出现-0108-err-sync-rtlpwaitforcriticalsection-section-7bc6c3c0-dlls-ntdll-loader-c-的报错-标准错误输出-游戏无法启动" tabindex="-1"><a class="header-anchor" href="#运行带-mod-的非想天则时出现-0108-err-sync-rtlpwaitforcriticalsection-section-7bc6c3c0-dlls-ntdll-loader-c-的报错-标准错误输出-游戏无法启动"><span>运行带 Mod 的非想天则时出现 <code>0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 &quot;dlls/ntdll/loader.c…</code> 的报错（标准错误输出），游戏无法启动</span></a></h3><p>完整报错为：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 &quot;dlls/ntdll/loader.c: loader_section&quot; wait timed out in thread 0108, blocked by 0024, retrying (60 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这是 wine 的 bug，但在最新版中已经修复。若遇到这种情况，检查你的 wine 版本是不是在 8.1~8.8 范围内。若是，尝试换用稳定版或 WineQH 最新的测试版包。</p><h3 id="运行则的终端被-0160-fixme-d3d-wined3d-swapchain-present-ignoring-flags-0x1-刷屏" tabindex="-1"><a class="header-anchor" href="#运行则的终端被-0160-fixme-d3d-wined3d-swapchain-present-ignoring-flags-0x1-刷屏"><span>运行则的终端被 <code>0160:fixme:d3d:wined3d_swapchain_present Ignoring flags 0x1.</code> 刷屏</span></a></h3><p>在环境变量 <code>WINEDEBUG=fixme-d3d</code> 下运行非想天则可以关闭这个警告的输出。</p><h3 id="打则时一些图像-比如机体、弹幕-变为白色矩形-终端被-01b8-err-d3d-resource-init-out-of-adapter-memory-刷屏" tabindex="-1"><a class="header-anchor" href="#打则时一些图像-比如机体、弹幕-变为白色矩形-终端被-01b8-err-d3d-resource-init-out-of-adapter-memory-刷屏"><span>打则时一些图像（比如机体、弹幕）变为白色矩形，终端被 <code>01b8:err:d3d:resource_init Out of adapter memory.</code> 刷屏</span></a></h3><p>尤其发生在进入了大厅 mod 的 VS NETWORK 页面后；此外也可能在打街机模式或者故事模式的过程中出现。</p>`,14),N={href:"https://github.com/doitsujin/dxvk",target:"_blank",rel:"noopener noreferrer"},D=e("code",null,"set-video-memory.reg",-1),F=e("code",null,"wine regedit set-video-memory.reg",-1),R=o(`<div class="language-reg line-numbers-mode" data-ext="reg" data-title="reg"><pre class="language-reg"><code>Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\\Software\\Wine\\Direct3D]
&quot;VideoMemorySize&quot;=&quot;1024&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="蕾米莉亚-c-链不同步、c-链变成不正常的短链" tabindex="-1"><a class="header-anchor" href="#蕾米莉亚-c-链不同步、c-链变成不正常的短链"><span>蕾米莉亚 C 链不同步、C 链变成不正常的短链</span></a></h3><p>具体表现为：</p><ul><li>网络对战中使用若干次蕾米莉亚 C 链（不管是哪一方使用）后两方不同步</li><li>蕾米莉亚 C 链变为不正常的短链，攻击效果消失/改变</li></ul>`,4),T={href:"https://gitee.com/sanhuizhuan/soku_giuroll_cn/releases",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,[t("若因为某些原因需要打无 Mod 的非想天则，那么请使用 "),e("code",null,"WINEDEBUG=trace+heap"),t(" 环境变量来启动非想天则，触发概率几乎变为 0（不确定是不是确实变为 0 了）。")],-1),U=e("h3",{id:"运行非想天则时弹出-dsound-相关错误",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#运行非想天则时弹出-dsound-相关错误"},[e("span",null,"运行非想天则时弹出 DSound 相关错误")])],-1),q={href:"https://wiki.archlinux.org/title/wine#Sound",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/lutris/docs/blob/master/WineDependencies.md",target:"_blank",rel:"noopener noreferrer"},M=o('<h2 id="联机大厅相关" tabindex="-1"><a class="header-anchor" href="#联机大厅相关"><span>联机大厅相关</span></a></h2><p>遇到问题可以对照以下表格更新大厅</p><table><thead><tr><th style="text-align:left;">大厅可能遇到的问题</th><th style="text-align:left;">首次修复问题的大厅mod版本</th></tr></thead><tbody><tr><td style="text-align:left;">Host 或使用 host list 时报 SSL 相关错误</td><td style="text-align:left;">0.6.4</td></tr><tr><td style="text-align:left;">大厅内无法用中文输入法聊天（Wine&gt;=8.8）</td><td style="text-align:left;">0.6.5</td></tr><tr><td style="text-align:left;">加入联机大厅时连接超时或长时间卡在 Joining</td><td style="text-align:left;">0.6.6.1</td></tr></tbody></table><p>（总而言之把大厅 mod 更新到 0.6.6.1 或以上的最新版就好）</p><p>在聊天框打字时若遇到光标与文字之间对不齐的问题（尤其文字中包含英文字母时），可使用 <code>FREETYPE_PROPERTIES=&quot;truetype:interpreter-version=35&quot;</code> 环境变量来运行，或使用低于 <code>7.17</code> 版本的 Wine。</p><p>若遇其他问题请向我们进行反馈。</p><h2 id="swarm-相关" tabindex="-1"><a class="header-anchor" href="#swarm-相关"><span>Swarm 相关</span></a></h2>',7),G={href:"https://github.com/evshiron/swarm-ng-build/releases",target:"_blank",rel:"noopener noreferrer"},V=e("figure",null,[e("img",{src:"https://bu.dusays.com/2024/01/21/65acf18dc1dc4.webp",alt:"Linux Mods",width:"400",tabindex:"0",loading:"lazy"}),e("figcaption",null,"Linux Mods")],-1);function H(z,O){const n=a("ExternalLinkIcon");return s(),l("div",null,[e("div",c,[h,e("p",null,[e("a",p,[t("https://discord.com/channels/167593473854144512/282570000705912842/1141596048943489145"),r(n)])]),e("p",null,[t("(Native, then Built-in) Should fix issues with mods."),u,e("a",m,[t("https://ptb.discord.com/channels/167593473854144512/282570000705912842/968484014522511381"),r(n)]),g,t(" (Mod Compatibility List)"),_,e("a",b,[t("https://ptb.discord.com/channels/167593473854144512/282570000705912842/828267328570654740"),r(n)]),f,t(" Lutris (?):"),x,e("a",w,[t("https://ptb.discord.com/channels/167593473854144512/282570000705912842/1144336327622537308"),r(n)]),y,t(" Alt. Try Steam Proton.")])]),k,v,E,e("p",null,[t("以 Debian、Fedora、Ubuntu 为例，你可以安装发行版维护的 Wine 包，也可以安装 WineHQ 提供的包（"),e("a",S,[t("Debian"),r(n)]),t("、"),e("a",C,[t("Fedora"),r(n)]),t("、"),e("a",L,[t("Ubuntu"),r(n)]),t("），也可以使用 "),e("a",W,[t("Lutris"),r(n)]),t(" 提供的经过了优化的 Wine 包。")]),B,e("p",null,[t("使用 "),e("a",N,[t("dxvk"),r(n)]),t("，或将下面的注册表配置保存为 "),D,t(" 并运行 "),F]),R,e("p",null,[t("源于非想天则的数组越界 bug，但在 Wine 中触发的概率远高于在 Windows 中触发的概率。务必启用 ChainCFix mod，该 mod 修复了这个问题。非想天启启动器的最新 giuroll 更新包中包含了这个 mod，此外亦可在 "),e("a",T,[t("https://gitee.com/sanhuizhuan/soku_giuroll_cn/releases"),r(n)]),t(" 手动获取。")]),A,U,e("p",null,[t("可能是由于 Wine 缺少音频库的依赖。可尝试根据 "),e("a",q,[t("Wine 的 ArchWiki 页面"),r(n)]),t("或 "),e("a",I,[t("Lutris 给出的 Wine 依赖"),r(n)]),t("补齐依赖。")]),M,e("p",null,[t("直接使用"),e("a",G,[t("Swarm-NG仓库"),r(n)]),t("的Linux发行版即可。")]),V])}const Q=i(d,[["render",H],["__file","Linux.html.vue"]]),j=JSON.parse('{"path":"/en/FAQ/Failed-to-Start/Linux.html","title":"Running Soku on GNU/Linux","lang":"en-US","frontmatter":{"title":"Running Soku on GNU/Linux","icon":"file","editLink":false,"prev":false,"next":false,"order":10,"date":"2023-09-09T00:00:00.000Z","author":"Hagb","description":"From ask-help channel pins https://discord.com/channels/167593473854144512/282570000705912842/1141596048943489145 (Native, then Built-in) Should fix issues with mods. https://pt...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://wiki.514.live/FAQ/Failed-to-Start/Linux.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/en/FAQ/Failed-to-Start/Linux.html"}],["meta",{"property":"og:site_name","content":"Hisoutensoku Guide"}],["meta",{"property":"og:title","content":"Running Soku on GNU/Linux"}],["meta",{"property":"og:description","content":"From ask-help channel pins https://discord.com/channels/167593473854144512/282570000705912842/1141596048943489145 (Native, then Built-in) Should fix issues with mods. https://pt..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/01/21/65acf18dc1dc4.webp =400x"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-30T09:43:02.000Z"}],["meta",{"property":"article:author","content":"Hagb"}],["meta",{"property":"article:published_time","content":"2023-09-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-30T09:43:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Running Soku on GNU/Linux\\",\\"image\\":[\\"https://bu.dusays.com/2024/01/21/65acf18dc1dc4.webp =400x\\"],\\"datePublished\\":\\"2023-09-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-30T09:43:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Hagb\\"}]}"]]},"headers":[{"level":2,"title":"游戏一般性问题","slug":"游戏一般性问题","link":"#游戏一般性问题","children":[{"level":3,"title":"运行带 Mod 的非想天则时出现 0108:err:sync:RtlpWaitForCriticalSection section 7BC6C3C0 \\"dlls/ntdll/loader.c… 的报错（标准错误输出），游戏无法启动","slug":"运行带-mod-的非想天则时出现-0108-err-sync-rtlpwaitforcriticalsection-section-7bc6c3c0-dlls-ntdll-loader-c-的报错-标准错误输出-游戏无法启动","link":"#运行带-mod-的非想天则时出现-0108-err-sync-rtlpwaitforcriticalsection-section-7bc6c3c0-dlls-ntdll-loader-c-的报错-标准错误输出-游戏无法启动","children":[]},{"level":3,"title":"运行则的终端被 0160:fixme:d3d:wined3d_swapchain_present Ignoring flags 0x1. 刷屏","slug":"运行则的终端被-0160-fixme-d3d-wined3d-swapchain-present-ignoring-flags-0x1-刷屏","link":"#运行则的终端被-0160-fixme-d3d-wined3d-swapchain-present-ignoring-flags-0x1-刷屏","children":[]},{"level":3,"title":"打则时一些图像（比如机体、弹幕）变为白色矩形，终端被 01b8:err:d3d:resource_init Out of adapter memory. 刷屏","slug":"打则时一些图像-比如机体、弹幕-变为白色矩形-终端被-01b8-err-d3d-resource-init-out-of-adapter-memory-刷屏","link":"#打则时一些图像-比如机体、弹幕-变为白色矩形-终端被-01b8-err-d3d-resource-init-out-of-adapter-memory-刷屏","children":[]},{"level":3,"title":"蕾米莉亚 C 链不同步、C 链变成不正常的短链","slug":"蕾米莉亚-c-链不同步、c-链变成不正常的短链","link":"#蕾米莉亚-c-链不同步、c-链变成不正常的短链","children":[]},{"level":3,"title":"运行非想天则时弹出 DSound 相关错误","slug":"运行非想天则时弹出-dsound-相关错误","link":"#运行非想天则时弹出-dsound-相关错误","children":[]}]},{"level":2,"title":"联机大厅相关","slug":"联机大厅相关","link":"#联机大厅相关","children":[]},{"level":2,"title":"Swarm 相关","slug":"swarm-相关","link":"#swarm-相关","children":[]}],"git":{"createdTime":1694254606000,"updatedTime":1717062182000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":4.08,"words":1223},"localizedDate":"September 9, 2023","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">From ask-help channel pins</p>\\n<p><a href=\\"https://discord.com/channels/167593473854144512/282570000705912842/1141596048943489145\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://discord.com/channels/167593473854144512/282570000705912842/1141596048943489145</a></p>\\n<p>(Native, then Built-in) Should fix issues with mods.<br>\\n<a href=\\"https://ptb.discord.com/channels/167593473854144512/282570000705912842/968484014522511381\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://ptb.discord.com/channels/167593473854144512/282570000705912842/968484014522511381</a><br>\\n(Mod Compatibility List)<br>\\n<a href=\\"https://ptb.discord.com/channels/167593473854144512/282570000705912842/828267328570654740\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://ptb.discord.com/channels/167593473854144512/282570000705912842/828267328570654740</a><br>\\nLutris (?):<br>\\n<a href=\\"https://ptb.discord.com/channels/167593473854144512/282570000705912842/1144336327622537308\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://ptb.discord.com/channels/167593473854144512/282570000705912842/1144336327622537308</a><br>\\nAlt. Try Steam Proton.</p>\\n</div>"}');export{Q as comp,j as data};
