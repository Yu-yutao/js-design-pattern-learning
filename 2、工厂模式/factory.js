// 简单工厂模式
function Apple(name){
    if(!this instanceof Apple){
        return new Apple();
    }
    this.name = name;
}
Apple.prototype.showName = function(){
    console.log('我是一个小苹果')
}

function Banana(name){
    if(!this instanceof Banana){
        return new Banana();
    }
    this.name = name;
}
Banana.prototype.sayHello = function(){
    console.log('hello,我是一个da香蕉')
}

function Factory(fruit){
    if(fruit == 'apple'){
        return new Apple('苹果')
    }else if(fruit == 'banana'){
        return new Banana('香蕉')
    }
}

var banana = Factory('banana')

console.log(banana)


// 这种模式如果需要添加一个 “菠萝类” ， 不仅需要声明一个类， 还需压迫改变工厂方法