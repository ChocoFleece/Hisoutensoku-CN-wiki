import{_ as u}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as h,a as t,b as i,w as n,d as e,e as d}from"./app-QnFtp0r1.js";const _={},g={class:"hint-container tip"},m=t("p",{class:"hint-container-title"},"不支持 AP 也没有关系",-1),b=t("p",null,[t("mark",null,[t("strong",null,"可以在大厅内使用 Swarm 来联机，所以不支持 AP 也没有关系。")])],-1),A=t("strong",null,"跳转链接——大厅内使用 Swarm 联机",-1),f=t("strong",null,"也可以通过 IPV6 直连",-1),P={class:"hint-container info"},y=t("p",{class:"hint-container-title"},"检测自己的网络是否支持AP",-1),w=t("p",null,[t("strong",null,[e("在“自助手册”文件夹内，点这个 "),t("code",null,"autopunch检测-check-gui.exe"),e(" 可以进行检测")])],-1),x={href:"https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/autopunch%E6%A3%80%E6%B5%8B-check-gui.exe",target:"_blank",rel:"noopener noreferrer"},v=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/02/28/65defee74c6b5.png",alt:"",width:"300",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),E=t("p",null,[t("strong",null,"如果是这样是检测失败，就再试一次")],-1),T=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65aca10f90429.webp",alt:"再试一次",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"再试一次")],-1),k=t("p",null,[t("strong",null,"是这样就说明 支持AP")],-1),B=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65aca1919e2f4.webp",alt:"AP Supported 支持AP",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"AP Supported 支持AP")],-1),S=t("p",null,[t("strong",null,"是这样就说明 不支持AP")],-1),C=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65aca16127d2a.webp",alt:"AP NOT Supported 不支持AP",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"AP NOT Supported 不支持AP")],-1),D={class:"hint-container details"},N=t("summary",null,"为什么我支持AP还是显示红字报错无法连接？【不使用 Swarm 的情况下】",-1),z={class:"hint-container info"},I=t("p",{class:"hint-container-title"},"相关信息",-1),L=t("p",null,"1、再重新多试几次",-1),O=t("p",null,"2、可能对手不支持AP",-1),F=t("p",null,[e("3、可能是端口抽风了，可以试试"),t("strong",null,"更换建主端口")],-1),M=t("strong",null,"使用 Swarm 中转联机",-1),V=t("p",null,"5、大厅可以修改这个10800，比如改成10801，保存即可，不需要重开游戏",-1),Z=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/24/65b1333e9f810.png",alt:"点开这个 SokuLobbies.ini",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"点开这个 SokuLobbies.ini")],-1),H=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/24/65b1333ec7ebc.png",alt:"修改这个10800，比如改成10801，保存即可，不需要重开游戏",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"修改这个10800，比如改成10801，保存即可，不需要重开游戏")],-1),U=d('<details class="hint-container details"><summary>为什么我显示不支持AP？</summary><div class="hint-container info"><p class="hint-container-title">NAT类型为“对称型 (Symmetric)”时无法UDP打洞直连</p><p>网络被各种路由或者运营商套娃了，如一些餐厅网，校园网（浏览器网页登陆验证而非宽带拨号），酒店网，公司网和插流量卡的移动WIFI，手机流量等，就会因为被多层NAT设备套娃或者防火墙限制而无法穿透，就会不支持了</p><div class="hint-container tip"><p class="hint-container-title">我还能抢救吗？</p><p>可以试一试看，<strong>得花点时间和耐心</strong>，如果你是在用你自己的家庭网络，且可以登陆后台操作的话。</p><p>其他情况比如校园网（<code>10.x.x.x</code> 浏览器网页登陆验证），手机热点，酒店公司餐厅等公共场所<br> 直接不用继续看了，没办法去操作的。</p></div></div></details>',1),Q={class:"hint-container details"},q=t("summary",null,"下面尝试解决AP不支持的问题",-1),R={class:"hint-container info"},j=d('<p class="hint-container-title">查看自己网络环境的路由线路</p><p>按win+r然后粘贴这个运行 <code>cmd /k tracert -4 -d -h 6 baidu.com</code></p><figure><img src="https://bu.dusays.com/2024/01/21/65aca2c7b2cc4.webp" alt="此示例中，他有两个路由器和一个光猫（天翼网关）" width="600" tabindex="0" loading="lazy"><figcaption>此示例中，他有两个路由器<code>（192.168.88.1 和 192.168.1.1）</code>和一个光猫（天翼网关）<code>（100.xxx）</code></figcaption></figure><p>再输入 <code>ipconfig</code> ，找到 <strong>“以太网适配器 本地连接”</strong>，可查看本机内网 IP 并再次确认自己电脑的 <strong>上级路由器（默认网关）</strong></p><figure><img src="https://bu.dusays.com/2024/01/21/65aca347da187.webp" alt="示例中本机内网 IPv4 地址为，默认网关（路由器）为" width="600" tabindex="0" loading="lazy"><figcaption>示例中本机内网 IPv4 地址为<code>192.168.88.4</code>，默认网关（路由器）为<code>192.168.88.1</code></figcaption></figure>',5),J=t("p",null,"直接让自己电脑接到拨号源头（如果是光猫拨号就接到光猫上，如果是光猫桥接路由器拨号，就接到对应路由器上）",-1),W=t("p",null,[e("根据上面得到的 "),t("strong",null,"默认网关"),e("，在浏览器地址栏中输入并回车（"),t("strong",null,"注意别变成百度搜索这个IP了"),e("）")],-1),G=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acab1ad1174.png",alt:"我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）")],-1),K=t("p",null,[e("先不需要登陆，确保连接后电脑能上网，然后再次做上面的 "),t("code",null,"tracert"),e(" 与 "),t("code",null,"ipconfig"),e(" 这两条命令进行确认，同时进行AP检测，一般是可以支持的了")],-1),X=t("p",null,"不能直接连光猫或光猫上无网络（已被桥接路由拨号），参考下面设置光猫桥接路由拨号或者NAT端口转发",-1),Y=t("p",null,"顺便比对品牌和网线确认电脑是连接到哪个路由器，默认账号密码应该在路由器上有贴，登陆后进入后台",-1),$=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acac7ea8d64.webp",alt:"示例，成功登陆路由器后台",width:"700",tabindex:"0",loading:"lazy"}),t("figcaption",null,"示例，成功登陆路由器后台")],-1),tt=t("p",null,[e("接下来找到并"),t("strong",null,"打开 UPnP 设置，设置 NAT端口转发或虚拟服务器，协议选择UDP或者BOTH, ALL"),e("，输入自己的本机内网IP（在 ipconfig 里查看）")],-1),et=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acad7a27a86.webp",alt:"路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有")],-1),nt=t("p",null,[e("设置完毕后再进行AP检测，可能有效，也可能无效。"),t("strong",null,"还是无效就算了放弃吧")],-1),ot=t("p",null,"有效的话，在DHCP设置里给自己的电脑（根据内网IP判断哪个设备是自己的电脑）设置静态保留内网IP，这是为了防止每次重启网络后电脑的内网IP变化，之后应该就没什么问题了",-1),at=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acadf03cbc1.webp",alt:"不同设备的设置界面关键词可能不一样，DHCP，静态，保留",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,[e("不同设备的设置界面关键词可能不一样，"),t("strong",null,"DHCP，静态，保留")])],-1);function it(st,ct){const s=c("RouteLink"),r=c("ExternalLinkIcon"),l=c("Tabs");return p(),h("div",null,[t("div",g,[m,b,t("p",null,[i(s,{to:"/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA"},{default:n(()=>[A]),_:1})]),t("p",null,[i(s,{to:"/mods/AdvancedMods/IPv6Mod.html"},{default:n(()=>[f]),_:1})])]),t("div",P,[y,w,t("p",null,[e("或者"),t("a",x,[e("下载 autopunch检测-check-gui.exe"),i(r)])]),v,i(l,{id:"21",data:[{id:"重新检测"},{id:"支持AP"},{id:"不支持AP"}]},{title0:n(({value:o,isActive:a})=>[e("重新检测")]),title1:n(({value:o,isActive:a})=>[e("支持AP")]),title2:n(({value:o,isActive:a})=>[e("不支持AP")]),tab0:n(({value:o,isActive:a})=>[E,T]),tab1:n(({value:o,isActive:a})=>[k,B]),tab2:n(({value:o,isActive:a})=>[S,C]),_:1})]),t("details",D,[N,t("div",z,[I,L,O,F,t("p",null,[e("4、"),i(s,{to:"/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA"},{default:n(()=>[M]),_:1})]),V,Z,H])]),U,t("details",Q,[q,t("div",R,[j,i(l,{id:"102",data:[{id:"第一种办法（通过光猫上网）"},{id:"第二种办法（无法接触光猫）"}]},{title0:n(({value:o,isActive:a})=>[e("第一种办法（通过光猫上网）")]),title1:n(({value:o,isActive:a})=>[e("第二种办法（无法接触光猫）")]),tab0:n(({value:o,isActive:a})=>[J,W,G,K]),tab1:n(({value:o,isActive:a})=>[X,Y,$,tt,et,nt,ot,at]),_:1})])])])}const rt=u(_,[["render",it],["__file","AP_NOT_Supported.html.vue"]]),ut=JSON.parse('{"path":"/FAQ/Play/AP_NOT_Supported.html","title":"为什么我不支持AutoPunch直连","lang":"zh-CN","frontmatter":{"title":"为什么我不支持AutoPunch直连","icon":"circle-info","order":7,"editLink":false,"author":"三回転Tstar","date":"2023-08-01T00:00:00.000Z","description":"不支持 AP 也没有关系 可以在大厅内使用 Swarm 来联机，所以不支持 AP 也没有关系。 检测自己的网络是否支持AP 在“自助手册”文件夹内，点这个 autopunch检测-check-gui.exe 可以进行检测 或者下载 autopunch检测-check-gui.exe 为什么我支持AP还是显示红字报错无法连接？【不使用 Swarm 的情况...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/FAQ/Play/AP_NOT_Supported.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/FAQ/Play/AP_NOT_Supported.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"为什么我不支持AutoPunch直连"}],["meta",{"property":"og:description","content":"不支持 AP 也没有关系 可以在大厅内使用 Swarm 来联机，所以不支持 AP 也没有关系。 检测自己的网络是否支持AP 在“自助手册”文件夹内，点这个 autopunch检测-check-gui.exe 可以进行检测 或者下载 autopunch检测-check-gui.exe 为什么我支持AP还是显示红字报错无法连接？【不使用 Swarm 的情况..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/02/28/65defee74c6b5.png =300x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-05-08T16:52:07.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-08-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-08T16:52:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么我不支持AutoPunch直连\\",\\"image\\":[\\"https://bu.dusays.com/2024/02/28/65defee74c6b5.png =300x\\",\\"https://bu.dusays.com/2024/01/21/65aca10f90429.webp =400x\\",\\"https://bu.dusays.com/2024/01/21/65aca1919e2f4.webp =400x\\",\\"https://bu.dusays.com/2024/01/21/65aca16127d2a.webp =400x\\",\\"https://bu.dusays.com/2024/01/24/65b1333e9f810.png =400x\\",\\"https://bu.dusays.com/2024/01/24/65b1333ec7ebc.png =400x\\",\\"https://bu.dusays.com/2024/01/21/65aca2c7b2cc4.webp =600x\\",\\"https://bu.dusays.com/2024/01/21/65aca347da187.webp =600x\\",\\"https://bu.dusays.com/2024/01/21/65acab1ad1174.png =400x\\",\\"https://bu.dusays.com/2024/01/21/65acac7ea8d64.webp =700x\\",\\"https://bu.dusays.com/2024/01/21/65acad7a27a86.webp =400x\\",\\"https://bu.dusays.com/2024/01/21/65acadf03cbc1.webp =400x\\"],\\"datePublished\\":\\"2023-08-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-08T16:52:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1705039407000,"updatedTime":1715187127000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":7}]},"readingTime":{"minutes":4.37,"words":1310},"localizedDate":"2023年8月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">不支持 AP 也没有关系</p>\\n<p><mark><strong>可以在大厅内使用 Swarm 来联机，所以不支持 AP 也没有关系。</strong></mark></p>\\n<p><a href=\\"/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA\\" target=\\"_blank\\"><strong>跳转链接——大厅内使用 Swarm 联机</strong></a></p>\\n<p><a href=\\"/mods/AdvancedMods/IPv6Mod.html\\" target=\\"_blank\\"><strong>也可以通过 IPV6 直连</strong></a></p>\\n</div>"}');export{rt as comp,ut as data};
