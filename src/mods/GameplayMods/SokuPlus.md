---
title: SokuPlus改版Mod

# 标题
icon: circle-info
# 图标
order: 4
# 数字越小，文章左侧排序越靠上
editLink: false
#禁用Github编辑按钮
author: 三回転Tstar
#作者
date: 2024-03-04
#文章编辑日期
---

### SokuPlus改版Mod
::: warning 
**SokuPlus 是一个改版 Mod，对游戏系统和角色招数数据进行了大量修改**

**注意！此 mod 需要双方一起使用且版本相同**

- **新版已不再必需 Win7 系统，Win10、Win11 等也可以玩**
:::

::: caution 网战请关闭 giuroll 回滚使用，否则会发生不同步
- **网战请关闭 giuroll 回滚使用，否则会发生不同步**

- **如琪露诺的原214和魔理沙等改成故事模式SC的招数，会根据自己 Config 菜单内的难度设置变化而变化，建议双方的难度设置为 Easy 或 Normal（双方要一样否则不同步）**
:::

::: tip 下载 SokuPlus Mod
SokuPlus改版Mod **[**可以在我的网盘或mod群的群文件内找到 “Mod 先行版” 这个文件夹，就在里面了**](/about/)**
:::

:::: info 安装 SokuPlus Mod
1、打开压缩包`【2025-02-05】SokuPlusLoader.zip`，里面有个 `th123` 文件夹，将其与游戏本体的 `th123` 合并，注意不要把这个 th123 文件夹直接挪到本体里面去了，是要合并文件夹

2、[**如何开关配置mod**](/mods/WhatsMod.html)，启用 SokuPlus Mod（方式二选一，各有冲突的 mod）

3、运行游戏，可以进去练习模式选灵梦，使用 6C 看看有没有修改成功

4、如果你想恢复原版游戏，禁用 SokuPlus mod 并保存配置即可

::: note
方式一、启用 SokuPlusLoader.dll 
✅可用： PracticeEX、Labtool
❌冲突： Shady-loader

方式二、启用 SokuPlus.dll
✅可用： Shady-loader
❌冲突： Infinitdeck、PracticeEX、ScoreTracker、Labtool（热键不可用）

::::


### 0、全体修改
* 伤害面板: 将 rift 修正为 lift
* 终结技: 使用超过 4000 伤害带 SC 的连段终结对手时，会改变 BGM
* 空中 Dash 高度限制取消: 跳跃后可立即进行空中Dash，但飞翔依旧有100的高度限制
* 天气 **「无风」**：只要角色在地上就无条件缓慢回血，原版性质不变
* 天气 **「苍天」**：跳跃前5F的地上部分可以被“出招、6D、4D”取消；原版性质不变
* 天气 **「风雨」**:地面A系招数命中时可以像弹幕一样大跳或44移动取消（如AAAA、J2A着陆、DA等等，**不包括DB、DC、体术必杀**）；取消原版风雨的加速buff，但是3次空中Dash次数依然不变
* 系统卡 「**羽衣」**：可在空中使用，动作为J6A
* 系统卡 **「人魂灯」「左扇」「符蚀药」**：取消等级相当于 SC
* 系统卡 「**白楼剑」**:可以取消SC，可以空中使用，不占用空中Dash次数

::: tip 限界機動（罗曼取消）
- 可以使用`4DD、5DD、6DD、8DD`来罗曼取消。
- 在可以被SC取消的时机发动时消耗2张卡，其他时候（任何时候，出招前摇也可以直接取消）消耗3张卡
- 小心空中使用时，很容易按住D没来得及松开，又变成飞翔
:::

::: tip 萃梦想灵击
- 取消等级相当于SC，和普通灵击一样的启动完全无敌和发生帧数和判定范围
- 如果你是取消攻击而发动的灵击，则有另外一个动作，像萃梦想一样竖直吹飞，追击时间110F，伤害 500，rate 110% ，limit 0%，可以给后续加伤加追击时间
- 如果是非取消而直接发出的灵击，则是普通原版灵击
:::

::: tip 系统卡「铜钱」——精防
- 手上第一张卡是铜钱时，可在8F内精防`（8F内才按下4或1防御，8F前不能拉防）`，不需要按用卡键，不耗灵，错防也能触发精防 **（原本铜钱效果依然在，按用卡键照常触发）**
- 精防成功后有音效，角色有闪光特效，卡槽微量增加，无视磨血
空中也可以精防
- 有暗转般的时间停止效果：给对手在添加额外硬直，相当于自己有利帧多 X 帧，X 与攻击等级有关，取 3/5/7/10）
- 不被击退（版中可被对手肉身推动，板边由于自己不会后退，对手也就不会被反弹后退）；对弹幕也有效（有时间停止效果，但不会多加帧）
- 有缝隙的压制中可多次使用精防，若先前防御不是精防，也在后续防御中使用精防，例如可以普通防御妖梦的DA一段，然后精防妖梦的DA二段
如果当时手上第一张卡不是铜钱或精防失败，则在从第一次攻击开始经过 40F 或无缝攻击结束后才能触发精防

![精防](https://bu.dusays.com/2024/01/21/65ace3b260d9c.webp =400x)

![可以普通防御妖梦的DA一段，然后精防妖梦的DA二段](https://bu.dusays.com/2024/01/21/65ace3bec545f.webp =400x)
:::


### 1、灵梦
* 异地起身: 速度增加
* 6D8大跳: 高度減少
* AAA: 追加向前的速度（就不容易断AAAA了）
* B 射击: 增加了防御时的Hitstop
* 2B: 弹幕可以全版移动
* 3C（萃梦想的封魔针）: 追加
* 6C（萃梦想的封魔针）: 追加
* DA: 硬直減少
* DB: 発生加速
* DC: 启动擦弹，改变惯性，增加追击时间
* JA: 発生加速, 持続減少
* J2A: 正常命中会弹地
* JB: 移动取消加快
* J2B: 移动取消加快
* J2C: 発生加速
* J3C: 追加
* J6C: 追加
* 原236 博丽护符: 蓄力效率提高，C 版发生加速，B 版发生位置变更，C 版发生位置变更
* 236改 妖怪破坏者: 硬直减少，B 版伤害增加，B 版 Rate 调整，B 版 Limit 调整，B 版磨血调整，B 版灵力削减调整，B 版Hit数减少，B 版攒卡量调整
* 236改 扩散护符: 发生加速，弹幕速度因等级而降低，B 版产生位置变更
* 原623 升天脚: B 版可取消，B 版 Level 2 打击无敌
* 623改 抄地升天脚: 硬直减少，每等级硬直减少，C 版滑铲时附加擦弹
* 623改 祈雨: 命中时可取消，命中时可大跳取消，修正命中时梦想天生点灯数不增加的问题，命中音效变更
* 421改 封魔亚空穴: 发射行为变更，每等级伤害增加
* 421改 刹那亚空穴: 当身成立后发生加速，伤害增加
* 一卡 珠符「明珠暗投」: 灵力削减増加
* 二卡 夢想妙珠: 発生位置変更
* 二卡 夢符「封魔陣」: 按住2使用时性質変化
* 三卡 神技「天覇風神脚」: 按住2使用时性質変化
* 四卡 宝具「阴阳鬼神玉」： 按22D后再使用时特殊发动
* 五卡 神霊「夢想封印」: Limit 变为 0%, 追击时间増加
::: tip EX灵梦
- 追加，选完地图后一直按住 D(飞翔键) 即可开启
    - 以上修改全都作废，使用另外一套人物系统
    - 各种体术修改：3A JA J6A J2A DB DC
    - 飞翔回转性能大幅提升，耗灵也不多（大概是相当于永久快晴的buff）
    - 可能还有别的改动，我没细测，有发现可以和我说
:::

### 2、魔理沙
* 6A: 硬直減少
* AAA: 前進追加
* H6A: 硬直減少
* J1A: 追加
* J2A: 硬直減少
* J6A: 硬直減少, 慣性変更
* f.A: 発生加速
* 214改 アップスウィープ: 后半部分命中时附加移动取消 (打防不可) ，追击时间增加，发射高度减少
* 原22C グラウンドスターダスト: C版变成 シューティングエコー(Shooting Echo，应该也是和⑨一样的故事模式SC)，升级可以加速移动取消
* 236激光 ナロースパーク: 移动取消加快、性质变化
* 623绿升 バスキースウィーパー: 添加擦弹
* マジカル産廃再利用ボム: 变成打击属性，改变惯性，增加 Lift 修正，增加追击时间
* 原623 ミアズマスウィープ: 追加派生(防御时不可) ，B版高度减少，B版命中时可以取消
* 原236 メテオニックデブリ: 所有颜色 rate 98%
* 儀符「オーレリーズサン」 : 第二枚使用时不会射出而是当场旋转，第二枚使用时不能DD
* 光符「アースライトレイ」 : 消耗2张卡，硬直减少，擦弹持续延长，伤害减少，limit 10%，惯性变更，追击时间增加
* 星符「メテオニックシャワー」: 灵力削减增加
* 魔砲「ファイナルスパーク」: 发生加速
* 魔符「スターダストレヴァリエ」: limit 0%

### 3、咲夜
* 3C: 追加(延迟弹幕)
* DC: 启动擦弹
* H3A: 硬直増加
* J3C: 追加(延迟弹幕)
* 214改 スクウェアリコシェ: 性质变化，弹幕启动就有判定，反弹次数增多，蓄力失效(bug)
* 22改分身 タイムパラドックス: 中段技，蹲防错防，第二段带破防
* 623改 舞星之剑: 可以移动取消
* 236绿刀 パラレルブレーン: 性质变化，类似萃梦想，升级无用只增加伤害
* 22改 当身: B 版当身启动加速，伤害增加
* 623改 : 伤害增加，防御Hitstop增加
* 4卡 伤符：判定加大
* 移动起身: 速度增加
* 3卡 速符: 灵力削减增加

### 4、爱丽丝
* 2B: 発生加速
* 3B: 新增
* 第四段A蓄力: 硬直減少
* b 射击: 速度调整，寿命调整，增加防御时的Hitstop
* c 射击: 增加防御时的Hitstop
* H6a: 不可空防
* J6A: 攻撃判定拡大
* 22改Seeker Wire: 改变惯性，追击时间增加
* 人形SP: 硬直減少
* 五卡旅鼠: 部分人偶会有相当于3卡炸弹的增强效果，自己体验
* 人形「未来文乐」 : 发动时6a 删除，b 发生加速，c 发生加速，d 伤害增加，a 蹲防错防，6a 灵力削减，2a 灵力削减，2a 蹲防错防，c 灵力削减
* 人形伏兵: 耐久力増加
* 人形千槍: 硬直減少
* 人形弓兵: 移动取消变快
* 人偶操创: 增加防御Hitstop
* 人形火葬: 固定轨道化，伤害增加
* 人偶置操: 灵力削减增加，击退消除且到最终段不能DD
* 戦操「ドールズウォー」4卡 : 伤害增加，rate98% ，limit2%
* 枪符「可爱大千枪」 : 空中版 纵向惯性减少，rate99%
* 红符「和兰人偶」 : 发生加速，追击时间增加，惯性变更，Hit数增加，Search强化（？？？）
魔符「アーティフルサクリファイス」 : 加速发生，减少伤害

### 5、帕秋莉
* DA: 発生加速
* J2A: 打中会弹地
* J6A: 慣性変更, Rate 95%
* 原22水柱 ウィンターエレメント: 延长持续时间
* 绿石: 命中时可取消 (被防御时不可)
* 原214 オータムエッジ: 灵力削减增加
* 22小水泡 スティッキーバブル: rate102% ，弹速提升
* 623空气炮: 发生加速，硬直減少
* 4卡绿石 土金符「エメラルドメガロポリス」: 发生加速
* 日月符「皇家钻石戒指」 : 附加磨耗，增加削减灵力
* 3卡圣光 日木符「フォトシンセシス」 : 发生加速
* 4卡水柱凹 月符「サイレントセレナ」: 灵力削减增加
* 火水木金土符「賢者の石」: 成立加速

### 6、妖梦
* 1A: 変更为飞膝，可取消2A.远A，AAA，空中可被B弹幕以上取消，落地可必杀取消
* 2A: 判定增大
* 2B: 移动取消加快
* 6B: 移动取消加快
* B: 移动取消加快
* DAA: 可以被必杀取消
* DB: 发生前有擦弹帧
* 被打的蹲姿: 受击判定增加
* 心抄斩: 发生加快，硬直减少，伤害减少(对空伤害相对较高)，B 版 rate 90% 化，B 版 limit 40% 化，C 版 rate 95% 化，C 版 limit 45% 化(3段各15%)，防守时追加击退，C 版地面Hit数增加为3(对空还是1 Hit)
* 原22: 根据等级耐久力增加
* 折伏无间: 追击(长按飞膝)取消等级变更(同1A)，追击 limit 0% 化，追击惯性变更，追击时间增加
* 断霊剣「成仏得脱斬」: 削灵増加
* 炯眼剣: B 版硬直減少
* 燐气斩: 修复图片特效的问题
* 结跏趺斩: Hit数由2级增加

### 7、蕾米莉亚
* J2A: 付加 Smash修正
* 22手里剑 スティグマナイザー: C 版本性质改变
* 原22 デーモンロードアロー: 保持壁贴时间延长，在壁贴时允许SC取消
* 原623升龙 デーモンロードクレイドル: 命中后可取消
* 623火箭腿 ロケットキックアップ: 发生加速，追加 C 版追踪，C 版发射位置变更
* 3卡恶女 夜符「バッドレディスクランブル」: limit 50%
* 2卡 小神枪 : 暗转时2可向上或6向斜上方发射，不能打康
::: tip EX蕾咪
- 追加，选完地图后一直按住 D(飞翔键) 即可开启
    - 以上修改全都作废，使用另外一套人物系统
    - 行动模式修改，可以飞翔和地面DASH，增加 DA DB DC
    - 蕾咪飞翔停止后不带惯性，必须要停止飞翔再出招
    - 6A 修改
    - 可能还有别的改动，我没细测，有发现可以和我说
:::
    
### 8、幽幽子
* 3C: 追加，斜上方的6C
* 6C: 発生位置変更, 速度増加
* J3C: 追加，斜下方的6C
* J6A: Rate 78% 化, 慣性変更
* 胡蝶夢の舞: 慣性変更
* 鳳蝶紋の槍: 弾速加快

### 9、八云紫
* 1A: 追加，可取消4A 1A，不可取消AAA
* DC: 启动擦弹
* 境符「二次元と三次元の境界」:加速发生
* 境符「四重结界」 : 发生前附加完全无敌
* 幻想卍伞: 发生加速，空中版移动取消加速，击退减少，追加磨耗属性，改变惯性，磨血减少，空中 B 版发射方向变更，蓄力时也有判定
* 知能と脚の境界: 发生加速
* 肉体分解机: 出现时增加擦弹
* 開けて悔しき玉手箱: 发生加速，按等级发生加速，输入4或6进行位置微调，附加破防属性
* 魅惑のエサ: 减少硬直

### 10、萃香
* 1A: 追加，和DA第二段一样，有前移且不可空防，蹲防错防削2灵，可取消2A，被必杀以上取消
* 6B: 弾速向上
* AA: 前進追加
* AAA: 前進追加
* DA: 二段目発生前前進追加
* DB: 启动擦弹，硬直増加
* DC: 発生加速
* J6A: 硬直減少
* 厌雾: 减少僵直，出现时要朝向对方
* 地霊‐密‐: 発生加速
* 妖鬼- 密 -: 発生加速
* 攫鬼: 成立时可SC取消
* 踏鞴: 発生加速, 硬直減少, 灵力削减增加
* 霧符「雲集霧散」: 硬直減少
* 鬼神燐火术: 发生加速，加强防御Hitstop
* 鬼符「 missing power 」 : 可以打康，追击时间增加

### 11、铃仙
* B 射击: 去除防御击退效果，直到最后一段不能DD
* DB: 启动擦弹
* DC: 启动擦弹
*「幻胧月瞪」 : 附加磨耗
* 214改扫描 アイサイトクリーニング: 发生加速，移动取消加速
* 22分身凹 ディスオーダーアイ: 加速发生
* 236改(不是子母弹) マインドベンディング: 发生加速
* 幻爆「近眼花火」 : 加速发生
* 惑视「离圆花冠」 : 削减灵力增加

### 12、文
* 2C: 伤害增加
* 3A: 伤害增加
* 6A: 伤害增加
* 6C: 伤害增加
* AAA: 伤害增加
* AAAA: 伤害增加
* B 射撃: 追击时间増加
* C: 伤害增加
* DA: 伤害增加，攻击判定增加
* DB: 伤害增加
* DC: 伤害增加，启动擦弹，判定强化
* J2A: 着地僵硬必杀技以上可取消
* J2C: 伤害增加
* J6A: 伤害增加
* J6C: 伤害增加
* J8A: 伤害增加
* JA: 伤害增加
* JC: 伤害增加
* 远A: 伤害增加
* 天狗burst: 加速发生
* 楓扇風: 发生加速，擦弹时判定不消失，发生位置变更，灵力削减增加
* 烈風扇: 発生位置変更, 追击时间増加
* 疾風扇: 修正改变
* 突風「猿田彦の先導」: 発生加速, 可以打康
* 鎌風ベーリング:灵力削减增加
* 風符「天狗報即日限」: 硬直减小
* 風符「天狗道の開風」 : 按住2时性质变化，伤害增加，削弱灵力增加

### 13、小町
* 2C: 発生加速
* 3A: 発生加速
* 3B: 新增
* 6C: 発生加速
* AAA: 硬直減少
* B 射撃: 発生加速, Rate 99%
* C 射击: 场上可以存在多个C弹幕，性能变化
* J2A: 発生加速
* J2C: 発生加速
* J6A: 発生加速
* J6C: 発生加速
* J8A: 硬直減少
* JA: 硬直減少
* f.A: 発生加速、硬直減少
* お迎え体験版: 硬直減少，附加破防属性
* 三途の舟: 发生前pose调整、发生加速、伤害增加、惯性变更、自动派生删除
* 地獄「無間の狭間」: 射撃部分追击时间増加, 射撃部分惯性变更
* 換命「不惜身命、可惜身命」: 発生加速
* 死出の風: 伤害增加，追击时间増加
* 死符「死者選別の鎌」 : 性质变化，hold field展开时间延长（？？？）
* 無間の道: 発生加速, 硬直減少
* 迷わず生きた人霊: 发生加速
* 離魂の鎌: 伤害增加，削减灵力增加

### 14、衣玖
* A: 判定拡大
* AA: 判定拡大
* J2A: 硬直減少
* J6A: 追击时间増加, 硬直減少
* 羽衣は水の如く: 提早可防御时机，硬直減少
* 電符「雷鼓弾」: 削灵増加
* 龍神の稲光り: 硬直減少
* 龍魚の一撃: 硬直減少

### 15、天子
* 2B: 灵力削减增加
* 6B: 灵力削减增加
* B: 灵力削减增加
* DC: 启动擦弹，硬直减少，横向惯性减少
* H6B: 提高蓄力效率
* HJ2B: 提高蓄力效率
* HJ6B: 提高蓄力效率
* J2B: 灵力削减增加
* J6A: 硬直減少
* J6B: 灵力削减增加
* JA: 硬直減少
* JB: 启动擦弹, 灵力削减增加
* 「全人類の緋想天」: Limit 0% 化
* 因果之剑: 发生加速，命中硬直减少，命中时可移动取消
* 地符「不譲土壌の剣」: 硬直減少
* 地精的起床: 变成【天空的灵石】(故事模式SC)
* 坤儀の剣: 移动取消加速
* 天地冲压: 发生加速，按等级发生加速
* 天気「緋想天促」: Limit 0% 化, 灵力削减增加, 追击时间増加
* 守りの要: 发生加快
* 升天突: 地面版可取消
* 移动起身: 速度增加
* 绯想之剑: 伤害增加，limit 变更
*  緋想の剣気: 2 段目発生加速
* 要石「天地開闢プレス」 : 为了让蹲下的对手也能被击中，第二段巨石下落不能防御
* 非想「非想非想之剑」 : 伤害增加，初段 rate 100% 化，成立时硬直减少，惯性变更

### 16、早苗
* 1D（地面姿态）:  追加
* 2D（地面姿态）:  追加
* 3D（地面姿态）: 追加
* AAA: Rate 85% 化
* AAAA: 伤害提升，rate 86%
* B: 発生位置変更
* J4C: 取消时机钝化(4C 214诹访子分身 bug 修正)
* JA: 発生加速
* JB: 発生位置変更
* 22改 蛇: 移动取消加速
* 623妈突 乾神招来 突: 判定調整，缩小横向距离
* 御柱: 伤害增加
* 坤神招来 鉄輪: 灵力削减增加
* 奇跡「白昼の客星」:加速发生，增加防御Hitstop，limit 3%
* 236 波起: 发生加速，磨血增加
* 祈願「商売繁盛守り」: 発生加速, 発生位置変更
* 秘術「忘却の祭儀」: 発生加速

### 17、琪露诺
* 2b 射击: 伤害上升
* 2C 射撃: 射撃反射, 耐久力減少
* 6A: 発生加速
* 6b 射击: 伤害上升，灵力削减增加，命中间隔延长
* B 射击: 伤害上升
* DC: 启动擦弹
* J6a: 伤害增加，rate 85%，発生加速, 硬直減少
* J8A: 発生加速
* JA: 追击时间増加
* 原236 アイシクルシュート: 加速发生
* 623剑 アイシクルソード: 发生加速，硬直减少，惯性变更
* 22改 アイシクルボム: 增加伤害，惯性变更，追击时间增加
* 623改 アイシクルライズ：追击时间增加
* 214改踢 アイスキック: 上升中可左右操作，伤害增加，追击时间增加
* 原623 フリーズタッチミー: 2级增加体术无敌
* 236改 フロストピラーズ: 发生加速，硬直减少
* 22冰箱 フローズン冷凍法: 命中后可取消
* マイナス K（故事模式符卡？？）: 发生加速，硬直减少，惯性改变 
* 214雪球 真夏のスノーマン: 变成 マイナス K
* 冷凍光線: 追击时间増加, Rate 98%, Limit 10%
* 冷符「瞬間冷凍ビーム」: 硬直减少，命中行为变化
* 吹符「アイストルネード」: 发生加速
* 氷塊「コールドスプリンクラー」: 速度降低
* 氷符「アイシクルマシンガン」: 加速发生
* 氷符「フェアリースピン」 : 附加至暗转完全无敌
* 霜符「フロストコラムス」: 伤害增加，rate 95%

### 18、红美铃
* 2C: 追击时间増加
* 6b: Hitstop增加，灵力削减增加
* 6C: 持続時間延長
* AAA: 前進追加
* B: 追击时间増加, 灵力削减増加
* C: 追击时间増加
* DA: 攻击等级增加
* DB: 增加擦弹，发生加速，硬直增加
* HB: 灵力削减増加
* HJB: 灵力削减増加
* j2b: Hitstop增加，灵力削减增加
* J6A: 追击时间増加
* j6b: Hitstop增加，灵力削减增加
* J6C: 持続時間延長
* J8A: 硬直減少
* JA: 追击时间増加, 硬直減少
* JB: 追击时间増加, 灵力削减增加
* JC: 追击时间増加
* 彩华「虹色太极拳」 : 发生加速，击退减少
* 彩雨: 附加擦弹，C版发生加速，C版移动追加，Hitstop增加
* 气符「地龙天龙脚」 : 伤害增加
* 气符「星脉弹」 : 发生加速，硬直减少，伤害增加，灵力削减增加
* 気符「猛虎内勁」: 全体加速
* 水形太极拳: 增加擦弹
* 紅寸剄: 発生加速
* 红炮: 从等级2附加打击无敌
* 芳波: 発生加速
* 华符「彩光莲华掌」 : 增加擦弹
* 虎劲: 附加特殊霸体，加快取消时间，可通过Dash以上取消
* 虹符「烈虹真拳」: 削除Lift修正
* 黄震腿: 追加特效，攻击等级上升，增加防御的Hitstop，蓄力附加破防

### 19、高达
* 2B: 発生加速
* 3C: 追加
* 空中66: 减小前摇
* 6B: 発生加速
* A: 硬直増加
* AAAA: 硬直減少
* B: 発生加速
* DA: 発生加速
* DB: 発生加速
* H3A: 硬直減少
* J2A: 发生加速，普通命中也会弹地
* J2B: 発生加速
* J3C: 追加
* J6B: 発生加速
* JA: 硬直減少
* JB: 発生加速
* 「地獄の人工太陽」: Lift 補正削除
* 原236 グラウンドメルト: 加速发生
* 原22 : 移动取消加速，发生加速
* 光剑: 减少硬直
* 地狱波动炮: 修复与核热的怨灵的bug
* 核热的怨灵: C版瞄准自己发射，灵力削减增加
* 核符「クリーピングサン」:发生加速，伤害减少，limit 0% 化
* 焔星「十凶星」: 発生加速


### 20、青蛙
* 6B 射击: 提高蓄力效率
* B: 去除防御击退和直到最后一段不能DD
* DA: 可从 backdash 发动
* DB: 可从 backdash 启动
* DC: 可从 backdash 发动
* JA: 発生加速
* JB: 去除防御击退和直到最后一段不能DD
* 飛翔: 性能変更，向上漂浮效果减弱，可以各种方向飞了


### 21、EX彩蛋

**全人类开局时按住3D开启“超级赛亚人”模式，1D开启“暗隐”模式**

::: tabs

@tab 超级赛亚人模式
::: tip 超级赛亚人模式
- 行走Dash（除了空中44）速度翻倍
- 44后撤变成反向6D
- 地面Dash开始前按反方向可以反方向Dash（很难按，比如44取消然后反过来6D）
- 空中66和地面6D附加飞尘特效
- 空中行动（Dash，攻击，防御等）之前可以无限腾空跳（7 8 9方向）【和⑨的漂浮特殊效果相似】
- 空中无限飞翔次数 
- 对手弹墙弹地会受到100固定伤害（算1 HIT，虽然没明面加rate但是还是会影响追击时间）
- 总是霸占板边，攻击会把人挤出板边
- 按 F11恢复凡人
- 特殊：妖梦地面按D可以出B版囧眼当身，5D对中段和上段，2D对下段，必杀技随意互相取消（同必杀也可以取消）
- 特殊：幽幽飞翔效果变成蕾咪一瞬，不耗灵
- 特殊：蕾咪按D可以出B版锁链，再按D可以停下锁链，随时可以大跳取消走人锁链消失，或者结束后跟随锁链移动
- 特殊：爱丽丝DB DC借助飞尘buff会飞很远
- 特殊：灵梦原236变化
- 特殊：美铃很多招数性能变化，空中66没有速度加成
- 特殊：小町很多招数性能变化，原623变成升龙（可2A接，类似灵梦有地面判定）
- 特殊：19和天子的地面6D和空中66由于某些原因会保持翻倍，跑的比狗还快

@tab 暗隐模式
::: tip 暗隐模式
- 自动满卡，开局即爆发，很容易耗光20张卡
- 无限灵力
- 空中无限飞翔次数

:::


