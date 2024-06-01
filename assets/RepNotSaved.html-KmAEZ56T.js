import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c,a as e,b as p,w as n,d as t}from"./app-I1SBuRAs.js";const d={},m={class:"hint-container info"},u=e("p",{class:"hint-container-title"},"问题原因",-1),h=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"configex123.ini配置文件设置有误"),e("p",null,[e("strong",null,[t("你的 "),e("code",null,"th123"),t(" 文件夹内的 "),e("code",null,"configex123.ini"),t(" 配置文件有误")])]),e("p",null,[e("strong",null,[t("复制下面的内容替换掉你的 "),e("code",null,"[replay]"),t(" 配置即可")])]),e("div",{class:"language-text line-numbers-mode","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`[replay]
####【自定义保存的rep文件名格式】################
# %p1 表示 1P机签
# %c1 表示 1P机体名
# %y %m %d %h %min %sec 表示时间年 月 日 时 分 秒
# \\  表示文件夹
###########################################

file_vs=[%p1]_VS_[%p2]\\%y_%m_%d_%hh%minm%secs_%p1(%c1)_%p2(%c2)
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])])],-1),v=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"或者可能是机签名问题"),e("p",null,[e("strong",null,"可能是机签末尾带了空格，或者包含非法字符等，尝试修改名字（点重命名，删除原有的名字，写新的名字）")])],-1);function _(g,y){const l=s("Tabs");return r(),c("div",null,[e("div",m,[u,p(l,{id:"1",data:[{id:"configex123.ini配置文件设置有误"},{id:"或者可能是机签名问题"}]},{title0:n(({value:i,isActive:a})=>[t("configex123.ini配置文件设置有误")]),title1:n(({value:i,isActive:a})=>[t("或者可能是机签名问题")]),tab0:n(({value:i,isActive:a})=>[h]),tab1:n(({value:i,isActive:a})=>[v]),_:1},8,["data"])])])}const x=o(d,[["render",_],["__file","RepNotSaved.html.vue"]]),T=JSON.parse('{"path":"/FAQ/In-Games/RepNotSaved.html","title":"Replay里创建了文件夹但是没保存文件","lang":"zh-CN","frontmatter":{"title":"Replay里创建了文件夹但是没保存文件","icon":"circle-info","order":4,"editLink":false,"author":"三回転Tstar","date":"2024-03-09T00:00:00.000Z","description":"问题原因","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://wiki.514.live/en/FAQ/In-Games/RepNotSaved.html"}],["meta",{"property":"og:url","content":"https://wiki.514.live/FAQ/In-Games/RepNotSaved.html"}],["meta",{"property":"og:site_name","content":"非想天则指南"}],["meta",{"property":"og:title","content":"Replay里创建了文件夹但是没保存文件"}],["meta",{"property":"og:description","content":"问题原因"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-10T15:28:22.000Z"}],["meta",{"property":"article:author","content":"三回転Tstar"}],["meta",{"property":"article:published_time","content":"2024-03-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-10T15:28:22.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Replay里创建了文件夹但是没保存文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-10T15:28:22.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"三回転Tstar\\"}]}"]]},"headers":[],"git":{"createdTime":1710084502000,"updatedTime":1710084502000,"contributors":[{"name":"Tstar00","email":"1434716883@qq.com","commits":1}]},"readingTime":{"minutes":0.83,"words":248},"localizedDate":"2024年3月9日","autoDesc":true,"excerpt":"<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">问题原因</p>\\n\\n</div>\\n"}');export{x as comp,T as data};
