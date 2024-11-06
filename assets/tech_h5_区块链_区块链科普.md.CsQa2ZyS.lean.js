import{_ as e,c as r,aF as l,o as t}from"./chunks/framework.CfvE3zqq.js";const u=JSON.parse('{"title":"区块链","description":"区块链基础知识","frontmatter":{"title":"区块链","description":"区块链基础知识","date":"2024-01-13T00:00:00.000Z","hidden":true,"swiper_index":91,"tags":["区块链"]},"headers":[],"relativePath":"tech/h5/区块链/区块链科普.md","filePath":"tech/h5/区块链/区块链科普.md","lastUpdated":1710681812000}'),o={name:"tech/h5/区块链/区块链科普.md"};function h(i,a,n,p,d,s){return t(),r("div",null,a[0]||(a[0]=[l('<h2 id="什么是区块链" tabindex="-1">什么是区块链 <a class="header-anchor" href="#什么是区块链" aria-label="Permalink to &quot;什么是区块链&quot;">​</a></h2><p>由链连接的一个个区块构成，特点是去中心化。</p><p>是分布式账本，有一个大帐本，还有无数小账本，人人可以参与记账，共同维护，解决了信任问题，因为只要有任何一方有篡改，那么就会和别的账本不一致，这样就可以保证数据的安全。</p><p>挖矿：指区块链网络中的一种奖励行为，为了激励大家参与数据维护，会发放一定量的比特币作为奖励。</p><p>挖矿原理：每隔一段时间，就需要矿工把没有确认的交易收集起来，进行处理，谁能最先处理好数据，并进行广播，得到大部分的确认没问题，就会得到奖励。参与挖矿的人越多，参与数据确认的人也就越多，我们的数据也就越安全。</p><p>区块链的分叉：是一种区块链的升级机制。相当于现有区块链中，某一个区块开始，他的下一个区块有 2 个，相当于从这里开始，有两条路径可选，像树枝一样。分为硬分叉和软分叉，逐渐过渡的是软分叉，隔离开的是硬分叉。</p><p>分类：共有链，私有链，联盟链。对任何人开发的是共有链，属于个人或者公司的是私有链，属于几个公司组成的联盟的是联盟链。共有链开放程度最大，去中心化最大，但是效率最低。私有链开放程度最低，去中心化最低，效率最高。</p><p>区块链的核心技术：分布式存储，共识机制，智能合约，密码学。分布式存储就是每个人那里都有一份小账本；共识机制就是决定谁获得数据的记账权的机制，也就是该用哪个矿工记录的数据；智能合约就像合同，是一种大家的约定，部署在链上，起到数据执行的作用；密码学起到数据安全和数据证明的作用。</p><h2 id="区块链中的密码学" tabindex="-1">区块链中的密码学： <a class="header-anchor" href="#区块链中的密码学" aria-label="Permalink to &quot;区块链中的密码学：&quot;">​</a></h2><p>区块链中主要用到的两个算法是哈希算法和非对称加密。</p><ol><li><p>哈希算法：是一个函数，用于将任意长度的二进制数据转换为固定长度的二进制数据，这个固定长度的二进制数据就是哈希值。 它具有三个特点： 一是哈希值是不可逆的：由一个哈希值是无法反推算出它的原始输入值的，所以哈希加密能保障原始数据的安全。 二是哈希值是不可变的：对于输入值的改变，哪怕只是一小点的变化，哈希值的变化也会非常大。所以区块链中的每一个区块，都会以上一个区块的哈希值作为标识，除非有人能破解整条链上的哈希值，否则数据一旦被记录，就不会被篡改，因为只要改了数据，他的哈希值就变了，那么这个区块就会从链上断开。 三是哈希值是抗碰撞的：也就是两个不同的输入，是不会得到相同的哈希值的。区块链中的交易和地址就是用哈希生成的，这保证了交易和地址的唯一性。</p></li><li><p>非对称加密：是一种加密方法。比如钥匙和锁，用同一把钥匙去加密和解密，那就是对称加密，钥匙也就是密钥。而非对称加密有两个密钥，一个私钥，一个公钥，公钥是公开的，私钥是私有的，公钥可以解开私钥加密的内容，私钥也可以解开公钥加密的内容。在区块链中，它并不是用来加密数据的，而是用来解决身份验证问题的。</p></li></ol><h2 id="区块链中的分布式账本" tabindex="-1">区块链中的分布式账本 <a class="header-anchor" href="#区块链中的分布式账本" aria-label="Permalink to &quot;区块链中的分布式账本&quot;">​</a></h2><p>是一种数据存储的技术，是一个去中心化的分布式数据库。分布式数据库的诞生，主要是为了解决单一数据库的种种问题，比如某一数据库瘫痪了，那么还能有别的数据库顶替。没有一个中心，大家都能访问就是去中心化。分布式账本的作用不只是保障了数据的多重备份，同时还赋予了去中心化的属性，防止巨头的数据垄断。</p><h2 id="拜占庭将军问题" tabindex="-1">拜占庭将军问题 <a class="header-anchor" href="#拜占庭将军问题" aria-label="Permalink to &quot;拜占庭将军问题&quot;">​</a></h2><p>本质上是区块链中，如果某一节点发送错误信息，或者节点中产生了分歧，该怎么办的问题。 具体背景是：拜占庭帝国想要攻打一个国家，他派出了多支军队进行围攻，但敌方也很强大，军队必须在同一个时间一起发动进攻才能胜利。现在的问题是，军队分散在敌国的四周，只能依靠通信兵骑马互相通信来确定进攻时间。但是通信兵可能在送信过程中被敌方击杀，而且这几支军队中有叛徒存在，可能会向别的军队传达虚假指令。这种情况下，怎么才能获取胜利？ 推广到区块链，相当于区块链中，可能有节点因为网络问题，发不了信息，或者有节点恶心发送错误信息。 拜占庭容错：是一种数学观点证明，简单来说就是，信息的伪造和错误并不重要，只要诚实的将军数量大于总数的三分之二，整个系统也可以达成一致。 基于拜占庭容错的观点，诞生了很多解决拜占庭将军问题的方案，比如共识机制。</p><h2 id="共识机制" tabindex="-1">共识机制 <a class="header-anchor" href="#共识机制" aria-label="Permalink to &quot;共识机制&quot;">​</a></h2><p>就是一套每个节点都要遵守的规则，规定了每个节点如何记账，节点之间如何交换信息。 目前主流的有两种，一种是 pow 共识机制，一种是 pos 共识机制。</p><ol><li><p>pow 共识机制：也就是 proof of work 工作量证明，最早是用来解决垃圾邮件问题，目前是区块链中主流的共识机制。主要是通过竞争记账的方式来解决各个节点间的一致性问题。原理是：每一个节点都能参与数据处理，也就是打包区块，每一个区块都要依靠自己的计算能力与他人竞争，争夺记账的权利，也就是每隔 10 分钟，参与的节点会进行 1 次算力竞赛，也就是不断寻找一个随机数 Nonce，谁先找到满足异地过条件的 Nonce 值，且通知全网，获得大部分认可，就会获得记账的权利，它所打包的区块会连接到区块链的链上，同时，它处理的数据，也会被别的节点的账本记录，然后他会得到一定的比特币作为奖励。通过算力竞赛的方式，提高了攻击者的成本，理论上除非它能掌握全网 51%以上的算力，否则整个网络的任何东西，都是无法被篡改的。它的缺点就是，浪费大量的计算资源，性能效率低下等等</p></li><li><p>pos 共识机制：也即是 proof of stake 权益证明。简单来说，就是谁拥有的权益多，谁说了算。它是在 pow 的基础上做了改进，pow 允许所有人都可以成为节点，参与算力竞赛，抉出记账权。而 pos 则提高了门槛，虽然所有人都可以成为节点，但是只有拥有足够的权益（比如抵押一定数量的代币）的节点才能成为验证节点，每隔一段时间，系统会从验证节点中挑选出节点来给他记账权，每隔一段时间会重新选择，系统保证选择的随机性，记账完成后会得到奖励。它解决了资源浪费的问题，但它的缺点是，容易造成强者恒强的局面，理论上谁能掌握全网 51%的代币，谁就能掌握整个网络，所以他的去中心化更弱一些。</p></li></ol><h2 id="智能合约" tabindex="-1">智能合约 <a class="header-anchor" href="#智能合约" aria-label="Permalink to &quot;智能合约&quot;">​</a></h2><p>也就是一种约定，当满足一定条件后，程序自动执行的技术。人与机构的智能合约还是挺普遍了，比如无人售货机。但是人和人之间的智能合约却还没有普及，当没有一个中心化的机构来做担保，那交易双方如何保证合约的执行？这就是智能合约解决的问题。依托于区块链，它能被搭建在应用层中，记录在区块上，保证了不可篡改，和透明公开，同时当满足条件时，智能合约也会自动执行。</p><h2 id="双花问题" tabindex="-1">双花问题 <a class="header-anchor" href="#双花问题" aria-label="Permalink to &quot;双花问题&quot;">​</a></h2><p>意思是一笔钱被花了两次，分两个子问题，一种是因为同步延迟的问题，导致一笔钱被重复花了几次；另一种是一笔钱只使用了 1 次，但是通过黑客攻击或者造假的方式，把这笔钱又复制了 1 份，再次使用。传统的中心化交易，由中心化机构解决这个问题，但是区块链中，因为交易需要广播有延时，所以更容易发生双花问题。 共识机制中引入了时间戳和 UTXO 模型来解决问题</p><h4 id="utxo-账户模型" tabindex="-1">UTXO 账户模型 <a class="header-anchor" href="#utxo-账户模型" aria-label="Permalink to &quot;UTXO 账户模型&quot;">​</a></h4><p>中文意思是：未花费交易输出。它不只是记录交易结果，而是把交易过程都记录下来，本质是一种流水记账。可以由记录值反推出整条交易链路。通过可追溯的链路，解决了第一种双花问题。</p><h3 id="时间戳" tabindex="-1">时间戳 <a class="header-anchor" href="#时间戳" aria-label="Permalink to &quot;时间戳&quot;">​</a></h3><p>时间戳就是数据的生产日期，用来证明数据在某个时间点已经存在，用来解决第二种双花问题。</p><h2 id="侧链技术" tabindex="-1">侧链技术 <a class="header-anchor" href="#侧链技术" aria-label="Permalink to &quot;侧链技术&quot;">​</a></h2><p>让链和链之间产生价值交互的一种技术，简单来说，就是建立新的一条区块链，与原有的一条链产生联系，资产可以在两条链中进行转移。主要应用于弥补原来的链的不足。原来的链叫主链，新的链叫侧链。一般来说，资产只能在一条链中转移，之所以这里可以做到在两条链转移，主要是使用了双向锚定的技术。例如，当主链的一定数量的比特币要转移到侧链时，就把主链的同等数量的比特币锁定，在侧链放出同等数量的侧链代币。同理，当从侧链向主链转移时，侧链的代币锁定，主链释放同等数量的比特币。</p><h2 id="跨链技术" tabindex="-1">跨链技术 <a class="header-anchor" href="#跨链技术" aria-label="Permalink to &quot;跨链技术&quot;">​</a></h2><p>跨链技术就是侧链技术的升级版，只不过从之前的 1 对 1 的关系变成了 1 对多。就是让多条链之间产生价值交互的一种技术。解决了各条区块链之间形成的孤岛问题。 实现跨链的方式：</p><ol><li>公证技术：提出一个公共的协议，能适用于各条链的系统，大家都以此作为统一的支付标准</li><li>中继：建一条的新的链，让其他链与这条新链产生联系。相当于是需要跨链的这些链都有一条相同的侧链，大家都通过这条侧链来作为中介进行价值交互（okc 就是用的这种技术）</li><li>分布式私钥控制：相当于建立一个去中心化的银行，各条链通过这个银行来进行价值交互</li><li>哈希锁定（在闪电网络中讲）</li></ol><h2 id="闪电网络" tabindex="-1">闪电网络 <a class="header-anchor" href="#闪电网络" aria-label="Permalink to &quot;闪电网络&quot;">​</a></h2><p>2015 年提出来，用来解决比特币交易拥堵的一项技术。比特币最开始设计的时候，一个区块只有 1M 大小，只能记录上千笔交易，很快容量就不够了，造成拥堵。社区提出两个方案，一种是扩大比特币区块容量，另一种是不扩容的方案。闪电网络就属于不扩容的方案。 原理是：交易过程中，把交易的过程放在链下，在链下记录交易副本，在交易完成后，把交易的结果再拿回链上，再进行全网广播。相当于把交易的过程放到了侧链，主链只需要记录结果，解决了拥堵问题。同时，因为交易的过程是在链下进行的，只需要智能合约来执行，不需要每一步都进行全网的广播和确认，所以大大提升了处理效率。 闪电网络也能进行跨链，它要求需要跨链的两条链都支持闪电网络，两条链都将资产暂存到链下的通道中的临时账户，通过哈希锁定，让不同链的资产在兑换时能同时结算</p><h2 id="隔离见证技术" tabindex="-1">隔离见证技术 <a class="header-anchor" href="#隔离见证技术" aria-label="Permalink to &quot;隔离见证技术&quot;">​</a></h2><p>也是一种解决区块链拥堵的方案，不同于闪电网络的链下处理方案，它是在链上进行的。之前提到的直接扩大区块容量其实比较有争议，因为区块容量扩大后，可能会导致一些节点无法完成区块验证工作，也会导致全网算力的下降。所以这是一种不修改区块容量的技术。 原理是：腾空间。一般交易记录会含有交易信息和非交易信息（比如谁的私钥签名等等），把非交易信息剥离出来，放到新的结构中，从而腾出空间来。</p><h2 id="分片技术" tabindex="-1">分片技术 <a class="header-anchor" href="#分片技术" aria-label="Permalink to &quot;分片技术&quot;">​</a></h2><p>为了解决区块链的效率问题和可扩展性问题而诞生的技术。背景是，区块链是一条链式结构，在这条链上需要处理很多工作（比如交易记录、智能合约、记账、数据记录、数据存储、数据安全等等），这些工作糅合在一起，影响效率。分片技术是分而治之的原理，就是把每个区块划分成一个个分片，每个分片承担不同的职责，节点也分散到各个分片上，每个分片上的节点聚焦自己的工作，大大加快效率。但这样会降低区块链的中心化程度，也降低安全性。因为原理黑客攻击的话，需要攻击全网的大部分节点才能达到效果，使用分片技术后，黑客只需要搞定这些节点中的分片就可以了。所以有一个新的机制，会生成随机数，为其他分片分配节点。因为节点是随机分配的，黑客就很难知道节点都有谁。</p><h2 id="区块链基础技术总结" tabindex="-1">区块链基础技术总结 <a class="header-anchor" href="#区块链基础技术总结" aria-label="Permalink to &quot;区块链基础技术总结&quot;">​</a></h2><p>主要是四大技术：分布式账本、共识机制、密码学、智能合约，分别起到了数据的存储、数据的处理、数据的安全、数据的应用的作用，共同构成了区块链的基础框架。在这些技术的基础上，区块链仍然面临着效率问题、可扩展性问题、价值孤岛的互操作性问题，通过引入侧链、跨链、闪电网络、隔离见证、分片等技术来解决这些问题。</p><h2 id="比特币" tabindex="-1">比特币 <a class="header-anchor" href="#比特币" aria-label="Permalink to &quot;比特币&quot;">​</a></h2><p>是一种投资商品，数字资产，数字黄金。由中本聪发明的，具有总量恒定，机制透明，不受任何控制，由机器来执行的特点。</p><h3 id="比特币与区块链的关系" tabindex="-1">比特币与区块链的关系 <a class="header-anchor" href="#比特币与区块链的关系" aria-label="Permalink to &quot;比特币与区块链的关系&quot;">​</a></h3><p>中本聪最早只是想创造一种去中心化的数字货币，也就是比特币。但是人们发现，比特币的底层机制十分优秀，于是提取出来，形成了区块链技术。比特币相当于是区块链的一种应用。也迎来了以数字货币为代表的区块链 1.0 时代。</p><h2 id="什么是数字货币的减半" tabindex="-1">什么是数字货币的减半 <a class="header-anchor" href="#什么是数字货币的减半" aria-label="Permalink to &quot;什么是数字货币的减半&quot;">​</a></h2><p>一开始中本聪在设计比特币的时候，使用的是一个总量恒定的通缩型经济模型，也就是每 10 分钟会产生一个新的区块，每个区块带来 50 个比特币。而每产生 21 万个区块之后，也就是每过 4 年之后，区块带来的比特币奖励就会减半，也就是从第 21 万零 1 个区块开始，每个区块只带来 25 个比特币奖励。依此类推，当到第 33 次减半之后，每个区块的奖励会从 0.0021 个比特币奖励直接变为 0。所以总体算下来，比特币的总量就只有 2100 万枚。这就是减半机制，大部分的数字货币都沿袭了比特币的这一机制。</p><h2 id="莱特币" tabindex="-1">莱特币 <a class="header-anchor" href="#莱特币" aria-label="Permalink to &quot;莱特币&quot;">​</a></h2><p>是主流币的一种，创始人是李启威，因为早期比特币网络拥堵，交易速度慢，所以他想打造一个对标比特币支付，更轻更快的数字货币，也就是莱特币，其实就是山寨比特币。早期不愠不火，后来因为勇于试验新技术，所以被当作比特币的试验田，发展不错。</p><h2 id="以太坊" tabindex="-1">以太坊 <a class="header-anchor" href="#以太坊" aria-label="Permalink to &quot;以太坊&quot;">​</a></h2><p>以太坊是数字货币中，除比特币之外，最有开创意义的一个项目。以太坊就是一个开源的，能让大家自由开发智能合约的区块链公共平台，就像安卓或者 windows 这类的操作系统，它能提供一套专门的脚本语言，让大家可以随意地在上面开发各种区块链式的应用程序。以太坊虽然是平台，但是他和数字货币有紧密的关系，因为以太坊中的 Gas 机制。在以太坊的工作原理中，所有用户写好的智能合约都需要通过一个叫做虚拟机的东西作为介质去执行，而这个介质会被以太坊网络中参与的矿工共同维护，进而形成一个属于以太坊的计算网络。当你想要执行智能合约时，都需要通过这个计算网络去进行处理，并且会消耗一定的网络资源，而你也需要承担一定的成本。在以太坊网络中，衡量智能合约运行成本的标准就是 Gas。在以太坊网络的设定中，Gas 就是智能合约的运行燃料，用户想要执行智能合约时，就需要向矿工购买 Gas,如果用法币的话不管是跨境转账还是汇率都比较麻烦，于是以太坊就参照比特币的模式，也搞了一套数字货币体系来解决这个问题。即可以作为激励机制，奖励矿工，又可以充当手续费。所以以太坊本身的定位虽然是区块链版的操作系统，但是它也做了属于自己的数字货币。</p><h3 id="以太坊带来的影响" tabindex="-1">以太坊带来的影响 <a class="header-anchor" href="#以太坊带来的影响" aria-label="Permalink to &quot;以太坊带来的影响&quot;">​</a></h3><p>在以太坊之前，区块链只有数字货币这种用途，以太坊开创了区块链技术在别的方向的应用。以太坊在上方应用层的层面，给出了一套编程语言，让用户可以通过智能合约，自由地开发去中心化 app，在下方数据管理层面，则通过 pos 共识机制，打造了一个去中心化的数据库，让用户数据归属于用户自己。以太坊开创了区块链 2.0</p><h2 id="比特币的历史" tabindex="-1">比特币的历史 <a class="header-anchor" href="#比特币的历史" aria-label="Permalink to &quot;比特币的历史&quot;">​</a></h2><p>1999 年由密码学大牛组建密码朋克（cypherpunk）论坛，之后产生过一些数字货币，直到 20008 年，一个中本聪的 id 在密码朋克论坛中发表了比特币白皮书。哈尔芬尼，比特币的第二父亲，密码朋克论坛成员，密码学大牛，已去世。中本聪曾活跃在 bitcointalk 论坛，但在发生维基解密事件后消失。在此之后国内爆发了挖矿浪潮。而国外，则是由 V 神在比特币社区发布了 eth 白皮书，并带领团队筹集了 31000 个比特币，总共 1800 万美元，在瑞士成立了 eth 基金会，开启了区块链 2.0，2015 年 eth 主网上线，开启了 eth1.0。2016 年 eth2.0 的发布，稳固了 eth 生态，让公链生态走上 c 位。同年，比特币迎来第二次挖矿减半。</p><p>2017 年 3 月，因为比特币的容量问题，以中国矿工为首的一派和以美国比特币核心维护团队一派产生了不同意见（一方主张直接扩容，一方主张以闪电网络和隔离验证来解决），所以比特币的第一次硬分叉诞生，以吴忌寒为首的比特大陆发布了比特币现金（BCH），区块容量从 1M 提升为 8M，效率是原来的 8 倍，巅峰时曾经算力是比特币（BTC）的两倍，但因为价格问题，最终还是走向了算力崩溃，不过 BCH 也走出了自己的道路。 2018 年比特币现金（BCH）又发生了分叉，一派是以 CSW 博士为代表的 BSV 版本派（主张 BCH 应该像中本聪论文所描述的那样，专注于数字货币的转账交易，并将区块扩容为 128M），另一派是以吴忌寒为代表的 ABC 版本派（主张在当前环境下，BCH 应该像以太坊一样，往基础建设公链的方向发展，开拓出更多应用场景，增强 BCH 的竞争力），双方决定通过算力来决定谁来获取比特币现金的继承权，赢者是主链，通过比较谁能挖出更多的区块来决定，最终 ABC 派获胜，不过 BSV 派也独立了出来，单独成立了一条链，这场大战造成了加密货币市值的腰斩。</p><h2 id="nft-初探" tabindex="-1">NFT 初探 <a class="header-anchor" href="#nft-初探" aria-label="Permalink to &quot;NFT 初探&quot;">​</a></h2><p>NFT 本质就是原来的东西+数字签名，用户可以通过 NFT 平台去验证来鉴别真假。</p><h3 id="流行词" tabindex="-1">流行词 <a class="header-anchor" href="#流行词" aria-label="Permalink to &quot;流行词&quot;">​</a></h3><h5 id="hodl" tabindex="-1">HODL <a class="header-anchor" href="#hodl" aria-label="Permalink to &quot;HODL&quot;">​</a></h5><p>hold on for dear life (永远拿住一个币)</p><h5 id="bag-holder" tabindex="-1">BAG HOLDER <a class="header-anchor" href="#bag-holder" aria-label="Permalink to &quot;BAG HOLDER&quot;">​</a></h5><p>坚定地持有币的人</p><h5 id="rekt" tabindex="-1">REKT <a class="header-anchor" href="#rekt" aria-label="Permalink to &quot;REKT&quot;">​</a></h5><p>wrecked(持有大量暴跌的货币的人)</p><h5 id="whale" tabindex="-1">Whale <a class="header-anchor" href="#whale" aria-label="Permalink to &quot;Whale&quot;">​</a></h5><p>巨鲸(大量持有加密资产的人)</p><h5 id="bearwhale" tabindex="-1">BEARWHALE <a class="header-anchor" href="#bearwhale" aria-label="Permalink to &quot;BEARWHALE&quot;">​</a></h5><p>指的是看空的大户</p><h5 id="fud" tabindex="-1">FUD <a class="header-anchor" href="#fud" aria-label="Permalink to &quot;FUD&quot;">​</a></h5><p>Fear uncertainty doubt(恐惧、不确定性、怀疑)</p><h5 id="fomo" tabindex="-1">FOMO <a class="header-anchor" href="#fomo" aria-label="Permalink to &quot;FOMO&quot;">​</a></h5><p>fear of missing out(很害怕错过这次机会，一般指在币价上扬的时候，忙着追涨的人)</p><h5 id="to-the-moon-mooning" tabindex="-1">TO THE MOON/MOONING <a class="header-anchor" href="#to-the-moon-mooning" aria-label="Permalink to &quot;TO THE MOON/MOONING&quot;">​</a></h5><p>飞涨到了月球</p><h5 id="vaporware" tabindex="-1">VAPORWARE <a class="header-anchor" href="#vaporware" aria-label="Permalink to &quot;VAPORWARE&quot;">​</a></h5><p>空气币、资金盘、垃圾币、庄家币</p><h5 id="shil" tabindex="-1">SHIL <a class="header-anchor" href="#shil" aria-label="Permalink to &quot;SHIL&quot;">​</a></h5><p>指为了一己私利去推广资金盘的人，雇佣骗子</p><h5 id="ath" tabindex="-1">ATH <a class="header-anchor" href="#ath" aria-label="Permalink to &quot;ATH&quot;">​</a></h5><p>All time high(一般是指币价涨破历史新高)</p><h5 id="pump-and-dump" tabindex="-1">PUMP AND DUMP <a class="header-anchor" href="#pump-and-dump" aria-label="Permalink to &quot;PUMP AND DUMP&quot;">​</a></h5><p>一般指庄家操纵市场，人为的把某个资产的价格拉高，然后高价卖出获利的行为</p><h3 id="区块链的不可能三角" tabindex="-1">区块链的不可能三角 <a class="header-anchor" href="#区块链的不可能三角" aria-label="Permalink to &quot;区块链的不可能三角&quot;">​</a></h3><p>去中心化、安全性、性能。这三个指标没有办法都达到很高</p><h3 id="软硬分叉" tabindex="-1">软硬分叉 <a class="header-anchor" href="#软硬分叉" aria-label="Permalink to &quot;软硬分叉&quot;">​</a></h3><p>软硬分叉指的是区块链升级的方式。软分叉指向前兼容，硬分叉指不向前兼容，硬分叉升级后会分叉成两条链，一条由运行原来的客户端的节点来支持，一条由运行新的客户端的节点来支持。</p><h3 id="layer0" tabindex="-1">layer0 <a class="header-anchor" href="#layer0" aria-label="Permalink to &quot;layer0&quot;">​</a></h3><p>一般指区块链的底层协议，就是layer1的底层的基础设施，不同的公链他的底层会有不同</p><h3 id="layer1" tabindex="-1">layer1 <a class="header-anchor" href="#layer1" aria-label="Permalink to &quot;layer1&quot;">​</a></h3><p>一般指公链，比如比特币、以太坊、BSC、Solana、Polkadot、OKC</p><h3 id="layer2" tabindex="-1">layer2 <a class="header-anchor" href="#layer2" aria-label="Permalink to &quot;layer2&quot;">​</a></h3><p>layer2指的是基于layer1(一般是基于以太坊)而运行的区块链。目的是为了解决以太坊的拥堵问题，把复杂的交易和计算放到layer2进行，再把结果返回layer1，使用layer1的共识和安全机制。比如Optimism、Polygon(MATIC)</p><p>layer2方案一般分为</p><ul><li>rollup <ul><li>optimistic rollup</li><li>zk rollup</li></ul></li><li>state channel（状态通道）</li><li>Plasma</li></ul><p><a href="https://blog.chain.link/what-is-a-layer-2-zh/" target="_blank" rel="noreferrer">https://blog.chain.link/what-is-a-layer-2-zh/</a></p><h4 id="闪电网络-1" tabindex="-1">闪电网络 <a class="header-anchor" href="#闪电网络-1" aria-label="Permalink to &quot;闪电网络&quot;">​</a></h4><p>闪电网络是一种比特币的layer2解决方案。</p><p>比特币最初的设计更倾向于去中心化和安全性，所以性能很差，每秒只能进行7笔交易(tps是7)。</p><p>所以设计出了闪电网络，基于状态通道，先通过线下通道来执行交易，最后把结果上链。</p><p><a href="https://academy.binance.com/zh/articles/blockchain-layer-1-vs-layer-2-scaling-solutions" target="_blank" rel="noreferrer">https://academy.binance.com/zh/articles/blockchain-layer-1-vs-layer-2-scaling-solutions</a></p><h3 id="侧链" tabindex="-1">侧链 <a class="header-anchor" href="#侧链" aria-label="Permalink to &quot;侧链&quot;">​</a></h3><p>侧链很类似layer2。侧链和L2的主要区别是，L2继承L1主网络的安全性，而侧链则依赖于自己的安全性。侧链比L2更独立，有自己的共识机制。</p><p>layer2和侧链都属于公链常见的扩容方案。</p><p><a href="https://www.binance.com/zh-CN/news/top/7115028" target="_blank" rel="noreferrer">https://www.binance.com/zh-CN/news/top/7115028</a></p><h3 id="什么是weth" tabindex="-1">什么是WETH <a class="header-anchor" href="#什么是weth" aria-label="Permalink to &quot;什么是WETH&quot;">​</a></h3><p>其实是wrapped eth。</p><p>以太坊基础的协议有ERC-20 TOKEN STANDARD，以太坊上运行的DAPP一般都会发行满足ERC-20的token，这些token统称为ERC-20代币。因为都是基于ERC-20协议的，所以互相是互通的</p><p>但是ETH的原生代币(native token)ETH却并不满足ERC-20标准，所以不能与ERC-20代币互通，并不利于DAPP的开发，所以开发者创造出了一个满足ERC-20的新代币WETH，来实现互通。</p><p>WETH与ETH是1:1锚定的，由权威的第三方来通过智能合约的形式质押ETH和铸造WETH(返回ETH，销毁WETH)来实现，当然这个比例根据市场会有一定的波动，甚至会有风险</p><blockquote><p>同理：</p><ol><li>WBTC，就是把BTC这条公链的BTC代币纳入erc-20的体系，来在以太坊的DAPP里互通。</li><li>OKC上的K资产，指的就是把其他公链上的代币，用类似的形式在OKC上铸造一个新的币，满足OKC的代币体系来实现互通。常见的K资产有BTCK、LTCK、ETHK</li></ol></blockquote><h3 id="ens" tabindex="-1">ENS <a class="header-anchor" href="#ens" aria-label="Permalink to &quot;ENS&quot;">​</a></h3><p>ethereum name service</p><p>诞生原因：钱包地址太长，难记，容易出现转账转错的情况</p><p>所以诞生出了ens替代钱包地址，更简洁、不容易出错，转账的时候直接填写ens</p><p>ens相比传统的域名dns解析的区别是:ens是去中心化的</p><p>购买的域名是有商品价值的，好的域名可以挂出去，会被人高价抢购。</p><h3 id="mev" tabindex="-1">MEV <a class="header-anchor" href="#mev" aria-label="Permalink to &quot;MEV&quot;">​</a></h3><p>Maximal Extractable Value 矿工可开采价值</p><p>指的是在创建新区块时增删交易或对交易进行重新排序的策略。 MEV旨在赚取尽可能多的额外利润。 由于区块生产者有能力选择和排序交易，因此最适合采取这一策略</p><p><a href="https://ethereum.org/zh/developers/docs/mev/" target="_blank" rel="noreferrer">https://ethereum.org/zh/developers/docs/mev/</a></p>',119)]))}const b=e(o,[["render",h]]);export{u as __pageData,b as default};
