[![view on npm](http://img.shields.io/npm/v/sort-array.svg)](https://www.npmjs.org/package/sort-array)
[![npm module downloads](http://img.shields.io/npm/dt/sort-array.svg)](https://www.npmjs.org/package/sort-array)
[![Build Status](https://travis-ci.org/75lb/sort-array.svg?branch=master)](https://travis-ci.org/75lb/sort-array)
[![Dependency Status](https://badgen.net/david/dep/75lb/sort-array)](https://david-dm.org/75lb/sort-array)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# sort-array

Isomorphic, load-anywhere function to sort an array by scalar, deep or computed values in any standard or custom order.

```js
const sortArray = require('sort-array')
```

## Synopsis

With this data

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

Sort by `slot` using an ascending sort type

```js
> sortArray(DJs, { by: 'slot' })
[ { name: 'Mike', slot: 'afternoon' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Rodney', slot: 'morning' },
  { name: 'Chris', slot: 'twilight' },
  { name: 'Trevor', slot: 'twilight' } ]
```

Sort by `slot` using a descending sort type

```js
> sortArray(DJs, { by: 'slot', order: 'desc' })
[ { name: 'Chris', slot: 'twilight' },
  { name: 'Trevor', slot: 'twilight' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Rodney', slot: 'morning' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Mike', slot: 'afternoon' }]
```

Sort by `slot` in a custom order.

```js
> const slotOrder = [ 'morning', 'afternoon', 'evening', 'twilight' ]
> sortArray(DJs, { by: 'slot', order: 'slotOrder', customOrders: { slotOrder } })
[ { name: 'Rodney', slot: 'morning' },
  { name: 'Chris', slot: 'morning' },
  { name: 'Mike', slot: 'afternoon' },
  { name: 'Zane', slot: 'evening' },
  { name: 'Trevor', slot: 'twilight' },
  { name: 'Chris', slot: 'twilight' } ]
```

<a name="module_sort-array"></a>

## sort-array
Isomorphic, load-anywhere function to sort an array by scalar, deep or computed values in any standard or custom order.

**Example**  
```js
const sortArray = require('sort-array')
```
<a name="exp_module_sort-array--sortArray"></a>

### sortArray(arr, [options]) ⏏
**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | Input array. |
| [options] | <code>object</code> | Sort config. |
| [options.by] | <code>Array.&lt;string&gt;</code> | One or more properties to sort by. |
| [options.order] | <code>Array.&lt;string&gt;</code> | One or more sort orders. |
| [options.customOrders] | <code>object</code> | An object containing one or more custom orders. |
| [options.computed] | <code>object</code> | An object containing one or more computed field functions. |


## Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const arrayify = require('sort-array')
```

Within Node.js with ECMAScript Module support enabled:

```js
import arrayify from 'sort-array'
```

Within an modern browser ECMAScript Module:

```js
import arrayify from './node_modules/sort-array/index.mjs'
```

Old browser (adds `window.sortArray`):

```html
<script nomodule src="./node_modules/sort-array/dist/index.js"></script>
```

* * *

&copy; 2015-19 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
