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

const nums = [1, 4, 3, 10, -1]


/* default asending sort */
console.log(sortArray(DJs.slice(), {
  by: 'slot'
}))

console.log(sortArray(nums.slice()))

/* simple descending sort */
console.log(sortArray(DJs.slice(), {
  by: 'popularity',
  order: 'desc'
}))

console.log(sortArray(nums.slice(), {
  order: 'desc'
}))

/* simple descending sort, multiple field */
console.log(sortArray(DJs.slice(), {
  by: ['slot', 'popularity'],
  order: 'desc'
}))

/* simple descending sort, multiple field, multiple order */
console.log(sortArray(DJs.slice(), {
  by: ['slot', 'popularity'],
  order: ['desc', 'asc']
}))

/* custom order */
console.log(sortArray(DJs.slice(), {
  by: 'slot',
  order: 'slotOrder',
  customOrders: {
    slotOrder: ['morning', 'afternoon', 'evening', 'twilight']
  }
}))

/* multiple custom orders */
console.log(sortArray(DJs.slice(), {
  by: ['slot', 'popularity'],
  order: ['slotOrder', 'popularityOrder'],
  customOrders: {
    slotOrder: ['morning', 'afternoon', 'evening', 'twilight'],
    popularityOrder: [9, 10, 1, 2, 3, 4, 5, 6, 7, 8]
  }
}))

console.log(sortArray(nums.slice(), {
  order: 'special',
  customOrders: {
    special: [9, 10, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8]
  }
}))

/* sort by computed */
console.log(sortArray(DJs.slice(), {
  by: 'engagement',
  order: 'desc',
  computed: {
    engagement: i => i.popularity * i.review
  }
}))

console.log(sortArray(nums.slice(), {
  by: 'weighted',
  order: 'desc',
  computed: {
    weighted: i => i === 4 ? Infinity : i
  }
}))

// /* custom order validation - throws if strict and custom order not present */
// console.log(sortArray(DJs.slice(), {
//   by: 'slot',
//   order: 'slotOrder',
//   strict: true
// }))
