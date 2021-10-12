# 面试总结

## 自己相关

### 自我介绍

我叫李文韬，来自武汉理工大学，现在读大四。

我从20年5月左右开始自学前端，也有一年多的时间。

主要的学习方式是找国内外的视频（教程、发布会）和文章等。



个人经历：

这个暑假在北京好未来学而思网校实习了三个月，主要负责网校的Web直播课堂相关的业务和相关的重构工作。算是网校技术水平较高的项目。

同时也参与了部分网校前端组的技术小组在整个网校研发部标准工程的制定工作。

同时在实习之前，我也和大学的同学参加了一些团队比赛，做了一些相关的项目，其中分别涉及了 Web3D 和 深度学习 的领域。



总的来说，挺喜欢前端这个方向，也有很多探索的空间，未来也计划向更深的方向去探索。



### 项目相关

学而思网校的直播课堂面向教师、学生分为不同的端，教师端为iPad端 , 学生端有Android IOS PC Web多个端。而我负责的是学生直播端的Web部分，负责开发板书工具 涂鸦画板的功能。

教师端在iPad上进行板书、绘图、以及作出编辑操作等、我们其它各端对绘制和操作作出同步的展示。

在Web端上使用的是HTML Canvas的原生API进行绘制。

我个人负责的是整个套索功能的开发 => 教师批量地选取多个涂鸦、图形，可进行移动、缩放旋转、修改样式等操作。

它涉及到对Canvas API的变换进行组合。设计数据结构对变换记录进行保存

目前整个套索功能已经全量发布了。

个人还利用了变换矩阵的相关知识，利用矩阵计算出通用公式对数据进行了降维。降低整体的绘制时长由65%- 90%, 节点越多，能节省的时间就越多。



#### 前端工程化

我的实习导师同时也是网校研发部前端技术小组的负责人，因此个人还有幸参与了网校研发前端组技术小组有关标准工程的建设项目。该项目的目的是为整个前端组建立一套示范性的开发流程。



整个前端工程化设计的流程是包含很多环节的

核心 ： **标准 + 规范 + 工具 + 自动化**



**开发规范**: 这一部分沉淀的是团队的标准化共识，标准化是团队有效协作的必备前提。

**研发流程**:标准化流程直接影响上下游的协作分工和效率，优秀的流程能带来更专业的协作。 

**基础资产**:资产体系包括了工具链、团队标准 DSL、物料库(组件、区块、模板等)。 

**工程管理**:面向应用全生命周期的低成本管控，从应用的创建到本地环境配置到低代码搭建到打 包部署。

**性能体验**:自动化工具化的方式发现⻚面性能瓶颈，提供优化建议。

**安全防控**:三方包依赖安全、代码合规性检查、安全⻛险检测等防控机制。 

**统计监控**:埋点方案、数据采集、数据分析、线上异常监控等。 

**质量保障:**自测 CheckList、单测、UI 自动化测试、链路自动化测试等。





在此之外，在有相关工具的支持 如前端组CLI工具、性能监控平台等环节 向可视化一站式工具的升级。

本人负责的是规范文档平台的搭建，包括了自动化的文档提交，Gitlab仓库 => CI/CD 进行代码扫描 => 好未来云服务k8s 的自动化部署流程。

它为整体的制度规范提供服务。它也是整个前端研发工程化的基础准备中的一部分。





#### 微前端架构

微前端架构本质上是利用了服务端微服务的思想。在微服务的架构中，我们常把不同的路由分散在不同的主机之上，把一个应用逻辑分成独立的部分，服务和服务之间形成了非常松的耦合。

在前端中我们也可以采用这样的思想，我们可以把一个前端应用的不功能模块来进行拆分，形成多个松耦合的，功能各自独立的许多个子应用



非微前端大型应用的缺点：

1. 代码管理的问题：
   - 权限管控
   -  commit 混乱、分支混乱
2. 开发时困难：
   - 构建时间长
   - 技术体系要求统一
   - 调试入口深
3. 发布上线：
   - 无法同时灰度多产品
   - 代码回滚相互影响
   - 发布相互影响



它的好处在于：

- 各个模块之间功能，逻辑清晰，且满足了**单一责任原则**,一个应用只做一件业务

- 技术异构：我们可以为不同的功能去选择不同的技术架构，不同的依赖库，而他们之间因不相互依赖，也不必去相互照顾

- 可靠：它们若一个应用出现了故障，对其它应用的影响能减到最小

  

在我们的项目中，我们是一个既有 3D场景，3D模型 ，也有2D平面的 DOM组件的一个设计。如果把它们作为同一个应用进行开发，代码量巨大，且不同模块之间的开发会十分难以调试。比如说，我们不希望因为3D场景中的一些开发上的难题未攻破，而引致整个开发流程停下来，因此我们使用了微前端架构。



qiankun emp



Webpack5 **ModuleFederationPlugin**，为我们实现了上述所说的可能性。它能在我们对项目代码进行打包之后，把自身暴露成远端子应用，抑或是申明可被HTTP请求取得的远方的子应用。



考虑单个应用，在我们应用代码分块（code splitting）时，我们使用动态的引入法方引入模组，在真正到达到某个路由时才发出HTTP请求，去得到对应的模块，这里的模块也就是JS文件。在应用中，每个应用我们都使用Webpack进行打包处理，Webpack打包的结果是相应应用完整的代码块，它们本质上能放在任意一个静态服务器，完全能独自实现自己的功能。



我们也可在容器应用中，将这些代码块作为外部的模组引入。在应用之间交互时，这些子应用能在被外部引用时向外暴露出自身的渲染方法，即能告知容器组件如何将自身挂载在容器上的一个通用的接口。

为了保持松耦合的关系，它不会和任何框架和技术相关，只是一个普通的JavaScript回调函数。

在我们的容器得到这个挂载接口，就能把我们的子应用挂在容器应用之上了。容器和子应用之间的通信，也是利用回调函数的方式实现的。

​		

#### React-Three-Fiber 

React Three Fiber 是一个Three.js 的 React 渲染器， 它能把我们 利用JSX语法生成的React VirtualDOM对应动态生成Three.js语法，并把这些对象动态加入画布之中。

而Three.js 本质上利用WebGL来绘制3D效果的，WebGL是非常底层的系统，只处理点，线，三角型。如果我们要开发较完善的，实用的应用，我们就要使用封装库Three.js了，而原生Three.js 一般基于ES6的`class` 来开发，对于一些中大型应用的开发，代码量大，逻辑不清，难以重用。

而我们使用React Three Fiber的原因是我们希望充分利用React应用提供的优势：声明式的编程，组件的重用性，React的状态机制，更新机制，以及React强大的社区生态。

我们所写的React组件，在React内部以VirtualDOM中ReactNode的形式来表现，（更准确来说，是一个个的Fiber对象，这也是这个库名中Fiber字样的由来）。React 通过Diffing（Reconcliation）的过程为我们找出更新目标，再提交到React - Three - Fiber渲染器中进行ReactNode（Patches）到Three.js对象的生成和更新。

性能方面，对比原生Three.js应用来说，它并不会因为引入了额外的更新机制而有所差别，因为Three.js的渲染循环在React之外，那并不是React负责的。

如所有使用VirtualDOM机制的架构一样，VirtualDOM保证的是一个性能的下限，无须手动操作原生API，也能为我们提供过得去的性能。



#### 优化应用性能

- 性能检测的方法
  - 整体指标：使用Devtool中的Performance工具，来观察3D应用最主要的一个参数，也就是FPS。
  - 组件指标：使用React16 提供的 Profiler工具，来观察组件的更新频率。
  - 网络指标：在Network Tab中可看到请求数量，请求文件的大小，处理时间
- React
  - 赖加载组件 - 使用模组的动态引入，和微前端架构 + 路由进行配合，能达到按需加载的目的，减少一次性请求过量的代码和模型
  - 记忆 
    - 减少重复执行繁重计算 ： `useMemo()`,`useCallback()`
    - 减少重复渲染 : `React.memo()` 高阶记忆组件
  - 给列表组件提供`key`属性，帮助React找出列表组件变化时的不变量，减少重复渲染
  - 表现优化，我们使用React16的`<Suspense>`组件，并提供组件未加载时的回滚值，来提高表现性
- 网络传输/资源
  - 为传输模型进行压缩，能减少网络传输时间，主要应用了Draco，一个由Google开发，开源的3D模型压缩库
  - 为我们的模型使用`gltf` /`glb`的二进制格式，更好的适配Three.js 应用，加载的速度也更快
- Three.js
  - 我们使用了拓展库 `react-spring` 来实现物理效果，如果能减少物体之间无效的干涉，就能减少无用的物理计算
  - 减少使用高消耗的光线，阴影

#### 难题

- 开发环境的配置：

  不同团队成员的开发环境都有所不同，有些库的下载，运行在有些成员的电脑是会出问题的。这个在我们在做深度学习项目时，Node.js环境下，使用Tensorflow.js 对图片数据进行预处理的时候就出现了这个问题。

  

  为解决这个问题，我们尝试学习使用Docker，在Docker-Hub上获取已配置好Tensorflow.js的Docker 镜像，将我们的处理程序放在Docker Container之中运行，为我们解决了一些开发环境的问题。

  

### Docker

Docker，最直白的话来理解 可以理解为是一个已经设置，调试完成的一个微型虚拟机。它能把我们要用到的库，封装在一个Linux环境下的容器之中，并提供了向外交互的接口。

- 好处：

1. 它比真实的虚拟机更加轻量，因为它本质上不是一个完整的操作系统，没有GUI，没有一些预装的应用。
2. 它相比我们用VirtualBox去跑的虚拟机，不用我们预先去为它分配资源，和我们的主机去共享系统资源的
3. 轻便：因为它占用的系统资源少，所以在一台主机上可以运行多个Docker Container



- 我们可以到Docker Hub上去获取Docker Image，来作为Container的Base应用，我们可以再向下拓展，在这个预设环境下为它加入其它我们想要的库，最后打包成我们客制的一个Image
- 我们也可以利用Docker-Compose 来联合多个Docker 容器，用它来管理多个Container之间的交互



### Vite

Vite由两部分构成 开发环境下基于ESBuild的开发服务器 + 生产环境下的rollup打包工具

前提，目标用户是使用现代的浏览器，支持ESM

引入：在HTML文件中`<script type='module' src="x.js">`, 之后由浏览器负责发现包、网络请求等。

浏览器内部使用C++等底层语言实现引入机制，因此比基于JS的打包工具效率更高。



核心：

按需引入/代码分块 => 其它工具只在生产环境支持code splitting.

预打包机制，把第三方依赖进行预打包，lodash 600+文件 预先打包成1个包 减少HTTP请求数量

充分利用了浏览器的缓存机制

在输出JS文件时有机会执行中间件的处理，根据文件依赖关系生成Import Graph

HMR热模组替换：



- 一个基于浏览器原生 ES imports 的**开发**服务器

- 利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用

- 打包的概念是开发者利用打包工具将应用各个模块集合在一起形成 bundle，以一定规则读取模块的代码——以便在不支持模块化的浏览器里使用。为了在浏览器里加载各模块，打包工具会借助胶水代码用来组装各模块，比如 webpack 使用 `map` 存放模块 id 和路径，使用 `__webpack_require__`  方法获取模块导出。

- 开发者为了减少 bundle 大小，会使用动态引入 `import()` 的方式异步的加载模块（ 被引入模块依然需要提前打包)，又或者使用 tree shaking 等方式尽力的去掉未引用的模块，然而这些方式都不如 vite 的优雅，vite 可以只在需要某个模块的时候动态（借助 `import()` ）的引入它，而不需要提前打包

  

### WebAssembly

- 面向 Web 的通用二进制和文本格式的项目。
- 成为高级语言的编译目标，目前可以使用 C、C++、Rust、Go、Java、C# 等编译器来创建 wasm 模块。该模块以二进制的格式发送到浏览器，并在专有虚拟机上执行，与JavaScript虚拟机共享内存和线程等资源



## Html

### 1.❗️❗️ H5 新标签？ 语义化的意义？解决了什么问题？

H5 新加入的标签有 : 有表示具体功能的如 `<code>` `<detail>` ；还有表示布局的如 `<header>` `<main>` `<footer>` `<aside>` `<nav>` 等

在有这些语义化的标签之前，我们通常会使用`<div>` 或`<span>`来表示一个区块，并加上**类名**来作实质上功能性的区分。这样既有**命名冲突**的可能，也使得整个 HTML 文件**可读性很差**，再加上开发者对命名之间**没有一个统一的标准**，会变得很难维护。

因此，在正确的地方使用正确的标签，使得**语义明确，功能清晰**。

其次，有利于更好地配合**搜索引擎**，使其能爬取更多的内容

再是有利于更好地支持**阅读模式的设备**

### 2. script 标签中 async 和 defer 的作用和区别？

默认情况下，当浏览器在解析 HTML 文件中遇到`<script>`脚本时，会马上停止页面的渲染，立刻去下载和执行脚本文件。此时我们的页面可能加载不完整。这两个属性都是为了控制 JavaScript 的下载和执行而设的。

- defer 会告诉浏览器，脚本可以立刻下载，但延后到整个页面加载完成之后再运行
- async 脚本会立刻下载，但在下载完成之后会马上执行，它既不保证执行顺序，也有可能在页面加载完成前运行 （优先触发）

### 3. Meta 标签的作用？

它是 HTML 的一个结构性文件，主要表明了文件的一些主要信息 如标题，概述，关键词等来帮助搜索引擎来了解页面内容。它也定义了文档初始的视野范围，初始缩放等等。

### 4. Link 标签 和 CSS 中 @import 的区别？

在解析 HTML 时遇到`<link>`标签，会同时加载引用的 CSS，而用`@import`引入会在页面完全加载完毕之后再加载

`<link>`的向下兼容性比较强，支持低版本浏览器，CSS2.1 之后才支持`@import`

### 5.大量 DOM 元素的优化？

1. 减少反复地进行 DOM 查询，可先将不必循环的根结点缓存。

2. 用`innerHTML`代替直接`appendChild`，以操作字符串来代替操作 DOM

3. 使用 React/Vue 类似的 VirtualDOM 架构

### 6. 如何进行 SEO？

1. 设置合理的 meta Data：尽量用简洁的语言来表示`title`,`description`，`keyword`等
2. 使用语义化的标签
3. 为图片加上`alt` 属性和 `title`属性
4. 页面尽量扁平化，层级不要过深（3 级）
5. 重点要突出

### 7. manifest 是什么？

用 JSON 格式储存的 meta data 扩展版.

### 8. src 和 href 的区别？

- `href`是指对某个资源的引用，指向特定的位置，旨在建立某种联系， 而`src`用于替换当前的内容

- 下载方式的不同： 解析到`src` 的时候，会优先下载该资源，解析，执行。在此时，渲染线程会被阻塞

### 9. `clientTop`,`offsetTop`,`scrollTop` 的区别

offset => 元素的 可见范围 + 滚动条 + border

scroll => 元素的可见 + 不可见的内容

client => 元素的可见内容

### 10. `<image>`元素中`alt`和`title`的区别和作用？

- `alt`: 当文件下载失败时，会显示默认的文字以代替的图片；

- `title`：当用户的鼠标放置在图片之上时，会显示一些补充说明信息

- 以上两者都有助于 SEO 优化，能给予搜索引擎更多的信息

## CSS

### BFC

- BFC (Box Formatting Context )是 CSS 中块级布局的一个基本单位。它可以被认为是一个独立的布局容器，有自己渲染区域。它的布局不会影响到它外部的元素，外部元素也不会影响到它的内部。
- 根浮位溢 FGI
  - 根元素
  - 浮动元素 `float:left `|` float:right`
  - 定位元素（完全脱离文档流）`absolute` | `fixed`
  - 溢出元素 （非`visible`）
  - `flex` | `grid`|`inline-box`
- 用处
  - 可用于清除浮动
  - 可用于防止上下边缘重叠
  - 防止元素被浮动元素所遮盖

### 清除浮动

应用浮动时产生的副作用是浮动元素脱离了文档流，其它兄弟元素会忽略这个浮动元素的存在而进行重排，而父元素的高度也可能因此而改变

清除浮动造成的影响的方法有

\- 使父元素触发 BFC`overflow:hidden` ，BFC 会计入浮动子元素的高度

\- 利用空元素 配合使用 `clear` 属性。 `clear`属性定义了它在某个方向上不能有浮动元素

具体的使用方法：

使用空`<div>`

```css
.clear-element {
  clear: both;
  height: 0;
  overflow: hidden;
}
```

使用伪元素 (理解为墙)

```css
.container::after,
.container::before {
  clear: both;
  content: '';
  display: block;
}
```

空`<div>`对比伪元素:

空`<div>`在文档中加入了无实际语义的元素，把样式设计引入文档结构中，使得页面的结构和样式功能混杂

### 3. block vs inline vs inline-block

- block 块级元素，默认由上到下进行排布，可设宽高，每个元素占一行

- inline 行内元素，默认由左到右进行排布，不可设宽，高，垂直 margin 和 padding ，它的高可以由行高定义
- inline-block 行内块元素表现为是行内元素，但加上了块级元素的属性，如可设宽高，垂直边缘等，`<img>`和`<input>`等

### 元素的居中

### 常见布局的实现

#### 单列布局 (同宽) **（margin-horizontal :auto）**

```html
<body>
  <header>Header</header>
  <div id="content">Main</div>
  <footer>Footer</footer>
</body>
```

```css
header {
  /*防止屏幕宽小于1000px 出现滚动条*/
  max-width: 1000px;

  /* 居中 */
  margin: 30px auto;
}

#content {
  max-width: 1000px;
  margin: 30px auto;
  height: 80vh;
}

footer {
  max-width: 1000px;
  margin: 30px auto;
}
```

#### 三列自适应布局 **(两边绝对定位)**

```html
<div id="main">Middle</div>
<div id="left">Left</div>
<div id="right">Right</div>
```

```css
#left {
  width: 200px;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
}

#right {
  width: 200px;
  height: 100vh;

  position: absolute;
  top: 0;
  right: 0;
}

#main {
  margin: 0 200px;
  height: 100vh;
}
```

#### 双飞翼布局

```html
<header>Header</header>
<div class="wrapper">
  <div class="center">Center</div>
</div>
<div class="left">Left</div>
<div class="right">Right</div>
<footer>Footer</footer>
```

```css
header {
  width: 100%;
  height: 100px;
}

footer {
  width: 100%;
  height: 100px;

  /*  由footer 负责清空浮动*/
  clear: both;
}

.wrapper {
  width: 100%;
  float: left;
}

.center {
  margin: 0 200px;
}

.left {
  width: 200px;
  float: left;
  margin-left: -100%;
}

.right {
  width: 200px;
  float: left;
  margin-left: -200px;
}
```

#### 圣杯布局

步骤：

- 主内容置顶，三者都浮动，
- 切换位置 ( 负的 margin-left )
- 容器 padding 撑开

```html
<header>Header</header>
<div class="wrapper clear-fix">
  <div class="center">Center</div>
  <div class="left">Left</div>
  <div class="right">Right</div>
</div>
<footer>Footer</footer>
```

```css
header,
footer {
  width: 100%;
  height: 50px;
}

/*对wrapper清除浮动*/
.clear-fix::before,
.clear-fix::after {
  content: '';
  display: block;
  clear: both;
}

.wrapper {
  padding: 0 200px;
}

.left {
  width: 200px;
  height: 100px;

  float: left;
  margin-left: -100%;

  position: relative;
  left: -200px;
}

.right {
  width: 200px;
  height: 100px;

  float: left;
  margin-left: -200px;

  position: relative;
  left: 200px;
}

.center {
  width: 100%;
  height: 400px;

  float: left;
}
```

#### 三列等高布局

```html
<div class="container">
  <div class="item left"></div>
  <div class="item middle"></div>
  <div class="item right"></div>
</div>
```

```css
//1
.container {
  display: flex;

  /* By Default */
  /* align-items: stretch; */
}

.item {
  width: 500px;
}
```

```css
//2
.item {
  display: table-cell;
}
```

```css
//3
.container {
  overflow: hidden;
}

.item {
  float: left;

  margin-bottom: -100vh;
  padding-bottom: 100vh;
}
```

### 6. Flex:1 的三个属性

`flex:1` 等价于

```css
flex-grow: 1;
flex-shrink: 1;
flex-basis: 0%;
```

\- flex-grow: 元素在有多余空间时的放大比例

\- flex-shrink: 元素在不足空间时的缩小比例

\- flex-basis : 缩小和放大的边界尺寸 如当值为`25%`，缩小时元素的宽度会小于等于父元素的 25%，放大时会大于等于父元素的 25%

### 7. Justify/align 的三种属性 (x-items,x-content,x-self)

### 8. rem em px 的区别

- px 是绝对单位，是参照用户显示器的分辨率的单位，因此在用户放大页面时不会随之放大

- em 是相对于自己或父元素的字体大小，若自己没设定字体大小则会继承父元素的字体大小

- rem 和 em 类似 但它相对的是根元素的字体大小

### 9. 常用定位属性

- `static` 默认值，元素按默认形式进行排列

- `relative` 半脱离文档流，可使用 `top` `left` 等进行相对于原位置的移动，不会影响到其它原素的排布

- `absolute` 完全脱离文档流，其它兄弟元素会完全完全忽略其存进行重新排布。它的定位相对于最近一个定位为非`static`的父级元素

- `fixed` 完全脱离文档流，相对于浏览器`view-port`定位，所以滚动对其无影响

- `sticky` 在可视范围之内，它会表现为`relative`的属性；元素部分或全部滚出`view-port`会表现为`fixed`

### 10. 什么是伪元素？ 什么是伪类？它们的区别？

### 11. CSS 的盒模型？ content-box 和 border-box 的区别和应用？

`box-sizing`

HTML 元素均用盒模型进行定位和尺寸定义，它由外到内包含了 `margin ` `border` `padding` `content`

两者的区别在于`content` 也就是内容范围的定义：

- W3C 标准的`content-box`以实际内容作为 content 部分

- IE 标准的`border-box` 内容部分为 content + padding + border

同时这也影响了`width`和`height`的定义 === content / border

### 12. ❗️CSS 选择器的优先级？解析顺序？

最高优先级 `！important` 其无视选择器权重，若相同再比较权重

其余的选择器的权重可用数字量化表示

1000 行内样式

100 ID

10 类名 属性 伪类

1 标签名 伪元素

0 通配符 关系型

### 13. z-index 的规则

由底到顶：

`background`

`zIndex < 0`

非定位块元素

浮动元素

非定位行内元素

定位元素

`zIndex > 0`

### 14. 使用 CSS 画一个三角形

```css
.triangle {
  width: 0;
  height: 0;

  border-top: 10px solid red;

  border-bottom: 10px solid transparent;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
```

### 15. 截断字符串，以...结尾

单行

```css
.truncate {
  width: 500px;

  /*实现关键*/
  text-overflow: ellipsis;
  overflow: hidden;

  /*强制它 不换行*/
  white-space: nowrap;
}
```

多行

```css
.truncate-multi {
  width: 500px;

  /*关键*/
  text-overflow: ellipsis;
  overflow: hidden;

  /*借用webkit外部属性实现*/
  display: -webkit-box;

  /*规定行高为三行*/
  -webkit-line-clamp: 3;

  -webkit-box-orient: vertical;
}
```

### 16. 若不兼容 如何实现`sticky`

用 JavaScript 监听目标元素的顶部高度，在滚动时获取，若超出则把`postion`设为`fixed`

### 17. 如何实现轮播图（CSS 和 jS 方式）

```css
@keyframes scroll {
  0%,
  15% {
    transform: translateX(0%);
  }
  20%,
  35% {
    transform: translateX(-20%);
  }
  40%,
  55% {
    transform: translateX(-40%);
  }
  60%,
  75% {
    transform: translateX(-60%);
  }
  80%,
  100% {
    transform: translateX(-80%);
  }
}

.images {
  width: 500vw;
  overflow: hidden;
  animation: scroll ease-in-out 15s infinite;
}

.item {
  width: 100vw;
  height: 300px;
  float: left;
}
```

JS:

`setInterval()` + 计算 transform 的值，和 CSS 的方法类似

### 18. `margin`重叠的规则

正正取最正

负负取最负

正负 = 正值 - 绝对值大的值

## JavaScript

### 类型转换

#### `==` 和 `===`的区别

- 使用`==`的时候，若等号两遍的值不同，会先进行类型的转换
  - `null == undefined // true`
  - `null / undefined == <anything> // false`
  - 两边都是基础类型 先转化为数字再比较
  - 对象和基础类型 先试`function function valueOf()()` 再试`function function toString()()`
- `===` 先比较类型再比值

```javascript
//They are all true!
([] == false[1]) == true;

const a = { x: 1 };
const b = { x: 1 };

a !== b;
a != b;
a == '[object Object]'; //function function toString()()

const arr1 = [1];
const arr2 = [1];
arr1 !== arr2;
arr1 != arr2;

arr1 == '1'; // function function valueOf()()
```

### ES6

#### ES6 的新特性

- `let ` `const`
- `class`
- `=>`
- `Map,Set,WeakMap,WeakSet`
- `Promise`
- Template String
- 数组对象的解构
- 扩展运算符
- `for...in` / `for...of`

#### `let` , `const` 和`var`

使用`var`定义的变量，它自动会在所在的代码生成阶段，执行上下文被创建之时定义为`undefined`,并被加入其变量环境中，因此它可以在代码定义之前访问，也就是我们所说的变量提升；

使用`let` 和 `const ` 定义的变量，它在创建执行上下文的阶段会被认为是`uninitialized`的，会被加入语义环境之中

 因此不可以在代码中定义之前访问它，也就是`let` 和`const`不会变量提升

`let`的值可以之后进行重新赋值 `cosnt` 不可以

#### Promise

Promise 是 ES6 提供的一个实现异步操作的非常好的解决方案，它解决了 ES6 之前使用回调函数的一些弊端：比如说如果有多个异步操作有依顺序进行，那么它的实现会有很多回调函数的嵌套，也就是所谓的`callback hell`. 同时对于错误也非常的难以调试。

而 Promise 使用链式语法，同时附带了`catch`方法，解决了上述问题。

#### Promise 方法

- `Promise.all()`

```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const result = [];

    for (let index = 0; index < promises.length; index++) {
      const promise = promises[index];

      if (!(promise instanceof Promise)) {
        result[index] = promise;
        continue;
      }

      promise
        .then((value) => {
          result[index] = value;

          //Wait...
          if (result.length === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    }
  });
}
```

- `Promise.allSettled()`
- `Promise.race()`
- `Promise.any()`

#### 箭头函数

- 没有自已的`this`，若在其中出现`this`,会指向外部环境中的`this`
- 没有`argument`,若要得到全部参数则要用`...args`获取
- `this`和外部语义环境绑定，因此不可使用 `apply` 和 `call`去改变，`bind`对其无效
- 不能作为构造函数使用

  

### 手撕题

#### 深拷贝和浅拷贝

- 深拷贝在内存另外开辟一块内存空间，它们之间的值互相不受影响

- 浅拷贝出来的对像在内存中指向同一个内存空间，它们的值一个修改了，另一个也会跟着变化

  实现

  - 1. 判断是否为对象
    2. 判断是否为数组
    3. 判断是否为函数
    4. 循环引用， 利用 set 解决

  ```javascript
  function deepClone(target,set = new Set()){
    let result;
  
    //Prevent ciruclar reference...
    if(set.has(target)) return target;
  
    if(Object.prototype.toString().call(target) === '[object Object]') result = {};
    else if (Array.isArray(target)) result = [];
    else return target;
  
    for(let key in target){
      //Record
      set.add(target[key]);
  
      if(target.hasOwnProperty(key)){
        //Object OR Array
        if(typeof target[key] === 'object'){
            result[key] = deepClone(target[key],set);
          }
  				//Function
        }else if(typeof target[key] === 'function'){
            result[key] = target[key].bind(result)
        }else {
          //Primitive
          result[key] = target[key]
        }
      }
    }
  
    return result;
  }
  ```

#### 防抖和节流

- **防抖**：对于一些动作造成的后果比较昂贵之时，希望待其用户操作确定（稳定）之后再处理结果。在这一段时间内若多次触发，定时器会重置。

  - 应用场景： 提交按钮的多次点击； 用户搜索框的输入

  - 手写实现：

    ```javascript
    //Always delay a couple of seconds...
    function debounce(fn, time) {
      let timer = null;
    
      return function (...args) {
        const context = this;
    
        if (timer) {
          // clear timer...
          clearInterval(timer);
        }
    
        //set or reset timer...
        timer = setInterval(() => {
          //setInterval 在不同的环境下运行，this指向global,因此利用闭包方式传入this
          fn.apply(context, args);
    
          timer = null;
        }, time);
      };
    }
    
    //Invoke immediately...
    function debounce(fn, time) {
      let timer = null;
      let invoked = false;
    
      return function (...args) {
        const context = this;
    
        if (!invoked) {
          invoked = true;
          return fn.apply(context, args);
        }
        if (timer) {
          // clear timer...
          clearInterval(timer);
        }
    
        //set or reset timer...
        timer = setInterval(() => {
          //setInterval 在不同的环境下运行，this指向global,因此利用闭包方式传入this
          fn.apply(context, args);
    
          timer = null;
          invoked = false;
        }, time);
      };
    }
    ```

- **节流**：对于一些频繁触发的动作，用定时器限制其最小触发间隔，以避免过于频繁去触发。在这一段时间内若多次触发，只会有一次生效。

  - 应用场景：滚动事件，缩放事件，Resize 事件

  - 手写实现：

    ```javascript
    function throttle(fn, time) {
      let inThrottle = false;
    
      return function (...args) {
        const context = this;
    
        if (!inThrottle) {
          // setTimeout 的this 指向会改变，利用闭包传入
          setTimeout(() => {
            fn.apply(context, args);
            inThrottle = false;
          }, time);
    
          inThrottle = true;
        }
      };
    }
    ```

#### 链式调用

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.eat = function () {
  //code here...

  return this;
};

Person.prototype.sleep = function () {
  //code here...

  return this;
};
```

#### Curry 化

```javascript
function sum(...args) {
  const nextFunc = (...nextArgs) => sum(...args, ...nextArgs);

  nextFunc.getValue = () => args.reduce((a, b) => a + b);

  return nextFunc;
}
```

#### `call`,`bind`,`apply` 的区别？ 分别手写实现

```javascript
Function.prototype.myCall = function (context, ...args) {
  //Browser => window ; Node.js => global; 它们有统一的接口globalThis
  const _context = context || globalThis;

  _context.fnToCall = this;

  const result = _context.fnToCall(...args);

  delete _context.fnToCall;

  return result;
};

Function.prototype.myApply = function (context, args) {
  const _context = context || globalThis;

  _context.fnToCall = this;

  const result = _context.fnToCall(args);

  delete _context.fnToCall;

  return result;
};

Function.prototype.myBind = function (context, ...args) {
  const _context = context || globalThis;

  _context.fnToCall = this;

  const returnFunc = function () {
    return _context.fnToCall(...args);
  };

  delete _context.fnToCall;

  return returnFunc;
};
```



#### 手写Promise

```javascript
const Status = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
  };

class MyPromise {
    status = Status.PENDING;
    value = undefined;
    error = undefined;
    onFulfilledCallbacks = [];
    onRejectedCallbacks = [];

		constructor() (executor) {
      let self = this;

      function onResolve(value) {
        self.value = value;
        self.status = Status.FULFILLED;

        if (self.onFulfilledCallbacks.length) {
          self.onFulfilledCallbacks.forEach((fn) => fn(value));
        }
      }

      function onReject(reason) {
        self.error = new Error(reason);
        self.status = Status.REJECTED;

        if (self.onFulfilledCallbacks.length) {
          self.onRejectedCallbacks.forEach((fn) => fn(self.error));
        }
      }

      executor(onResolve, onReject);
    }

    then(onFulfilled) {
      if (this.status === Status.FULFILLED) {
        onFulfilled(this.value);
      } else if (this.status === Status.PENDING) {
        this.onFulfilledCallbacks.push(onFulfilled);
      }
    }

    catch(onError) {
       if (this.status === Status.REJECTED) {
        onReject(this.reason);
      } else if (this.status === Status.PENDING) {
        this.onRejectedCallbacks.push(onError);
      }
    }
  }
```





### 编译，运行环境

#### 闭包

当一个函数返回的函数可以访问到当前生成该函数作用域中的变量时，即使在生成函数执行完毕之后，它引用的变量不会因它所在的执行上下文的出栈而被回收，而是被保存在一个封闭的内存区域之内，且只有这些返回函数能访问。这个封闭的区域为之闭包。

使用场景：

- 防抖与节流等使用`decorator`形式的函数

- 回调函数 -> 事件点击 / 异步回调

- `setTimeout()`等要包含变量的情况

#### JavaScript 的编译和执行过程

#### 暂时性死区

JavaScript 的代码运行分为**编译**和**执行**过程

在编译阶段，会做以下的几件事：

1. 变量环境的创建
2. 语法环境的创建
3. `this`的绑定
4. 创建外部环境的指引

变量环境创建时会检查当前作用域内的使用`var`关键字定义的变量和`function`关键字定义的函数，并为它们赋上初值。`var`变量初值是`undefined`

`function`的初值是函数本身，这也就是 JavaScript 中的 `var` 和`function`出现变量提升现象，且`function`比`var`优先定义的原因。

语法环境的创建主要涉及到`let`和`const`定义的变量，在这个过程中，JavaScript 会找到这些变量，但会认为它们是未定义的状态，不可提前访问。直到开始运行到声明语句之时，在这之前的区域也叫作 **暂时性死区** 这就是使用`let`和`const`定义的变量不能是升的原因。

这四步加起来共同构成了 JavaScript 的执行上下文

执行时，所在作用域会经历上述阶段，生成执行上下文，并把其推入执行栈之中。在当前作用域已运行完毕，该执行上下文会被推出执行栈，等待回收。闭包情况除外。

#### `this`

因 JavaScript 的函数可以作为返回值，使得函数可在任意环境下执行。因此，`this`的指向也会随函数运行的位置，准确地来说是执行的上下文而改变。执行的上下文不同，`this`的指向也不同。

- 函数中的`this`
  - 由对象调用的函数 => 指向调用对象
  - 无对象调用的函数 => 指向`global`对象 / `undefined`（严格模式下）
  - 作为构造方法调用 => 指向使用`new`关键字生成的对象
- 由`bind`,`call`,`apply`调用，改变`this`的指向
- 箭头函数中的`this`
  - 箭头函数没有`this`，如若在箭头函数中出现`this`，则会从它的外部执行环境中获取。

### 模块化

#### 前世

主要存在的模块系统有 **commonjs**,**AMD**,**UMD**,**ESModule**

在初期的 JavaScript 并没有模块化的概念，JavaScript 仅存在于浏览器中，用`<script>`引用。

要注意加载的先后顺序，对于大型项目来说管理非常麻烦。

在 ES6 之前是没有模块系统，也没有封闭作用域的概念的，所以上面 js 文件里申明的变量都会存在于全局作用域中。

因此，为了解决这个方法，那时的开发者会使用命名空间的方法，或是利用JavaScript的闭包特性，利用立即执行函数来做变量的封闭；



但开发者之间都没有一个统一的标准，`Node.js`为了改善这一点开发出了`commonjs`的模组化系统。

#### CommonJS

它定义了：**每个文件就是一个模块，有自己的作用域。在一个文件里面定义的变量、函数、类，都是私有的，对其他文件不可见。**



它利用**`module` 代表当前模块，是一个对象，保存了当前模块的信息。**

**`exports` 是 `module` 上的一个属性，保存了当前模块要导出的接口或者变量，**

**使用 `require` 加载的某个模块获取到的值就是对应模块使用 `exports` 导出的值**

`require` 命令的基本功能是，读入并执行一个 js 文件，然后返回该模块的 exports 对象

它的加载均是同步加载，因文件在本地磁盘，加载很快。



但在浏览器中绝大部分的资源均是网络加载，因些更适合用异步加载的方案。



#### AMD模组（Asynchronized Module Defination）

RequireJS 是一个 js 文件和模块加载器。它非常适合在浏览器中使用，但它也可以用在其他 js 环境

在推广之下它就逐渐成了一种规范，也就是AMD模组规范

由`RequireJS`实现的，本质上是利用一个回调函数，在模组加载之后会执行相应的回调函数，所有依赖于这个模块的代码都会放在这个回调函数之中，但没有解决文件依赖次序的问题



#### CMD (Common Module Definition)

CMD模组规范是由一个名为`Sea.js`的模组加载库推广的，它的开发都认为，AMD 规范是异步的，模块的组织形式不够自然和直观。于是CMD在追求能像 CommonJS 那样的书写形式。于是就有了 CMD 。也就是说 在CMD的规范之下，可以使用`require()`,`module.export`等等

它的原理是：加载后未执行前 对这个模块中利用到`require`的进行依赖检测，去提取和加载依赖项，再执行回调，这样既能在浏览器中使用commonjs的语法，也能异步加载模块



#### ESModule

而上述所有的模组解决方案，都有一个共同点，就是运行时检查依赖，在代码实际运行之时才去检查模组依赖，

而ES6 Module 的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及导入和导出的变量，也就是所谓的"编译时加载"。

因此，我们在使用ES模组的时候，一般不是使用表达式/变量的形式，而是在文件的顶部使用`import`语句；

ES6比Commonjs等模组系统多了一个编译时解析的过程，能提前通过`import`和`export`语句来找到对应的依赖关系。

这时，它只是发现了模组的一个引用关系，这种关系是只读的，在真正执行的时候如果要用相关的模组，就会到被加载的模块中去取值。



而Commonjs它输出的值是一个对象，它的值是对应值的拷贝，所以一但输出，模组内再变化是不会影响到模组外的值的。





### 事件循环

JavaScript 的任务分为两种，分别为同步和异步。同步任务会依次在主线程运行，而异步任务会被存在任务队列中等待合适的时机移到执行栈中运行。之所以有这样的设计因为 JavaScript 主线程只有一个，不可以把它阻塞。

每当执行栈被清空，JavaScript 会检查有无没完成的且时机合适的异步任务，有的话会把它放入执行栈继续运行，这样不断循环下去。这就是所谓的事件循环。

异步的事件分为宏任务和微任务

宏任务要直接放入执行栈运行的任务：像**主代码的运行**，`setTimeout(),setInterval()`， **渲染 UI**等均是宏任务，

而微任务主要是存放宏任务带来的影响，比如`Promise`之中的`then`等的回调函数，微任务是宏任务造成的影响具有实时性，所以较为重要，要优先执行。

- **Browser** 环境下的事件循环

  在 Browser 之中，JS 会一次把一个宏任务从队列中拿出来，执行完之后会执行微任务中的所有任务；之后再进行下一次的循环

- 在 **Node** 环境下

  事件循环的机制不相同，Node.js 会把宏任务再细分，分成四大队列，每次处理`1 ~ 多`个任务：

  `Timer` ：处理`setTimeout()` 和`setInterval（）`

  `I/O`:处理使用`fs`等输入输出的任务

  `check`:处理`setImmediate()`

  `CloseCallback`:处理一些关闭事件

  微任务细分：

  `process.nextTick()` (先)

  `.then(() => {})` （后）

  NodeJs 和 Browser 最大的不同，它会在适当的时机停下等待，直到有新的任务完成。

#### 定时器为何是不准确的？

#### `requestAnimationFrame()`

- 解决的问题：

  传统的 CSS 动画在`requestAnimationFrame`出现之前，一般会使用`setTimeout`和`setInterval`两者，每隔一段时间进行一些元素的刷新。这种方法的缺点在于：

  `setTimeout`和`setInterval`是不精确的，它们的间隔时间会大于或等于所设定的时间，它们会被依次放入任务队列中的宏任务队列，排队进行。如果遇到阻塞，则会一直等待；

  在动画元素不可见之时，不会自动停止，因而会耗费大量资源；

- 特点和优势：

  1. `requestAnimationFrame`没有一个固定的时间间隔，最佳更新时间由浏览器分配。当当前条件充许进行下一次重绘/回流时，`requestAnimationFrame`中的回调会被调用
  2. 对于不可见的元素（滚出 view-port / 背景标签页）时，`requestAnimationFrame`的调用会停止或被降至很低，以降低系统资源消耗
  3. 会把所有操作聚合，尽量在一次重绘或回流就完成

### 原型 继承

#### 原型系统

原型是 JavaScript 的继承系统，属于父类型的方法和属性可以被子类型的对象所引用。每个 JavaScript 创建的对象都有一个隐式原型属性`__proto__`，它指向了生成这个实例的构造函数的原型`prototype`，也被称作显式原型，所有指向它的对象都可以访问到显式原型的方法。而原型本身也是对象，也有自己的原型，这样就型成了一种链式的继承。

相比于其它的编程语言，使用原型的好处是：

- 同类型的对象引用的是同一个原型对象，这样就减少了内存空间，否则需要每创建一个对像就产生众多的父类对象

- 改变父类对像也非常简单，只要改变指向原型的指针即可

  

#### `new` 一个对象的时候发生了什么？

1. 新建一个空的对象 `{}`

   ```javascript
   const person = {};
   ```

2. 使得`this`指向这个新建的对象

3. 将这个对象的隐式原型指向构造函数的显式原型

4. 以新对象作为上下文运行构造方法

   ```javascript
   person.__proto__ = Person.prototype;
   Person.call(person, ...args);
   ```

5. 返回这个对象

   ```javascript
   // 如若Person 构造方法返回了别的对象，则优先采用
   const highPriorityPerson = Person.call(person, ...args);
   if (highPriorityPerson) return highPriorityPerson;
   
   //否则采用最先创建的对象
   return person;
   ```

#### 用多种方法实现继承

- 方法 1 调用构造函数继承

```javascript
function Animal(age) {
  this.age = age;
}

function Human(name, age) {
  Animal.call(this, age);

  this.name = name;
}

const human = new Human('Tony', 20);
/*
{
	name:'Tony',
	age:20,
	[object Object]:{
		function Object() :function Human(name,age){...},
		[object Object]: Object {...}
	}
}
*/
```

- 方法 2 **组合继承**

```javascript
function Animal(age) {
  this.age = age;
}

Animal.prototype.breath = function () {
  console.log('breathing...');
};

function Human(name) {
  this.name = name;
}

Human.prototype = new Animal(20);
Human.prototype.function Object()  = Human;

const human = new Human('Tony');

/*
{
	name:'Tony',
	[object Object]:{
		age:20,
		[object Object]:{
			breath:function(){...},
			function Object() { [object Object] }:function Animal(age){...}
			[object Object]: Object {...}
		}
	}
}
*/
```

- 方法 3 **寄生式继承**

```javascript
function createAnimal(proto) {
  function Dummy() {}
  Dummy.prototype = proto;
  Dummy.prototype.breath = function () {
    console.log('breathing...');
  };

  return new Dummy();
}

function createHuman(age, name) {
  const animal = createAnimal({ age, name });
  animal.walk = function () {
    console.log('walk');
  };

  return animal;
}
```

- 方法 4 组合寄生式

```javascript
function createObject(proto) {
  function Dummy() {}
  Dummy.prototype = proto;

  return new Dummy();
}

function inherit(Child, Parent) {
  const parentInstance = createObject(Parent.prototype);
  parentInstance.constructor = Child;
  Child.prototype = parentInstance;
}

function Animal(age) {
  this.age = age;
}

Animal.prototype.breath = function () {
  console.log('breathing...');
};

function Human(name, age) {
  Animal.call(this, age);
  this.name = name;
}

inherit(Human, Animal);

Human.prototype.talk = function () {
  console.log('Talking...');
};

const human = new Human('Tony', 20);

/*
{
	age:20, 																				//human
	name:"Tony",
	__proto__:{																			//Human.prototype
		function Object() : function Human(name,age){...},
		talk:function(){...},
		__proto__:{
			breath:function(){...},
			function Object() : function Animal(age){...},
			__proto__: Object {}...
		}
	}
}
*/
```

### 判断类型

#### 判断对象是数组

`Array.isArray(arr)`

`arr instanceOf Array`

`arr.__proto__ === Array.prototype`

`arr.__proto__.constructor  = Array`

`Object.prototype.toString.call(arr) === '[object Array]'`

#### 判断数据类型

- 方法 1 使用 typeof

```javascript
typeof undefined === undefined;
typeof 22 === 'number';
typeof 'str' === 'string';
typeof NaN === 'number'

typeof [] === 'object'
typeof /^\w$/ === 'object'
typeof null === 'object'; //!!!
typeof () => {} === 'function'
```

- 方法 2 使用 instanceof

  `instanceof`会检查对象的构造方法的显式原型 --- `function Object() .prototype`是否在目标原型链之上

```javascript
22 instanceof Number === true;
'str' instanceof String === true;

22 instanceof Object === false;
new Number(22) instanceof Object === true;

[] instanceof Object === true;
undefined instanceof Object === false;
null instanceof Object === false;
```

- 方法 3 `Object.prototype.function function toString().call()`

```javascript
Object.prototype.function function toString().call(2) === '[object Number]';
Object.prototype.function function toString().call('str') === '[object String]';

Object.prototype.function function toString().call([1, 2, 3]) === '[object Array]';
Object.prototype.function function toString().call({}) === '[object Object]';
Object.prototype.function function toString().call(() => {}) === '[object Function]';

Object.prototype.function function toString().call(null) === '[object Null]';
Object.prototype.function function toString().call(undefined) === '[object Undefined]';

Object.prototype.function function toString().call(Math) === '[object Math]';
Object.prototype.function function toString().call(new Date()) === '[object Date]';
```

#### JS 的数据类型？ 引用类型和基本类型的区别？

基本数据类型：

- `number`
- `string`
- `boolean`
- `null`
- `undefined`
- `Symbol`

引用数据类型：

- `Object`
- 所有继承自`Object`的类型，如`Array`，`Function`，`Date`等

基本数据类型存放在内存中的栈区，内存空间是固定的，在复制的时候和函数传递的时候会采取传值的方式。

而引用数据类型是在栈空间中存入的不是对象本身，而是对应在堆内存的地址，实际的对象存放在堆内存之中。当对对象进行浅拷贝或参数传递之时，它传递的只是一个内存地址，而不是对像的数据本身。

#### Symbol

能在 JS 中创建 **独一无二**的值，`Symbol`本身是一个工厂函数，即使传入的值一样，生成的 Symbol 也不一样。

用法：

```javascript
const sym = Symbol('id');
```

使用情况：

- 消除 **Magic String**，有点像 TypeScript 中的 Enum 类
- 模拟私有的方法，使用 Symbol 作为`key`

### API

#### 27. JavaScript 的数组方法

```typescript
type forEach<T> = (fn: (item: T, index: number, arr: T[]) => void, thisArgs: any) => T[];
type map<T, N> = (fn: (item: T, index: number, arr: T[]) => R, thisArgs: any) => N[];
type filter<T> = (fn: (item: T, index: number, arr: T[]) => boolean, thisArgs: any) => T[];
type reduce<T, R> = (fn: (previous: R, current: T, index: number, arr: T[]) => R, initValue: R) => R;

type find<T> = (fn: (target: T, index: number, arr: T[]) => boolean, thisArgs: any) => T;
type findIndex<T> = (fn: (target: T, index: number, arr: T[]) => boolean, thisArgs: any) => number;

type some<T> = (fn: (item: T, index: number, arr: T[]) => boolean, thisArgs: any) => boolean;
type every<T> = (fn: (item: T, index: number, arr: T[]) => boolean, thisArgs: any) => boolean;

type concat<T> = (...arrays: T[]) => T[];

type slice<T> = (start: number, end?: number) => T[];

//以下所有方法均在原数组的基础上修改
type splice<T> = (start: number, deleteCount?: number, ...newItems: T[]) => T[]; //被删除的

//依ASCII顺序比较
type sort<T> = (compareFn: (a: T, b: T) => number) => T[];

//返回数组的新长度，下同
type push<T> = (...newValue: T[]) => number;
type pop<T> = () => T;

type unshift<T> = (...newValue: T[]) => number;
type shift<T> = () => T;

type reverse<T> = () => T[];
```

#### 30. `Set` `Map` `WeakSet` 和`WeakMap`四者的区别和用处

`Set`和`WeakSet`用于存放一系列不相同的值；

`Map`和`WeakMap`用于存放一系列不相同的键值对；

`Set`可以存放任何类型的值，包括基本类型和引用类型；有遍历方法；

`WeakSet`只能存放引用对象，不可存放值；当`WeakSet`中的值无处引用时，可被垃圾回收，不容易造成内存泄漏；`WeakSet`是不可遍历的

`WeakMap`和`WeakSet`类似，其键必须是引用类型的值

- 不可遍历的原因：`WeakSet`和`WeakMap`运行前后的成员数量可能不同（被回收），因此不存在遍历机制

### DOM 事件

#### 32. DOM 的事件机制/ 事件流？

一个完整的事件流分为**捕获阶段**，**目标阶段**，**冒泡阶段**

- 捕获阶段：在 W3C 的规定中，事件由 window 开始向下发布，按以下顺序向下传播：

  `window` => `document` => `<html>` =>`<body>` => ... => 一直下沉到真正发生所在的元素

  在这个阶段，会调用沿途元素相应事件的捕捉函数（如果有给定）

- 目标阶段：事件下沉到目标元素的时刻

- 冒泡阶段：事件会从发生目标开始，由下至上逐层向上传递，触发相应的事件处理函数

- 事件目标：

  - `event.target` 真正被点击的目标，在全过程中均有且仅有一个
  - `event.currentTarget`目前正在运行处理函数的元素，随事件流变化，事件完成冒泡后会成为`null`

- 应用场景和相关方法：

  - `event.preventDefault`

    阻止 HTML 元素的一些默认行为，如：

    - 表单中的提交按钮
    - `<a>`中的默认跳转行为

  - `event.stopPropagation`

    阻止事件进一步下沉或冒泡

  - `event.stopImmediatePropagation`

    阻止事件进一步下沉或冒泡，且停止其它的事件继续处理

#### 33. 事件委托

利用事件冒泡机制，将一系列元素的处理逻辑统一交予父元素代为执行事件。

```
div
 |_ ul（处理）
 		|_ li - div
 		|_ li - div
 		|_ li - div (触发)
 		|_ li - div
 		|_ li - div

```

可以此法减少事件处理函数的数量，也能减少 DOM 操作的数量，提高性能



### JavaScript 多线程

Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行。



在主线程运行的同时，Worker 线程在后台运行，两者互不干扰。

等到 Worker 线程完成计算任务，再把结果返回给主线程。

这样的好处是，一些计算密集型或高延迟的任务，被 Worker 线程负担了，主线程不会被阻塞或拖慢。


特点：

- webworker无法访问DOM节点
- 无法访问全局变量或者函数
- webworker与主线程之间不能共享资源和作用域
- 不支持跨域
- 适用于计算量较大的情况
- global对象的指向有变更。Window类型的window对象被DedicatedWorkerGlobalScope类型的self对象所取代。即，我们一般用的window需要改写成self。
- 只能访问部分navigator对象内的数据。
- 内置了importScripts函数，代替了DOM中的script标签引用脚本机制







通信：

Worker和主线程之间通过异步事件在线程之间传递消息。

主线程分别监听了message事件和error事件，用来处理接收到Worker传出来的数据以及错误信息

`worker.postMessage();` 向外广播消息



```react
//index.html
<script>
  var myWorker = new Worker("my_task.js");

  myWorker.addEventListener("message", function (oEvent) {
    console.log("Called back by the worker!\n");
  }, false);

  myWorker.postMessage(""); // start the worker.
</script>

//worker.js
postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function (oEvent) {
  postMessage("Hi " + oEvent.data);
};
```



### JavaScript 回收机制

两种策略：

1. 标记清除

   垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记；再去掉能被访问到的变量，那么其余的就是可被回收的变量了

2. 引用计数

   生成一个变量，它是一个引用类型时，可以为引用的值计数，来计算被引用的次数。每有一个引用它的变量就加1，引用它的变量指向了别的变量就减1，直到引用次数为0，那就可以被清除





## React

### 渲染，原理

#### VirtualDOM

真实 DOM 的操作是消费巨大的，每次操作 DOM 都会引起页面的重绘和回流。因此出于性能方面的考量，应**极力减少操作 DOM**的次数。

而 React 以 JavaScript 对象的形式来表示真实的 DOM 结构，并只保留了识别和比较相关的属性，轻量级，且不涉及到页面的重新排布。因而 VirtualDOM 的重建是一个并不昂贵的操作。

React 感知变化后，重建 VirtualDOM，经过`diffing`，找出变化的组件，尽可能的一次更新到真实 DOM 之上，减少 DOM 操作的次数。

VirtualDOM 还使得使用 React 进行跨平台应用开发成为可能。在`React`的 VirtualDOM 生成的是`ReactNode`，而`ReactNode`可以通过其它的渲染器渲染成其它平台的原生组件，比如 **React Native** 把 ReactNode 渲染成对应平台的原生 UI；**React Three**把 ReactNode 渲染成 Three.js 的元素，再将其放入`<canvas>`之中等等

现实上，使用 VirtualDOM 对性能的影响

VirtualDOM 的准备阶段是比较耗费的，但比起直接操作 DOM 带来的消费来说是一个极大的提高；

手动操作 DOM 上限可以高，但一旦开发者的水平不足，下限也很低，

如 Vue 的作者尤雨溪所说，VirtualDOM 保证的是一个性能的下限，无须手动操作 DOM 也能提供过得去的性能。



#### React - Fiber

React 16 之前使用**Stack Reconciler**，即使用 JavaScript 的递归栈进行 Reconcliation，这种递归的操作是非常难中断和回复的，因此在旧版本的 React，整个 Reconcliation 过程一气呵成。如果节点数量非常多，调和过程一直全占用主线程直到完成，此时用户 UI 完全卡住，没有办法操作和响应。

因此 React 16 把调和过程完全重构，引入了 fiber 的数据结构，调度器的设计等，使得组件的遍历操作可以随时打断，使线程空出响应别的优先级高的事件；



React 内部使用双缓存Fiber 树的机制。分为`current` Fiber树和`workInProgress` Fiber树。

而它们统一由一个Fiber节点统一管理，称作`FiberRootNode`

FiberRootNode存在`current`属性，指向了当前视图中正在应用的fiber树。

WorkInProgress Fiber树指向了React正在构建的Fiber树。



而每一个Fiber节点存在一个alternate属性，它是一个双向的指引，分别指向了另一棵Fiber树对应的Fiber节点。



每一棵Fiber树起始于根节点`FiberRootNode`, 每个Fiber的第一个子节点由`child`属性承接，每个Fiber的下一个相邻的兄弟结点由`slibing`承接。由`return `属性承接Fiber的父元素。



之所以使用`return`属性来表示Fiber节点的父级元素，是因为整个React-Reconciler的目的是希望利用循环遍历来模拟可中断的递归。



每一个Fiber内部的属性可以被分为三个主要部分

1. 实例属性 `key` `type` `props` `stateNode`

2. 架构属性 `child` `return` `slibing` `alternate`

3. 动态工作单元属性

   -  `updateQueue` `memorizeState`和组件状态和更新任务相关

   -  `flags` 
   - `lanes` 等优先级相关



- React-Fiber 下的自已的调度栈和`Scheduler`

  它能够把低优先级的事件项先排队 (指 Reconcliation)，若时间足够，则运行排队的任务；若这些排队的任务超出了一定时间，则会检查是否有优先级比较高的事项发生(用户操作\动画等)，若有则让这些任务插队，并按优先级排序，优先进行。

  

- Fiber

  Fiber 本质上是一种链表式的数据结构，它以指针形式记录结点间的关系；这使得组件更加细粒化；主要有三个指向

  `slibling` : 下一个兄弟组件

  `child`：第一个子组件

  `return`：父组件

  Fiber 架构的好处在于：Fiber 使用地址记录关系，而不是把子元素直接内嵌。因此它可将巨大的渲染任务分成细小的任务去完成，当 Reconcliation 被打断之时，记录下当前遍历到哪个结点。在优先任务完成之后，再回到之前的结点继续。

- UpdateQueue

  在 Fiber 遍历时，亦是采用深度优先搜索。在创建新树时，Reconciler 会比较新旧树的差异，尽可能地复制，重用节点；

  搜索时会从子向兄再向父透过指针回溯，如若需改变，会把自身加入 UpdateQueue 中。UpdateQueue 本质上是一个链表，它指明了组件在 Commit 阶段更新顺序。





#### React Mount和Update过程

整个更新过程分为render和commit 阶段。

1. 解析开发者所写的JSX，利用转译工具插件，如`@babel/plugin-transform-react-jsx`。把JSX函数转译成`React.createElement`的组件创建函数。该创建函数的返回值是`ReactElement`的实例。
2. 创建好的`ReactElement`的实例本质上是一个普通的对象，它会和current Fiber 树上的对应结点的相应属性进行对比。判断是应该复制还是新建一个Fiber，并把它放在 workInProgress Fiber 树之中

**Render**

整个Mount/Update 的Render阶段，模拟了整个递归流程，分为两个阶段，“递”阶段和“归”阶段。

Render “递”阶段的主要函数为`beginWork()` ，

因为模拟深度优先的递归流程，beginWork目的是为了创建目前节点的第一个子Fiber节点。

主要流程是

1. 根据组件的Type调用不同的创建函数，如HostComponent、FunctionalComponent、ClassComponent等

2. 执行`reconcileChildFiber`函数，（Diff算法之所在）

   

3. 根据比较结果，创建或复用对应类型的Fiber

4. 得出的比较结果，会给对应的结点打上相应的Effect Tag。这个Effect Tag，如果在浏览器DOM环境之下，就会对应真实DOM树的操作，如增、删、改。

   这个EffectTag在内部的实现使用的是二进制的掩码形式。



此时创建的Fiber节点，没有被插入到workInProgress 的Fiber树之上。

Render “归”阶段的主要函数是`completeWork()`, 也就是由下到上，通过`return`进行结点的回溯遍历。

在这个过程中，具有EffectTag的Fiber结点会分别首尾相连，形成链表，在内部称作更新队列updateQueue



**Commit**

commit 阶段的入口是`commitRoot`,它是一个同步不可中断的过程，主要目的是把我们得出的Fiber结点更新的实际的DOM树上

commit分为三个阶段：**beforeMutation**, **Mutation** , **Layout**

而这三个阶段总体来说，使用了三个`do-while`循环来处理每个阶段的Effect。

beforeMutation : 在React-DOM进行操作实际的DOM操作之前

Mutation：React调度执行真实DOM操作

Layout：执行DOM操作之后的操作





其中的Effect就包括了DOM结点的提交、useEffect/useLayoutEffect产生的副作用等。

而特殊的useEffect/useLayoutEffect，有一个统称叫作PassiveEffect.它们都在commit阶段被调用，但调用所在的三个阶段不一样。



useEffect，它的根本目的是执行副作用，比如说调API获取数据，但它的执行不应该阻塞浏览器的重绘回流，因此它会在beforeMutation阶段之前注册入列，调用前一个useEffect的返回函数，在Layout阶段完成之后，调度这些useEffect的函数体部分。

因此，它是异步的。



useLayoutEffect 它的调度均在Layout阶段、页面重绘完成前，它从上一次的销毁函数到下一次的函数体部分，都是在Layout阶段同步执行。



useLayoutEffect先于useEffect的副作用调度。



#### DOM 树重建的过程 / Diff

React 的更新过程大主要分为两步： **Reconcilation （调和）**和 **Commit （提交）**

前者涵盖了我们所知的**VirtualDOM Node 的构建**，**Diff 算法**，最终结果是得出了需要改变的部分结点，称之为**Patches**，

后者是由 各种 Renderer 负责 把 **Patches **聚合到真实的 UI 树上

关于 React 的 Diff 算法，它并不是由 React 率先提出的，它普遍的时间复杂度在`O(n^3)`左右。但 React 将其改良，提出了**两点假设**

```
1. Two elements of different types will produce different trees.
两种不同类型的元素，它们生成的子树不同。

2.The developer can hint at which child elements may be stable across different renders with a key prop.
开发者可以为子元素提供不随渲染而变的key属性，来帮助React寻找变化的组件
```

建立在这两点基础上的 diff 算法，时间复杂度可以达到`O(n)`

比较环节：

React 会从根节点开始**由顶至底**进行比较，使用的方法是同层级比较，

采用深度优先遍历，父组件更新影响到子组件的更新

在比较结点的时候有以下情况：

1. Tree diff

   比较前后树有无新结点或删除结点

2. Component diff

   节点类型不同：

```
OldTree.NodeA: <span>...</span>
Change to: NodeB <div>...</div>

//操作
removeNode(NodeA); //直接将NodeA，以及所有的NodeA的子结点标记为 ‘Dirty’
insertNode(NodeB); //插入新NodeB
```

节点类型相同，属性不同：则更改节点的属性

3. 列表元素（element diff）：

   如使用`key`，React 在同级比较之时会优先比较使用`key`集合，先比较 key 的改变再比较内容的改变

`比较有无` => `比较类型` => `有 key 比 key` => `比较内容/属性` => `componentShouldUpdate()` => `dirty?` => `if(!dirty)下一个子元素`

React 会一步步地递归下去，直到把所有的节点遍历完成。



### React Diff流程

整个Diff算法的开始是在`reconcileChildFiber`这个函数中进行。

从源码中，React在这个函数中划分了三个大的情况，一是children为string/number/Object的情况，一是children为Array的情况，因此我们也可以分为单结点diff，多结点diff 进行讨论：

**单结点的Diff**，调用`reconcileSingleElement`.总的来说，React会先比较`key`，再比较`type`，只有这两个都相同的情况下，一个节点才有机会被复用。

- key改变，直接断定不能复用

- key相同、type不同，那么之后的比较已经没有意义，在那之后的兄弟结点都会被标记为删除。

- key相同、type相同，那么会对其利用props产生的子节点进行reconcile。



**多结点的Diff**

React团队认为，不同操作是具有优先级的，组件 **更新（替换）** 比 **新增/删除** 的优先级更高，因此React会优先处理 节点的 **更新** 操作。

在React的多节点更新 —— children为数组的更新中，会经历两次的更新：

1. 处理 **更新** 的节点；
2. 处理 **非更新** 的节点



一轮遍历：

1. `key`不同，立刻停止；
2. `key`同，`type`不同，旧的节点标记为Deletion

遍历直到JSX对象的children或old Fiber 树的任一方遍历完成，第一轮的遍历就完成了；

主要目的是为了找到`key`和`type`相同的节点



二轮遍历：

是在一轮遍历的基础之上进行，有以下三种情况：

1. 两方均完成，结束；
2. 一方完成，一方未完成 => 剩下节点全部为Placement或Deletion；

3. 两方都未完成，证明key发生了改变，也就是发生了位置的交换；

在此时，React会构建的结构`Map<Key,Fiber>` ，来快速以key来找到对应的Fiber节点。

在每个Fiber节点上，有一个名为`oldIndex`的属性，代表了它更新前，在children数组之中的索引值。

在遍历过程中，只要循环的index比`oldIndex`大，说明存在了位置交换（在上面的节点跑到了下面），就会给它打上向下移动的标记



**结论：React只会把节点向下移**

因此也有一个性能的考量：尽量是上面节点向下移，而减少下面的节点向上移。

`abcd => dabc` 实际上是把abc移动到d之后，而不是把d移动到abc之前。





key 是一个辅助标识，可以协助 React 找出在列表经过改变中的不变项。如没有`key`，在列表的增加，删除，上下移动之后，React 会进行相同层级的比较，这样 React 会把所有移动的元素认为是新元素，把它们重新渲染。

如果使用了`key`，React 会尽量去重用列表中相同`key`值的元素

所以在选择`key`值之时，应尽量使用稳定的值如`id`，不使用下标，更不能使用随机数。



### 生命周期

- 装载(Mounted)
  - function Object() 
  - componentWillMount // React.16 废除
  - mount
  - componentDidMount
- 更新(Updated)
  - componentWillReceiveProps // React.16 废除 能访问到 this.props 会影响更新判断
  - shouldComponentUpdate
  - componentWillUpdate // React.16 废除 此时读到的 DOM 可能会失效
  - update
  - componentDidUpdate
- 卸载(Unmounted)
  - componentWillUnmount
  - unmout
  - componentDidUnmount

之所以废除了上述的生命周期，是因为在 Mount 之前，Reconcilation 阶段可能会随时打断，有可能生命周期会重新计算。此时它们有可能得到过时的数据，这些函数也会被反复调用。



### Why 函數式組件？

- Props動態變化之時：

    Function Component 展示的是修改前的值：
    Class Component 展示的是修改后的值：

React 文档中描述的 props 不是不可变（Immutable） 数据吗？为啥在运行时还会发生变化呢？

原因在于，虽然 props 不可变，是 this 在 Class Component 中是可变的，因此 this.props 的调用会导致每次都访问最新的 props。

而 Function Component 不存在 this.props 的语法，因此 props 总是不可变的。



- 使用了Hooks
- 组件不会被实例化
- 组件不能访问this对象
- 组件无法访问生命周期的方法
- 无状态组件只能访问输入的props,无副作用



### 数据流

#### 单向数据流

单向数据只是一个数据传递的方式，并不是 React 独有的。数据只能有一种方式在应用的两个部分传递。

在 React 中，具体表现为：

组件**执行操作** ==> 发送出事件

事件中的数据 ==> 更新状态

状态中的数据 ==>**更新**视图/UI 组件

这是一个单向而不可逆的流动，这带来的好处有：

1. 能知道从哪里来，到哪里去，便于**排查和控制**
2. React 知道传递的边界，因此可以减少推测，提高速度
3. 更好去配合统一状态管理

#### 组件之间的通信方式

- 父 => 子： 利用`props`参数传递; context API
- 子 => 父 ： 利用引发事件，携带相应数值向上传递;context API
- 兄弟之间：兄 A =事件=> 父状态更新 ==> 兄 B props

#### 事件绑定原理

React 的事件不会直接加入到原生 DOM 事件中，而是通过 React 的`SyntheticEvent`（合成事件）来进行代理; 此处不会涉及到 DOM 的 API，可以把这也是 React 可以把事件系统应用到不同平台上的关键

在 ReactDOM 中，事件的处理分为两个阶段，分别为**事件注册**和**事件分发**

- 事件的注册

  总体来说，ReactDOM 会把所有的事件注册在`document`之中，统一通过`dispatchEvent`来分配事件

  在编译 JSX 的时候，React 会把所有相同事件的组件按一定顺序放在数组中，方便查找

- 事件的触发和分发

  1. 利用原生事件找到`event.target`,找到对应的组件
  2. 利用 React 的`findParent`方法把所有的父组件对应事件的回调函数找到，放到一个事件队列之中
  3. 依顺序执行队列中的任务（React 中冒泡的实现，本质上是数组的遍历）

#### 为什么不可直接修改组件传入的参数？

为了保证组件状态数据来源的单一，即 **Single Source of Truth** 原则；

`props`是由上至下进行传递的，React 在构建 VirtualDOM 的时候会进行深度优先遍历，在父组件已经处理完毕之后，会把所用到的数据单向传到子组件的`props`之中。而这个在渲染过程是不可逆的，不会因为子组件修改了`props`把父组件重新渲染一次，因此就有可能造成父、子、兄之间的同一个`state`而数据不统一的现象。

### Hooks & API



什么是Hook？

两个理解：Hook 的设计模式 以及 Hook 对于React 内部数据结构的实现：

1. Hook 设计模式，即是在函数式组件中对可重用逻辑，其中包括了会产生副作用的逻辑进行封装的思想。这解决了在Class Component之间因想复用逻辑，大量使用High-Order Component而产生的wrapper hell的现象

   我们自己定制的hook, 是对涉及到副作用的hook进行有限的整合和封装，它的功能更纯粹，细粒度更高。

   我们使用的Component在React的世界，就像在宏观世界中的原子，代表了页面UI最小的单元，Component的属性、类型决定了UI的行为和外观。

   而Hook更像是电子，它介入到了物质的运行规律之中，决定了原子相应属性的表现。

   我们之前使用ClassComponent中的生命周期函数, 其实只是在原子层面对组件进行抽象的调用，而hook能深入到整个React的运作之中。能更好地对组件的行为、正在做的事情进行封装和抽象，而不是基于生命周期进行拆分。

   

2. Hook，在React内部是一种数据结构。和UpdateQueue的结构是 十分类似但有不同。

   hook，具有和updateQueue基本一致的属性如`baseState`,`memorizedState`等，也具有一致的数据结构，也就是**单向循环链表**的结构。

   

   每个hook中有一个`queue`属性，它之中的`pending`存放了`Update`的数据结构。和Hook本身一样，它也是一个单向的循环链表，它代表了调用这个hook中产生的更新。在合适的时机，React会flush这个hook.queue.pending链表，应用所有等待更新的Update。

   

   一个组件之间可能存在着多个hook调用，它们之间利用next指针相连，链表尾指向链表头。整个链表挂在了相应fiber节点的`fiber.memorizedState` 之上。

   

   `fiber.memorizedState`一直指向的是hook的链表尾；

   这样做的好处在于，能用一个指针，就能同时记录整个链表的头和尾，且十分便利地在链表的尾部进行插入。

   

   React Hook中引入了Redux的许多概念，dispatcher / action 等，我们能在hook的相关源码中随处发现。所有的hook实际运行的逻辑，其实都挂在dispatcher对象之上。

   mount和update时，hook的实现逻辑是不一样的，取决于挂载hook的dispatcher是哪一个

   

   所有的hook，都利用`memorizeState`这个属性来存放hook相关的计算值。

   比如：

   - useMemo 存放的是`[value,deps]` 
   - useCallback 存放的是`[callback,deps]`
   - useRef 存放的是 ref
   
   
   

#### `useRef` 和 `useState`的区别

`useRef`返回一个 ref 可变(mutable)对象，和`useState `一样，能在生命周期之内保持值的不变；

但`useRef`创建出来的值，它的改变不会触发重渲染，相当于挂载在组件上的一个全局变量；

它可以使我们访问组件的实例，调用其 API

#### `setState()`在 React 中是同步还是异步的

`setState()`在 React 中默认是异步执行的，在有多次调用`setState`的场景之下，React 会尝试把多个`setState`合并；

但如果在一些原生的事件上调用，则是同步执行。

#### `Context`

`context`API 是为了解决组件深度内嵌,出现 **prop drilling**，使得传值非常不便；context API 可以省略中间组牛传值和事件处理函数的过程

用法：

```
const Context = React.createContext(initialValue);

<Context.Provider>
	<Parent />
</Context.Provider>

//Class Component
<Context.Consumer>
	{context => <GrandGrandGrandChild context={context}/>}
</Context.Consumer>

//Functional Component
const {value} = useContext(Context);
```

#### `React.pureComponent` 和 `React.memo`

`React.pureComponent`是对于 Class Component 的概念，使用时继承该类

`React.memo`对于 Functional Component, 是一个高阶组件

在这些组件更新之前，`pureComponent`和`memo`都会默认对输入的参数进行对比（浅比较），如果输入的参数无变化，则该组件不会重新渲染；

也可以自己设定比较的方法，在`pureComponent`可利用`shouldComponentUpdate()`生命周期函数

`memo`中可传入一个比较函数到它的第二个参数，并返回一个`boolean`来决定组件是否更新

#### 高阶组件

HOC 高阶组件是 React 组件封装某部分可重用逻辑，应用到不同组件的一种解决方法。它的本质是一个函数，以组件为输入参数，经历一些修改，返回一个新的组件。它应用了设计模式中的工厂模式。

不足之处，使用多个 Wrapper 包装会使得组件看起来非常拥肿，会创建很多无意义的组件，组件的层级会非常深，不利于维护。

解决方法：函数式组件 + Hooks

#### `useEffect`和`useLayoutEffect`

- `useEffect`在渲染后异步执行
- `useLayoutEffect`在渲染前同步执行，执行完再把 DOM 渲染上去

### 概念相关：

#### 可控组件 不可控组件

- 受控组件：

  在`<input>`等的表单元素，它本身的值绑定在 React 的`state`之上，元素内部不负责管理`value`。它的值只能通过设置事件处理，把输入同步更新到`state`之后才能更新`<input>`的值。它的值完全被`state`所控制，称之为可控组件。

- 不可控组件：

  这种情况下，`<input>`元素的值由 DOM 元素自身管理，不受 React 代码的控制。此时用户输入的任何值都可以显示到页面上；

  常用`useRef`提出的引用值来获得 DOM 元素的值。

#### React SSR

SSR(Server Side Rendering) 服务端渲染，也叫 **同构**。页面的渲染在服务端完成，把用户交互的逻辑在客户端完成。

在 React 的实现方法：

- 服务端：利用`ReactDOM/server`，中提供了 API`renderToString`的方法，把组件由 VirtualDOM 渲染成 HTML 字符串，动态加入数据，向客户端发送
- 客户端：得到的 HTML 文件利用`ReactDOM`中提供的`hydrate`,将其重新转换成 VirtualDOM 的结构，附加数据和事件处理，再生成真实 DOM
- Next.js

#### React state 不可变性

不可变性主要针对 JavaScript 的引用类型，在 JavaScript 中，而引用对象的会被放在堆内存之中，以地址的形式引用，可被多个对象同时引用。一旦其中一个修改时所有引用这个地址的对象都会受到影响。

不可变值意味我们每次都要创建值和地址完全不同的对象；

那么在 React 的 Reconcliation 过程中，我们就可以只简单比较内存地址的变化，就能判断组件的值是否需要更新了；如果不这么做，那我们就有可能对传入对象进行深入比较，这样对性能的影响是极大的；

#### 如何实现 数据持久化？

Web 中的数据持久化均用到`localStorage`对数据进行缓存；

注意：

要对储存对象进行`JSON.stringify`; 有的对象如`function`和`RegExp`等不能储存；

有最大缓存限制`5M`

不能跨域名储存

## Vue

### 1. Vue 和 React 的相似点和区别， 优缺点？

- 相似点
  - 使用 **VirtualDOM**，Diff 算法
  - 组件化的写法
  - 响应式的组件
  - 保持纯净的核心库
  - 在不同的组件之间，本质上都是单向的数据流动，由父至子
- 不同点
  - 数据和组件间的绑定的方式
    - Vue 有 双向的数据绑定：vue 中的 Data 和 DOM 元素的内容保持一致，无论改变哪一方，另一方者会相应更新
    - React 在数据和组件之间采用单向的数据流
  - 跨平台开发，强大的社区支持
    - React 有很成熟的 跨平台开发环境 **React Native**，有强大的社区支持
    - Vue 较为平静

### 2. Vue2.0 和 Vue3.0 的区别

1. 双向数据绑定原理

vue2 的双向数据绑定是利用 ES5 的一个 API Object.definePropert()对数据进行劫持 结合 发布订阅模式的方式来实现的。

vue3 中使用了 es6 的 Proxy 对数据代理。

- defineProperty 只能监听某个属性，不能对全对象监听，不可以增加属性

- 可以监听数组

2. Composition API

- 组件逻辑的集中 `computed` `data` `watch`

- 相同逻辑的复用

  - Vue2 Mixin
  - Vue3 hooks

- 3. 更好的 TypeScript 支持

### 3. Vue 双向绑定的原理

Vue 的双向数据绑定发生在同一组件内定义的`Data`数据和样版中 DOM 的`value`值之间。

本质的思想是利用了`Object.defineProperty` 提供的**数据劫持** 外加 **发布订阅**模式。

在`Object.defindProperty`中，除了前两个参数设定对象和参数名之外，还可以外加第三个参数`descriptor`

可设置`get`和`set`方法，是分别在访问数据和修改数据时会进行的操作

在 Vue3 之中 它内部使用了`Proxy`代替了`Object.defindProperty`的写法

- defineProperty 只能监听某个属性，不能对全对象监听，不可以增加属性
- 可以监听数组

### 4. `Computed`和`watch`

- `computed` 是会观某些`data`数据的变化，对它们执行计算并返回结果，相当于过滤器；个人认为它和 React 中的`useMemo`有相似之处，只有依赖的数据变化的时候，`computed`才会重新执行

- `watch` 一般监听单个变量的变化，可做出某些操作；个人认为和 React 中的`useEffect`也有相似之处；

## 网络，通讯，浏览器

### 从输入 URL 到页面加载的全过程

1. 浏览器会检查 URL 中的各部分，分析出域名，子路由，URL 参数等；如果用户没有输入完整，则一般会作为搜索引擎的条件处理

2. 检查浏览器中的 Preloaded - HSTS（**H**TTP **S**trict-**T**ransport-**S**ecurity）， 一种安全保护机制。若要访问的 URL 在这个列表之中，则会强制发起 HTTPS 请求。如果

3. 检查浏览器的缓存，如果满足强缓存的条件，直接使用原页面

4. 进行**DNS 的查找**

   首先会检查浏览器上的 **DNS 缓存**，有就使用该结果

   其次会调用 OS 上的`gethostbyname`方法，找 OS 上的**host 文件**，如果上面有就用这个结果；（被人改 Host === DNS 劫持）

   下一步，会到本地 LocalDNS 服务器查找，这一般是运营商建立的 DNS 服务器，如果上面有就用它返回的结果

   如果没有，则本地服务器向根服务器查询，它会告诉本地服务器 主域服务器的地址（.com / .org ）等

   LDNS 从这些主域服务器中获得相应的 IP 地址，再一层层返回；得到的 IP 地址会被收入缓存之中，放便下一次的访问

5. 用户得到 IP 地址之后，会**随机**从本机可用的端口中选一个端口, 开始向**服务器的相应端口**请求，如果是 HTTP => 80 / HTTPS => 443

6. 开始建立**TCP**连接

   TCP 连接的过程经历了三次握手，双方在交换 SYN 和 ACK 标志数据包之后，会进入**建立（ESTABLISHED）状态**，双方进入了可靠的连接状态

7. 如若要求使用 HTTPS 连接，双方则会开始进行**TLS Handshake**。

   - 用户向服务端发送`ClientHello`,包含了 **可用 TLS 版本**，**可用加密，压缩算法**，
   - 服务器回送`ServerHello`，包含服务器所选的 **TLS 版本，算法**，并附上自己的 **数字证书**，内含了它的 **Public Key**；
   - 用户收到之后验证证书可靠性，之后生成**对称密钥**，用服务器的**Public Key**加密，这时候，只有服务器持有的 **Private Key**能解密。
   - 服务器得到加密包后，用自己的 **PrivateKey **解密。此时，双方都得到了相同的对称密钥
   - 用户会向服务器发送一次验证，保证服务器收到的是有效的密钥，服务器回应之后可以正式开始使用加密的 HTTP 通信

8. 开始进行**HTTP 请求**

   用户端向服务器发送 HTTP GET 请求。 因 HTTP 是无状态连接，必须附带上一系列的请求头，指明请求的信息。

   值得注意的是和缓存有关的请求，`If-Modified-Since`和`If-None-Match`。服务器比较``If-None-Match`传来的**Etag**值和 `If-Modified-Since`时间，如果满足缓存条件，则返回 304 状态码，告知用户使用本地缓存；否则服务器把 HTML 文件发送给用户，返回 200 状态码

9. 用户得到 HTML 文件之后，会由上至下进行 HTML 语法的解析（Tokenize），然后开始构建各个 DOM 结点，最终生成一个 DOM 树

10. 在此期间如有外部引入的文件，则会并行下载，CSS 文件会生成 CSSOM 树，表示样式选择器的结构。

11. DOM 和 CSSOM 会合成 Render Tree，表示实际会渲染到画面上的结点，

12. 计算各节点的布局 ， 再把布局之后的结点绘制到页面上

13. 作为较好的习惯，一般把 JS 文件置于最后下载和运行

### DNS

**流程：**

1. 本地host
2. 本地域名缓存
3. 本地域名服务器
4. ==> 根域名服务器 ==> 顶级域名服务器 （不返回） ==> 二级域名 ==> 三级域名 ==> ......

#### 负载均衡

当一个网站有足够多的用户的时候，假如每次请求的资源都位于同一台机器上面，那么这台机器随时可能会蹦掉。处理办法就是用DNS负载均衡技术，它的原理是在**「DNS服务器中为同一个主机名配置多个IP地址,在应答DNS查询时,DNS服务器对每个查询将以DNS文件中主机记录的IP地址按顺序返回不同的解析结果,将客户端的访问引导到不同的机器上去,使得不同的客户端访问不同的服务器」**,从而达到负载均衡的目的｡例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等。

#### 为什么域名解析用UDP协议？

因为UDP快。UDP的DNS协议只要一个请求、一个应答就好了。而使用基于TCP的DNS协议要三次握手、发送数据以及应答、四次挥手。但是UDP协议传输内容不能超过512字节。不过客户端向DNS服务器查询域名，一般返回的内容都不超过512字节，用UDP传输即可。

#### 为什么区域传送用TCP协议？

因为TCP协议可靠性好。从主DNS上复制内容，不可用不可靠的UDP，而且因为TCP协议传输的内容大，不可用最大只能传512字节的UDP协议，因为同步的数据可能大于512字节。

### TCP/UPD

#### 三次握手

第一次握手 客户端生成其初始序列号 X，向服务器发送连接请求报文（SYN），不带数据，但会占用一个序号位置

第二次握手 服务端收到请求后，也为自己生成一个序列号 Y；如果同意连接，则会发出确认报文（SYN / ACK），也会占用一个序列位置；

第三次握手 客户端收到请求要再次发送确认，

此时双方都保证接收能力无误，可以开始通信了

为什么不用两次？

如果第一次握手时发生了滞留，客户端没有收到 SYN/ACK 会再次发送 SYN 到服务端，此时网络中存在了两个 SYN 包。如果没有第三次握手的保证，这两个 SYN 包都会建立一次连接，其中有一次是无效的。

如果有第三次的保证，用户收到无效 SYN/ACK 不回传，就不会建立多余连接。

#### 四次挥手

第一次挥手：用户向服务器主动发出释放报文（FIN）序列号为最后包号+1,表明客户端不再有数据发送了

第二次挥手：服务器应答用户发来的（ACK），但此时可能还有数据没有发送完，服务端还会继续发送，用户还会继续接收

第三次挥手：服务端把所有的数据发送之后，向用户端发送释放报文（FIN），表明服务端已发送完毕，对方可以关闭接收功能了

第四次挥手：接收到所有的数据之后，客户端回应服务端，然后会经过 2 倍 MSL（最长报文段寿命）的时间后，再把 TCP 连接关闭

等待 2\*MSL 的时间：

1. 消除网络中因重传而发出的无效的请求报文
2. 保证最后用户发送的 ACK 报文能送到服务端。若中途丢包了，则会服务器会超时重传 FIN 包，然后再重新发送 ACK，因此要等待一定时间。

四次挥手的必要性：

为保证客户端接收到所有的数据再关闭接收功能

#### TCP 数据的正确性？

- **确认应答机制**： 每一个 TCP 数据包都有对应的 ACK 序列号，一方发包之后，另一方会回应一个序列号，来表明当前发到哪里了，下一个包在哪里开始发送。

  如果有发者和收者的序列号不同，则可以计算出丢失的包重新发送。

- **超时重传机制**：有可能因为拥堵，有些包没能到达接收方。因此 TCP 设计了一个 **最大超时时间**，超过了就会重新发送这些丢失的包。最大时间是动态调整的，间隔会以指数型式增长，保证网络性能，直到超过一定次数，判断出现异常。

- **滑动窗口**： 简单说就是一次性发送一定数量的包，无须逐个等待 ACK。它就像个窗口一样不断向后滑动，所以称作滑动窗口

- **快重传**：以滑动窗口集中发送如果丢包，接收方会不断返回丢包序列号的 ACK，来告诉对方要重发，至少三次之后发送方会重新把丢包的重发

- **流量控制**：接收端可以通过 TCP 中的窗口大小字段，来调整发包速率。防止因大量数据发向接收端，接收端缓存满而引致的大量丢包

- **拥堵控制**：也是俗称的 **慢启动**，目的是试探接收方允许的最大的接收速率，之后会逐步加大传输速率。主要目的是为了防止丢包

#### TCP 和 UDP 的区别

- **UDP（User Datagram Protocal）用户数据报协议**

  - 无连接：过程双方不需要建立连接，只要知道对方 IP，端口就可以发送
  - 面向数据报：应用层传来什么数据，原样发报，不拆分不合并
  - 不可靠：UDP 不存在 TCP 中的 **重传机制**，**确认机制**，其只保证了发送出去，不保证它能到达接收者
  - 没有拥堵控制，流量控制，滑动窗口等发包控制机制
  - 速度快，花销少：因不用经历三次握手的来回时间，且报文首部短小，发送速率不调整而速度快

  常用在 DNS NFS

- **TCP （Transmission Control Protocal）传输控制协议**

  - 有连接
  - 面向字节流：如果要发送的字节流过长，会发送成多个数据包发出；太短会在发送缓冲区，到达一定长度再发送
  - 可靠性：丢包重传，收包确认等机制保证了所有包都能到达接收方，且保证了接收方能按顺序得到包的原数据，有流量控制，拥堵控制等机制来降低丢包率。
  - 速度不快，因要进行三次握手以建立稳定的连接，四次挥手保证所有包的送出

### OSI 模型

1. 物理层：主要定义物理设备标准，如网线的接口类型、光纤的接口类型、各种传输介质的传输速率等。它的主要作用是传输比特流（就是由 1、0 转化为电流强弱来进行传输,到达目的地后在转化为 1、0，也就是我们常说的数模转换与模数转换），这一层的数据叫做比特。

2. 数据链路层：定义了如何让格式化数据以进行传输，以及如何让控制对**物理介质的访问**，这一层通常还提供错误检测和纠正，以确保数据的可靠传输。

3. 网络层：在位于不同**地理位置的网络中的两个主机**系统之间**提供连接**和路径选择，Internet 的发展使得从世界各站点访问信息的用户数大大增加，而网络层正是管理这种连接的层。

4. 传输层：定义了一些**传输数据的协议和端口号**（WWW 端口 80 等），如：TCP（传输控制协议，传输效率低，可靠性强，用于传输可靠性要求高，数据量大的数据），UDP（用户数据报协议，与 TCP 特性恰恰相反，用于传输可靠性要求不高，数据量小的数据，如 QQ 聊天数据就是通过这种方式传输的）， 主要是将从下层接收的数据进行分段和传输，到达目的地址后再进行重组，常常把这一层数据叫做段。

5. 会话层：通过传输层（端口号：传输端口与接收端口）建立数据传输的通路，主要在你的**系统之间发起会话或者接受会话请求**（设备之间需要互相认识可以是 IP 也可以是 MAC 或者是主机名）。

6. 表示层：可确保一个系统的应用层所发送的信息可以被另一个系统的应用层读取。例如，PC 程序与另一台计算机进行通信，其中一台计算机使用扩展二一十进制交换码（EBCDIC），而另一台则使用美国信息交换标准码（ASCII）来表示相同的字符。如有必要，表示层会通过使用一种通格式来实现**多种数据格式之间的转换**。

7. 应用层： 是最靠近用户的 OSI 层，这一层为**用户的应用程序提供网络服务**。

### HTTP / HTTPS

#### HTTP 1.x HTTP2 HTTP3

- HTTP 1.0

  - 引入缓存处理的机制，可利用缓存请求头作为是否使用缓存的标志
  - 一开一送一回一闭；一次连接只能处理一个 HTTP 请求，因此需要不断建立，断开 TCP 连接，效率低。

- HTTP 1.1

  - 引入了长连接，使用`Connection:keep-alive`，可反复利用单个 TCP 连接发送多次 HTTP 请求，但在一个 TCP 只能同时处理一个请求；

    根据浏览器的不同，一个 host 下最多可同时建立 4 - 6 个 TCP 连接，但如若有多于六个请求同时发送，则要排队等待

  - 结合了 HTTPS 加密协议，使得 HTTP 的传输更安全

- HTTP 2.0

  - 采用二进制传输代替原来的文本传输，传输更健壮，无需考虑转码的问题

  - 多路复用（Multiplexing）

    HTTP2 把请求分为基本单位 -- 帧，同一个 HTTP 的传输内容的所有帧就构成了流，每个帧有对应的 StreamID 能表明它对应的流。

    基于这点，所有的请求都可以复用同一个 TCP 连接。每个流的帧可以混合在一起发送，接收到再按 StreamID 进行组合，这样既能同时发送多个 HTTP 请求，也不会引致数据的混乱。

    缺点：HTTP/2出现丢包时，整个 TCP 都要开始等待重传，那么就会阻塞该TCP连接中的所有请求

- HTTP 3.0 （HTTP over QUIC）

  - 它是基于 UDP 协议，无须三次握手的时间
  - 重传机制的改进：在重传时会使用另外的StreamID，来区分原包和重传包

### SSL / TLS

#### HTTP 和 HTTPS 的区别？

HTTPS 为加密版本的 HTTP，利用 SSL/TLS 对传输内容加密，更加安全。

#### SSL 和 TLS 的区别

如若要求使用 HTTPS 连接，双方则会开始进行 **TLS Handshake**。

- 用户向服务端发送`ClientHello`,包含了 **可用 TLS 版本**，**可用加密，压缩算法**，

- 服务器回送`ServerHello`，包含服务器所选的 **TLS 版本，算法**，并附上自己的 **数字证书**，内含了它的 **Public Key**；

- 用户收到之后验证证书可靠性，之后生成**对称密钥**，用服务器的**Public Key**加密，这时候，只有服务器持有的 **Private Key**能解密。

- 服务器得到加密包后，用自己的 **PrivateKey **解密。此时，双方都得到了相同的对称密钥

- 用户会向服务器发送一次验证，保证服务器收到的是有效的密钥，服务器回应之后可以正式开始使用加密的 HTTP 通信

  

#### 对称加密和非对称加密 , 为何要混合使用？

对称加密指加密 解密都用同一把钥匙，

而非对称加密会生成公钥和私钥，公钥加密的内容只有私钥能解开

单一对称加密的问题是在密钥的分发上，钥匙的分配要经过网络，那么就有被拦截的可能；

而单一的非对称加密，其发送过程中公钥很容易被中间人偷换，这就是所说的中间人攻击；

因些，可以两种结合，把对称密钥用非对称公钥加密，再另一方再用私钥解密，就能安全进行密钥的交换了



#### 数字证书

本质上是一个信任链条，它由 CA 签发，它能证明某个网站可信，或是某些内容是可信的

#### HTTP 状态码

| 100     | Continue                 | 继续。[客户端](http://www.dreamdu.com/webbuild/client_vs_server/)应继续其请求                                                                                    |
| ------- | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **101** | **Switching Protocols**  | 切换协议。服务器根据客户端的请求切换协议。只能切换到更高级的协议，例如，切换到 HTTP 的新版本协议                                                                 |
|         |                          |                                                                                                                                                                  |
| **200** | **OK**                   | 请求成功。一般用于 GET 与 POST 请求                                                                                                                              |
| **201** | Created                  | 已创建。成功请求并创建了新的资源                                                                                                                                 |
| 202     | Accepted                 | 已接受。已经接受请求，但未处理完成                                                                                                                               |
|         |                          |                                                                                                                                                                  |
| 301     | Moved Permanently        | 永久移动。请求的资源已被永久的移动到新 URI，返回信息会包括新的 URI，浏览器会自动定向到新 URI。今后任何新的请求都应使用新的 URI 代替                              |
| 302     | Found                    | 临时移动。与 301 类似。但资源只是临时被移动。客户端应继续使用原有 URI                                                                                            |
| 303     | See Other                | 查看其它地址。与 301 类似。使用 GET 和 POST 请求查看                                                                                                             |
| **304** | Not Modified             | 未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源 |
|         |                          |                                                                                                                                                                  |
| **400** | Bad Request              | 客户端请求的语法错误，服务器无法理解                                                                                                                             |
| **401** | Unauthorized             | 请求要求用户的身份认证                                                                                                                                           |
| 403     | Forbidden                | 服务器理解请求客户端的请求，但是拒绝执行此请求                                                                                                                   |
| **404** | Not Found                | 服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置“您所请求的资源无法找到”的个性页面                                                     |
| **413** | Request Entity Too Large | 由于请求的实体过大，服务器无法处理，因此拒绝请求。为防止客户端的连续请求，服务器可能会关闭连接。如果只是服务器暂时无法处理，则会包含一个 Retry-After 的响应信息  |
|         |                          |                                                                                                                                                                  |
| **500** | Internal Server Error    | 服务器内部错误，无法完成请求                                                                                                                                     |
| **502** | Bad Gateway              | 由于服务器当前链接太多，导致服务器方面无法给于正常的响应,产生此类报错                                                                                            |

#### HTTP 请求头

`Accept` ： 接收格式

`Accept-Encoding`    ：接收语言

`Host`  ： HTTP访问的域名



`Cache-Control` ： 本地缓存时效性

`Connection` ：连接方式 `keep-alive` 



`If-Modified-Since`

`If-None-Match`

`User-Agent`

`Cookie`



#### HTTP 响应头

Conntent Type

Content-Length

Etag

Last-Modified

Content-Encoding

Set-cookie





#### HTTP 方法

GET

HEAD => Response 只提供 Header

POST => 不一定存在

PUT => 己存在资源

DELETE

OPTIONS => Response 返回支持的方法

- GET vs POST

  - POST 比 GET 慢

    - **POST 请求包含更多的请求头**

    - **POST 会先将请求头发送给服务器进行确认，然后才真正发送数据**

      100 Continue => 200 OK

    - GET 有**最大长度限制** 浏览器和 web 服务器限制了 URL 的长度

  - POST 更**安全**（不会作为 url 的一部分，不会被缓存、保存在服务器日志、以及浏览器浏览记录中）

  - POST 能发送更多的数据类型 vs GET 只能发送 ASCII 字符

### CDN

Content Delivery Network 内容分发网络

它把一个服务器网站的内容发布到各地的服务器上缓存，在用户请求时可以使用户就近得到缓存服务器的内容，能减少用户因内容服务器过远而造成的网络延时。

原理：

用户请求静态资源时，会进行 DNS 解析，但此时 DNS 会优先解析出来指向离用户最近的 CDN 的接入地址 （CName）， 用户就可以向这个最近的地址请求获取资源了。

### 同源 / 跨域

#### 同源策略

同源策略是浏览器的一个核心的安全功能，它可以限制一个源的内容或脚本在另一个源的应用上运行；它能阻挡很多恶意的文档，减少被攻击的可能。

在同源策略下，请求是可以正常发送的，但不同源的文件是不会被浏览器所接受的。

同源，就意味着 **域名**+**协议**+端口都必须一致，才能被浏览器所接受

同源限制了 Ajax 请求， Cookie LocalStorage SessionStorage 和 DOM 交互

#### 跨域的方式 解决方法

- JSONP： 使用 JSONP 进行跨域，本质上是利用了`<script>`标签中的`src`可以无视同源策略的属性

  但要求服务端返回的是可执行的 JS 语句，才能在页面中执行

  ```javascript
  //Backend...

  res.send(`handleData({name:${name},age:${age})`);

  //Frontend...
  const handleData = (data) => {
    console.log('Do something with:', data);
  };

  const scriptEl = document.createElement('script');
  scriptEl.src = 'http://backend.com/?name=jack';

  document.body.appendChild(scriptEl);
  ```

  仅适用 GET 请求

- CORS 跨域资源共享：一个 W3C 标准，在服务端回送的请求头中设置`Access-Control-Allow-Origin`和`Access-Control-Allow-Methods（Headers）`，它能和浏览器进行协商，请求该资源放行

  分为简单请求和非简单请求

  - 简单：

    - 使用`HEAD` `GET` `POST` 的请求，浏览器会加一个`Origin`字段就发送出去了

  - 非简单请求
    - 分为两次 HTTP 请求，先用`OPTION`方法预检，主要是求得服务器确认可用的方法等

- 同源策略只用于浏览器，那么可以通过一个和浏览器同源的代理服器来请求，就可以避开浏览器的同源限制了 （Nginx反向代理）

- postMessage 跨域

- 使用 WebSocket 也可以跨过同源限制 （Socket.io）

### 安全

#### 常见的攻击方式 预防方案

- XSS（Cross-Site Script）跨站脚本攻击

  通常是利用网站设计的漏洞，发生在可供用户输入的表单元表，或是 url 请求参数上；

  分为两种形式：**持久型**和 **非持久型**

  - 持久型：

    - 攻击者把恶意的代码利用`<script>`标签作为字段放入了服务器之中
    - 用户打开网站，`<script>`会拼接在 HTML 文档中一起返回，到达用户端开始执行，用户的 cookie，localStorage 等可能因些被访问

  - 非持久型：

    - 攻击者把恶意代码拼在 URL 中作为参数
    - 服务器响应，把参数作为 HTML 文件中的一部分返回了，恶意脚本便执行了

  - DOM 型：

    利用 URL 传参功能，原理类似 2

  - 方法：

    - 对 HTML 编码

    - 避免直接拼接 HTML

    - 使用 Content-Security-Policy 这样的一个请求头，建立可信任内容的白名单

- CSRF （跨站请求伪造）

  - 引诱他人在已经登陆 a.com 的情况下访问 b.com
  - 此时 a.com 的登陆凭证可被 b.com 使用，若 b.com 向 a.com 发送请求，那么请求中就会带上了 a 的登陆凭证，以 a 的身份完成操作了
  - 一般方式是使用引诱他人点击页面元素/链接 或 `<script>、<link>、<img>、<iframe> `

  - 解决方法：使用 Samesite 的 Cookie 属性
    - `Strict`，只能作为第一方 Cookie 只能由 a.com 使用
    - `Lax`：可作第三方 Cookie 但只能使用 GET 请求-
    -

- 点击劫持

  使用透明的`<iframe>`覆盖在元素的上方，用户点击那些元素的时候实际上点的是`<iframe>`

  使用**X-Frame-Options** Response Header，来限制网页能不能放在`<iframe>`之中

- SQL 注入，把 SQL 语句在表单元素中直接写入

### 缓存

#### HTTP 缓存策略

#### LocalStorage， SessionStorage 和 Cookie

- LocalStorage & SessionStorage

  - localStorage 是一个本地化的存储，它没有过期的时间，理论上不删除会一直存在。
  - SessionStorage 会在页面关闭之后清除

  - **不同页面，但同源**可访问相同的 localStorage；不同页面之间不能访问彼些的 SessionStorage

  - 大小 5M
  - 不会和服务端通信
  - L => 记录长期的登陆； S => 单次的登陆
  - 均用 String 存储

- Cookie
  - 会作为请求头的一部分随 HTTP 请求一并发送
  - 在 Cookie 设置的过期时间前一直有效。即使页面已经关闭，（默认是 Browser 关闭）若设置了过期时间，浏览器就会把 cookie 保存到硬盘上，关闭后再打开浏览器这些 cookie 仍然有效直到超过设定的过期时间。
  - Cookie 在同源窗口下共享
  - 每个 domain 最多只能有 20 条 cookie，每个 cookie 长度不能超过 4KB

### 认证

#### Cookie， Session Token JWT

由于 HTTP 是无状态的连接，每次的对话相当于是新的；但我们需要记住用户，来避免用户重复登陆；

- 方案 1: 为每一个用户提供对话标识(SessionId)，并存放在服务器之中，并让用户每次请求都把 SessionId 带来；

  缺点：1）会增加**数据存放量**； 2）**分布式的转发机制**，没办法把 SessionId 同步到所有的服务器上

- 方案 2： JSON_WEB_TOKEN。

  - 服务端把用户非私密信息用私钥+算法算法生成数字签名，
  - 把签名附在信息上返回给用户
  - 用户每次登陆时把相同信息传来，利用服务器中私钥+算法再生成签名
  - 比较签名

  这样在服务器上无需大量存放用户的信息，而是每次进行加密的算法，相当于是一种无状态的请求

### WebSocket

1. 普通 HTTP 请求在一去一回就完成了，也就是非持久的。

WebSocket 它是一个持久化协议，它一但建立就可以反复通信

2. WebSocket 是全双工通信，也就是说它可以由服务端主动向用户端发请求，这样可以避免利用不断地打开 HTTP 连接。

3. 实现：

   WebSocket 建立在 TCP 之上，要求双方建立稳定的连接

   基于 HTTP 之上进行 WebSocket Handshake，利用网络升级，从 HTTP 升到 WebSocket，此时的状态码是 101 Switch Protocal

### Ajax

Ajax (Async JavaScript and XML) 利用它能做到用户端请求少量数据，局部刷新页面

主要用到的是`XMLHttpRequest`，这一个异步的对象，它封装了向服务端异步请求的功能，把 HTTP 请求接口用 JS 封装；

- Ajax 编程步骤
  - 创建 XMLHttpRequest 对象
  - 设置请求方式
  - 调用回调函数
  - 发送请求

```javascript
//创建异步对象
var xhr = new XMLHttpRequest();
//设置请求基本信息，并加上请求头
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.open('post', 'test.php');
//发送请求
xhr.send('name=Lan&age=18');
xhr.onreadystatechange = function () {
  // 这步为判断服务器是否正确响应
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
```

Fetch 是对 Ajax 的一个改进，它挂在了 BOM 之上，能全局访问，且基于 Promise

Axios 是对 Ajax 的进一步封装，也利用了 ES6 Promise，能更好地面向前端 MVVM 的方向



### 浏览器内核，组成部分

- 引擎：

  渲染引擎 :  主要是对解释HTML和CSS语法，对网页的内容进行排布，计算网页的显示方式，简单来说是显示页面的内容

   JavaScript引擎：解释和执行JavaScript语言，利用JavaScript来和页面进行动态的交互

- 其它部分：

  - 用户的界面（地址栏，按钮，书签等）

  - 网络层（实现HTTP/ FTP）等的文件传输

  - 数据持久层：

    它可以将和浏览器相关，需要持久化的数

- 有哪些？

  - 渲染引擎
    - Chrome / Chromium 系：Webkit => Blink内核
    - Firefox：Gecko
    - Safari: Webkit 
    - 也有使用双内核的
  - JavaScript引擎
    - Chromium 系：V8 => Node.js / Electron.js
    - SpiderMonkey : Firefox

  



## Webpack

### Webpack 核心

- `Compiler`

  它是 webpack 负责全局的设置管理，调度编译过程的对象，所有的配置，比如说 **Plugins**，**Loaders**，设置项等都在这个全局的实例之中

  可以被理解为一个 Webpack 的实例

- `Compliation`

  指的是单次编译的流程，每当文件有所变化，一个新的 Compliation 实例就会被创建

- Life-Cycle & Event-flow

- 核心思想，每个文件都是 Module

### Webpack 的打包流程

- 初始化：在我们在 CLI 输入 Webpack 的指令，告诉 Webpack 我们要用的设置文件之后，Webpack 就会把 CLI 输入的参数，要使用的插件，loader，整合，加载

- 建立`Compliation`实例，`Entry`出发，把文件中的代码利用对应的 Loader 去翻译，并找出该文件的依赖，不断去迭代这个过程，在这个过程中，如若有 Plugin 的设置，会在 Webpack 对应的生命周期函数调用

- 编译之后，文件会形成模组，再整合成不同的代码块`chunk`，再输出到`output`

- 如果打开了观察模式，每一次变化就会重启 Compliation 过程

- 如果有设置`dev-server`,则会把静态资源发送到浏览器上，并观察更新

### Dev-server

本质上是一个 Node + Express 的服务器，和浏览器之间使用 Websocket 进行双向的通信

### Webpack 中的 loader 和 plugin 的区别

Loader 本质上是一翻译作用的中间件，它能处理文件中的内容，根据预设和规则，把一种文件内容输出成另一种形式，

Plugin 更加的万能，它深入了 Webpack 的构建过程和生命周期。Webpack 在运行之间提供了很多可供调用的 Hooks，它可以访问此刻的编译状态，对它做出一些改变等等

### 如何自己写 Plugin

实现 Webpack 的 Tapable 接口中的`apply`方法，它会传入 complier 实例，可以作出自己的实现。

它内部的机制是采用了发布订阅的思想，Plugin 会注册到 complier 相应周期的处理函数队列之中，到了那个时候会按队列依次去调用

### 如何自己写 Loader

本质上是类似流式 中间件的思想

### 常用 Loader 和 Plugin

- Loader：

  - CSS-Loader ： 处理`@import`，模块化的 CSS
  - Style-Loader ： 生成 HTML 中的行内 CSS
  - File-loader
  - Image-loader: 可以对图片进行一些压缩处理
  - Bable-Loader：最重要的 Loader，可以对 JavaScript 代码进行各种形式的转译
    - Transform-runtime：Polyfill
    - Env: ES 所有新特性
    - `preset/react`
    - `preset/typescript`

- Plugin:
  - HtmlWebpackPlugin : 自动生成或修改 HTML，比如动态注入`<script>`标签等
  - ModuleFederationPlugin
  - CommonChunkPlugin
  - DefindPlugin，可自已定义变量供应用使用，一般是一些环境变量
- 工具：
  - Webpack-merge 根据所在的环境，应用不同的设置文件，并能对公共部分进行整合

#### Tree shaking

无效引入依赖的去除；

根据`import`/`export`的关系来静态分析

```javascript
// Import everything (NOT TREE-SHAKABLE)
import _ from 'lodash';

// Import named export (CAN BE TREE SHAKEN)
import { debounce } from 'lodash';

// Import the item directly (CAN BE TREE SHAKEN)
import debounce from 'lodash/lib/debounce';
```

### Webpack 5

- 输出结果可设置：

  webpack 4 默认只能输出 ES5 代码

  webpack 5 开始新增一个属性 output.ecmaVersion, 可以生成 ES5 和 ES6 / ES2015 代码.

  如：`output.ecmaVersion: 2015`

- 

## 性能优化相关

### 1.重绘与回流

- 涉及到布局的重排，位置，大小的重新计算，添加删除，就会引起回流 （Reflow）
- 若元素的属性更新，只影响外观，不会引发布局的改变，则为重绘 （Repaint）

- 它们都是高昂的，

  - 重绘会让浏览器验正其它节点的可见性
  - 回流会引起所有和它相关的元素发生改变

- 减少重绘和回流的方法
  - 不用`table`
  - 常要改的 className 放在末端，因 css 选择器的解析顺序是由右到左的
  - 少用`cacl()`
  - 把动画放在一个单独的图层之上,`fixed` `absolute`,不会影响到别的元素
  - 使用`transform`来移动元素，不会引发布局的改变

### 2. 在 React 中如何优化性能

- 减少 React 组件的重新渲染：

  - 列表中使用`key`

  - 如果不是列表，可使用渲染`null`来维持组件的相对位置

  - 使用记忆钩子函数 `useMemo`和`useCallback`,把一些繁重的计算结果放在之中，给定依赖项，防止每次刷新时重新计算

  - 在组件刷新之前引入判断机制 （组件记忆）：

    类组件中使用`React.pureComponent`

    函数式组件被使用`React.memo`

    它们的原理类似，能对传入的 prop 进行浅比较，如果比较结果不相同，则会重新渲染；

    `React.memo`可在第二个参数中给定比较函数，允许开发者提供比较的逻辑，和`shouldComponentUpdate`很相似

- 使用懒加载组件，这个一般和 Webpack 配合使用

  - Webpack 可支持代码的拆分，把动态加载的组件分别打包成分开的代码块（chunk）
  - 配合使用 React16 之后提供的 `<Suspense>` 组件和`lazy()`方法，加上 ESModule 提供的`import()`方法来动态引入组件
  - 减少一次性加载量，提高首屏渲染

- 使用`<React.Fragment>`来减少没有意义的`<div>`标签等

- 减少文件，资源的体积，采用 gzip 来压缩资源，减少在网络传输的内容

- 减少请求的数量，利用类似雪璧图等的方式把资源拼装再发送

### 3. 在 Webpack 中如何优化性能

- 减
  - 减小 Loader 的检测和适用范围 `include` `exclude`
  - 减小生成代码的体积，在生产环境中可使用`uglify`插件，把变量名，空格换行等去除
  - 去除无用的代码，可以使用 `TreeShaking`插件，把一些引入而无用的库文件精简
- 动态
  - 在使用频率低的组件，或由路由跳转的组件，可以`import()`动态引入，它们会分别成块，可以实现按需获取
- 公共
  - 可以利用 Webpack 提出公共代码，库，组件， 利用`CommonChunkPlugin` 生成公共代码块，这样可以充分利用浏览器的缓存机制

### 4. 首屏加载时间和优化

- 浏览器渲染包含 HTML 解析、DOM 树构建、CSSOM 构建、JavaScript 解析、布局、绘制等等，大致如下图所示：

  白屏原因：

  - 等待 HTML 文档返回，此时处于白屏状态。

  - 对 HTML 文档解析完成后进行首屏渲染，因为项目中对   

    

    加了灰色的背景色，因此呈现出灰屏。

  - 进行文件加载、JS 解析等过程，导致界面长时间出于灰屏中。

  - 当 Vue 实例触发了 mounted 后，界面显示出大体框架。

  - 调用 API 获取到时机业务数据后才能展示出最终的页面内容。



- CDN
- 骨架，减少白屏时间
- 打包。
- 

## 实用场景

### 1. 移动端如何适配 1px

- 设备像素比：`dpr`=window.devicePixelRatio，也就是设备的物理像素与 CSS 像素的比值。

  如`dpr`为`2`，`css`里写的`1px`宽度映射到物理像素上就有`2px`宽度。

  这就造成了页面在不同机子上的不一致

- 借助`媒体查询`来处理 `screen -webkit-min-device-pixel-ratio: 2` 把相应的边作一个换算

- 使用相对 view-port 的单位

  在`<head>`中设置`<meta>` 更改它的`initial / max / min -scale`

### 2. 如何上传大文件

### 3. 如何断点上传文件？

html5 提供的文件 API 中可以轻松的对文件进行分割切片

在 JavaScript 文件以文件对象`File`存在，而它的父类`Blob`可以提供一个`slice`方法，这样就能达到文件切分的目的；

为了把切分的文件组合，那么一般还要提供一个 ID 的字段，以及它们所在的集合信息`context`，id 可以拼接在后方，那服务端收到就可以拼装了。

要实现断点续传，则双方要在`context`,以及切分的 id 上达成共议，那就可以知道传到哪了，下次就可以再从未发送的文件块继续发了

### 4. 如何实现页面无限滚动

`IntersectionObserver`能监听某个元素是否滚入了 View-port 之中

### 5. 视频如何串流？

`webRTC`它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点的连接，无中转服务器

- webRTC 使用的 UDP 协议：

  实时通信是对时间非常敏感的。音视频流应该可以容忍间歇性的分组丢失。编解码器可以填充小的虚假数据，通常对输出质量影响极小。在这种情况下，及时性和低延迟比可靠性更重要。 需要选择速度更快的 UDP。

- DTLS 传输层加密

### 6. 前端路由

前端路由,本质上是检测 URL 的变化，作出相应的操作。但修改 URL 的默认行为是向某个服务器请求，刷新页面。不可控的，有时候我们不想让其发请求。

- `HashRoute` ：在 URL 的尾部加一个`#`标志 在`#`之后的，浏览器不会发送请求，只会发出 hash 改变的事件，这样我们就可以用 JavaScript 来控制了

  当页面hash(#)变化时，即会触发hashchange。

  锚点Hash起到引导浏览器将这次记录推入历史记录栈顶的作用，window.location对象处理“#”的改变并不会重新加载页面，而是将之当成新页面，放入历史栈里。

  并且，当前进或者后退或者触发hashchange事件时，我们可以在对应的事件处理函数中注册ajax等操作！

- `HistoryRoute`：history 是 HTML5 才有的新 API，可以用来操作浏览器的 session history (会话历史)。基于 history 来实现的路由可以和最初的例子中提到的路径规则一样。





## TypeScript

### 1. 什么是 TypeScript

### 2. 使用 TypeScript 的好处

### 3. 了解的 TypeScript 关键字 和 具体用处



## WebGL Three.js

- WebGL 工作原理

- 准备数据阶段
  在这个阶段，我们需要提供顶点坐标、索引（三角形绘制顺序）、uv（决定贴图坐标）、法线（决定光照效果），以及各种矩阵（比如投影矩阵）。
  其中顶点数据存储在缓存区（因为数量巨大），以修饰符attribute传递给顶点着色器；
  矩阵则以修饰符uniform传递给顶点着色器。

  

- 生成顶点着色器
  根据我们需要，由Javascript定义一段顶点着色器（opengl es）程序的字符串，生成并且编译成一段着色器程序传递给GPU。

  

- 图元装配
  GPU根据顶点数量，挨个执行顶点着色器程序，生成顶点最终的坐标，完成坐标转换。

  

- 生成片元着色器
  模型是什么颜色，看起来是什么质地，光照效果，阴影（流程较复杂，需要先渲染到纹理，可以先不关注），都在这个阶段处理。

  

- 光栅化
  能过片元着色器，我们确定好了每个片元的颜色，以及根据深度缓存区判断哪些片元被挡住了，不需要渲染，最终将片元信息存储到颜色缓存区，最终完成整个渲染。

## 其它

### 1. 什么是 MVVM 模型？

- MVC `Model-View-Controllor`

  - Model 用来存放数据
  - View 用来表现数据
  - Controllor 是中介，它指挥 Model 中的数据如何更新，也指挥 View 的变化
  - MVC 允许在不改变视图的情况下改变视图对用户输入的响应方式，用户对 View 的操作交给了 Controller 处理，在 Controller 中响应 View 的事件调用 Model 的接口对数据进行操作，一旦 Model 发生变化便通知相关视图进行更新。
- MVP `Model-View-Presenter`
  - 表现者承载了UI，也就是View层的业务逻辑
  - 表现者主要做了以下这几件事：
    1. 从View中得到Data
    2. 修改Data
    3. 决定Data如何表现在View之上
- MVVM 与 MVC 最大的区别就是：

它实现了 View 和 Model 的自动同步，也就是当 Model 的属性改变时，我们不用再自己手动操作 Dom 元素，来改变 View 的显示，

而是改变属性后该属性对应 View 层显示会自动改变。



Vue 是典型的 MVVM 模式

Vue 实例中的 data 相当于 Model 层，而 ViewModel 层的核心是 Vue 中的双向数据绑定，即 Model 变化时 VIew 可以实时更新，View 变化也能让 Model 发生变化



而React一般认为是MVVM中的V + VM层



### 2. 常用的设计模式

- 聚合模式

  - Word / PPT 的群组一功能

- 适配器模式

  - 外部 API，第三方库，使用统一的接口

- 装饰器模式

  - 为某些对象增加功能

- 发布订阅

```typescript
class PubSub {
  function Object() () {
    this.subscribers = {};
  }

  on(type, handler) {
    this.subscribers[type] ? this.subscribers[type].push(handler) : (this.subscribers[type] = [handler]);
  }

  off(type, handler) {
    if (!this.subscribers[type]) return;

    if (this.subscribers[type].length === 1) return delete this.subscribers[key];
    this.subscribers[type].filter((fn) => fn !== handler);
  }

  emit(type, ...args) {
    if (!this.subscribers[type]) return;
    this.subscribers[type].forEach((handler) => handler(...args));
  }
}
```

- 观察者

```typescript
interface Observer {
  update: () => void;
}

class DivElement implements Observer {
  HTMLValue: number;
  source: DataSource<number>;

  function Object() (source: DataSource<number>) {
    this.source = source;
  }

  rerender() {
    console.log('<div>' + this.HTMLValue + '</div>');
  }

  setValue(value: number) {
    this.HTMLValue = value;
    this.rerender();
  }

  update() {
    this.setValue(this.source.getValue());
  }
}

class Subject {
  private observers: Observer[] = [];

  notifyAll() {
    for (let observer of this.observers) {
      observer.update();
    }
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }
}

class DataSource<T> extends Subject {
  private value: T;
  function Object() (value) {
    super();

    this.value = value;
  }

  getValue() {
    return this.value;
  }

  setValue(value: T) {
    this.value = value;
    this.notifyAll();
  }
}

(function run() {
  const data = new DataSource<number>(0);

  const spanEl = new SpanElement(data);

  data.subscribe(spanEl);

  data.setValue(1); // Updated:<span>1</span>
  data.setValue(2); // Updated:<span>2</span>
  data.setValue(3); // Updated:<span>3</span>
})();
```

### 3. 线程和进程的区别

- 进程是独立运行的一个应用程序，是操作系统资源分配的基本单位（工厂），

  线程是进程之中调度，执行任务的基本单元（工厂中的流水线）

  所以一个进程之中可以利用多个线程进行协作

  

- 在内存分配上，操作系统会给进程分配独立的内存空间，给进程内部分配；

  而线程可以看做轻量级的进程，多个线程共享进程资源，因些可以相互访问和协作

  

- 在执行上，因进程之间相互独立，所以不会相互影响，而线程的崩溃会引起整个进程的崩溃，它依赖于进程为其做调度

  

- 保护机制上，进程崩溃后，很难会对其他进程产生影响，因为它们是独立运行的

  而一个线程崩溃，整个进程就没有办法继续上去了，因为它没法完整去实现它的一功能了。

  

- 通信方式上，线程之间的通信更方便，因为同一进程下的线程可以共享全局变量、静态变量等数据，而进程之间主要通过 通信方式来进行

  进程通信的主要的方法：

  - 管道： 利用一个类似文件的机制，提供读和写的接口，一端读，一端写，就像一个管道一样的机制
  - 共享存储：

  


进程可以说是一个“执行中的程序”。我们可以在一个进程中创建多个线程，让它们在“同一时刻”分别去做不同的工作了。这些线程共享同一块内存，线程之间可以共享对象、资源，如果有冲突或需要协同，还可以随时沟通以解决冲突或保持同步。

### 4. 进程，线程之间的通信

- 进程 - 进程
  - 管道 - 数据单向流动
  - IPC
  - HTTP / Socket
- 线程之间

### 5. JPEG PNG(8/16/32) GIF

Gif ：

- 透明性。

- 支持简单动画。

- 无损耗性
- 颜色少：256 种颜色

- 不适合照片，适合对颜色要求不高的图形

JPEG

- 不支持透明性

- 不支持动画

- 有损压缩

- Jpeg 是最适 web 上面的摄影图片和数字照相机中。

PNG：

- 完全支持 alpha 透明的（透明、半透明、不透明）
- 它不支持动画
- PNG8 PNG 24 PNG32 用 2^8 2^24 字节来存放颜色 255 - RGB - RGBA

当我们把图片放到不太搭配的背景上的时候，透明 PNG 图片的边缘会显示得更加平滑

### 6. 堆和栈内存的区别？ 和垃圾回收机制的关系？

堆：

- 是一种松散的数据结构，它的内存不连续，大小不定，可动态分配
- 一般会以地址形式引用堆内存中的数据，地址一般存放在栈中
- 内存回收时需要手动回收，程序结束后再自动回收

栈：

- 连续的数据结构，一般由系统动态分配内存空间
- 先进后出，连续存储，高效率
- 回收由系统自动处理

### 7. 压缩图片的原理

现象：

- 空间冗余
- 时间冗余

方法：

- 行程编码：图块中，许多行上都具有相同的颜色，或者在一行上有许多连续的像素都具有相同的颜色值。

  在这种情况下就不需要存储每一个像素的颜色值，而仅仅存储一个像素的颜色值，以及具有相同颜色的像素数目就可以，或者存储像素的颜色值，以及具有相同颜色值的行数。

### 编译

词法分析：字符 => （语义） => TOKEN + 关键字拼写错误 去注释

语法分析：AST生成 把表达式分成 （子表达式）和运算符节点，以树状的形式来表示

语义分析：

中间代码生成

代码优化

目标代码生成



## 算法

### 有哪些数据结构？

Array 存放一系列的数据，在内存中也是按序存放

LinkedList

Stack

Queue

Heap

HashMap

Tree

Graph

### 排序算法

<img src='/Users/tonylee/Library/Application Support/typora-user-images/image-20210524105114433.png' width='800px' />



- 稳定性：同数能否应保持相同的顺序

#### 快排

```javascript
const quickSort = (arr) => {
  return partition(arr);

  function patition(arr) {
    if (arr.length < 2) return arr;

    const pivot = arr[arr.length - 1];

    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
      arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }

    return partition(left).concat(pivot, partition(right));
  }
};

const quickSort = (arr) => {
  function swap(i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  partSort(0, arr.length - 1);
  return arr;
  
  function partSort(start, end) {
    if (end < start) return;

    let left = start;
    let right = end;
    const pivot = arr[start];

    while (left < right) {
      //直到找到 第一个比pivot 大的left 第一个比pivot 小的right
      while (left < right && arr[right] >= pivot) right--;
      while (left < right && arr[left] <= pivot) left++;

      if (left < right) swap(left, right);
    }

    swap(start, left);

    partSort(start, left - 1);
    partSort(left + 1, end);
  }
};
```



#### 归并

```javascript
function mergeSort(numbers) {
  return split(numbers);

  function split(numbers) {
    if (numbers.length <= 1) return numbers;
    let middle = (numbers.length / 2) | 0;

    const left = split(numbers.slice(0, middle));
    const right = split(numbers.slice(middle, numbers.length));

    return merge(left, right);
  }

  function merge(left, right) {
    let leftPointer = 0;
    let rightPointer = 0;
    const result = [];

    while (leftPointer < left.length && rightPointer < right.length) {
      if (left[leftPointer] < right[rightPointer]) {
        result.push(left[leftPointer++]);
      } else {
        result.push(right[rightPointer++]);
      }
    }
    while (leftPointer < left.length) {
      result.push(left[leftPointer++]);
    }

    while (rightPointer < right.length) {
      result.push(right[rightPointer++]);
    }
    return result;
  }
}
```

#### 选择

```javascript
function selectionSort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let smallestIndex = numbers.length - 1;
    let smallest = numbers[smallestIndex];

    //Find the smallest
    for (let j = numbers.length - 1; j > i; j--) {
      if (numbers[j] < smallest) {
        smallest = numbers[j];
        smallestIndex = j;
      }
    }

    //Swap
    numbers[smallestIndex] = numbers[i];
    numbers[i] = smallest;
  }

  return numbers;
}
```

#### 插入

```javascript
function insertionSort(numbers) {
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];

    let j;
    for (j = i - 1; j >= 0; j--) {
      if (numbers[j] >= current) {
        numbers[j + 1] = numbers[j];
      } else break;
    }
    numbers[j + 1] = current;
  }

  return numbers;
}
```



### 数组

#### 括号匹配

```javascript
function matchBrackets(string) {
  if (!string) return true;
  
  const lookup = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  const stack = [];

  for (let char of string) {
    if (lookup.hasOwnProperty (char)) {
      stack.push(char);
    } else {
      const left = stack.pop();

      if (lookup[left] !== char) return false;
    }
  }

  return !stack.length;
}
```





#### 合并排序数组

```javascript
function combine(longer, shorter) {
  let l = 0;
  for (let s = 0; s < shorter.length; s++) {
    while (shorter[s] > longer[l]) l++;

    longer.splice(l, 0, shorter[s]);
  }
}
```

#### 最大K

```javascript
const getGreatestK = (nums, k) => {
  const map = nums.reduce((obj, num) => {
    obj[num] = 1;
    return obj;
  }, {});

  return +Object.keys(map)[nums.length - k - 1];
};
```

#### 求众数

```javascript
function majorityElement(nums) {
  let count = 0;
  let candidate = null;
  
  nums.forEach((num) => {
    if (!count) candidate = num;

    count += candidate === num ? 1 : -1;
  });

  return candidate;
}
```

#### 已排序数组去重

```javascript
function removeDuplicatesFromSortedArray(numbers) {
  let currentIndex = 0;
  for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] !== numbers[currentIndex]) {
      numbers[currentIndex + 1] = numbers[i];
      currentIndex++;
    }
  }

  return numbers.slice(0, currentIndex + 1);
```

#### 旋转数组k 次

```javascript
const rotateArray = (nums, k) => {
  if (nums.length < 2) return;
  const pointer = nums.length - (k % nums.length);

  function reverse(start, end) {
   	 while(start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
       
      start++;
      end--;
    }
  }

  reverse(0, pointer - 1);
  reverse(pointer, nums.length - 1);
  reverse(0, nums.length - 1);
};
```

#### 数组扁平化

```javascript
function flatten(array) {
  const result = [];
  run(array);

  return result;
  function run(array) {
    if (!array.length) return;

    array.forEach((item) => {
      if (Array.isArray(item)) {
        run(item);
      } else {
        result.push(item);
      }
    });
  }
}
```



#### 交集

```javascript
function findCommon(num1,num2){
  const set1 = new Set(num1);
  const set2 = new Set(num2);
  
  let result = [];
  
  for(let num of set1){
    if(set2.has(num)) result.push(num);
  }
  
  return result;
}
```



#### 数组去重

```javascript
function removeDuplicate(nums){
  return [...new Set(nums)]
}

function removeDuplicate(nums){
  const seen = [];
  
  nums.forEach(num => {
    if(seen.indexOf(num) === -1) seen.push(num);
  })
}

function removeDuplicate3(nums){
	const map = nums.reduce((map,num) => {
    map[num] = true;
    return map;
  },{})
  
  return Object.keys(map).filter(v => +v);
}
```

#### 乱序

```javascript
function shuffle(items) {
  items.forEach((num, i) => {
    const randomIndex = (Math.random() * items.length) | 0;

    const temp = items[randomIndex];
    items[randomIndex] = num;
    items[i] = temp;
  });

  return items;
}
```

#### 二分查找

```javascript
function search(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const middleIndex = ((end + start) / 2) | 0;
    const middle = nums[middleIndex];

    if (target === middle) {
      return middleIndex;
    }

    target > middle ? (start = middleIndex + 1) : (end = middleIndex - 1);
  }

  return -1;
}
```







### 字符串

#### 两重复字符间最大区间

```javascript
function maxLengthBetweenEqualCharacters(string) {
  const count1 = {};
  const count2 = {};

  for (let i = 0, j = string.length - 1; i < string / 2; i++, j--) {
    if (count1[string.charAt(i)] && count2[string.charAt(i)]) {
      return count2[string.charAt(i) - count1[string.charAt(i)]];
    }
    count1[string.charAt(i)] = i;
    count2[string.charAt(j)] = j;
  }
  return -1;
}
```


#### 最长前缀

```javascript
function getPrefix(strings) {
  let shortest = strings.reduce(
    (shortest, current) => (shortest.length > current.length ? current : shortest),
    strings[0]
  );

  while (shortest.length) {
    let found = true;

    for (let i = 0; i < strings.length; i++) {
      if (!strings[i].match(new RegExp('^' + shortest))) {
        found = false;
      }
    }

    if (found) return shortest;
    shortest = shortest.substr(0, shortest.length - 1);
  }

  return '';
}
```



#### 实现`includes`

```javascript
function strStr(haystack, needle) {
  for (let i = 0; i < haystack.length - needle.length; i++) {
    const sliced = haystack.slice(i, i + needle.length);
    if (sliced === needle) return i;
  }

  return -1;
};
```



#### 最大不重复的子字符串

```javascript
const lengthOfLongestSubstring = function (s) {
  let pointer1 = 0;
  let pointer2 = 0;

  let max = 0;
  let ans = '';

  const set = new Set();

  while (pointer2 < s.length) {
    if (!set.has(s[pointer2])) {
      set.add(s[pointer2]);
      pointer2++;
	
      //没有之前记下（set中）的长
      if (max < set.size) {
        ans = [...set].join('');
        max = set.size;
      }
    } else {
      // 看到了就去掉
      set.delete(s[pointer1]);
      pointer1++;
    }
  }
  return ans;
};
```





### 链表

#### 反转

```javascript
function reverse(head) {
  if (!head) return head;
  const next = head.next;
  head.next = null;

  return _traverse(head, next);

  function _traverse(previous, current) {
    if (!current) return previous;
    const next = current.next;

    current.next = previous;
    return _traverse(current, next);
  }
}
```



#### 有环？

```javascript
function hasCycle(head) {
  if (!head) return false;

  let slow = head;
  let fast = head.next;

  while (fast !== null) {
    if (fast === slow) return true;

    slow = slow.next;
    fast = fast.next ? fast.next.next : null;
  }
  return false;
}
```



#### 合并

```javascript
var mergeTwoLists = function (l1, l2) {
  const root = l1 || l2;
  const next = l1.next || l2.next;

  _traverse(next, l2, root);

  return root;

  function _traverse(next1, next2, currentNode) {
    if (!next1 && !next2) return;

    if (!next1) {
      return (currentNode.next = next2);
    } else if (!next2) {
      return (currentNode.next = next1);
    } else {
      if (next1.val < next2.val) {
        currentNode.next = next1;
        next1 = next1.next;
        return _traverse(next1, next2, currentNode.next);
      }

      currentNode.next = next2;
      next2 = next2.next;
      return _traverse(next1, next2, currentNode.next);
    }
  }
};
```



### 树

#### 搜索

```javascript
function DFS1(root) {
  const record = [];
  _traverse(root);
	return record;

  function _traverse(node) {
    if (!node) return;

    record.push(node.val);

    _traverse(node.left);
    _traverse(node.right);
  }
}

function DFS2(root) {
  const stack = [];
  const record = [];
  stack.push(root);

  while (stack.length) {
    const current = stack.pop();

    record.push(current.val);

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

	return record;
}

//Breadth
function BFS1(root) {
  const record = [];

  const queue = [];
  queue.unshift(root);

  while (queue.length) {
    const node = queue.shift();

    record.push(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

	return record;
}

```

#### 最大深度

```javascript
function maxDepth(root) {
  if (!root) return 0;

  let currentCount = 1;
  _traverse(root, currentCount);

  return currentCount;

  function _traverse(node, count) {
    if (count > currentCount) currentCount = count;

    if (node.left) _traverse(node.left, count + 1);
    if (node.right) _traverse(node.right, count + 1);
  }
}
```

#### 是否对称

```javascript
function isSymmetric(root) {
  if (!root) return false;

  return _traverse(root.left, root.right);

  function _traverse(leftNode, rightNode) {
    if (!leftNode && !rightNode) return true;

    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) return false;

    return _traverse(leftNode.left, rightNode.right) && _traverse(leftNode.right, rightNode.left);
  }
}
```



### DP

#### 爬梯

```javascript
function climb(stair) {
  const map = {};

  return dp(stair);

  function dp(stair) {
    if (map[stair]) return map[stair];

    if (stair < 3) {
      return stair;
    }

    const result = dp(stair - 1) + dp(stair - 2);
    map[stair] = result;
    return result;
  }
}
```



### Binary

#### 数一的个数

```javascript
function countOnes(number) {
  let mask = 1;
  let count = 0;
  while (mask <= number) {
    count += mask & number && 1;
    mask <<= 1;
  }
  return count;
}
```



### 对象 其它

树组转树

```javascript
function getTree(arr) {
  let root = { id: null, name: null, children: [] };

  const map = arr.reduce((map, node) => {
    map[node.id] = [];

    return map;
  }, {});

  arr.forEach((node) => {
    if (!node.parentId) return (root = node);

    map[node.parentId].push(node);
  });

  getChildren(root);

  function getChildren(root) {
    if (!map[root.id].length) return;
    root.children = map[root.id];
    map[root.id].forEach((node) => getChildren(node));
  }

  return root;
}
```



#### fabonacci 1 1 2 3 5 8

```javascript
function fibonacci(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i <= 2) result.push(1);
    else result.push(result[i - 3] + result[i - 2]);
  }

  return result;
}
```



#### N 个孩子报数

```javascript
function getLastOne(total,N){
  let a = Array.from({ length: total }, (_, i) => i + 1);
  let call = 1;
	let i = 0;
	
while (a.length > 1) {
  if (call++ % 3 === 0) {
    a.splice(i, 1);
  }
  
  i++;
  if (i > a.length) i = 0;
	}
}
```



