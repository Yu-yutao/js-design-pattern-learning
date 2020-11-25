/**
 * 根据原型的prototype可以借助已有对象创建一个新的对象，同时不必自定义对象类
 */

function inheritObject(o) {
  // 声明一个过度函数对象
  function F() {}
  // 过度对象的原型继承父对象
  F.prototype = o;
  // 返回过度对象的一个实例，该实例的对象继承了父对象
  return new F();
}

/**
 * 终极继承者 ———— 寄生组合式继承   寄生+构造函数继承
 */
function inheritProperty(subClass, superClass) {
  // 复制一份父类的原型副本保存在变量中
  var p = inheritObject(superClass.prototype);
  // 修正因为重写子类导致子类的construct属性被修改
  p.constructor = subClass;
  // 设置子类原型
  subClass.prototype = p;
}

/**
 * 我们需要继承的仅仅是父类的原型，不再需要调用父类的构造函数，我们需要的只是一个父类原型对象的副本
 * 因为对父类原型对象复制得到的服务之对象p中的constructor指向的不是subClass子类对象，
 * 对p做一次增强，修复constructor属性指向不正确的问题，最后将的到的复制对象p赋值给子类的原型
 * 这样子类的原型继承父类并且没有执行父类的构造函数
 */

// 测试

// 父类
function SuperClass(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
// 父类原型
SuperClass.prototype.getName = function () {
  console.log(this.name);
};

function SubClass(name, time) {
  SuperClass.call(this, name);
  this.time = time;
}

// 继承原型链
inheritProperty(SubClass, SuperClass);
// 扩展
SubClass.prototype.getTime = function () {
  console.log(this.time);
};

var instance1 = new SubClass("js book", 2014);
var instance2 = new SubClass("css book", 2013);

console.log(instance1.colors);
console.log(instance2.colors);

console.log(instance2)

instance2.getTime();
instance2.getName();


