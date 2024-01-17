import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as s,c as p,a as t,b as i,w as n,d as l,e}from"./app-B9AFwKA0.js";const c={},g=t("h2",{id:"_1-下载-framedataeditor-fde-编辑器并使用改色功能",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-下载-framedataeditor-fde-编辑器并使用改色功能","aria-hidden":"true"},"#"),l(" 1.下载 FramedataEditor（FDE）编辑器并使用改色功能")],-1),d={class:"hint-container info"},h=t("p",{class:"hint-container-title"},"相关信息",-1),f=t("strong",null,"下载链接传送门",-1),u=t("figure",null,[t("img",{src:"https://bu.dusays.com/2023/09/04/64f540e04cfe5.png",alt:"",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption")],-1),_=t("p",null,[t("strong",null,"压缩包内有简单操作说明")],-1),m=e('<div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>首次打开会提示选择游戏 th123c.dat 数据位置</strong></p><p><strong>注意需要将游戏路径（文件夹名称）改为全英文，否则会报错</strong></p></div><div class="hint-container tip"><p class="hint-container-title">操作说明</p><p>左上角，先导入角色： File &gt; import &gt; framedata &gt; from game package</p><p>然后导入配色（自己新建配色则忽略）： File &gt; import &gt; palette &gt; from file</p><p>开始编辑配色，切换英文输入法，<strong>按 H 可关闭判定框，然后可以滚轮放大</strong></p><p>打开调色板，左上角 View &gt; palette editor，然后鼠标可以悬浮查看改色区域</p><p>导出配色： File &gt; export &gt; palette &gt; to file 【注意命名和后缀，如palette000.pal】</p><p>一共有 8 个配色位所以你只能写 000-007 内的范围。</p><p><strong>正常你会导出得到一个513字节的文件（Alt+双击 或者 右键-属性，查看文件大小）</strong><br> 此文件可以支持再次导入FDE编辑器编辑，或者直接导入游戏使用，不需要再进行什么转化。</p><figure><img src="https://bu.dusays.com/2023/09/05/64f68f76d096f.png" alt="如图，改色完成，左上角导出得到 pal 文件" width="640" tabindex="0" loading="lazy"><figcaption>如图，改色完成，左上角导出得到 pal 文件</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/05/64f68f7ef047b.png" alt="导入进游戏内的效果" width="640" tabindex="0" loading="lazy"><figcaption>导入进游戏内的效果</figcaption></figure></div><h2 id="_2-将改好的配色-pal-文件导入游戏内使用" tabindex="-1"><a class="header-anchor" href="#_2-将改好的配色-pal-文件导入游戏内使用" aria-hidden="true">#</a> 2.将改好的配色 pal 文件导入游戏内使用</h2><div class="hint-container info"><p class="hint-container-title">方法一：data文件夹法</p><p>在 MemoryPatch 里启用了 FileSystemFirst 后（默认启用，可以不必检查）</p><p>在 th123 文件夹内新建文件夹命名为 data，继续在 data 文件夹里面新建 character 文件夹，再继续创建如图的角色名文件夹，</p><p>将得到的 <strong>513 字节</strong> palette000.pal 文件放入角色名文件夹内，然后返回游戏主菜单，再进入选人界面即可。<br><strong>（支持热更新，每次回主菜单再进来选人界面就可以重新刷新读取，不需要重开游戏）</strong></p><figure><img src="https://bu.dusays.com/2023/09/05/64f68ee665473.png" alt="角色名文件夹，注意易错名" width="200" tabindex="0" loading="lazy"><figcaption>角色名文件夹，注意易错名</figcaption></figure><p><strong>把 data 文件夹或者 character 文件夹之类的改个名，即可破坏（取消）这种导入方式</strong></p><figure><img src="https://bu.dusays.com/2023/09/13/6500902380b28.png" alt="成品就这样" width="800" tabindex="0" loading="lazy"><figcaption>成品就这样</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">举个例子吧</p><p>palette<strong>000</strong>.pal 对应 <strong>第一个</strong> 配色位<br> palette<strong>001</strong>.pal 对应 <strong>第二个</strong> 配色位<br> palette<strong>007</strong>.pal 对应 <strong>第八个也就是最后一个</strong> 配色位</p><p><strong>下面是实操案例：</strong></p><p><strong>需求：我想要将 V-紲星灯.pal 这个配色放到兔子的 第三个 配色位上</strong></p><p>步骤：</p><ol><li><strong>创建 th123/data/character/udonge/ 这个目录</strong></li><li><strong>将 V-紲星灯.pal 文件移动到这个目录</strong></li><li><strong>修改 V-紲星灯.pal 文件名为 palette002.pal</strong></li><li><strong>游戏不用关，回到主菜单，重新进练习模式选人即可</strong></li></ol></div></div>',4),E={class:"hint-container info"},b=t("p",{class:"hint-container-title"},"方法二：Shady-loader法",-1),y=t("p",null,[t("strong",null,"将 pal 文件命名为 data_character_reimu_palette000.pal 然后打包成 zip 包，放入 shady-loader 文件夹内，F2 菜单加载即可")],-1),v=t("strong",null,"shady-loader 使用方法传送门",-1),B=e('<div class="hint-container info"><p class="hint-container-title">方法三：Palette-picker法</p><p><strong>在 SWRSToys.ini 配置文件内 Ctrl+F 搜索 picker 即可找到，删除句首分号即可启用</strong></p><p><strong>说明：</strong><br> 在改卡组菜单界面（列出20个角色名的地方）按 C 可进入菜单</p><p>1、可以一次性加载许多个配色（还可以在选色界面隐藏掉默认配色）<br> 2、可以自定义初始配色（比如一进游戏默认就是5号黑衣红剑妖梦而不是1号原皮绿色妖梦，按C恢复默认）<br> 3、可以给对手强制选择配色（可选择自定义配色，按C恢复默认）<br> 4、可以造成双方配色相同的情况（草</p><p><strong>【所有修改只有当时自己这里能看到，对手看不到，rep里也看不到，每个角色的设置是独立的】</strong></p><figure><img src="https://bu.dusays.com/2023/09/05/64f6943819dc4.png" alt="使用效果如图" width="640" tabindex="0" loading="lazy"><figcaption>使用效果如图</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/05/64f694488fa91.png" alt="在这个地方，按 C 可进入菜单，菜单选项内继续按 C 是恢复默认" width="640" tabindex="0" loading="lazy"><figcaption>在这个地方，按 C 可进入菜单，菜单选项内继续按 C 是恢复默认</figcaption></figure></div><div class="hint-container info"><p class="hint-container-title">方法四：解包封包古法</p><p>新则不需要这种方法，1.10 版本不能使用插件，需要这种方法</p><p>没什么好说的，偷梁换柱即可</p></div><h2 id="_3-将前人使用老工具-绯色二-制作的配色-pal-导入游戏和编辑器" tabindex="-1"><a class="header-anchor" href="#_3-将前人使用老工具-绯色二-制作的配色-pal-导入游戏和编辑器" aria-hidden="true">#</a> 3.将前人使用老工具“绯色二”制作的配色 pal 导入游戏和编辑器</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果pal文件是显示 <strong>1.02KB（Alt+双击 或者 右键-属性，查看文件大小）</strong> 的，则是使用老工具“绯色二”制作的<strong>未转化格式</strong>，可继续在“绯色二”上编辑，不能导入FDE编辑，也不能直接导入游戏</p><p>使用 convpal-old-FDE 转化工具将其转化为 <strong>513 字节</strong>的文件</p><p><strong>用法是将未转化的pal文件拖入其上</strong>，转化后的文件可以导入FDE编辑，也可以导入游戏内使用</p><figure><img src="https://bu.dusays.com/2023/09/05/64f69560ed9a8.png" alt="" width="300" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div><h2 id="_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色" tabindex="-1"><a class="header-anchor" href="#_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色" aria-hidden="true">#</a> 4.convpal-true 转化工具和 true-color-palettes 的插件可搭配制作带透明度的配色</h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>目前有一个半透明妖梦的成品，转化后也是 1KB大小（Alt+双击 或者 右键-属性，查看文件大小）</p><p>应该是可以实现全透明或者半透明之类的效果</p><p><strong>我暂时还不会制作，但是可以去问到，如果有人想做的话可以在mod群里 call 我，我再去问问看怎么做</strong></p><p>【已知问题：不能通过 Palette-picker 法加载透明配色】</p><figure><img src="https://bu.dusays.com/2023/09/05/64f6983090f66.png" alt="半透明妖梦配色" width="300" tabindex="0" loading="lazy"><figcaption>半透明妖梦配色</figcaption></figure><figure><img src="https://bu.dusays.com/2023/09/05/64f698aa0017f.png" alt="" width="600" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div>',6);function x(F,C){const a=r("RouterLink");return s(),p("div",null,[g,t("div",d,[h,t("p",null,[i(a,{to:"/about/#%E9%9D%9E%E6%83%B3%E5%A4%A9%E5%88%99%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E6%8C%87%E8%B7%AF"},{default:n(()=>[f]),_:1})]),u,_]),m,t("div",E,[b,y,t("p",null,[i(a,{to:"/mods/DIY/EnablePack.html#%E4%BD%BF%E7%94%A8-shady-loader-%E5%B0%86%E5%B7%B2%E6%9C%89%E7%9A%84%E7%B4%A0%E6%9D%90%E7%BE%8E%E5%8C%96%E5%8C%85%E5%AF%BC%E5%85%A5%E6%B8%B8%E6%88%8F%E5%86%85"},{default:n(()=>[v]),_:1})])]),B])}const z=o(c,[["render",x],["__file","FramedataEditor.html.vue"]]);export{z as default};
