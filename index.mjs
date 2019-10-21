import arrayify from './node_modules/array-back/index.mjs'
import t from './node_modules/typical/index.mjs'

/**
 * Isomorphic, load-anywhere function to sort an array by scalar, deep or computed values in any standard or custom order.
 *
 * @module sort-array
 * @typicalname sortArray
 * @example
 * const sortArray = require('sort-array')
 */

/**
 * @param {Array} arr - Input array.
 * @param {object} [options] - Sort config.
 * @param {string[]} [options.by] - One or more property names or computed fields to sort by. Specifying property names is only relevant when sorting an array of objects.
 * @param {string[]} [options.order] - One or more sort orders. Specify `asc`, `desc` or the property name of `options.customOrders`.
 * @param {object} [options.customOrders] - An object containing one or more custom orders.
 * @param {object} [options.computed] - An object containing one or more computed field functions.
 * @alias module:sort-array
 */
function sortArray (arr, options = {}) {
  options = Object.assign(
    { computed: {}, customOrders: {} },
    options
  )
  arr.sort(getCompareFunc(options))
  return arr
}

function getCompareFunc (options = {}) {
  const by = arrayify(options.by)
  const order = arrayify(options.order)
  const { customOrders, computed } = options
  return function compareFunc (xIn, yIn, byIndex = 0) {
    const currOrder = order[byIndex] || 'asc'
    if (!(currOrder === 'asc' || currOrder === 'desc' || customOrders[currOrder] )) {
      return 0
    }

    let result, x, y
    if (by.length) {
      x = t.isDefined(xIn[by[byIndex]])
        ? xIn[by[byIndex]]
        : computed[by[byIndex]] && computed[by[byIndex]](xIn)
      y = t.isDefined(yIn[by[byIndex]])
        ? yIn[by[byIndex]]
        : computed[by[byIndex]] && computed[by[byIndex]](yIn)
    } else {
      x = xIn
      y = yIn
    }

    if (customOrders && customOrders[currOrder]) {
      result = customOrders[currOrder].indexOf(x) - customOrders[currOrder].indexOf(y)
    } else if (x === y) {
      result = 0
    } else if (t.isNull(x) && t.isUndefined(y)) {
      result = currOrder === 'asc'
        ? 1
        : currOrder === 'desc'
          ? -1
          : 0
    } else if (t.isUndefined(x) && t.isNull(y)) {
      result = currOrder === 'asc'
        ? -1
        : currOrder === 'desc'
          ? 1
          : 0
    } else if (t.isNull(x) && t.isDefinedValue(y)) {
      result = 1
    } else if (t.isUndefined(x) && t.isDefinedValue(y)) {
      result = 1
    } else if (t.isNull(y) && t.isDefinedValue(x)) {
      result = -1
    } else if (t.isUndefined(y) && t.isDefinedValue(x)) {
      result = -1
    } else {
      result = x < y ? -1 : x > y ? 1 : 0
      if (currOrder === 'desc') {
        result = result * -1
      }
    }
    if (result === 0 && by[byIndex + 1]) {
      result = compareFunc(xIn, yIn, byIndex + 1)
    }
    return result
  }
}

export default sortArray
