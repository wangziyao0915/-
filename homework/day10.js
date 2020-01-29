// ·Day 10 react&vue
// 1.简述react和vue的区别
/**
 * 1.数据是不是可变的
 * react整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流，推崇结合immutable来实现数据不可变。
 * react在setState之后会重新走渲染的流程，如果shouldComponentUpdate返回的是true，就继续渲染，如果返回了false，就不会重新渲染，
 * PureComponent就是重写了shouldComponentUpdate，然后在里面作了props和state的浅层对比。
 * 而vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。
 * 
 * 2.通过js来操作一切，还是用各自的处理方式
react的思路是all in js，通过js来生成html，所以设计了jsx，还有通过js来操作css，社区的styled-component、jss等，
vue是把html，css，js组合到一起，用各自的处理方式，vue有单文件组件，可以把html、css、js写到一个文件中，html提供了模板引擎来处理。

3.类式的组件写法，还是声明式的写法
react是类式的写法，api很少，
而vue是声明式的写法，通过传入各种options，api和参数都很多。所以react结合typescript更容易一起写，vue稍微复杂。

4.什么功能内置，什么交给社区去做
react做的事情很少，很多都交给社区去做，vue很多东西都是内置的，写起来确实方便一些，
比如 redux的combineReducer就对应vuex的modules，
比如reselect就对应vuex的getter和vue组件的computed，
vuex的mutation是直接改变的原始数据，而redux的reducer是返回一个全新的state，所以redux结合immutable来优化性能，vue不需要。
 */



// 2.简述spa，spa实现原理
/**简述：
 * 单页 Web 应用 (single-page application 简称为 SPA) 是一种特殊的 Web 应用。
 * 它将所有的活动局限于一个Web页面中，仅在该Web页面初始化时加载相应的HTML、JavaScript 和 CSS。
 * 一旦页面加载完成了，SPA不会因为用户的操作而进行页面的重新加载或跳转。
 * 取而代之的是利用 JavaScript 动态的变换HTML的内容，从而实现UI与用户的交互。
 * 由于避免了页面的重新加载，SPA 可以提供较为流畅的用户体验。
 * 得益于ajax，我们可以实现无跳转刷新，又多亏了浏览器的histroy机制，我们用hash的变化从而可以实现推动界面变化。
 * 从而模拟元素客户端的单页面切换效果 */


 /**单页面应用实现步骤：
代码实现：
首先是一个静态模板文件 index.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <div id="root"></div>
</body>
<script>

</script>

</html>
在vue react框架的入口文件中指定对应的渲染元素：
import React from 'react;
import ReactDOM from 'react-dom';

ReactDOM.render(
<App/>,
document.querySelector("#root")
)
引入react-router或者 react-router-dom，dva等路由跳转的库
配置路由跳转
<HashRouter>//这里使用HashRouter
      <ErrorBoundary>//React错误边界
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/" component={NotFound} />//404路由或者重定向都可以
        </Switch>
      </ErrorBoundary>
</HashRouter>
 */



