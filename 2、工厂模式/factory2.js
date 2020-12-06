// 安全模式创建工厂类

var Factory = function (type, content) {
  if (this instanceof Factory) {
    var s = new this[type](content);
  } else {
    return new Factory(type, content);
  }
};

Factory.prototype = {
  Java: function (content) {
    console.log("JAVA", content);
  },
  Php: function (content) {
    console.log("Php", content);
  },
};


var javaInstance = Factory('Java', '很好的一门语言')