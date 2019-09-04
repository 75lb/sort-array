const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sanity-check')

tom.test('missing named computed property 1 - no sort performed', function () {
  const fixture = [
    { inner: { a: 5, b: 10 } },
    { inner: { a: 2, b: 10 } },
    { inner: { a: 3, b: 10 } },
    { inner: { a: 1, b: 10 } },
    { inner: { a: 4, b: 10 } }
  ]
  const expected = [
    { inner: { a: 5, b: 10 } },
    { inner: { a: 2, b: 10 } },
    { inner: { a: 3, b: 10 } },
    { inner: { a: 1, b: 10 } },
    { inner: { a: 4, b: 10 } }
  ]
  const sortBy = [ 'total' ]
  const sortTypes = [ 'asc' ]
  const namedConfigs = {
    namedComputedProps: {
      MISSPELT: item => item.inner.a + item.inner.b
    }
  }
  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
  a.deepStrictEqual(result, expected)
})

tom.test('missing named custom order 1 - no sort performed', function () {
  const fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 }
  ]
  const expected = [
    { a: 2 },
    { a: undefined },
    { a: 1 }
  ]

  const sortBy = [ 'a' ]
  const sortTypes = [ 'custom1' ]
  const namedConfigs = {
    namedCustomOrders: {
      MISSSPELLED: [ 1, 2, undefined ]
    }
  }
  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
  a.deepStrictEqual(result, expected)
})
