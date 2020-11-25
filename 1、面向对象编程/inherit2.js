// 构造函数继承
function SuperClass(id) {
  this.books = ["javascript", "html", "css"];
  this.id = id;
}

SuperClass.prototype.showBooks = function () {
  console.log(this.books);
};

function SubClass(id) {
  SuperClass.call(this, id);
}

var instance1 = new SubClass(1);

var instance2 = new SubClass(2);

instance1.books.push("hello");

console.log(instance1);

console.log(instance2);

// 将子类的变量在父类执行一遍，未涉及到prototype