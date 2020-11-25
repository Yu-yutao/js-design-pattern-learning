function Book(id, name, cost) {
  let count = 0; // 私有属性

  function addCount() {
    // 私有方法
    count++;
  }

  addCount();

  // 特权方法
  this.setId = function (id) {
    this.id = id;
  };

  this.setName = function (name) {
    this.name = name;
  };

  this.setCost = function (cost) {
    this.cost = cost;
  };

  // 构造函数
  this.setId(id);
  this.setCost(cost);
  this.setName(name);

  this.count = count;
}

// 静态共有属性方法
Book.count = Date.now();
Book.sayHello = function () {
  console.log("hello");
};

// 原型属性和方法
Book.prototype = {
  hhh: function () {
    console.log("hahah");
  },
  count: 0,
};

var book1 = new Book(1, "java script", 100);

var book2 = new Book(2, "java", 999);

var book3 = Book(3, 'test', 0); // 泄露

console.log(book1);

console.log(book2);

console.log(book3);

console.log(window.id, window.name, window.cost)