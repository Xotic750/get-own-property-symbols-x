import toObject from 'to-object-x';
import hasSymbolSupport from 'has-symbol-support-x';
import attempt from 'attempt-x';
var nativeGOPS = {}.constructor.getOwnPropertySymbols;
var isWorking;

if (hasSymbolSupport && nativeGOPS && typeof nativeGOPS === 'function') {
  /* eslint-disable-next-line compat/compat */
  var symbol = Symbol('');
  var testObj = {
    a: 1
  };
  testObj[symbol] = 2;
  var r = attempt(nativeGOPS, testObj);
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
 */


export default function getOwnPropertySymbols(obj) {
  var object = toObject(obj);
  return isWorking ? nativeGOPS(object) : [];
}

//# sourceMappingURL=get-own-property-symbols-x.esm.js.map