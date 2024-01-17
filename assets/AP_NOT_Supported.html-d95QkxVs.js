import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as n,e as a}from"./app-of8C0KSR.js";const c={},o=a('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>大厅0.6.3更新：可以在大厅内使用 Swarm 来联机了，所以不支持 AP 也没有任何关系。</strong></p></div><div class="hint-container info"><p class="hint-container-title">检测自己的网络是否支持AP</p><p>1、点这个 autopunch检测-check-gui.exe 检测</p><figure><img src="https://bu.dusays.com/2023/08/06/64cf5b295d248.png" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>2、如果是这样是检测失败，就再试一次</p><figure><img src="https://bu.dusays.com/2023/08/06/64cf5c9b4425f.png" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>3、是这样就说明 支持AP</p><figure><img src="https://bu.dusays.com/2023/08/06/64cf5c1042070.png" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>4、是这样就说明 不支持AP</p><figure><img src="https://bu.dusays.com/2023/08/06/64cf5c560e881.png" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">为什么我显示不支持？</p><p>网络被各种路由或者运营商套娃了，如一些餐厅网，校园网（浏览器网页登陆验证而非宽带拨号），酒店网，公司网和插流量卡的移动WIFI，手机流量等，就会因为被多层NAT设备套娃或者防火墙限制而无法穿透，就会不支持了<br> 或者可能你没给Windows防火墙点允许 <strong>（弹出问你是否允许访问网络，以及右侧弹出问你是否希望被网络内其他设备发现的的弹窗，点专用网络+公用网络，点允许）</strong></p><p><strong>我还能抢救吗？</strong><br> 可以试一试看，<strong>得花点时间和耐心</strong>，如果你是在用你自己的家庭网络，且可以登陆后台操作的话。</p></div><div class="hint-container info"><p class="hint-container-title">查看路由网关路线</p><p>按win+r然后粘贴这个运行 <code>cmd /k tracert -4 -d -h 6 baidu.com</code></p><figure><img src="https://bu.dusays.com/2023/08/20/64e21929db997.png" alt="一个示例" width="480" height="320" tabindex="0" loading="lazy"><figcaption>一个示例</figcaption></figure><p>此示例中，他有两个路由器<code>（192.168.88.1 和 192.168.1.1）</code>和一个光猫（天翼网关）<code>（100.xxx）</code><br>  <br> 输入 ipconfig 可查看本机内网IP并二次确认自己电脑的上级路由器（网关）</p><figure><img src="https://bu.dusays.com/2023/08/20/64e2193ea74ea.png" alt="示例中内网IP为192.168.88.4，默认网关为192.168.88.1" width="480" height="320" tabindex="0" loading="lazy"><figcaption>示例中内网IP为192.168.88.4，默认网关为192.168.88.1</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p>其他情况比如校园网（<code>10.x.x.x</code> 浏览器网页登陆验证），手机热点，酒店公司餐厅等公共场所，直接不用继续看了，没办法去操作的。</p></div></div><div class="hint-container info"><p class="hint-container-title">第一种办法：直接让自己电脑接到拨号源头（如果是光猫拨号就接到光猫上，如果是光猫桥接路由器拨号，就接到对应路由器上）</p><figure><img src="https://bu.dusays.com/2023/08/20/64e2196179cf8.png" alt="天翼网关后台，接光纤的光猫" width="630" height="350" tabindex="0" loading="lazy"><figcaption>天翼网关后台，接光纤的光猫</figcaption></figure><p>然后再次做tracert与ipconfig进行确认<br> 同时进行AP检测，一般是可以支持的了，还是不行的话，参考下面设置光猫桥接路由拨号或者NAT端口转发</p><figure><img src="https://bu.dusays.com/2023/08/20/64e2196d3bf1d.png" alt="本例中，将电脑直接连在拨号的天翼网关192.168.1.1上，成功恢复支持AP" width="350" tabindex="0" loading="lazy"><figcaption>本例中，将电脑直接连在拨号的天翼网关192.168.1.1上，成功恢复支持AP</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">第二种办法：没法接到远处的路由器上，那就尝试设置路由器端口转发开放端口</p><p>在浏览器地址栏中输入 网关IP 则可进入家用路由器后台（<strong>注意别变成百度搜索这个IP了</strong>），本例中是 <code>192.168.88.1</code><br> 顺便比对品牌和网线确认电脑是连接到哪个路由器，默认账号密码应该在路由器上有贴纸，登陆后进入后台</p><figure><img src="https://bu.dusays.com/2023/08/20/64e2198136d82.png" alt="示例，成功进入后台" width="900" tabindex="0" loading="lazy"><figcaption>示例，成功进入后台</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>找到并打开UPNP设置，<br> 设置多个NAT端口转发或虚拟服务器（设置多个端口如10800、10801...10810，以后可能需要切换着用），协议选择UDP或者BOTH, ALL，输入自己的本机内网IP<br> 也可以使用DMZ主机，就是相当于给所有端口都开放暴露，不推荐小白使用</p></div><figure><img src="https://bu.dusays.com/2023/08/20/64e219974f2b9.png" alt="路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有" width="550" tabindex="0" loading="lazy"><figcaption>路由器一般都有这些设置，光猫如果不是超级管理员账号登陆可能没有</figcaption></figure><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>设置完毕后再进行AP检测，可能可以有效，可能还是无效。<br> 还是无效就算了没救了；<br> 有效的话，在DHCP设置里给自己的电脑（根据内网IP判断哪个设备是自己的电脑）设置静态保留内网IP，这是为了防止每次重启网络后电脑的内网IP变化</p><p>之后应该就没什么问题了。</p></div><figure><img src="https://bu.dusays.com/2023/08/20/64e219ada315d.png" alt="不同设备的设置界面关键词可能不一样，DHCP，静态，保留" width="550" tabindex="0" loading="lazy"><figcaption>不同设备的设置界面关键词可能不一样，DHCP，静态，保留</figcaption></figure>',10),e=[o];function s(p,g){return t(),n("div",null,e)}const f=i(c,[["render",s],["__file","AP_NOT_Supported.html.vue"]]);export{f as default};
