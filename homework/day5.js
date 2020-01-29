// ·Day5 js

// 1.总结http协议 、同源策略、跨域问题
/**
http协议同源策略
要同时满足以下三个条件：
协议相同；
域名相同；
端口号相同；

也可以协议、域名、端口号都不相同。不同源，就会产生“跨域”
同源策略（Same origin policy）是一种约定，它是浏览器最核心也最基本的安全功能，
如果缺少了同源策略，则浏览器的正常功能可能都会受到影响。
可以说Web是构建在同源策略基础之上的，浏览器只是针对同源策略的一种实现。

1.同源策略
什么叫同源？
URL由协议、域名、端口和路径组成，如果两个URL的协议、域名和端口相同，则表示他们同源。相反，只要协议，域名，端口有任何一个的不同，就被当作是跨域。
在这里插入图片描述



2.跨域
跨域是指从一个域的网页去请求另一个域的资源。比如从http://www.baidu.com/ 页面去请求 http://www.google.com 的资源 */








// 2.中间件模式（middleware）是一种很常见、也很强大的模式，被广泛应用在 Express、Koa、Redux 等类库和框架当中。模拟一个中间件模式。

const app = {
    target: null,
    middleWares: [],
    index: -1,
    
    callback(ctx) {
      console.log(ctx)
    },
    use(fn) {
      this.middleWares.push(fn)
    },
    go(ctx) {
      this.target = ctx;
      this.index = -1;
      const execute = () => {
        this.index += 1;
        if (this.index >= this.middleWares.length) {
          this.callback(this.target)
        } else {
          this.middleWares[this.index](this.target, execute)
        }
      };
      execute()
    }
  };
  









