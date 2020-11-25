// 原型式继承

/**
 * 根据原型的prototype可以借助已有对象创建一个新的对象，同时不必自定义对象类
 */


function inheritObject(o){
    // 声明一个过度函数对象
    function F(){}
    // 过度对象的原型继承父对象
    F.prototype = o;
    // 返回过度对象的一个实例，该实例的对象继承了父对象
    return new F();
}

var testObj = {
    a: 1,
    b: [1,2,3]
}

var f1 = inheritObject(testObj)
var f2 = new inheritObject(testObj)

f1.b.push(4);
console.log(f1, f2)

// 寄生式继承
var books = {
    name: 'js book',
    alikeBook: ['css book', 'html book']
}
function createBook(obj){
    // 通过原型继承方式创建新对象
    var o = new inheritObject(obj);
    // 拓展新对象
    o.getName = function(){
        console.log(name);
    }
    // 返回拓展后的对象
    return o;
}