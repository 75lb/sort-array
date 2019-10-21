const sortArray = require('../')

/* Input data */
const DJs = [
  { name: 'Trevor', slot: 'twilight', popularity: 4, review: 3 },
  { name: 'Chris', slot: 'twilight', popularity: 2, review: 5 },
  { name: 'Yash', slot: 'twilight', popularity: 9, review: 4 },
  { name: 'Mike', slot: 'afternoon', popularity: 6, review: 3 },
  { name: 'Raj', slot: 'afternoon', popularity: 6, review: 3 },
  { name: 'Rodney', slot: 'morning', popularity: 3, review: 2 },
  { name: 'Chris', slot: 'morning', popularity: 10, review: 5 },
  { name: 'Zane', slot: 'evening', popularity: 0, review: 2 }
]

/* default asending sort */
console.log(sortArray(DJs, 'slot'))

/* simple descending sort */
console.log(sortArray(DJs, 'popularity', 'desc'))

//TODO
/* inline custom order - ban this */
console.log(sortArray(DJs, 'slot', [['morning', 'afternoon', 'evening', 'twilight']]))

/* named custom order - only this*/
console.log(sortArray(DJs, 'slot', 'slotOrder', {
  namedCustomOrders: {
    slotOrder: ['morning', 'afternoon', 'evening', 'twilight']
  }
}))

//TODO
/* validation: ensure sort order value (asc, desc, or custom) is correct and, if custom, exists in options? */

//TODO
/* multiple sort columns, inline custom order - BAN, too confusing */
console.log(sortArray(DJs, ['slot', 'name'], [['morning', 'afternoon', 'evening', 'twilight'], 'asc']))

//TODO
/* sort by computed - BUG, null behaves like 'desc', should throw validation error */
console.log(sortArray(DJs, 'one', null, {
  namedComputedProps: {
    one: i => i.popularity * i.review
  }
}))

/* sort by computed */
console.log(sortArray(DJs, 'one', 'desc', {
  namedComputedProps: {
    one: i => i.popularity * i.review
  }
}))

const nums = [1,4,3,10,-1]

/* default asc */
console.log(sortArray(nums.slice()))

/* default desc */
console.log(sortArray(nums.slice(), undefined, 'desc'))

//TODO
/* default desc - BUG, null causes sort to have no effect  */
console.log(sortArray(nums.slice(), null, 'desc'))

//TODO
/* default sort with custom order */
/* is it worth having more than one custom order with primatives?  */
console.log(sortArray(nums.slice(), undefined, 'one', {
  namedCustomOrders: {
    one: [4, 1, -1, 10, 1]
  }
}))

console.log(sortArray(nums.slice(), 'one', undefined, {
  namedComputedProps: {
    one: i => i === 4 ? Infinity : i
  }
}))
