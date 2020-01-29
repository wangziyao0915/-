// · Day1  js

// 1.使用发布订阅模式，实现vue得$on和$emit、$off 方法

let evlist = {}

let $on = (evname, callback) => {
    if (!evlist[evname]) {
        evlist[evname] = [];
    }
    evlist[evname].push(callback)
}

let $emit = (evname, params) => {
    if (evlist[evname]) {
        let arr = evlist[evname];
        arr.map((cb) => {
            cb(params);
        })
    }

}

let $off = (evname, callback) => {
    if (evlist[evname]) {
        if (callback) {
            let index = evlist[evname].indexOf(callback);
            evlist[evname].splice(index, 1);
        } else {
            evlist[evname].length = 0;
        }
    }
}





// 2.实现instanceOf方法
function instanceOfFn(a, b) {
    while (true) {
        if (Object.is(a.__proto__, b.prototype)) {
            return true;
        } else if (Object.is(a.__proto__, null)) {
            return false;
        } else {
            a = a.__proto__;
        }
    }
}
// 3.红绿灯问题，绿灯3秒，红灯2秒，黄灯1秒，每隔一秒打印一条记录 这样循环，要求：可以在控制台可以运行的代码，并且正确输出
// // 绿灯 3
// 绿灯 2
// 绿灯 1
// 红灯 2
// 红灯 1
// 黄灯 1
// 绿灯 3

let oList = document.getElementById("list")
let oLi = oList.children
oList.className = "red";
function apromise(t) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, t)
    })
}
function stat() {
    apromise(3000).then(function () {
        oList.className = "yellow";
        return apromise(1000);
    }).then(function () {
        oList.className = "green";
        return apromise(2000);
    }).then(function () {
        oList.className = "red";
        stat();
    })
}
stat();
