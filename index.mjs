import arrayify from './node_modules/array-back/index.mjs'
import t from './node_modules/typical/index.mjs'

/**
 * Isomorphic, load-anywhere function to sort an array by scalar, deep or computed value in any standard or custom order.
 *
 * @module sort-array
 * @typicalname sortArray
 * @example
 * const sortArray = require('sort-array')
 */

/**
 * @param {Array} arr - Input array.
 * @param {object} [options] - Sort config.
 * @param {string[]} [options.by] - One or more properties to sort by.
 * @param {string[]} [options.order] - One or more sort orders.
 * @param {object} [options.customOrders] - An object containing one or more custom orders.
 * @param {object} [options.computed] - An object containing one or more computed field functions.
 * @alias module:sort-array
 */
function sortArray (arr, options = {}) {
  options = Object.assign(
    { order: 'asc', computed: {}, customOrders: {} },
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
    const isAsc = order[byIndex] === 'asc'
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

    if (customOrders && customOrders[order[byIndex]]) {
      result = customOrders[order[byIndex]].indexOf(x) - customOrders[order[byIndex]].indexOf(y)
    } else if (x === y) {
      result = 0
    } else if (t.isNull(x) && t.isUndefined(y)) {
      result = isAsc ? 1 : -1
    } else if (t.isUndefined(x) && t.isNull(y)) {
      result = isAsc ? -1 : 1
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
      if (!isAsc) {
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
