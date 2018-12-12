/**
 * Sort an array of objects or primitives, by any property value, in any combindation of ascending, descending, custom or calculated order.
 *
 * @module sort-array
 * @typicalname sortBy
 * @example
 * const sortBy = require('sort-array')
 */
module.exports = sortBy

/**
 * @param {Array} recordset - Input array of objects or primitive values.
 *
 * @param {Array.<(string|function)>} sortBy - One or more property expressions to sort by. Expressions
 * may be strings which refer to properties in the input array; they may be strings which refer to
 * properties in the optional `namedConfigs.namedComputedProps` parameter; or they may be inline
 * functions which dynamically calculate values for each property in the input array.
 *
 * @param {Array.<(string|Array.<*>)>} sortTypes - The sort types for each of the sortBy expressions.
 * Values may be 'asc', 'desc', an array of custom values, and strings which refer to properties in
 * the optional `namedConfigs.namedCustomOrders` parameter.
 *
 * @param {object} [namedConfigs] - Provides a means of reusing computed property functions and custom sort types.
 *
 * @param {object} [namedConfigs.namedComputedProps] - Key/value pairs, where the keys correspond to strings
 * given in the sortBy property list, and the values are functions which will dynamically calculated values
 * for each property in the input array.
 *
 * @param {object} [namedConfigs.namedCustomOrders] - Key/value pairs, where the keys correspond to strings
 * given in the sortTypes list, and the values are arrays of custom values which define the sort type.
 *
 * @returns {Array}
 *
 * @alias module:sort-array
 *
 * @example
 * with this data
 * ```js
 * > DJs = [
 *   { name: 'Trevor', slot: 'twilight' },
 *   { name: 'Chris', slot: 'twilight' },
 *   { name: 'Mike', slot: 'afternoon' },
 *   { name: 'Rodney', slot: 'morning' },
 *   { name: 'Chris', slot: 'morning' },
 *   { name: 'Zane', slot: 'evening' }
 * ]
 * ```
 *
 * sort by `slot` using an ascending sort type
 * ```js
 * > sortBy(DJs, [ 'slot' ], [ 'asc' ])
 * [ { name: 'Mike', slot: 'afternoon' },
 *   { name: 'Zane', slot: 'evening' },
 *   { name: 'Chris', slot: 'morning' },
 *   { name: 'Rodney', slot: 'morning' },
 *   { name: 'Chris', slot: 'twilight' },
 *   { name: 'Trevor', slot: 'twilight' } ]
 * ```
 *
 * sort by `slot` using a descending sort type
 * ```js
 * > sortBy(DJs, [ 'slot' ], [ 'desc' ])
 * [ { name: 'Chris', slot: 'twilight' },
 *   { name: 'Trevor', slot: 'twilight' },
 *   { name: 'Chris', slot: 'morning' },
 *   { name: 'Rodney', slot: 'morning' },
 *   { name: 'Zane', slot: 'evening' },
 *   { name: 'Mike', slot: 'afternoon' }]
 * ```
 *
 * sort by `slot` using an 'inline' custom sort type
 * ```js
 * > sortBy(DJs, [ 'slot' ], [ 'morning', 'afternoon', 'evening', 'twilight' ])
 * [ { name: 'Rodney', slot: 'morning' },
 *   { name: 'Chris', slot: 'morning' },
 *   { name: 'Mike', slot: 'afternoon' },
 *   { name: 'Zane', slot: 'evening' },
 *   { name: 'Trevor', slot: 'twilight' },
 *   { name: 'Chris', slot: 'twilight' } ]
 * ```
 *
 * sort by `slot` using an 'named' custom sort type
 * ```js
 * > let namedConfigs = {
 *     namedCustomOrders: {
 *       custOrder1: [ 'morning', 'afternoon', 'evening', 'twilight' ]
 *     }
 *   }
 * > sortBy(DJs, [ 'slot' ], [ 'custOrder1' ], namedConfigs)
 * [ { name: 'Rodney', slot: 'morning' },
 *   { name: 'Chris', slot: 'morning' },
 *   { name: 'Mike', slot: 'afternoon' },
 *   { name: 'Zane', slot: 'evening' },
 *   { name: 'Trevor', slot: 'twilight' },
 *   { name: 'Chris', slot: 'twilight' } ]
 * ```
 *
 * sort by `slot` (with a custom sort type) then `name` (with an ascending sort type)
 * ```js
 * > sortBy(DJs, ['slot', 'name'], [ [ 'morning', 'afternoon', 'evening', 'twilight' ], 'asc' ])
 * [ { name: 'Chris', slot: 'morning' },
 *   { name: 'Rodney', slot: 'morning' },
 *   { name: 'Mike', slot: 'afternoon' },
 *   { name: 'Zane', slot: 'evening' },
 *   { name: 'Chris', slot: 'twilight' },
 *   { name: 'Trevor', slot: 'twilight' } ]
 * ```
 */
function sortBy (recordset, sortBy, sortTypes, namedConfigs) {
  // First stage data preparation
  recordset = arrayify(recordset)
  sortBy = arrayify(sortBy)
  sortTypes = arrayify(sortTypes)

  let namedComputedProps = {}
  let namedCustomOrders = {}
  if (isObject(namedConfigs)) {
    if (isDefined(namedConfigs['namedComputedProps'])) {
      namedComputedProps = namedConfigs['namedComputedProps']
    }
    if (isDefined(namedConfigs['namedCustomOrders'])) {
      namedCustomOrders = namedConfigs['namedCustomOrders']
    }
  }

  // Perform sanity checks.
  let isPrimitiveSort = recordset.some(record => isPrimitive(record))
  if (isPrimitiveSort) {
    // The only applicable 'sortBy' arguments on a primitive array
    // are 'computed property' functions.
    for (let i = 0; i < sortBy.length; i++) {
      if (!isFunction(sortBy[i])) {
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

  // Ensure that if namedComputedProps is provided, that the object keys
  // are referenced in the sortBy array
  let noOfNamedComputedProps = Object.keys(namedComputedProps).length
  if (noOfNamedComputedProps > 0) {
    for (let i = 0; i < noOfNamedComputedProps; i++) {
      if (sortBy.indexOf(Object.keys(namedComputedProps)[i]) < 0) {
        // Missing object key, return the recordset unchanged
        return recordset
      }
    }
  }

  // Ensure that if namedCustomOrders is provided, that the object keys
  // are referenced in the sortTypes array
  let noOfNamedCustomOrders = Object.keys(namedCustomOrders).length
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
    sortTypes.push('asc')
  } else if (sortBy.length > sortTypes.length) {
    // Not enough sortTypes have been provided. Fully hydrate the sortTypes
    // array, using 'asc' by default.
    let noOfMissingSortTypes = sortBy.length - sortTypes.length
    for (let i = 0; i < noOfMissingSortTypes; i++) {
      sortTypes.push('asc')
    }
  } else if (!isPrimitiveSort && (sortBy.length < sortTypes.length)) {
    // Too many sortTypes have been provided. Prune the redundant ones
    // at the end of the sortType array.
    sortTypes.splice(-1, sortTypes.length - sortBy.length)
  }

  if (isPrimitiveSort) {
    return recordset.sort(comparePrim(sortBy, sortTypes))
  } else {
    return recordset.sort(compare(sortBy, sortTypes, namedComputedProps, namedCustomOrders))
  }
}

function comparePrim (sortBy, sortTypes) {
  // The property should be undefined or a function
  let sorts = sortBy.slice(0)
  let property = sorts.shift()

  // The sort should be 'asc', 'desc', or a custom array
  let sort
  if (sortTypes.length > 1) {
    sort = sortTypes.slice(0)
  } else {
    let types = sortTypes.slice(0)
    sort = types.shift()
  }

  return function sorter (a, b) {
    let x
    let y
    let result

    // Allocate the comparees.
    if (isFunction(property)) {
      x = property(a)
      y = property(b)
    } else {
      x = a
      y = b
    }

    // Perform the sort
    if (isArrayLike(sort)) {
      // Apply custom ordering
      result = sort.indexOf(x) - sort.indexOf(y)
    } else {
      // Perform an asc sort by default, then invert later if a desc has been
      // requested for the current property.
      result = getAscOrder(x, y)
    }

    // Present the result
    if (sort === 'desc') {
      return result * -1
    } else {
      return result
    }
  }
}

function compare (sortBy, sortTypes, namedComputedProps, namedCustomOrders) {
  // Identify the first property on which to sort, and the way it should be sorted.

  // The property may be either a string property name, an anonymous function, or
  // a string key into the namedComputedProps object.
  let sorts = sortBy.slice(0)
  let property = sorts.shift()

  // The sort can be 'asc', 'desc', a custom array or a string key into the
  // namedCustomOrders object.
  let types = sortTypes.slice(0)
  let sort = types.shift()

  return function sorter (a, b) {
    let x
    let y
    let result
    let recurse
    let currentSort = sort

    // Allocate the comparees.
    if (isFunction(property)) {
      x = property(a)
      y = property(b)
    } else if (isDefined(namedComputedProps[property])) {
      x = namedComputedProps[property](a)
      y = namedComputedProps[property](b)
    } else {
      x = a[property]
      y = b[property]
    }

    // Perform the sort
    if (isArrayLike(sort)) {
      // Apply custom ordering
      result = sort.indexOf(x) - sort.indexOf(y)
    } else if (isDefined(namedCustomOrders[sort])) {
      // Apply custom ordering
      result = namedCustomOrders[sort].indexOf(x) - namedCustomOrders[sort].indexOf(y)
    } else {
      // Perform an asc sort by default, then invert later if a desc has been
      // requested for the current property.
      result = getAscOrder(x, y)
    }

    // Reset this sorting function and parent, unless there is an equal
    // result and there are more sorts still to perform, in which case
    // move on to the next one.
    if (result === 0 && sorts.length) {
      recurse = true
    } else {
      recurse = false
      sorts = sortBy.slice(0)
      types = sortTypes.slice(0)
    }
    property = sorts.shift()
    sort = types.shift()

    // Present the result
    if (recurse) {
      return sorter(a, b)
    } else if (currentSort === 'desc') {
      return result * -1
    } else {
      return result
    }
  }
}

function getAscOrder (x, y) {
  let result
  if (x === null && y === null) {
    result = 0
  } else if (!isDefined(x) && !isDefined(y)) {
    result = 0
  } else if ((!isDefined(x) || x === null) && isDefined(y)) {
    result = 1
  } else if (isDefined(x) && (!isDefined(y) || y === null)) {
    result = -1
  } else {
    result = x < y ? -1 : x > y ? 1 : 0
  }
  return result
}

function isObject (input) {
  return typeof input === 'object' && input !== null
}

function isArrayLike (input) {
  return isObject(input) && typeof input.length === 'number'
}

function isDefined (input) {
  return typeof input !== 'undefined'
}

function isFunction (input) {
  return typeof input === 'function'
}

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

function arrayify (input) {
  if (Array.isArray(input)) {
    return input
  } else {
    if (input === undefined) {
      return []
    } else if (isArrayLike(input)) {
      return Array.prototype.slice.call(input)
    } else {
      return [ input ]
    }
  }
}
