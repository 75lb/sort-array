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

/* inline custom order */
console.log(sortArray(DJs, 'slot', [['morning', 'afternoon', 'evening', 'twilight']]))

/* named custom order */
let options = {
  namedCustomOrders: {
    slotOrder: ['morning', 'afternoon', 'evening', 'twilight']
  }
}
console.log(sortArray(DJs, 'slot', 'slotOrder', options))

/* multiple sort columns, inline custom order */
console.log(sortArray(DJs, ['slot', 'name'], [['morning', 'afternoon', 'evening', 'twilight'], 'asc']))
