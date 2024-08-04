import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o,e as n}from"./app-hhrdDQ4r.js";const i={},a=n('<div class="hint-container caution"><p class="hint-container-title">旧版本giuroll造成的多次记录Bug</p><p><strong>旧版本giuroll 和 原版TSK 一起使用时，可能会发生一局游戏 KO 后，重复记录多次胜场或者输场的 Bug</strong></p><ul><li><p>已推出 修复版TSK，搭配 giuroll-0.6.15版 使用可修复重复记录的 Bug</p></li><li><p><a href="https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/tsk.zip" target="_blank" rel="noopener noreferrer"><strong>下载单独的TSK插件，将tsk文件夹放于th123文件夹内</strong></a></p></li><li><p>修复版TSK 已包含于【2024-06-01 升级包 和 完整游戏包】</p></li></ul></div><div class="hint-container info"><p class="hint-container-title">简介</p><p><strong>TSK（Tensokukan，天则观）</strong> 可以在本地记录网络对战的战绩（时间、机签、比分等）并给出胜率，也可以查询和筛选对局信息<br> 注册 TSK 账号或登陆旧账号后，也可以在游戏关闭时自动将信息上传至 <a href="https://tenco.info/" target="_blank" rel="noopener noreferrer">Tenco！网站</a></p><p><a href="https://tenco.info/game/2/pov/2/" target="_blank" rel="noopener noreferrer">Tenco! TSK战绩记录网站，在右侧链接栏可找到日文全人类攻略Wiki</a></p><p>Tenco！ 网站的个人信息页面格式，末尾的杠号不能缺少： <code>https://tenco.info/game/2/account/【注册昵称】/</code></p><blockquote><p>例，这是三回的页面： <a href="https://tenco.info/game/2/account/sanhuizhuan/" target="_blank" rel="noopener noreferrer">https://tenco.info/game/2/account/sanhuizhuan/</a></p></blockquote><div class="hint-container info"><p class="hint-container-title">你知道吗</p><p><a href="https://sokureplays.delthas.fr" target="_blank" rel="noopener noreferrer">SokuReplays - Konni Bot在此记录对局，可计分elo和记录比分、卡组等</a></p></div></div><div class="hint-container info"><p class="hint-container-title">本地使用 TSK</p><ul><li><a href="https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/tsk.zip" target="_blank" rel="noopener noreferrer"><strong>下载单独的TSK插件，将tsk文件夹放于th123文件夹内</strong></a></li></ul><figure><img src="https://bu.dusays.com/2023/08/20/64e218f39882a.png" alt="没开游戏，或者匹配出错时，未生效的任务栏托盘图标" tabindex="0" loading="lazy"><figcaption>没开游戏，或者匹配出错时，未生效的任务栏托盘图标</figcaption></figure><figure><img src="https://bu.dusays.com/2023/08/20/64e21902c64bf.png" alt="开了游戏后成功匹配，成功生效的任务栏托盘图标" tabindex="0" loading="lazy"><figcaption>开了游戏后成功匹配，成功生效的任务栏托盘图标</figcaption></figure><ul><li>游戏关闭后，TSK 也会自动退出，并自动上传</li><li><strong>双击图标，或者右键图标点击第一项打开对战表，即是打开信息面板，显示的是你玩的角色的战绩</strong></li><li>双击某一行角色的信息，可以查看你玩该角色时，对战对手角色时的详细信息</li></ul><figure><img src="https://bu.dusays.com/2024/06/01/665b11aa64e8e.png" alt="双击某一行角色的信息，可以查看你玩该角色时，对战对手角色时的详细信息" width="400" tabindex="0" loading="lazy"><figcaption>双击某一行角色的信息，可以查看你玩该角色时，对战对手角色时的详细信息</figcaption></figure><p><strong>在信息面板的标题栏处右键，有更多选项</strong></p><figure><img src="https://bu.dusays.com/2024/06/01/665b0dd3617a0.png" alt="在信息面板的标题栏处右键，有更多功能" width="250" tabindex="0" loading="lazy"><figcaption>在信息面板的标题栏处右键，有更多功能</figcaption></figure><ul><li><strong>打开天则观数据文件</strong>：选择 <code>Default.db</code> 数据文件的路径，这个数据文件就是记录了战绩数据的文件，一般就是在 <code>th123\\tsk\\Default.db</code><ul><li><strong>TSK 老用户可以把之前的<code>Default.db</code>数据文件复制过来新的则的<code>th123\\tsk\\</code>目录下，然后打开新的Tsk，点“打开天则观数据文件”，选择刚复制过来的旧数据，即可导入先前的战绩接着用</strong></li></ul></li><li><strong>撤销更改</strong>：撤销你手贱双击信息而增加的胜局/输局</li><li><strong>对手 Profile 表</strong>：见图，可以查询和某个机签玩的战绩 <ul><li>双击其中某一行查看详细对战记录</li></ul></li></ul><figure><img src="https://bu.dusays.com/2024/06/01/665b12df91bbc.png" alt="选项 - 对手 Profile 表" width="400" tabindex="0" loading="lazy"><figcaption>选项 - 对手 Profile 表</figcaption></figure><ul><li><strong>对战记录查询</strong>：可以按照参数查询对战记录。什么都不填直接确定就是按照时间顺序列出所有对战记录（不可排序）</li></ul></div><div class="hint-container info"><p class="hint-container-title">上传至Tenco！网站 （TSK Report）</p><ol><li>注册账号前先想好一个账号名，只能是英文字母和下划线<br> 假如要注册一个<code>ABC</code>账号名，先打开 <a href="https://tenco.info/game/2/account/ABC/" target="_blank" rel="noopener noreferrer">https://tenco.info/game/2/account/ABC/</a> 这个网址，查看这个页面是否已经被人注册<br> 被注册了就换个账号名，如<code>A1_B2_C3</code>，直到出现 404 的页面，说明这个账号名还没被注册</li></ol><figure><img src="https://bu.dusays.com/2024/06/01/665b173c94c49.png" alt="账号名已被注册" width="400" tabindex="0" loading="lazy"><figcaption>账号名已被注册</figcaption></figure><figure><img src="https://bu.dusays.com/2024/06/01/665b175ee420d.png" alt="出现 404 的页面，说明这个账号名还没被注册" width="400" tabindex="0" loading="lazy"><figcaption>出现 404 的页面，说明这个账号名还没被注册</figcaption></figure><ol start="2"><li>开始注册账号或者登陆先前已有的账号<br> 密码最好用复杂点的，大写字母+小写字母+数字+特殊符号，<strong>弱密码可能会导致注册失败</strong></li></ol><figure><img src="https://bu.dusays.com/2024/06/01/665b181a76782.png" alt="" width="800" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li><strong>输完密码后，不管它最终弹的结果是什么，先尝试打开你的个人页面 <a href="https://tenco.info/game/2/account/A1_B2_C3/" target="_blank" rel="noopener noreferrer">https://tenco.info/game/2/account/A1_B2_C3/</a> 检验是否从 404 变成了正常页面，是的话就注册成功了</strong></li></ol><div class="hint-container warning"><p class="hint-container-title">TSK上传提示错误</p><p><strong>TSK偶尔上传失败完全正常，等你之后再上传也许就可以了</strong></p></div></div><div class="hint-container caution"><p class="hint-container-title">开 则2 等 MOD 后 TSK 识别失败的问题</p><p><strong>因为TSK是通过游戏的标题来识别游戏的，所以像 则2 这种会修改游戏标题的 MOD 会导致 TSK 识别出现问题</strong></p><div class="hint-container tip"><p class="hint-container-title">解决办法</p><p><strong>打开 <code>th123\\tsk\\tsk_110A\\SWRSAddr.ini</code> 和 <code>th123\\modules\\Giuroll\\giuroll.ini</code></strong></p><figure><img src="https://bu.dusays.com/2024/06/01/665b207beef49.png" alt="" width="600" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="https://bu.dusays.com/2024/06/01/665b1fa8b10f0.png" alt="" width="800" tabindex="0" loading="lazy"><figcaption></figcaption></figure></div></div>',5),r=[a];function s(l,c){return o(),e("div",null,r)}const u=t(i,[["render",s],["__file","TSK.html.vue"]]),d=JSON.parse('{"path":"/mods/QoLMods/TSK.html","title":"战绩记录工具-TSK","lang":"zh-CN","frontmatter":{"title":"战绩记录工具-TSK","icon":"circle-info","order":1,"editLink":false,"author":"三回転Tstar","date":"2024-06-01T00:00:00.000Z","description":"旧版本giuroll造成的多次记录Bug 旧版本giuroll 和 原版TSK 一起使用时，可能会发生一局游戏 KO 后，重复记录多次胜场或者输场的 Bug 已推出 修复版TSK，搭配 giuroll-0.6.15版 使用可修复重复记录的 Bug 下载单独的TSK插件，将tsk文件夹放于th123文件夹内 修复版TSK 已包含于【2024-06-01 ...","head":[["meta",{"property":"og:url","content":"https://wiki.514.live/mods/QoLMods/TSK.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"战绩记录工具-TSK"}],["meta",{"property":"og:description","content":"旧版本giuroll造成的多次记录Bug 旧版本giuroll 和 原版TSK 一起使用时，可能会发生一局游戏 KO 后，重复记录多次胜场或者输场的 Bug 已推出 修复版TSK，搭配 giuroll-0.6.15版 使用可修复重复记录的 Bug 下载单独的TSK插件，将tsk文件夹放于th123文件夹内 修复版TSK 已包含于【2024-06-01 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bu.dusays.com/2023/08/20/64e218f39882a.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-13T10:00:59.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-06-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-13T10:00:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"战绩记录工具-TSK\\",\\"image\\":[\\"https://bu.dusays.com/2023/08/20/64e218f39882a.png\\",\\"https://bu.dusays.com/2023/08/20/64e21902c64bf.png\\",\\"https://bu.dusays.com/2024/06/01/665b11aa64e8e.png =400x\\",\\"https://bu.dusays.com/2024/06/01/665b0dd3617a0.png =250x\\",\\"https://bu.dusays.com/2024/06/01/665b12df91bbc.png =400x\\",\\"https://bu.dusays.com/2024/06/01/665b173c94c49.png =400x\\",\\"https://bu.dusays.com/2024/06/01/665b175ee420d.png =400x\\",\\"https://bu.dusays.com/2024/06/01/665b181a76782.png =800x\\",\\"https://bu.dusays.com/2024/06/01/665b207beef49.png =600x\\",\\"https://bu.dusays.com/2024/06/01/665b1fa8b10f0.png =800x\\"],\\"datePublished\\":\\"2024-06-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-06-13T10:00:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1717246331000,"updatedTime":1718272859000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":7}]},"readingTime":{"minutes":3.86,"words":1158},"localizedDate":"2024年6月1日","autoDesc":true,"excerpt":"<div class=\\"hint-container caution\\">\\n<p class=\\"hint-container-title\\">旧版本giuroll造成的多次记录Bug</p>\\n<p><strong>旧版本giuroll 和 原版TSK 一起使用时，可能会发生一局游戏 KO 后，重复记录多次胜场或者输场的 Bug</strong></p>\\n<ul>\\n<li>\\n<p>已推出 修复版TSK，搭配 giuroll-0.6.15版 使用可修复重复记录的 Bug</p>\\n</li>\\n<li>\\n<p><a href=\\"https://gitee.com/sanhuizhuan/SokuMods/releases/download/v1/tsk.zip\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><strong>下载单独的TSK插件，将tsk文件夹放于th123文件夹内</strong></a></p>\\n</li>\\n<li>\\n<p>修复版TSK 已包含于【2024-06-01 升级包 和 完整游戏包】</p>\\n</li>\\n</ul>\\n</div>"}');export{u as comp,d as data};
