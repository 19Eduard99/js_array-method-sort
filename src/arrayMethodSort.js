'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareFunction(a, b) {
    const aStr = String(a);
    const bStr = String(b);

    if (aStr > bStr) {
      return 1;
    }

    if (aStr < bStr) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (customCompareFunction = compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (customCompareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
