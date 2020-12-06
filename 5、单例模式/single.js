/**
 * 单例模式
 * 只允许实例化一次的对象类，有时我们也用一个对象来规划一个命名空间
 */

// 命名空间

var namespace = {
  a: function () {
    console.log("a--");
  },
  b: function () {
    console.log("b--");
  },
};

// 静态变量

var Conf = (function () {
  var conf = {
    MAX_NUM: 100,
    MIN_NUM: 1,
    COUNT: 1000,
  };

  return {
    get: function (name) {
      return conf[name] ? conf[name] : null;
    },
  };
})();

var count = Conf.get("COUNT");
console.log(count);

// 惰性单例，延迟创建, 数据库连接db

var LazySingle = (function () {
  var _instance = null;

  function Single() {
    return {
      publicMethod: function () {
        console.log(1);
      },
      publicProperty: "1.0",
    };
  }

  return function () {
    if (!_instance) {
      _instance = Single();
    }
    return _instance;
  };
})();

console.log(LazySingle().publicProperty);
