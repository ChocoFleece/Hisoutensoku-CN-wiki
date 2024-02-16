import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as a,c as i,a as t,d as n,b as s,e as l}from"./app-0Vpr0LY-.js";const c={},p=l('<div class="hint-container info"><p class="hint-container-title">功能简介</p><p>BGMChanger 默认关闭</p><p>打开对应 ini 文件，会看到各个BGM （th123\\Modules\\BGMChanger\\BGMChanger.ini）</p><p>path 即文件路径，推荐自己新键一个非中文名文件夹，设置path为Modules/BGMChanger/文件夹/文件.ogg<br> intro 即开始循环点（秒数 x 44100）<br> loop 即为从intro点开始过多久就回到intro点（秒数 x 44100）</p><p>个人建议可以直接剪辑得到一整个循环片段作为音乐文件，这样intro直接设1，loop就大于等于 <strong>【秒数*44100】</strong> 即可循环</p><p>示例：<br> path=Modules/BGMChanger/0/12-till-when.ogg<br> intro=1265361<br> loop=2954303</p><p>path=Modules/BGMChanger/0/23-till-when-alternative-version.ogg<br> intro=1<br> loop=8621663</p></div>',1),h={class:"hint-container warning"},_=t("p",{class:"hint-container-title"},"注意",-1),d=t("strong",null,"替换 BGM 用的音乐文件必须是 ogg 格式，单声道，44100 HZ",-1),g=t("br",null,null,-1),u={href:"https://convertio.co/zh",target:"_blank",rel:"noopener noreferrer"},b=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acdb21b4b98.webp",alt:"转化设置如图，否则可能会发生游戏内无法播放没声音的情况",width:"320",tabindex:"0",loading:"lazy"}),t("figcaption",null,"转化设置如图，否则可能会发生游戏内无法播放没声音的情况")],-1);function M(f,B){const o=r("ExternalLinkIcon");return a(),i("div",null,[p,t("div",h,[_,t("p",null,[d,g,n(" 可以使用这个网站在线转换 "),t("strong",null,[t("a",u,[n("https://convertio.co/zh"),s(o)])]),n(" 其他的应该也是可以的随便你")]),b])])}const G=e(c,[["render",M],["__file","BGMChanger.html.vue"]]);export{G as default};
