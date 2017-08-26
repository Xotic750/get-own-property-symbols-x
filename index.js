/**
 * @file Creates an array of all symbol properties found directly upon a given object.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module get-own-property-symbols-x
 */

'use strict';

var nativeGOPS;
var symbols;
var testSymbol;
if (require('has-symbol-support-x')) {
  nativeGOPS = Object.getOwnPropertySymbols;
  if (typeof nativeGOPS === 'function') {
    testSymbol = Symbol('');
    var testObj = { a: 1 };
    testObj[testSymbol] = 2;

    try {
      symbols = nativeGOPS(testObj);
    } catch (ignore) {}
  }
}

var $gops;
if (symbols && symbols.length === 1 && symbols[0] === testSymbol) {
  $gops = nativeGOPS;
} else {
  var toObject = require('to-object-x');
  $gops = function getOwnPropertySymbols(obj) {
    toObject(obj);
    return [];
  };
}

/**
 * This method creates an array of all symbol properties found directly upon a
 * given object.
 *
 * @param {object} obj - The object whose symbol properties are to be returned.
 * @throws {TypeError} If target is null or undefined.
 * @returns {array} An array of all symbol properties found directly upon the
 *  given object.
 * @example
 * var getOwnPropertySymbols = require('get-own-property-symbols-x');
 *
 * var testSymbol = Symbol('');
 * var testObj = { a: 1 };
 * testObj[testSymbol] = 2;
 * Object.getOwnPropertySymbols(testObj); // [testSymbol]
 */
module.exports = $gops;
