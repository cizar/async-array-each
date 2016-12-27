;(function (name, global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory() : typeof define === 'function' && define.amd
      ? define(factory) : global[name] = factory();
}('asyncEach', this, function () {
  'use strict';
  return function asyncEach (array, iterator, done) {
    var index = 0;
    function loop () {
      if (index < array.length) {
        iterator(array[index++], loop);
      } else {
        done && done();
      }
    }
    loop();
  };
}));
