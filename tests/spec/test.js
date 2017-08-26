'use strict';

var getOwnPropertySymbols;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  getOwnPropertySymbols = require('../../index.js');
} else {
  getOwnPropertySymbols = returnExports;
}

var hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
var ifHasSymbolIt = hasSymbol ? it : xit;

describe('getOwnPropertySymbols', function () {
  it('is a function', function () {
    expect(typeof getOwnPropertySymbols).toBe('function');
  });

  it('should throw when target is null or undefined', function () {
    expect(function () {
      getOwnPropertySymbols();
    }).toThrow();

    expect(function () {
      getOwnPropertySymbols(void 0);
    }).toThrow();

    expect(function () {
      getOwnPropertySymbols(null);
    }).toThrow();
  });

  it('should return an empty array for each value type', function () {
    var values = [
      1,
      true,
      'abc',
      [],
      {},
      function () {},
      /abc/,
      new Date()
    ];

    var expected = values.map(function () {
      return [];
    });

    var actual = values.map(getOwnPropertySymbols);

    expect(actual).toEqual(expected);
  });

  ifHasSymbolIt('should return an array containing the test symbol', function () {
    var testSymbol = Symbol('');
    var testObj = { a: 1 };
    testObj[testSymbol] = 2;

    expect(getOwnPropertySymbols(testObj)).toEqual([testSymbol]);
  });
});
