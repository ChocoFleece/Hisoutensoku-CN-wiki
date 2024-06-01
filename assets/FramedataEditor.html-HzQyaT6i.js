import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as p,c as u,a as t,b as n,w as a,e as s,d as l}from"./app-TCpCiBh8.js";const h={},m=t("h2",{id:"_1-将已经制作好的角色皮肤改色-pal-文件导入游戏",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1-将已经制作好的角色皮肤改色-pal-文件导入游戏"},[t("span",null,"1.将已经制作好的角色皮肤改色 .pal 文件导入游戏")])],-1),g={class:"hint-container info"},_=t("p",{class:"hint-container-title"},"相关信息",-1),y={class:"hint-container tip"},f=t("p",{class:"hint-container-title"},"Shady-loader法（推荐）",-1),b=t("p",null,[t("strong",null,[l("将 pal 文件按规则命名，"),t("code",null,"data_character_对应角色的名字_palette00X.pal")]),l("（"),t("code",null,"X"),l("取值为"),t("code",null,"0-7"),l("，一共八个配色位）")],-1),k=t("p",null,[t("strong",null,[l("如果我们想设置其为瓜的第一个配色，"),t("br"),l("那么对应角色的名字中，瓜就是 "),t("code",null,"suika"),l("，第一个配色就是 000")])],-1),v=t("p",null,[t("strong",null,[l("最终我们得到 "),t("code",null,"data_character_suika_palette000.pal")])],-1),w=t("p",null,[t("strong",null,[l("然后把这个 pal 文件直接打包成 zip 包或者文件夹 "),t("mark",null,"（压缩包里不要多套一层文件夹）"),l("，放入 "),t("code",null,"shady-loader"),l(" 文件夹内，在游戏主菜单按 F2 菜单加载即可")])],-1),x=t("strong",null,"shady-loader 使用方法传送门",-1),E={class:"hint-container tip"},F=t("p",{class:"hint-container-title"},"Palette-picker法",-1),D=t("strong",null,"Mod说明：改色管理 - palette-picker",-1),A=t("figure",null,[t("img",{src:"https://bu.dusays.com/2024/01/21/65acddebbe890.webp",alt:"Palette-picker使用效果如图",width:"400",tabindex:"0",loading:"lazy"}),t("figcaption",null,"Palette-picker使用效果如图")],-1),T=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"th123c.dat 解包封包古法"),t("p",null,"新则不需要这种方法，1.10 版本不能使用插件，需要这种方法"),t("p",null,"没什么好说的，偷梁换柱即可")],-1),z=t("div",{class:"hint-container tip"},[t("p",{class:"hint-container-title"},"data文件夹法（不推荐）"),t("p",null,[l("在 "),t("code",null,"MemoryPatch"),l(" 里启用了 "),t("code",null,"FileSystemFirst"),l(" 后 "),t("mark",null,[t("strong",null,"（警告：开启可能会增长游戏加载时间，即使你没有通过它加载任何东西）")])]),t("p",null,[l("在 "),t("code",null,"th123"),l(" 文件夹内新建文件夹命名为 "),t("code",null,"data，继续在"),l(),t("code",null,"data"),l(" 文件夹里面新建 "),t("code",null,"character"),l(" 文件夹，再继续创建如图的角色名文件夹，")]),t("p",null,[l("将得到的 "),t("strong",null,"513 字节"),l(),t("code",null,"palette000.pal"),l(" 文件放入角色名文件夹内 "),t("mark",null,"（见下方附录）"),l("，然后返回游戏主菜单，再进入选人界面即可。"),t("strong",null,"> （支持热更新，每次回主菜单再进来选人界面就可以重新刷新读取，不需要重开游戏）")]),t("p",null,[t("strong",null,[l("把 "),t("code",null,"data"),l(" 文件夹或者 "),t("code",null,"character"),l(" 文件夹之类的改个名，即可破坏这种导入方式以取消导入")])]),t("figure",null,[t("img",{src:"https://bu.dusays.com/2023/09/13/6500902380b28.png",alt:"成品就这样，注意路径文件夹角色名是否正确，pal文件命名格式是否正确，是否是游戏和编辑器可以读取的格式",width:"800",tabindex:"0",loading:"lazy"}),t("figcaption",null,"成品就这样，注意路径文件夹角色名是否正确，pal文件命名格式是否正确，是否是游戏和编辑器可以读取的格式")]),t("ul",null,[t("li",null,[t("code",null,"palette000.pal"),l(" 对应 "),t("strong",null,"第一个"),l(" 配色位")]),t("li",null,[t("code",null,"palette001.pal"),l(" 对应 "),t("strong",null,"第二个"),l(" 配色位")]),t("li",null,"..."),t("li",null,[t("code",null,"palette007.pal"),l(" 对应 "),t("strong",null,"第八个也就是最后一个"),l(" 配色位")])]),t("div",{class:"hint-container important"},[t("p",{class:"hint-container-title"},"举个例子吧"),t("p",null,[t("strong",null,[l("需求：我想要将 "),t("code",null,"黑白瓜.pal"),l(" 这个配色放到瓜的"),t("code",null,"第一个配色位"),l("上")])]),t("p",null,[t("strong",null,"步骤：")]),t("ol",null,[t("li",null,[t("strong",null,[l("在 "),t("code",null,"th123"),l(" 文件夹内新建文件夹，取名为 "),t("code",null,"data")])]),t("li",null,[t("strong",null,[l("在这个 "),t("code",null,"data"),l(" 文件夹内新建文件夹，取名为 "),t("code",null,"character")])]),t("li",null,[t("strong",null,[l("在 "),t("code",null,"character"),l(" 文件夹内新建文件夹，取名就是对应角色的名字，瓜就是 "),t("code",null,"suika"),t("mark",null,"（见下方附录）")])]),t("li",null,[t("strong",null,[l("将 "),t("code",null,"黑白瓜.pal"),l(" 文件移动到这个对应角色的名字的文件夹内")])]),t("li",null,[t("strong",null,[l("将 "),t("code",null,"黑白瓜.pal"),l(" 文件名改为 "),t("code",null,"palette000.pal"),l("（000就是第一个）")])]),t("li",null,[t("strong",null,"游戏不用关，回到主菜单，重新进练习模式选人即可")])])])],-1),B=s('<details class="hint-container details"><summary>对应角色的名字（附录）</summary><div class="hint-container note"><p class="hint-container-title">对应角色的名字</p><ol><li>alice</li><li>aya</li><li>chirno</li><li>iku</li><li>komachi</li><li>marisa</li><li>meirin</li><li>patchouli</li><li>reimu</li><li>remilia</li><li>sakuya</li><li>sanae</li><li>suika</li><li>suwako</li><li>tenshi</li><li>udonge</li><li>utsuho</li><li>youmu</li><li>yukari</li><li>yuyuko</li></ol></div></details>',1),P=t("h2",{id:"_2-自己使用编辑器制作角色皮肤改色",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-自己使用编辑器制作角色皮肤改色"},[t("span",null,"2.自己使用编辑器制作角色皮肤改色")])],-1),S={class:"hint-container info"},N=t("p",{class:"hint-container-title"},"下载 FramedataEditor（FDE）编辑器并使用改色功能",-1),C=t("strong",null,"下载链接传送门，压缩包内有简单操作说明",-1),Z=s('<figure><img src="https://bu.dusays.com/2024/01/21/65acdd09285ee.webp" alt="下载mod工具" width="320" tabindex="0" loading="lazy"><figcaption>下载mod工具</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">注意</p><p><strong>首次打开会提示选择游戏 th123c.dat 数据位置</strong></p><p><strong>注意需要将游戏路径（文件夹名称）改为全英文，否则会报错</strong></p><details class="hint-container details"><summary>FrameDataEditor 编辑器操作说明</summary><div class="hint-container info"><p class="hint-container-title">FrameDataEditor 编辑器操作说明</p><p>左上角，先导入角色： File &gt; import &gt; framedata &gt; from game package</p><p>然后导入配色（自己新建配色则忽略）： File &gt; import &gt; palette &gt; from file</p><p>开始编辑配色，切换英文输入法，<strong>按 H 可关闭判定框，然后可以滚轮放大</strong></p><p>打开调色板，左上角 View &gt; palette editor，然后鼠标可以悬浮查看改色区域</p><p>导出配色： File &gt; export &gt; palette &gt; to file 【注意命名和后缀，如palette000.pal】</p><p>一共有 8 个配色位所以你只能写 000-007 内的范围。</p><p><strong>正常你会导出得到一个513字节的文件（Alt+双击 或者 右键-属性，查看文件大小）</strong><br> 此文件可以支持再次导入FDE编辑器编辑，或者直接导入游戏使用，不需要再进行什么转化。</p><figure><img src="https://bu.dusays.com/2024/01/21/65acdf0948973.webp" alt="如图，改色完成，左上角导出得到 pal 文件" width="400" tabindex="0" loading="lazy"><figcaption>如图，改色完成，左上角导出得到 pal 文件</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdf265b777.webp" alt="导入进游戏内的效果" width="400" tabindex="0" loading="lazy"><figcaption>导入进游戏内的效果</figcaption></figure></div></details></div>',2),I=s('<h2 id="_3-将前人使用老工具-绯色二-制作的皮肤配色-pal-文件转化格式以导入游戏和编辑器" tabindex="-1"><a class="header-anchor" href="#_3-将前人使用老工具-绯色二-制作的皮肤配色-pal-文件转化格式以导入游戏和编辑器"><span>3.将前人使用老工具“绯色二”制作的皮肤配色 .pal 文件转化格式以导入游戏和编辑器</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>如果pal文件是显示 <strong>1.02KB（Alt+双击 或者 右键-属性，查看文件大小）</strong> 的，则是使用老工具“绯色二”制作的<strong>未转化格式</strong>，可继续在“绯色二”上编辑，不能导入FDE编辑，也不能直接导入游戏</p><p>使用 convpal-old-FDE 转化工具将其转化为 <strong>513 字节</strong>的文件</p><p><strong>用法是将未转化的pal文件拖入其上</strong>，转化后的文件可以导入FDE编辑，也可以导入游戏内使用</p><figure><img src="https://bu.dusays.com/2024/03/01/65e158e8763d5.png" alt="新工具 Shady-Packer" width="400" tabindex="0" loading="lazy"><figcaption>新工具 Shady-Packer</figcaption></figure></div><h2 id="_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色" tabindex="-1"><a class="header-anchor" href="#_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色"><span>4.convpal-true 转化工具和 true-color-palettes 的插件可搭配制作带透明度的配色</span></a></h2><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>上面的新工具 Shady-Packer 内有一个半透明妖梦的成品，是转化后的格式，也是 1KB大小</p><p>我暂时还不会制作，但是可以去问，如果有人想做的话可以在mod群里 call 我，我再去问问看怎么做</p><figure><img src="https://bu.dusays.com/2024/01/21/65acde92efe8b.webp" alt="半透明妖梦配色" width="200" tabindex="0" loading="lazy"><figcaption>半透明妖梦配色</figcaption></figure><figure><img src="https://bu.dusays.com/2024/01/21/65acdeda97f8c.webp" alt="半透明妖梦配色2" width="500" tabindex="0" loading="lazy"><figcaption>半透明妖梦配色2</figcaption></figure><div class="hint-container warning"><p class="hint-container-title">已知问题</p><ul><li><strong>无法通过 Palette-picker 法加载透明配色</strong></li></ul></div></div>',4);function V(Y,M){const o=c("RouteLink"),r=c("Tabs");return p(),u("div",null,[m,t("div",g,[_,n(r,{id:"5",data:[{id:"Shady-loader法（推荐）"},{id:"Palette-picker法"},{id:"th123c.dat 解包封包古法"},{id:"data文件夹法（不推荐）"}]},{title0:a(({value:e,isActive:i})=>[l("Shady-loader法（推荐）")]),title1:a(({value:e,isActive:i})=>[l("Palette-picker法")]),title2:a(({value:e,isActive:i})=>[l("th123c.dat 解包封包古法")]),title3:a(({value:e,isActive:i})=>[l("data文件夹法（不推荐）")]),tab0:a(({value:e,isActive:i})=>[t("div",y,[f,b,k,v,w,t("p",null,[n(o,{to:"/mods/DIY/Shady-loader.html"},{default:a(()=>[x]),_:1})])])]),tab1:a(({value:e,isActive:i})=>[t("div",E,[F,t("p",null,[n(o,{to:"/mods/DIY/mods/AdvancedMods/palette-picker.html"},{default:a(()=>[D]),_:1})]),A])]),tab2:a(({value:e,isActive:i})=>[T]),tab3:a(({value:e,isActive:i})=>[z]),_:1},8,["data"]),B]),P,t("div",S,[N,t("p",null,[n(o,{to:"/about/#%E9%9D%9E%E6%83%B3%E5%A4%A9%E5%88%99%E8%B5%84%E6%BA%90%E4%B8%8B%E8%BD%BD%E6%8C%87%E8%B7%AF"},{default:a(()=>[C]),_:1})]),Z]),I])}const K=d(h,[["render",V],["__file","FramedataEditor.html.vue"]]),R=JSON.parse('{"path":"/mods/DIY/FramedataEditor.html","title":"制作角色改色和导入游戏","lang":"zh-CN","frontmatter":{"title":"制作角色改色和导入游戏","icon":"circle-info","order":2,"editLink":false,"author":"三回転Tstar","date":"2023-09-04T00:00:00.000Z","description":"1.将已经制作好的角色皮肤改色 .pal 文件导入游戏 相关信息 对应角色的名字（附录） 对应角色的名字 alice aya chirno iku komachi marisa meirin patchouli reimu remilia sakuya sanae suika suwako tenshi udonge utsuho youmu yuka...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/mods/DIY/FramedataEditor.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/mods/DIY/FramedataEditor.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"制作角色改色和导入游戏"}],["meta",{"property":"og:description","content":"1.将已经制作好的角色皮肤改色 .pal 文件导入游戏 相关信息 对应角色的名字（附录） 对应角色的名字 alice aya chirno iku komachi marisa meirin patchouli reimu remilia sakuya sanae suika suwako tenshi udonge utsuho youmu yuka..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2024/01/21/65acddebbe890.webp =400x"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-10T06:28:02.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2023-09-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-10T06:28:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"制作角色改色和导入游戏\\",\\"image\\":[\\"https://bu.dusays.com/2024/01/21/65acddebbe890.webp =400x\\",\\"https://bu.dusays.com/2023/09/13/6500902380b28.png =800x\\",\\"https://bu.dusays.com/2024/01/21/65acdd09285ee.webp =320x\\",\\"https://bu.dusays.com/2024/01/21/65acdf0948973.webp =400x\\",\\"https://bu.dusays.com/2024/01/21/65acdf265b777.webp =400x\\",\\"https://bu.dusays.com/2024/03/01/65e158e8763d5.png =400x\\",\\"https://bu.dusays.com/2024/01/21/65acde92efe8b.webp =200x\\",\\"https://bu.dusays.com/2024/01/21/65acdeda97f8c.webp =500x\\"],\\"datePublished\\":\\"2023-09-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-10T06:28:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[{"level":2,"title":"1.将已经制作好的角色皮肤改色 .pal 文件导入游戏","slug":"_1-将已经制作好的角色皮肤改色-pal-文件导入游戏","link":"#_1-将已经制作好的角色皮肤改色-pal-文件导入游戏","children":[]},{"level":2,"title":"2.自己使用编辑器制作角色皮肤改色","slug":"_2-自己使用编辑器制作角色皮肤改色","link":"#_2-自己使用编辑器制作角色皮肤改色","children":[]},{"level":2,"title":"3.将前人使用老工具“绯色二”制作的皮肤配色 .pal 文件转化格式以导入游戏和编辑器","slug":"_3-将前人使用老工具-绯色二-制作的皮肤配色-pal-文件转化格式以导入游戏和编辑器","link":"#_3-将前人使用老工具-绯色二-制作的皮肤配色-pal-文件转化格式以导入游戏和编辑器","children":[]},{"level":2,"title":"4.convpal-true 转化工具和 true-color-palettes 的插件可搭配制作带透明度的配色","slug":"_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色","link":"#_4-convpal-true-转化工具和-true-color-palettes-的插件可搭配制作带透明度的配色","children":[]}],"git":{"createdTime":1690871118000,"updatedTime":1712730482000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":5},{"name":"ChocoFleece","email":"zhongzi2333@gmail.com","commits":1}]},"readingTime":{"minutes":4.97,"words":1492},"localizedDate":"2023年9月4日","autoDesc":true,"excerpt":"<h2>1.将已经制作好的角色皮肤改色 .pal 文件导入游戏</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">相关信息</p>\\n\\n<details class=\\"hint-container details\\"><summary>对应角色的名字（附录）</summary>\\n<div class=\\"hint-container note\\">\\n<p class=\\"hint-container-title\\">对应角色的名字</p>\\n<ol>\\n<li>alice</li>\\n<li>aya</li>\\n<li>chirno</li>\\n<li>iku</li>\\n<li>komachi</li>\\n<li>marisa</li>\\n<li>meirin</li>\\n<li>patchouli</li>\\n<li>reimu</li>\\n<li>remilia</li>\\n<li>sakuya</li>\\n<li>sanae</li>\\n<li>suika</li>\\n<li>suwako</li>\\n<li>tenshi</li>\\n<li>udonge</li>\\n<li>utsuho</li>\\n<li>youmu</li>\\n<li>yukari</li>\\n<li>yuyuko</li>\\n</ol>\\n</div>\\n</details>\\n</div>"}');export{K as comp,R as data};
