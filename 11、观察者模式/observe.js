/**
 * 发布-订阅
 */

var Observer = (function () {
  var _message = {};
  return {
    regist(key, fn) {
      if (_message[key] === undefined) {
        _message[key] = [fn];
      } else {
        _message[key].push(fn);
      }
    },
    fire(key, args) {
      if (!_message[key]) return;

      var events = {
        key,
        args: args || {},
      };

      for (var i = 0; i < _message[key].length; i++) {
        _message[type][i].call(this, events);
      }
    },
    remove(key) {
      if (_message[key] instanceof Array) {
        var i = _message[key].length - 1;
        for (; i >= 0; i--) {
          _message[type][i] === fn && _message[key].splice(i, 1);
        }
      }
    },
  };
})();
