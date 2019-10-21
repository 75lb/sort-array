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

Sort an array of primitives, for example strings.

```js
> const partsOfTheDay = ['twilight', 'afternoon', 'morning', 'evening']

> sortArray(partsOfTheDay)
[ 'afternoon', 'evening', 'morning', 'twilight' ]
```

The default sort order is `asc` but you could specify `desc` or a custom order. For example, sort the parts of the day by the time in which they occur.

```js
> sortArray(partsOfTheDay, {
  order: 'time',
  customOrders: {
    time: ['morning', 'afternoon', 'evening', 'twilight']
  }
})
[ 'morning', 'afternoon', 'evening', 'twilight' ]
```

Sort by a computed field. For example, an algorithm to rank boxers by influence.

```js
> const boxers = [
  { name: 'Anthony', ticketsSold: 90000, titlesHeld: 0 },
  { name: 'Amir', ticketsSold: 30000, titlesHeld: 2 },
  { name: 'Vasiliy', ticketsSold: 20000, titlesHeld: 4 },
  { name: 'Josh', ticketsSold: 10000, titlesHeld: 3 },
]

> sortArray(boxers, {
  by: 'rank',
  order: 'desc',
  computed: {
    rank: boxer => boxer.ticketsSold + (boxer.titlesHeld * 10000)
  }
})

[
  { name: 'Anthony', ticketsSold: 90000, titlesHeld: 0 },
  { name: 'Vasiliy', ticketsSold: 20000, titlesHeld: 4 },
  { name: 'Amir', ticketsSold: 30000, titlesHeld: 2 },
  { name: 'Josh', ticketsSold: 10000, titlesHeld: 3 }
]
```

You can use computed fields to sort by values deep in an object structure.

```js
> const data = [
  { inner: { number: 2 } },
  { inner: { number: 3 } },
  { inner: { number: 5 } },
  { inner: { number: 1 } },
  { inner: { number: 4 } }
]

> sortArray(data, { by: 'number', computed: { number: row => row.inner.number} })
[
  { inner: { number: 1 } },
  { inner: { number: 2 } },
  { inner: { number: 3 } },
  { inner: { number: 4 } },
  { inner: { number: 5 } }
]
```

Sort by multiple columns using multiple custom orders.

```js
> const attributes = [
  { skill: 'accuracy', confidence: 'medium' },
  { skill: 'power', confidence: 'high' },
  { skill: 'speed', confidence: 'low' },
  { skill: 'speed', confidence: 'high' },
  { skill: 'accuracy', confidence: 'low' },
  { skill: 'accuracy', confidence: 'high' },
  { skill: 'power', confidence: 'medium' }
]

> sortArray(attributes, {
  by: ['skill', 'confidence'],
  order: ['skill', 'confidence'],
  customOrders: {
    skill: ['accuracy', 'speed', 'power'],
    confidence: ['low', 'medium', 'high'],
  }
})
[
  { skill: 'accuracy', confidence: 'low' },
  { skill: 'accuracy', confidence: 'medium' },
  { skill: 'accuracy', confidence: 'high' },
  { skill: 'speed', confidence: 'low' },
  { skill: 'speed', confidence: 'high' },
  { skill: 'power', confidence: 'medium' },
  { skill: 'power', confidence: 'high' }
]
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
| [options.by] | <code>Array.&lt;string&gt;</code> | One or more property names or computed fields to sort by. Specifying property names is only relevant when sorting an array of objects. |
| [options.order] | <code>Array.&lt;string&gt;</code> | One or more sort orders. Specify `asc`, `desc` or the property name of `options.customOrders`. |
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
