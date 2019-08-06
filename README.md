<a
  href="https://travis-ci.org/Xotic750/get-own-property-symbols-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/get-own-property-symbols-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/get-own-property-symbols-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/get-own-property-symbols-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/get-own-property-symbols-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/get-own-property-symbols-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/get-own-property-symbols-x"
  title="npm version">
<img src="https://badge.fury.io/js/get-own-property-symbols-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/get-own-property-symbols-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/get-own-property-symbols-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/get-own-property-symbols-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/get-own-property-symbols-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/get-own-property-symbols-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/get-own-property-symbols-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_get-own-property-symbols-x"></a>

## get-own-property-symbols-x

Creates an array of all symbol properties found directly upon a given object.

<a name="exp_module_get-own-property-symbols-x--module.exports"></a>

### `module.exports(obj)` ⇒ <code>array</code> ⏏

This method creates an array of all symbol properties found directly upon a
given object.

**Kind**: Exported function  
**Returns**: <code>array</code> - An array of all symbol properties found directly upon the
given object.  
**Throws**:

- <code>TypeError</code> If target is null or undefined.

| Param | Type                | Description                                            |
| ----- | ------------------- | ------------------------------------------------------ |
| obj   | <code>object</code> | The object whose symbol properties are to be returned. |

**Example**

```js
import getOwnPropertySymbols from 'get-own-property-isWorking-x';

const symbol = Symbol('');
const testObj = {a: 1};
testObj[symbol] = 2;
console.log(getOwnPropertySymbols(testObj)); // [symbol]
```
