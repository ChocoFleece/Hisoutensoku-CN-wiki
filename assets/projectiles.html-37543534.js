import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as l,c as i,a as t,b as e,d as n,f as s}from"./app-ab845d49.js";const d={},g=t("h1",{id:"",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),c={href:"https://hisouten.koumakan.jp/wiki/Projectiles#Density",target:"_blank",rel:"noopener noreferrer"},h=s('<h2 id="弹幕类型" tabindex="-1"><a class="header-anchor" href="#弹幕类型" aria-hidden="true">#</a> 弹幕类型</h2><p>弹幕共分为三种类型：<strong>普通弹幕</strong>、<strong>磨耗弹幕</strong>和<strong>特殊弹幕</strong>。</p><ol><li><strong>普通弹幕</strong>可以被擦弹消除，并且不会对擦弹的玩家造成任何影响。大多数技能都会产生这种类型的弹幕。</li><li><strong>磨耗弹幕</strong>可以被擦弹消除，但擦弹时会消耗擦弹玩家的灵力值。很多符卡都是这种类型的弹幕，而只有少数技能具有这种属性。</li><li><strong>特殊弹幕</strong>即使在花云天气下也无法被擦弹。游戏中很少有弹幕是这种类型的，甚至符卡也几乎没有这种特殊弹幕。</li></ol><blockquote><p>请注意，某些普通弹幕具有<strong>体术</strong>判定属性。这使得其他玩家无法擦弹，但它们在游戏数据中仍然是普通弹幕。</p></blockquote><h2 id="相杀" tabindex="-1"><a class="header-anchor" href="#相杀" aria-hidden="true">#</a> 相杀</h2><p>与其他格斗游戏不同的是，非想天则中的弹幕并不总是互相抵消。实际上当它们相遇时，其中一个弹幕可能会完全消除另一个弹幕，并且自身不受影响。因此，衡量弹幕强度的标准被称之为<strong>相杀</strong>。</p><p>弹幕的相杀由两个主要属性决定：<strong>相杀等级</strong>、<strong>弹幕强度</strong>。</p><h3 id="相杀等级" tabindex="-1"><a class="header-anchor" href="#相杀等级" aria-hidden="true">#</a> 相杀等级</h3><p>一般的，我们将弹幕的相杀等级分为 <strong>S &gt; A &gt; B &gt; C</strong> 四种。正如我所写的符号关系一样，如果低相杀等级的弹幕与比之高相杀等级的弹幕相遇，低相杀的弹幕将被完全摧毁，而不会影响高相杀的弹幕。</p><ul><li><strong>只有符卡拥有S级和A级相杀</strong>，S级和A级相杀仅仅用于考虑符卡弹幕之间的相杀判定，符卡的弹幕相杀一定高于技能弹幕。</li><li><strong>B级相杀</strong>弹幕通常是由角色的 <strong>C射击</strong> 产生的弹幕。部分 <strong>C射击</strong> 也可以生成 <strong>B级相杀</strong> 弹幕。</li><li><strong>C级相杀</strong>弹幕通常是由角色的 <strong>B射击</strong> 产生的弹幕。部分 <strong>B射击</strong> 也可以生成 <strong>C级相杀</strong> 弹幕。</li></ul><h3 id="弹幕强度" tabindex="-1"><a class="header-anchor" href="#弹幕强度" aria-hidden="true">#</a> 弹幕强度</h3><p>弹幕强度可以理解为弹幕拥有的生命值，但是<strong>仅当弹幕与同级相杀的其他弹幕相遇时才有意义</strong>。<br> 因此在考虑弹幕强度之前，请先确保两者相杀等级相同。当满足上面要求的两种弹幕相遇时，具有更多生命值的弹幕将剩余下来，而其生命值将会变为原生命值减去生命值较小的弹幕的生命值。这个生命值的损失数量与弹幕的Hit数无关，仅仅取决于弹幕强度本身。</p><p>对于一个弹幕与另一个更高或同等相杀的弹幕接触的每一帧，该弹幕都会损失1点生命值。当弹幕的生命值变为0时，弹幕就会被摧毁。<br> 一些生命值较高的弹幕可能会因为在离开接触状态前没有损失所有的生命值而出现两个弹幕相互穿过的情况。<br> 例如帕秋莉的原236B/C，强度为<strong>B10x1</strong>，需要<strong>10帧</strong>接触才能被摧毁。</p><blockquote><p>同样，阳伞每帧都会将与其接触的弹幕减去1生命值。生命值较高的弹幕实际上可能会穿透阳伞并击中角色，例如高达的6C或帕秋莉的原236C。</p></blockquote><p>另外需要注意的是，因为弹幕与同等相杀的弹幕相遇时，每帧只会损失1点生命值。这也可能导致单个高生命值且快速的弹幕不会被大量同级别的低相杀弹幕摧毁，即使这些弹幕的总生命值可能大于这单个弹幕的生命值。通过使用西瓜的**满蓄力元鬼玉[B10×1]<strong>与帕秋莉的</strong>H6C[B1x10]**相杀，可以看到这一点。<br> 大部分情况下，总会出现两颗6C弹幕在同一帧内与元鬼玉接触的情况，导致两颗6C弹幕都被摧毁，同时仅从元鬼玉中移除1点生命值。这使得元鬼玉有足够的生命值来度过余下的过程而不被摧毁。</p><hr><p>用于综合表示弹幕相杀及强度的写法如下：<strong>&lt;相杀等级&gt;&lt;弹幕强度&gt; x &lt;弹幕数量&gt;</strong>。<br> 因此，两个具有四点生命值的C级弹幕被称为C4x2<br> 一个具有一点生命值的B级弹幕被称为B1或B1x1。</p><p>要亲自试验此机制的情况下，请使用帕秋莉的原236与她自己的6C来测试。<br> 她的原236为B10x1，是游戏中非SC的最高弹幕强度的弹幕之一。不过她的6C同样也是B级相杀，强度为B1。<br> 6C发射五发子弹，所以在与原236碰撞后，6C的子弹就会消失，而原236只剩下五点生命值。</p><blockquote><p>请注意，只要弹幕没有被完全摧毁，减少其生命值对其伤害和命中次数没有任何影响。</p></blockquote><p>然而，帕秋莉的H6C可以发射十发子弹。这意味着她的H6C为B1x10，相当于单个原236的强度。当这两个弹幕相遇时，原236和H6C都会完全消失。</p><p>作为参考，高达的C为B6x1，灵梦的C为B3x1，魔理沙的6C为B2x1，咲夜的C为B1x7，铃仙的C为B1x1(爆风部分为B4x1)，八云紫的C为B1x5。</p><h2 id="抗擦弹性" tabindex="-1"><a class="header-anchor" href="#抗擦弹性" aria-hidden="true">#</a> 抗擦弹性</h2><p>与其他格斗游戏不同，非想天则中的弹幕可以通过冲刺、飞行或具有擦弹属性的行动来对其擦弹。<br> 有些弹幕会在被擦弹时消失，而另一些弹幕则不会。对于在擦弹时消失的弹幕，这可以是瞬间的，也可以需要特定的擦弹时间。<br> 例如，虽然小町的铜钱在擦过时会立即消失，但她的C弹幕需要擦10帧才能摧毁。如果对手只擦9帧，然后退出擦弹尝试攻击，那么她仍然会被该弹幕命中。</p><p>激光攻击通常具有无限的抗擦弹性，无法被擦弹消除，但基本都可以直接被相杀。</p><h2 id="全人类弹幕攻击相杀表" tabindex="-1"><a class="header-anchor" href="#全人类弹幕攻击相杀表" aria-hidden="true">#</a> 全人类弹幕攻击相杀表</h2>',25),x=t("br",null,null,-1),p={href:"https://hisouten.koumakan.jp/wiki/Projectiles#Bullet_Density_Chart",target:"_blank",rel:"noopener noreferrer"},C=s('<h3 id="博丽灵梦" tabindex="-1"><a class="header-anchor" href="#博丽灵梦" aria-hidden="true">#</a> 博丽灵梦</h3><p>普通技能</p><table><thead><tr><th style="text-align:center;">技能名称</th><th style="text-align:center;">相杀</th><th style="text-align:center;">蓄力相杀</th><th style="text-align:center;">抗擦弹性</th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">B系列(B 6B J2B JB)</td><td style="text-align:center;">C1x5</td><td style="text-align:center;">C1x10</td><td style="text-align:center;">1F</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">2B</td><td style="text-align:center;">-</td><td style="text-align:center;">-</td><td style="text-align:center;">∞</td><td style="text-align:center;">不参与相杀</td></tr><tr><td style="text-align:center;">C系列(C JC J2C)</td><td style="text-align:center;">B3x1</td><td style="text-align:center;">B6x1</td><td style="text-align:center;">10F</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">2C</td><td style="text-align:center;">C1x1</td><td style="text-align:center;">-</td><td style="text-align:center;">∞</td><td style="text-align:center;"></td></tr></tbody></table>',3);function B(u,b){const r=a("ExternalLinkIcon");return l(),i("div",null,[g,t("blockquote",null,[t("p",null,[e("内容主要来自于"),t("a",c,[e("英文Wiki相关页面"),n(r)]),e("，经过个人翻译得到的如下页面。")])]),h,t("p",null,[e("暂时不完整，可参考英文Wiki"),x,t("a",p,[e("https://hisouten.koumakan.jp/wiki/Projectiles#Bullet_Density_Chart"),n(r)])]),C])}const k=o(d,[["render",B],["__file","projectiles.html.vue"]]);export{k as default};
