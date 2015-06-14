define([], function () {
  'use strict';

  /**
   * Returns an `Array` of `HTMLElement` matching the given CSS selector.
   *
   * @param {String} selector
   * @returns {Array}
   */
  return function (selector) {
    var nodeList = document.querySelectorAll(selector);
    var length = nodeList.length;
    var result = [];
    var i;

    for (i = 0; i < length; i++) {
      result.push(nodeList.item(0));
    }

    return result;
  };
});
