// · Day2  js

// 1.请封装一个数组reduce方法

var reducers = {
    totalInEuros: function(state, item) {
        return state.euros += item.price * 0.897424392;
    },
    totalInYen: function(state, item) {
        return state.yens += item.price * 113.852;
    }
}

var manageReducers = function(reducers) {
    return function(state, item) {
        return Object.keys(reducers).reduce(
            function(nextState, key) {
                reducers[key](state, item);
                return state;
            }, {});
    }
}




// 2.请使用冒泡和快速两种方式实现数组排序
// 冒泡
function bubbleSort(arr){
    　　 var isSort = false
        for(var i = 0;i<arr.length;i++){
            for(var j=arr.length-1;j>i;j--){
                if(arr[j]<arr[j-1]){
                    var temp = arr[j]
                    arr[j] = arr[j-1]
                    arr[j-1] = temp
    　　　　　　　　　 isSort = true 
                }
            }
    　　　　　if(isSort){
    　　　　　　　break　
    　　　　　}
        }
        return arr
    }





// 快速
function quick_sort(arr,from,to){
	var i = from;
	var j = to;
	var key = arr[from]; 
	if(from >= to){ 
	   return;
	}
	while(i < j){
		while(arr[j] > key && i < j){ 
			j--;
		}
		while(arr[i] <= key && i < j){  
			i++;
		}
		
		if(i < j){ //交换两个元素的位置
			var temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;

		}
	}
	arr[from] = arr[i] //
	arr[i] = key;
    quick_sort(arr,from,i-1);
	quick_sort(arr,i+1,to);
}

var arr = [3,3,-5,6,0,2,-1,-1,3];
console.log(arr);
quick_sort(arr,0,arr.length-1);
console.log(arr);





// 3.封装Storage对象
// Storage.set('name', 哈哈哈') // 设置 name 字段存储的值为'哈哈哈'。
// Storage.set('age', 2, 30);
// Storage.set('people', ['Oli', 'Aman', 'Dante'],  60)
// Storage.get('name')    // ‘前端一万小时’
// Storage.get('age')     //  如果不超过 30 秒，返回数字类型的 2；如果超过 30 秒，返回 undefined，并且 localStorage 里清除 age 字段。
// Storage.get('people')  // 如果不超过 60 秒，返回数组； 如果超过 60 秒，返回 undefined。
//加载插件：https://cdn.bootcss.com/crypto-js/3.1.9/crypto-js.js
var CryptoJS = require( 'crypto' )
function LRUCache ( indexKey, cacheSize ) {
    // 秒 分 时 一天
    var expiresTime      = 60 * 24 * 365;
    var currentSize      = 0; // 当前大小
    var cacheSize        = cacheSize ; //缓存大小
    var keyArray         = [];//缓存容器
    var localStorage     = window.localStorage || {
        getItem:function() {
          return null;
        },
        setItem:function() {
        }
      }; // 缓存全局localStorage对象局部变量
    indexKey             = sha1( indexKey );
    /**
     * 加载localStorage中的数据,并且判断是否有忆失效的
     */
    keyArray = JSON.parse( getLocalStorage( indexKey ) ) || [];
    currentSize = keyArray.length;
    for ( var i = 0; i < keyArray.length; i++ ) {
      var time    = +keyArray[ i ].time;
      var nowTime = +new Date();
      if ( nowTime > time ) {
        removeLocalStorage( keyArray[ i ].key );
        keyArray.splice( i, 1 );
      }
      saveKeyIndexLocalStorage();
    }
    /**
     * hash加密->sha1算法
     * @param str
     */
    function sha1 ( str ) {
      return CryptoJS.SHA1( str ).toString();
    }
  
    /**
     * 获取字符串长度（汉字算两个字符，字母数字算一个）
     * @author @DYL
     * @DATE 2017-11-21
     */
    function getByteLen ( val ) {
      var len = 0;
      for ( var i = 0; i < val.length; i++ ) {
        var a = val.charAt( i );
        if ( a.match( /[^\x00-\xff]/ig ) != null ) {
          len += 2;
        }
        else {
          len += 1;
        }
      }
      return len;
    }
  
    function saveKeyIndexLocalStorage ( obj ) {
      if ( obj ) {
        keyArray.unshift( obj );
      }
      localStorage.setItem( indexKey, JSON.stringify( keyArray ) );
    }
  
    /**
     * 把数据保存到localStorage中
     * @expire 单独是分钟
     * @param obj Object类型
     */
    function saveLocalStorage ( key, value ) {
      localStorage.setItem( key, value );
    }
  
    function removeLocalStorage ( key ) {
      removeLastLocalStorage( key )
    }
  
    function removeLastLocalStorage ( key ) {
      currentSize--;
      localStorage.removeItem( key );
    }
  
    function getLocalStorage ( key ) {
      return localStorage.getItem( key );
    }
  
    /**
     * 添加缓存
     * @param key
     * @param value
     */
    function put ( key, value, expires ) {
      // 判断是不是已经存在了缓存对象
      var item = get( key );
      value = JSON.stringify( value ); //将对象转换成字符JSON
      key   = sha1( key );
      if ( item ) {
        moveToHead( key );
      } else {
        //缓存容器是否已经超过大小.
        if ( currentSize >= cacheSize ) {
          removeLast();
        } else {
          currentSize++;
          expires = expires || expiresTime;
          expires = +new Date() + expires * 60 * 1000; // 默认一天失效
          saveKeyIndexLocalStorage( { key:key, time:expires, size:getByteLen( value ) } );
        }
      }
      saveLocalStorage( key, value );
    }
  
    /**
     * 获取缓存中对象
     * @param key
     * @return
     */
    function get ( key ) {
      key = sha1( key );
      moveToHead( key );
      return JSON.parse( getLocalStorage( key ) );
    }
  
    /**
     * 将缓存删除
     * @param key
     * @return
     */
    function remove ( key ) {
      key = sha1( key );
      for ( var i = 0, len = keyArray.length; i < len; i++ ) {
        if ( key == keyArray[ i ].key ) {
          currentSize--;
          keyArray.splice( i, 1 );
          removeLocalStorage( key );
          saveKeyIndexLocalStorage();
          break;
        }
      }
    }
  
    /**
     * 清仓缓存cachaName中的数据
     */
    function clear () {
      keyArray    = [];
      currentSize = 0;
      localStorage.clear();
    }
  
    /**
     * 删除链表尾部节点
     *  表示 删除最少使用的缓存对象
     */
    function removeLast () {
      var key = keyArray.pop();
      removeLastLocalStorage( key );
    }
  
    /**
     * 移动到链表头，表示这个节点是最新使用过的
     * @param node
     */
    function moveToHead ( key ) {
      var item = {};
      for ( var i = 0; i < keyArray.length; i++ ) {
        item = keyArray[ i ];
        if ( key == item.key && i != 0 ) {
          //如果不是第一个元素，就把它从数字中删除，再把它添加到数组顶端
          item = keyArray.splice( i, 1 )[ 0 ];
          saveKeyIndexLocalStorage( item );
          break;
        }
      }
    }
  
    this.get        = get;
    this.put        = put;
    this.remove     = remove;
    this.clear      = clear;
    this.removeLast = removeLast;
    this.moveToHead = moveToHead;
  }
  window.LRUCache = LRUCache;






// 4.可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五

let toChineseNum = (num) => {
    let unit = ['', '十', '百', '千']
    let counts = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

    let prev = Math.floor(num / 10000)
    let next = num % 10000

    let AAA = (jsnum, flag = false) => {
        if (!jsnum) { return '' }
        let i = 0,
            strings = '';

        while (flag ? i < 4 : jsnum > 0) {
            count = jsnum % 10
            jsnum = Math.floor(jsnum / 10)
            strings = (count ? counts[count] + unit[i] : strings[0] == '零' ? '' : strings.length && i ? '零' : '') + strings
            i++
        }
        return strings
    }

    return prev ? AAA(prev) + '万' + AAA(next, true) : AAA(num)
}
console.log(toChineseNum(12345))

















