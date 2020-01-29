// ·Day 6 css
// 1.请实现未知宽高的盒子在页面中水平垂直居中

/**1、css3弹性盒子flexbox

2、display:table-cell;

3、transform:translate();

可以设置的属性有：flex-direction,justify-content,align-items，flex-wrap，flex-flow，align-content

1.flex-direction指定弹性子元素在父容器中的位置: row左对齐（默认） \ row-reverse右对齐（从后往前排 最后一项在最上） \ column纵向排列 \ column-reverse反转纵向排列（从后往前排 最后一项在最上）

2.justify-content应用在弹性容器上，把弹性项沿着弹性容器的主轴线对齐（水平方向）：flex-start左对齐 \ flex-end右对齐 \ center居中 \ space-between平均分布（首尾与弹性容器边框无空隙） \ space-around平均分布（首尾与弹性容器边框有空隙，距离为弹性项之间的距离的一半）
3.align-items 垂直方向上的对齐方式：flex-start起始位置的边界紧靠住该行的侧轴起始边界 \ flex-end起始位置的边界紧靠住该行的侧轴结束边界 \ center居中，如果宽度比弹性容器大会溢出 \ baseline如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。 \ stretch（默认）如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制

stretch值会改变弹性项的高度，所以如果使用此值同时定义了弹性项的高度，在为stretch值时属性失效，在为其他值时受限于弹性容器的高度
4.flex-wrap是否换行：nowrap（默认）不换行 \ wrap换行,第一行在上方 \ wrap-reverse换行，第一行在下方



5.flex-flow是flex-direction 和 flex-wrap的简写形式，默认值为row nowrap



6.align-content定义多根轴线的对齐方式，如果项目只有一根轴线该属性不起作用：flex-start \ flex-end \ center \ space-between \ space-around \ stretch（默认）


代码：
<!DOCTYPE html>
<html>
<head>
<style> 
.flex-container {<span style="color:#ff0000;">
    display: flex;
    align-items: center;
    justify-content:center;</span>
    width: 400px;
    height: 250px;
    background-color: lightgrey;
}
 
.flex-item {
    background-color: cornflowerblue;
    width: 100px;
    margin: 10px;
}
</style>
</head>
<body>
 
<div class="flex-container">
  <div class="flex-item">flex item 1</div>
  
</div>
 
</body>
</html>

————————————————
版权声明：本文为CSDN博主「VarIInJSon」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/variinjson/article/details/52816515


 */


// 2.简述盒模型、怎么修改盒模型

/** 指的是页面在渲染时，DOM元素所采用的布局模型。
一个元素占用的空间大小由几个部分组成，内容(content)、内边距(padding)，边框(border)和外边距(margin)。
可以通过box-sizing来进行设置，其中IE盒模型(也有叫怪异盒模型的)的content包含了padding和border，这是区别于W3C标准盒模型的地方。
 */

// 3.src和href的区别

/**href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系src表示引用资源，表示替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。
src是source的缩写，是指向外部资源的位置，指向的内部会迁入到文档中当前标签所在的位置；在请求src资源时
会将其指向的资源下载并应用到当前文档中，例如js脚本，img图片和frame等元素。
<script src="js.js"></script>当浏览器解析到这一句的时候会暂停其他资源的下载和处理，直至将该资源加载，编译，执行完毕，
图片和框架等元素也是如此，类似于该元素所指向的资源嵌套如当前标签内，这也是为什么要把js饭再底部而不是头部。
<link href="common.css" rel="stylesheet"/>当浏览器解析到这一句的时候会识别该文档为css文件，会下载并且不会停止对当前文档的处理，这也是为什么建议使用link方式来加载css而不是使用@import。
 */


// 4.简述8种position属性值
// 1. static positon定位的默认值， 没有定位

// 2. relative
// 生成相对定位的元素， 相对于其正常位置进行定位， 一般在子元素设置absoute定位时， 给父元素设置relative
// 元素的位置通过top、 right、 bottom、 left   控制， 其值的定位起点都是是父元素左上角(这点和absoute、 fixed不一样)

// 3. absoute
// 生成绝对定位的元素， 相对于 static 定位以外的第一个父元素进行定位
// 元素的位置通过top、 right、 bottom、 left  控制， top、 left的定位起点是包含块左上角， right、 bottom的定位起点是包含块右下角

// 4. fixed （ ie6不兼容）
// 生成绝对定位的元素， 相对于浏览器窗口进行定位， 和absoute的区别是fixed不会跟随屏幕滚动(常见的各种贴屏广告)
// 元素的位置通过top、 right、 bottom、 left  控制， top、 left的定位起点是包含块左上角， right、 bottom的定位起点是包含块右下角

// 5. inherit
// 规定应该从父元素继承 position 属性的值
// inherit 关键字可用于任何 HTML 元素上的任何 CSS 属性
// 兼容： ie7及以下版本不支持此属性

// 6. initial 
// 设置positon的值为默认值(static)
// 兼容： ie不支持此属性
// 问： 有了static为什么还会存在此属性， 不是多此一举？
// 答： initial  关键字可用于任何 HTML 元素上的任何 CSS 属性， 不是postion特有的

// 7. unset
// 设置positon的值为不设置：
// 如果该属性的默认属性是 继承属性(例如字体相关的默认属性基本都是继承)， 该值等同于  inherit
// 如果该属性的默认属性 不是继承属性(例如pisition的默认属性为static)， 该值等同于  initial
// 兼容： ie不支持此属性

// 8. sticky
// css3新属性， 它的表现就像position: relative和position: fixed的合体:
//     1. 在目标区域在屏幕中可见时， 它的行为就像position: relative;
//     2. 页面滚动时

// 当父元素是body时
//     a.滚动距离小于屏幕高度或宽度， 它会固定在目标位置
//     b.滚动距离大于屏幕高度或宽度， 它的表现就像position: relative和1一样

// 当父元素不是body， 在父元素高度内滚动时它会固定在目标位置， 就像fixed
// 在父元素滚动为不可视时它的表现就像position: relative和1一样


// 兼容： ie不兼容、google不完全兼容（thead、tr标签不支持）、firefox59以后兼容，之前版本不完全兼容(table标签不支持)




// 5.简述css hack
// (1) 图片间隙 
// 在div中插入图片，图片会将div下方撑大3px。
// hack1：将<div>与<img>写在同一行。
// hack2：给<img>添加display：block；
// dt li 中的图片间隙。
// hack：给<img>添加display：block；

// (2) 默认高度，IE6以下版本中，部分块元素，拥有默认高度（低于18px）
// hack1：给元素添加：font-size：0；
// hack2：声明：overflow：hidden；
// 表单行高不一致
// hack1：给表单添加声明：float：left；height： ；border： 0；
// 鼠标指针
// hack：若统一某一元素鼠标指针为手型：cursor：pointer；
// 当li内的a转化块元素时，给a设置float，IE里面会出现阶梯状
// hack1：给a加display：inline-block；
// hack2：给li加float：left；


// 6.简述px、rem、em 的区别 怎么实现适配
/**屏幕与分辨率
移动设备与pc设备差别最大的就是屏幕的,体现在屏幕的尺寸和屏幕的分辨率。

屏幕尺寸：屏幕对角线的长度。

屏幕分辨率：表示屏幕水平或垂直方向的像素数。相同尺寸下分辨率越高，越清晰。

像素
物理像素：一个像素点的大小是不固定的，由屏幕生产商在制造时决定，在实际开发中不能基于物理像素进行布局。

css像素：web中推出一个单位 px，可以解决由于物理像素不同导致不同屏幕下，盒子宽高不一致的问题。

像素比： dpr = 物理像素/css像素 = 1、2、3 即为一倍屏、二倍屏和三倍屏

获取设备的dpr：通过window.devicePixelRatio 来查看设备的像素比。

二倍图和三倍图
为了在高倍屏上图片能显示清晰，一般会采用二倍图，在使用时要进行压缩。

实际开发中，设计师给我们的都是二倍图或者三倍图，为了保证每个物理像素对应图片上的每一个像素，保证图片清晰。

200px*200px ： 实际上有多少个像素点？

一倍屏：200个物理像素点 200*200；

二倍屏：400个物理像素点 400*400；

三倍屏：600个物理像素点 600*600；

如何使用二倍图？（压缩图片不会影响清晰度，放大图片会失真）
​	插入图片： 通过img标签的width属性来压缩图片；

​	背景图片：通过设置background-size：200px 200px ； （图片原尺寸为400px*400px）就达到了压缩图片的效果。

注意： 压缩了背景图片，对应的背景图片的位置也会缩小相应的倍数！

**伸缩布局：**display：flex ；
​	当给一个盒子设置了display：flex之后，这个盒子就有了***主轴*** 和***侧轴*** 的概念。
主轴：Flex容器的主轴主要用来配置Flex项目，默认是水平方向
侧轴：与主轴垂直的轴称作侧轴，默认是垂直方向的
方向：默认***主轴从左向右*** ，默认***侧轴从上到下*** 。

主轴和侧轴并不是固定不变的，通过flex-direction可以互换。

flex-direction：调整主轴方向

​	取值： row（水平向右）、row-reverse（水平向左）、column（垂直向下）、column-reverse（垂直向上)。

***Justify-content：***主轴对其方式

​	取值： flex-start（起点对齐）、flex-end（终点对齐）、center（居中对齐）、space-around（空间环绕）、space-between（两端对齐）。

***align-items：***侧轴对齐方式

​	取值： flex-start（起点对齐）、flex-end（终点对齐）、center（居中对齐）、stretch（默认拉伸）

​	子盒子没有高度时，默认拉伸为父盒子的高度。如果子盒子没有设置宽度，宽度为0.

通过设置主轴和侧轴到的对齐方式，可以实现让盒子去任何地方。

***flex-wrap：***是否换行

​	no-wrap：默认不换行，会把所有的元素都挤扁

​	wrap：换行

设置伸缩比例：

​	flex：数值 （设置子元素相对于父元素的宽度比例）。如果有不参与划分的子元素，直接写死宽高，不用设置flex即可。

​

**流式布局：**高度固定，宽度自适应（也叫百分比布局）。
​	流式布局的页面会根据屏幕尺寸的不同动态改变盒子的宽度。但是，在移动端，屏幕尺寸较小，如果只是宽度自适应，高度固定的话，图片就会变形，所以一般pc端采用的流式布局较多，移动端大多采用 em布局或者rem布局。

Bootstrap框架: 可以实现响应式开发。 核心是栅格布局，原理是 媒体查询+百分比布局+浮动 。栅格系统是一种布局方式，类似于伸缩布局，是实现响应式的关键。

px特点：设备是固定的，那么这个设备的css像素也就固定了大小。我们在布局的时候，（比如：width：200px ；height：200px）这样已经写死了盒子的大小，我们在通过调试的时候回发现，无论你如何改变屏幕尺寸，该盒子的宽高永远不会变的。在pc端页面可能没有什么问题，但是手机的屏幕尺寸很多，使用px进行页面布局明显就不合适了，所以在移动端的页面大多采用em布局或者rem布局。

em布局：根据em单位（当前元素的字体）的大小，进行页面布局，可以实现宽高自适应。但是，由于该属性子元素可以继承，如果改变元素的字体大小，该元素的布局也会发生改变！所以，移动端使用rem布局的最多。

rem布局：根据根rem单位元素的字体大小（就是html的字体大小）进行页面布局，由于该属性不会被继承，所以实现宽高自适应只需要根据屏幕大小的变化动态的改变html的字体大小即可。
 */




