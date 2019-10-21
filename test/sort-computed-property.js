const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort-computed-property')

tom.test('computed property', function () {
  const fixture = [
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 5 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 5 } },
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 2 } },
    { inner: { number: 1 } }
  ]
  const by = ['output']
  const order = ['desc']
  const computed = {
    output: item => item.inner.number * 2
  }
  const result = sort(fixture, { by, order, computed })
  a.deepStrictEqual(result, expected)
})

tom.test('namedComputedProps exist but not used', function () {
  const fixture = [
    { a: 4 },
    { a: 3 },
    { a: 2 },
    { a: 1 }
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: 3 },
    { a: 4 }
  ]
  const by = ['a']
  const order = ['asc']
  const computed = {
    something: item => item.inner.number * 2
  }
  const result = sort(fixture, { by, order, computed })
  a.deepStrictEqual(result, expected)
})

tom.test('named function (asc) 1', function () {
  const fixture = [
    { inner: { a: 5, b: 10 } },
    { inner: { a: 2, b: 10 } },
    { inner: { a: 3, b: 10 } },
    { inner: { a: 1, b: 10 } },
    { inner: { a: 4, b: 10 } }
  ]
  const expected = [
    { inner: { a: 1, b: 10 } },
    { inner: { a: 2, b: 10 } },
    { inner: { a: 3, b: 10 } },
    { inner: { a: 4, b: 10 } },
    { inner: { a: 5, b: 10 } }
  ]
  const by = ['total']
  const order = ['asc']
  const computed = {
    total: item => item.inner.a + item.inner.b
  }
  const result = sort(fixture, { by, order, computed })
  a.deepStrictEqual(result, expected)
})

tom.test('named function (desc) 1', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 5 } },
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 2 } },
    { inner: { number: 1 } }
  ]
  const by = ['total']
  const order = ['desc']
  const computed = {
    total: item => item.inner.number
  }
  const result = sort(fixture, { by, order, computed })
  a.deepStrictEqual(result, expected)
})

tom.test('named function (custom) 1', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]

  const by = ['number']
  const order = 'custom'
  const custom = [1, 2, 4, 3, 5]
  const computed = {
    number: item => item.inner.number
  }
  const result = sort(fixture, { by, order, computed, customOrders: { custom } })
  a.deepStrictEqual(result, expected)
})

tom.test('named function (custom) (inc nulls) 1', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: null } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: null } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]

  const by = ['number']
  const order = 'custom'
  const custom = [1, 2, null, 3, 5]
  const computed = {
    number: item => item.inner.number
  }
  const result = sort(fixture, { by, order, computed, customOrders: { custom } })
  a.deepStrictEqual(result, expected)
})
