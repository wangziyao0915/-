// ·Day3  js

// 1.接受一个仅包含数字的 多维数组 ，返回一个迭代器，可以遍历得到它拍平以后的结果
// const numbers = flatten2([1, [[2], 3, 4], 5]) 
// numbers.next().value // => 1 
// numbers.next().value // => 2 
// numbers.next().value // => 3 
// numbers.next().value // => 4 
// numbers.next().value // => 5

// 补齐flatten2 这个函数

function* flatten2(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
    //   使用yield可以简化使用
        Array.isArray(item) ? yield* flatten2(item) : yield item;
    }
}


// 2.复习数组方法 封装实现 数组 map、filter、every 方法
// 数组的map方法
function mapFn(a, b) {
    let newArr = [];
    let self = this;
    //this指向调用的数组
    for (let i = 0; i < self.length; i++) {
        //把每一项a返回值push到newArr
        newArr.push(a.call(b, self[i], i, self));
    }
    return newArr;
}
// 数组的filter方法
function filterFn(a, b) {
    let newArr = [];
    let self = this;
    //this指向调用的数组
    for (let i = 0; i < self.length; i++) {
        //把a结果为true的值push到newArr
        let result = a.call(b, self[i], i, self);
        if (result) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// 数组的every方法

function everyFn(a, b) {
    let self = this;
    //this指向调用的数组
    for (let i = 0; i < self.length; i++) {
        //如果有一个a值为false返回false否则返回true
        //some改成有一个为true返回true，否则返回false即可
        let result = a.call(b, self[i], i, self);
        if (!result) {
            return false
        }
    }
    return true;
}









