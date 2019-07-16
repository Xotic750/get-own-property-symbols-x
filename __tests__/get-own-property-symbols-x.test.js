import noop from 'lodash/noop';
import getOwnPropertySymbols from '../src/get-own-property-symbols-x';

const hasSymbol = typeof Symbol === 'function' && typeof Symbol('') === 'symbol';
const ifHasSymbolIt = hasSymbol ? it : xit;

describe('getOwnPropertySymbols', function() {
  it('is a function', function() {
    expect.assertions(1);
    expect(typeof getOwnPropertySymbols).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect.assertions(3);
    expect(function() {
      getOwnPropertySymbols();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      getOwnPropertySymbols(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      getOwnPropertySymbols(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return an empty array for each value type', function() {
    expect.assertions(1);
    const values = [1, true, 'abc', [], {}, noop, /abc/, new Date()];

    const expected = values.map(function() {
      return [];
    });

    const actual = values.map(getOwnPropertySymbols);

    expect(actual).toStrictEqual(expected);
  });

  ifHasSymbolIt('should return an array containing the test symbol', function() {
    expect.assertions(1);

    const testSymbol = Symbol('');
    const testObj = {a: 1};
    testObj[testSymbol] = 2;

    expect(getOwnPropertySymbols(testObj)).toStrictEqual([testSymbol]);
  });
});
