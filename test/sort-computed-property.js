const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort-computed-property')

tom.test('(computed property)', function () {
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
  const sortBy = ['output']
  const sortTypes = ['desc']
  const namedConfigs = {
    namedComputedProps: {
      output: item => item.inner.number * 2
    }
  }
  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
  a.deepStrictEqual(result, expected)
})

tom.test('anonymous function (asc) 1', function () {
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
  const sortBy = [
    item => item.inner.a + item.inner.b
  ]
  const sortTypes = ['asc']
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = ['total']
  const sortTypes = ['asc']
  const namedConfigs = {
    namedComputedProps: {
      total: item => item.inner.a + item.inner.b
    }
  }
  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
  a.deepStrictEqual(result, expected)
})

tom.test('anonymous function (desc) 1', function () {
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
  const sortBy = [item => item.inner.number]
  const sortTypes = ['desc']
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = ['total']
  const sortTypes = ['desc']
  const namedConfigs = {
    namedComputedProps: {
      total: item => item.inner.number
    }
  }
  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
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

  const sortBy = ['number']
  const sortTypes = [
    [1, 2, 4, 3, 5]
  ]
  const namedConfigs = {
    namedComputedProps: {
      number: item => item.inner.number
    }
  }

  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
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

  const sortBy = ['number']
  const sortTypes = [
    [1, 2, null, 3, 5]
  ]
  const namedConfigs = {
    namedComputedProps: {
      number: item => item.inner.number
    }
  }
  const result = sort(fixture, sortBy, sortTypes, namedConfigs)
  a.deepStrictEqual(result, expected)
})
