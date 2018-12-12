[![view on npm](http://img.shields.io/npm/v/sort-array.svg)](https://www.npmjs.org/package/sort-array)
[![npm module downloads](http://img.shields.io/npm/dt/sort-array.svg)](https://www.npmjs.org/package/sort-array)
[![Build Status](https://travis-ci.org/75lb/sort-array.svg?branch=master)](https://travis-ci.org/75lb/sort-array)
[![Dependency Status](https://david-dm.org/75lb/sort-array.svg)](https://david-dm.org/75lb/sort-array)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

<a name="module_sort-array"></a>

## sort-array
Sort an array of objects or primitives, by any property value, in any combindation of ascending, descending, custom or calculated order.

**Example**  
```js
const sortBy = require('sort-array')
```
<a name="exp_module_sort-array--sortBy"></a>

### sortBy(recordset, sortBy, sortTypes, [namedConfigs]) ⇒ <code>Array</code> ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| recordset | <code>Array</code> | Input array of objects or primitive values. |
| sortBy | <code>Array.&lt;(string\|function())&gt;</code> | One or more property expressions to sort by. Expressions may be strings which refer to properties in the input array; they may be strings which refer to properties in the optional `namedConfigs.namedComputedProps` parameter; or they may be inline functions which dynamically calculate values for each property in the input array. |
| sortTypes | <code>Array.&lt;(string\|Array.&lt;\*&gt;)&gt;</code> | The sort types for each of the sortBy expressions. Values may be 'asc', 'desc', an array of custom values, and strings which refer to properties in the optional `namedConfigs.namedCustomOrders` parameter. |
| [namedConfigs] | <code>object</code> | Provides a means of reusing computed property functions and custom sort types. |
| [namedConfigs.namedComputedProps] | <code>object</code> | Key/value pairs, where the keys correspond to strings given in the sortBy property list, and the values are functions which will dynamically calculated values for each property in the input array. |
| [namedConfigs.namedCustomOrders] | <code>object</code> | Key/value pairs, where the keys correspond to strings given in the sortTypes list, and the values are arrays of custom values which define the sort type. |

**Example**  
with this data
```js
> DJs = [
  { name: 'Trevor', slot: 'twilight' },
  { name: 'Chris', slot: 'twilight' },
  { name: 'Mike', slot: 'afternoon' },
  { name: 'Rodney', slot: 'morning' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Zane', slot: 'evening' }
]
```

sort by `slot` using an ascending sort type
```js
> sortBy(DJs, [ 'slot' ], [ 'asc' ])
[ { name: 'Mike', slot: 'afternoon' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Rodney', slot: 'morning' },
  { name: 'Chris', slot: 'twilight' },
  { name: 'Trevor', slot: 'twilight' } ]
```

sort by `slot` using a descending sort type
```js
> sortBy(DJs, [ 'slot' ], [ 'desc' ])
[ { name: 'Chris', slot: 'twilight' },
  { name: 'Trevor', slot: 'twilight' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Rodney', slot: 'morning' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Mike', slot: 'afternoon' }]
```

sort by `slot` using an 'inline' custom sort type
```js
> sortBy(DJs, [ 'slot' ], [ 'morning', 'afternoon', 'evening', 'twilight' ])
[ { name: 'Rodney', slot: 'morning' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Mike', slot: 'afternoon' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Trevor', slot: 'twilight' },
  { name: 'Chris', slot: 'twilight' } ]
```

sort by `slot` using an 'named' custom sort type
```js
> let namedConfigs = {
    namedCustomOrders: {
      custOrder1: [ 'morning', 'afternoon', 'evening', 'twilight' ]
    }
  }
> sortBy(DJs, [ 'slot' ], [ 'custOrder1' ], namedConfigs)
[ { name: 'Rodney', slot: 'morning' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Mike', slot: 'afternoon' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Trevor', slot: 'twilight' },
  { name: 'Chris', slot: 'twilight' } ]
```

sort by `slot` (with a custom sort type) then `name` (with an ascending sort type)
```js
> sortBy(DJs, ['slot', 'name'], [ [ 'morning', 'afternoon', 'evening', 'twilight' ], 'asc' ])
[ { name: 'Chris', slot: 'morning' },
  { name: 'Rodney', slot: 'morning' },
  { name: 'Mike', slot: 'afternoon' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Chris', slot: 'twilight' },
  { name: 'Trevor', slot: 'twilight' } ]
```

* * *

&copy; 2015-18 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
