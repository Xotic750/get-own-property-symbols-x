/**
 * @file Creates an array of all symbol properties found directly upon a given object.
 * @version 1.1.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module get-own-property-symbols-x
 */

const toObject = require('to-object-x');

const nativeGOPS = Object.getOwnPropertySymbols;
let isWorking;

if (require('has-symbol-support-x') && nativeGOPS && typeof nativeGOPS === 'function') {
  const symbol = Symbol('');
  const testObj = {a: 1};
  testObj[symbol] = 2;
  const r = require('attempt-x')(nativeGOPS, testObj);
  isWorking = r.threw === false && r.value && r.value.length === 1 && r.value[0] === symbol;
}

/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {Array} An array of all symbol properties found directly upon the
 *  given object.
 * @example
 * var getOwnPropertySymbols = require('get-own-property-isWorking-x');
 *
 * var symbol = Symbol('');
 * var testObj = { a: 1 };
 * testObj[symbol] = 2;
 * getOwnPropertySymbols(testObj); // [symbol]
 */
module.exports = function getOwnPropertySymbols(obj) {
  const object = toObject(obj);

  return isWorking ? nativeGOPS(object) : [];
};
