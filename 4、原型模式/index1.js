/**
 * 原型实例指向创建对象的类，用于创建的对象的类型共享原型对象的属性以及方法
 *
 * 对于个性差异的东西，放在构造函数内，资源消耗较大的可以放在原型上
 *
 * 原型模式本质上也是一种继承
 */

function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log("eat some thing");
};
Animal.prototype.log = function(){
    console.log(this.name)
}

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = new Animal();
Dog.prototype.wang = function () {
  console.log("wang wang ~");
};

function Cat(name) {
  Animal.call(this, name);
}
Cat.prototype = new Animal();
Cat.prototype.miao = function () {
  console.log("miao ~");
};

var dogInstance = new Dog("小黄");
console.log(dogInstance);

var animalInstance = new Animal('小猪')
console.log(animalInstance)

dogInstance.log();
animalInstance.log();
