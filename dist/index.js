(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.sortArray = factory());
}(this, function () { 'use strict';

  /**
   * Takes any input and guarantees an array back.
   *
   * - Converts array-like objects (e.g. `arguments`, `Set`) to a real array.
   * - Converts `undefined` to an empty array.
   * - Converts any another other, singular value (including `null`, objects and iterables other than `Set`) into an array containing that value.
   * - Ignores input which is already an array.
   *
   * @module array-back
   * @example
   * > const arrayify = require('array-back')
   *
   * > arrayify(undefined)
   * []
   *
   * > arrayify(null)
   * [ null ]
   *
   * > arrayify(0)
   * [ 0 ]
   *
   * > arrayify([ 1, 2 ])
   * [ 1, 2 ]
   *
   * > arrayify(new Set([ 1, 2 ]))
   * [ 1, 2 ]
   *
   * > function f(){ return arrayify(arguments); }
   * > f(1,2,3)
   * [ 1, 2, 3 ]
   */

  function isObject (input) {
    return typeof input === 'object' && input !== null
  }

  function isArrayLike (input) {
    return isObject(input) && typeof input.length === 'number'
  }

  /**
   * @param {*} - The input value to convert to an array
   * @returns {Array}
   * @alias module:array-back
   */
  function arrayify (input) {
    if (Array.isArray(input)) {
      return input
    }

    if (input === undefined) {
      return []
    }

    if (isArrayLike(input) || input instanceof Set) {
      return Array.from(input)
    }

    return [ input ]
  }

  /**
   * Functional, isomorphic, load-anywhere type checking for Javascript.
   * @module typical
   * @typicalname t
   * @example
   * const t = require('typical')
   */

  /**
   * Returns true if input is a number
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isNumber(0)
   * true
   * > t.isNumber(1)
   * true
   * > t.isNumber(1.1)
   * true
   * > t.isNumber(0xff)
   * true
   * > t.isNumber(0644)
   * true
   * > t.isNumber(6.2e5)
   * true
   * > t.isNumber(NaN)
   * false
   * > t.isNumber(Infinity)
   * false
   */
  function isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }

  /**
   * A plain object is a simple object literal, it is not an instance of a class. Returns true if the input `typeof` is `object` and directly decends from `Object`.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isPlainObject({ something: 'one' })
   * true
   * > t.isPlainObject(new Date())
   * false
   * > t.isPlainObject([ 0, 1 ])
   * false
   * > t.isPlainObject(/test/)
   * false
   * > t.isPlainObject(1)
   * false
   * > t.isPlainObject('one')
   * false
   * > t.isPlainObject(null)
   * false
   * > t.isPlainObject((function * () {})())
   * false
   * > t.isPlainObject(function * () {})
   * false
   */
  function isPlainObject (input) {
    return input !== null && typeof input === 'object' && input.constructor === Object
  }

  /**
   * An array-like value has all the properties of an array, but is not an array instance. Examples in the `arguments` object. Returns true if the input value is an object, not null and has a `length` property with a numeric value.
   *
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * function sum(x, y){
   *   console.log(t.isArrayLike(arguments))
   *   // prints `true`
   * }
   */
  function isArrayLike$1 (input) {
    return isObject$1(input) && typeof input.length === 'number'
  }

  /**
   * Returns true if the typeof input is `'object'` but not null.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isObject$1 (input) {
    return typeof input === 'object' && input !== null
  }

  /**
   * Returns true if the input value is defined.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isDefined (input) {
    return typeof input !== 'undefined'
  }

  /**
   * Returns true if the input value is an ES2015 `class`.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isClass (input) {
    if (typeof input === 'function') {
      return /^class /.test(Function.prototype.toString.call(input))
    } else {
      return false
    }
  }

  /**
   * Returns true if the input is a string, number, symbol, boolean, null or undefined value.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isPrimitive (input) {
    if (input === null) return true
    switch (typeof input) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'undefined':
      case 'boolean':
        return true
      default:
        return false
    }
  }

  /**
   * Returns true if the input is a Promise.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isPromise (input) {
    if (input) {
      const isPromise = isDefined(Promise) && input instanceof Promise;
      const isThenable = input.then && typeof input.then === 'function';
      return !!(isPromise || isThenable)
    } else {
      return false
    }
  }

  /**
   * Returns true if the input is an iterable (`Map`, `Set`, `Array`, Generator etc.).
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   * @example
   * > t.isIterable('string')
   * true
   * > t.isIterable(new Map())
   * true
   * > t.isIterable([])
   * true
   * > t.isIterable((function * () {})())
   * true
   * > t.isIterable(Promise.resolve())
   * false
   * > t.isIterable(Promise)
   * false
   * > t.isIterable(true)
   * false
   * > t.isIterable({})
   * false
   * > t.isIterable(0)
   * false
   * > t.isIterable(1.1)
   * false
   * > t.isIterable(NaN)
   * false
   * > t.isIterable(Infinity)
   * false
   * > t.isIterable(function () {})
   * false
   * > t.isIterable(Date)
   * false
   * > t.isIterable()
   * false
   * > t.isIterable({ then: function () {} })
   * false
   */
  function isIterable (input) {
    if (input === null || !isDefined(input)) {
      return false
    } else {
      return (
        typeof input[Symbol.iterator] === 'function' ||
        typeof input[Symbol.asyncIterator] === 'function'
      )
    }
  }

  /**
   * Returns true if the input value is a string. The equivalent of `typeof input === 'string'` for use in funcitonal contexts.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isString (input) {
    return typeof input === 'string'
  }

  /**
   * Returns true if the input value is a function. The equivalent of `typeof input === 'function'` for use in funcitonal contexts.
   * @param {*} - the input to test
   * @returns {boolean}
   * @static
   */
  function isFunction (input) {
    return typeof input === 'function'
  }

  var t = {
    isNumber,
    isPlainObject,
    isArrayLike: isArrayLike$1,
    isObject: isObject$1,
    isDefined,
    isClass,
    isPrimitive,
    isPromise,
    isIterable,
    isString,
    isFunction
  };

  /**
   * Sort an array of objects or primitives, by any property value, in any combindation of ascending, descending, custom or calculated order.
   *
   * @module sort-array
   * @typicalname sortArray
   * @example
   * const sortArray = require('sort-array')
   */

  /**
   * @param {Array} recordset - Input array of objects or primitive values.
   * @param {Array.<(string|function)>} sortBy - One or more property expressions to sort by. Expressions may be strings which refer to properties in the input array; they may be strings which refer to properties in the optional `options.computed` parameter; or they may be inline functions which dynamically calculate values for each property in the input array.
   * @param {Array.<(string|Array.<*>)>} sortTypes - The sort types for each of the sortBy expressions. Values may be 'asc', 'desc', an array of custom values, and strings which refer to properties in the optional `options.customOrder` parameter.
   * @params {object} [options] - Options
   * @param {object} [options] - Provides a means of reusing computed property functions and custom sort types.
   * @param {object} [options.computed] - Key/value pairs, where the keys correspond to strings given in the sortBy property list, and the values are functions which will dynamically calculated values for each property in the input array.
   * @param {object} [options.customOrder] - Key/value pairs, where the keys correspond to strings given in the sortTypes list, and the values are arrays of custom values which define the sort type.
   * @returns {Array}
   *
   * @alias module:sort-array
   */
  function sortArray (recordset, sortBy, sortTypes, namedConfigs) {
    // First stage data preparation
    recordset = arrayify(recordset);
    sortBy = arrayify(sortBy);
    sortTypes = arrayify(sortTypes);

    let namedComputedProps = {};
    let namedCustomOrders = {};
    if (t.isObject(namedConfigs)) {
      if (t.isDefined(namedConfigs.namedComputedProps)) {
        namedComputedProps = namedConfigs.namedComputedProps;
      }
      if (t.isDefined(namedConfigs.namedCustomOrders)) {
        namedCustomOrders = namedConfigs.namedCustomOrders;
      }
    }

    // Perform sanity checks.
    const isPrimitiveSort = recordset.some(record => t.isPrimitive(record));
    if (isPrimitiveSort) {
      // The only applicable 'sortBy' arguments on a primitive array
      // are 'computed property' functions.
      for (let i = 0; i < sortBy.length; i++) {
        if (!t.isFunction(sortBy[i])) {
          return recordset
        }
      }
    } else {
      // At least one 'sortBy' argument must be provided, so that the recordset
      // can be sorted according to that property.
      if (sortBy.length === 0) {
        return recordset
      }
    }

    // Ensure that if namedCustomOrders is provided, that the object keys
    // are referenced in the sortTypes array
    const noOfNamedCustomOrders = Object.keys(namedCustomOrders).length;
    if (noOfNamedCustomOrders > 0) {
      for (let i = 0; i < noOfNamedCustomOrders; i++) {
        if (sortTypes.indexOf(Object.keys(namedCustomOrders)[i]) < 0) {
          // Missing object key, return the recordset unchanged
          return recordset
        }
      }
    }

    // Second stage data preparation. Ensure that each property in sortBy
    // has a corresponding property in sortTypes. Populate missing and
    // remove excess, as required.
    if ((sortBy.length === 0) && (sortTypes.length === 0)) {
      sortTypes.push('asc');
    } else if (sortBy.length > sortTypes.length) {
      // Not enough sortTypes have been provided. Fully hydrate the sortTypes
      // array, using 'asc' by default.
      const noOfMissingSortTypes = sortBy.length - sortTypes.length;
      for (let i = 0; i < noOfMissingSortTypes; i++) {
        sortTypes.push('asc');
      }
    } else if (!isPrimitiveSort && (sortBy.length < sortTypes.length)) {
      // Too many sortTypes have been provided. Prune the redundant ones
      // at the end of the sortType array.
      sortTypes.splice(-1, sortTypes.length - sortBy.length);
    }

    if (isPrimitiveSort) {
      return recordset.sort(comparePrim(sortBy, sortTypes))
    } else {
      return recordset.sort(compare(sortBy, sortTypes, namedComputedProps, namedCustomOrders))
    }
  }

  function comparePrim (sortBy, sortTypes) {
    // The property should be undefined or a function
    const sorts = sortBy.slice(0);
    const property = sorts.shift();

    // The sort should be 'asc', 'desc', or a custom array
    let sort;
    if (sortTypes.length > 1) {
      sort = sortTypes.slice(0);
    } else {
      const types = sortTypes.slice(0);
      sort = types.shift();
    }

    return function sorter (a, b) {
      let x;
      let y;
      let result;

      // Allocate the comparees.
      if (t.isFunction(property)) {
        x = property(a);
        y = property(b);
      } else {
        x = a;
        y = b;
      }

      // Perform the sort
      if (t.isArrayLike(sort)) {
        // Apply custom ordering
        result = sort.indexOf(x) - sort.indexOf(y);
      } else {
        // Perform an asc sort by default, then invert later if a desc has been
        // requested for the current property.
        result = getOrder(x, y, sort === 'asc');
      }

      // Present the result
      return result
    }
  }

  function compare (sortBy, sortTypes, namedComputedProps, namedCustomOrders) {
    // Identify the first property on which to sort, and the way it should be sorted.

    // The property may be either a string property name, an anonymous function, or
    // a string key into the namedComputedProps object.
    let sorts = sortBy.slice(0);
    let property = sorts.shift();

    // The sort can be 'asc', 'desc', a custom array or a string key into the
    // namedCustomOrders object.
    let types = sortTypes.slice(0);
    let sort = types.shift();

    return function sorter (a, b) {
      let x;
      let y;
      let result;
      let recurse;
      const currentSort = sort;

      // Allocate the comparees.
      if (t.isFunction(property)) {
        x = property(a);
        y = property(b);
      } else if (t.isDefined(namedComputedProps[property])) {
        x = namedComputedProps[property](a);
        y = namedComputedProps[property](b);
      } else {
        x = a[property];
        y = b[property];
      }

      // Perform the sort
      if (t.isArrayLike(sort)) {
        // Apply custom ordering
        result = sort.indexOf(x) - sort.indexOf(y);
      } else if (t.isDefined(namedCustomOrders[sort])) {
        // Apply custom ordering
        result = namedCustomOrders[sort].indexOf(x) - namedCustomOrders[sort].indexOf(y);
      } else {
        // Perform an asc sort by default, then invert later if a desc has been
        // requested for the current property.
        result = getOrder(x, y, currentSort === 'asc');
      }

      // Reset this sorting function and parent, unless there is an equal
      // result and there are more sorts still to perform, in which case
      // move on to the next one.
      if (result === 0 && sorts.length) {
        recurse = true;
      } else {
        recurse = false;
        sorts = sortBy.slice(0);
        types = sortTypes.slice(0);
      }
      property = sorts.shift();
      sort = types.shift();

      // Present the result
      if (recurse) {
        return sorter(a, b)
      } else {
        return result
      }
    }
  }

  function getOrder (x, y, asc) {
    let result;
    if (x === y) {
      result = 0;
    } else if (isNull(x) && isUndefined(y)) {
      result = asc ? 1 : -1;
    } else if (isUndefined(x) && isNull(y)) {
      result = asc ? -1 : 1;
    } else if (isNull(x) && isDefinedValue(y)) {
      result = 1;
    } else if (isUndefined(x) && isDefinedValue(y)) {
      result = 1;
    } else if (isNull(y) && isDefinedValue(x)) {
      result = -1;
    } else if (isUndefined(y) && isDefinedValue(x)) {
      result = -1;
    } else {
      result = x < y ? -1 : x > y ? 1 : 0;
      if (!asc) {
        result = result * -1;
      }
    }
    return result
  }

  function isNull (input) {
    return input === null
  }

  function isDefinedValue (input) {
    return t.isDefined(input) && !isNull(input)
  }

  function isUndefined (input) {
    return !t.isDefined(input)
  }

  return sortArray;

}));
