import{_ as u}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as r,c as _,a as t,b as e,w as n,e as i,f as d}from"./app-3UXz5b7X.js";const p={},h={class:"hint-container tip"},g=t("p",{class:"hint-container-title"},"不支持 AP 也没有关系",-1),m=t("p",null,[t("mark",null,[t("strong",null,"可以在大厅内使用 Swarm 来联机，所以不支持 AP 也没有关系。")])],-1),A=t("strong",null,"跳转链接——大厅内使用 Swarm 联机",-1),f=t("strong",null,"也可以通过 IPV6 直连",-1),b={class:"hint-container info"},P=t("p",{class:"hint-container-title"},"检测自己的网络是否支持AP",-1),v=t("p",null,[t("strong",null,[i("在“自助手册”文件夹内，点这个 "),t("code",null,"autopunch检测-check-gui.exe"),i(" 可以进行检测")])],-1),y=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/02/28/65defee74c6b5.png",alt:"",width:"300",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),w=t("p",null,[t("strong",null,"如果是这样是检测失败，就再试一次")],-1),E=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65aca10f90429.webp",alt:"再试一次",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"再试一次")],-1),x=t("p",null,[t("strong",null,"是这样就说明 支持AP")],-1),B=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65aca1919e2f4.webp",alt:"AP Supported 支持AP",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"AP Supported 支持AP")],-1),S=t("p",null,[t("strong",null,"是这样就说明 不支持AP")],-1),C=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65aca16127d2a.webp",alt:"AP NOT Supported 不支持AP",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"AP NOT Supported 不支持AP")],-1),D={class:"hint-container details"},z=t("summary",null,"为什么我支持AP还是显示红字报错无法连接？【不使用 Swarm 的情况下】",-1),I={class:"hint-container info"},N=t("p",{class:"hint-container-title"},"相关信息",-1),T=t("p",null,"1、再重新多试几次",-1),k=t("p",null,"2、可能对手不支持AP",-1),L=t("p",null,[i("3、"),t("strong",null,"可能是端口抽风了，可以试试更换建主端口，修改这个10800，比如改成10801，保存即可，不需要重开游戏")],-1),O=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/24/65b1333e9f810.png",alt:"点开这个 SokuLobbies.ini",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"点开这个 SokuLobbies.ini")],-1),V=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/24/65b1333ec7ebc.png",alt:"修改这个10800，比如改成10801，保存即可，不需要重开游戏",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"修改这个10800，比如改成10801，保存即可，不需要重开游戏")],-1),H=t("strong",null,"使用 Swarm 中转联机",-1),F=d('<details class="hint-container details"><summary>为什么我显示不支持AP？</summary><div class="hint-container info"><p class="hint-container-title">NAT类型为“对称型 (Symmetric)”时无法UDP打洞直连</p><p>网络被各种路由或者运营商套娃了，如一些餐厅网，校园网（浏览器网页登陆验证而非宽带拨号），酒店网，公司网和插流量卡的移动WIFI，手机流量等，就会因为被多层NAT设备套娃或者防火墙限制而无法穿透，就会不支持了</p><div class="hint-container tip"><p class="hint-container-title">我还能抢救吗？</p><p>可以试一试看，<strong>得花点时间和耐心</strong>，如果你是在用你自己的家庭网络，且可以登陆后台操作的话。</p><p>其他情况比如校园网（<code>10.x.x.x</code> 浏览器网页登陆验证），手机热点，酒店公司餐厅等公共场所<br> 直接不用继续看了，没办法去操作的。</p></div></div></details>',1),U={class:"hint-container details"},M=t("summary",null,"下面尝试解决AP不支持的问题",-1),R={class:"hint-container info"},W=d('<p class="hint-container-title">查看自己网络环境的路由线路</p><p>按win+r然后粘贴这个运行 <code>cmd /k tracert -4 -d -h 6 baidu.com</code></p><figure><img src="https://bu.dusays.com/2024/01/21/65aca2c7b2cc4.webp" alt="此示例中，他有两个路由器和一个光猫（天翼网关）" width="600" tabindex="0" loading="lazy"><figcaption>此示例中，他有两个路由器<code>（192.168.88.1 和 192.168.1.1）</code>和一个光猫（天翼网关）<code>（100.xxx）</code></figcaption></figure><p>再输入 <code>ipconfig</code> ，找到 <strong>“以太网适配器 本地连接”</strong>，可查看本机内网 IP 并再次确认自己电脑的 <strong>上级路由器（默认网关）</strong></p><figure><img src="https://bu.dusays.com/2024/01/21/65aca347da187.webp" alt="示例中本机内网 IPv4 地址为，默认网关（路由器）为" width="600" tabindex="0" loading="lazy"><figcaption>示例中本机内网 IPv4 地址为<code>192.168.88.4</code>，默认网关（路由器）为<code>192.168.88.1</code></figcaption></figure>',5),j=t("p",null,"直接让自己电脑接到拨号源头（如果是光猫拨号就接到光猫上，如果是光猫桥接路由器拨号，就接到对应路由器上）",-1),q=t("p",null,[i("根据上面得到的 "),t("strong",null,"默认网关"),i("，在浏览器地址栏中输入并回车（"),t("strong",null,"注意别变成百度搜索这个IP了"),i("）")],-1),G=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acab1ad1174.png",alt:"我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"我的默认网关是 192.168.2.1，路由器后台，有的人是光猫拨号（账号和密码在设备底下一般有贴）")],-1),J=t("p",null,[i("先不需要登陆，确保连接后电脑能上网，然后再次做上面的 "),t("code",null,"tracert"),i(" 与 "),t("code",null,"ipconfig"),i(" 这两条命令进行确认，同时进行AP检测，一般是可以支持的了")],-1),K=t("p",null,"不能直接连光猫或光猫上无网络（已被桥接路由拨号），参考下面设置光猫桥接路由拨号或者NAT端口转发",-1),Q=t("p",null,"顺便比对品牌和网线确认电脑是连接到哪个路由器，默认账号密码应该在路由器上有贴，登陆后进入后台",-1),X=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acac7ea8d64.webp",alt:"示例，成功登陆路由器后台",width:"700",tabindex:"0",loading:"lazy"}),t("figcaption",null,"示例，成功登陆路由器后台")],-1),Y=t("p",null,[i("接下来找到并"),t("strong",null,"打开 UPnP 设置，设置 NAT端口转发或虚拟服务器，协议选择UDP或者BOTH, ALL"),i("，输入自己的本机内网IP（在 ipconfig 里查看）")],-1),Z=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acad7a27a86.webp",alt:"路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有")],-1),$=t("p",null,[i("设置完毕后再进行AP检测，可能有效，也可能无效。"),t("strong",null,"还是无效就算了放弃吧")],-1),tt=t("p",null,"有效的话，在DHCP设置里给自己的电脑（根据内网IP判断哪个设备是自己的电脑）设置静态保留内网IP，这是为了防止每次重启网络后电脑的内网IP变化，之后应该就没什么问题了",-1),it=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acadf03cbc1.webp",alt:"不同设备的设置界面关键词可能不一样，DHCP，静态，保留",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,[i("不同设备的设置界面关键词可能不一样，"),t("strong",null,"DHCP，静态，保留")])],-1);function nt(st,ot){const l=c("RouterLink"),a=c("Tabs");return r(),_("div",null,[t("div",h,[g,m,t("p",null,[e(l,{to:"/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA"},{default:n(()=>[A]),_:1})]),t("p",null,[e(l,{to:"/mods/AdvancedMods/IPv6Mod.html"},{default:n(()=>[f]),_:1})])]),t("div",b,[P,v,y,e(a,{id:"18",data:[{id:"重新检测"},{id:"支持AP"},{id:"不支持AP"}]},{title0:n(({value:s,isActive:o})=>[i("重新检测")]),title1:n(({value:s,isActive:o})=>[i("支持AP")]),title2:n(({value:s,isActive:o})=>[i("不支持AP")]),tab0:n(({value:s,isActive:o})=>[w,E]),tab1:n(({value:s,isActive:o})=>[x,B]),tab2:n(({value:s,isActive:o})=>[S,C]),_:1})]),t("details",D,[z,t("div",I,[N,T,k,L,O,V,t("p",null,[i("4、"),e(l,{to:"/Beginners/BeforePlaying.html#%E4%BD%BF%E7%94%A8-swarm-%E7%AD%89%E4%B8%AD%E8%BD%AC-ip-%E5%9C%A8%E5%A4%A7%E5%8E%85%E9%87%8C%E8%81%94%E6%9C%BA"},{default:n(()=>[H]),_:1})])])]),F,t("details",U,[M,t("div",R,[W,e(a,{id:"96",data:[{id:"第一种办法（通过光猫上网）"},{id:"第二种办法（无法接触光猫）"}]},{title0:n(({value:s,isActive:o})=>[i("第一种办法（通过光猫上网）")]),title1:n(({value:s,isActive:o})=>[i("第二种办法（无法接触光猫）")]),tab0:n(({value:s,isActive:o})=>[j,q,G,J]),tab1:n(({value:s,isActive:o})=>[K,Q,X,Y,Z,$,tt,it]),_:1})])])])}const at=u(p,[["render",nt],["__file","AP_NOT_Supported.html.vue"]]);export{at as default};
