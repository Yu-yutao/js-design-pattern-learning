/**
 * 状态模式
 * 抽象大量if-else判断
 */

function showResult(result) {
  if (result === 0) {
    // do something
  } else if (result === 1) {
    // do somethind
  } else if (result === 2) {
    // do somethind
  }
}

var ResultState = (function () {
  var States = {
    state0: function () {
      // do somethind
    },
    state1: function () {
      // do somethind
    },
    state2: function () {},
  };
  function show(result) {
    States["state" + result] && States["state" + result]();
  }
  return {
    show,
  };
})();
