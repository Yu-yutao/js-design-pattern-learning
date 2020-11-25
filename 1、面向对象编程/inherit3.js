// 组合继承
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
  
  SubClass.prototype = new SuperClass();

  var instance1 = new SubClass(1);
  
  var instance2 = new SubClass(2);
  
  instance1.books.push("hello");
  
  console.log(instance1);
  
  console.log(instance2);
  
  instance1.showBooks();
  instance2.showBooks();

  //  缺点： 父类的构造函数执行了两边 