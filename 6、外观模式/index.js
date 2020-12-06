/**
 * 外观模式：
 * 为一组复杂的子系统提供一个更高级的统一接口
 */

window.onload = function () {
  function addEvent(dom, type, fn) {
    // 支持dom2
    if (dom.addEventListener) {
      dom.addEventListener(type, fn, false);
    } else if (dom.attachEvent) {
      // attachEvent
      dom.attachEvent("on" + type, fn);
    } else {
      dom["on" + type] = fn;
    }
  }

  var app = document.getElementById("app");
  addEvent(app, "click", function () {
    console.log("click 1");
  });

  addEvent(app, "click", function () {
    console.log("click 2");
  });

  addEvent(app, "click", function () {
    console.log("click 3");
  });
};
