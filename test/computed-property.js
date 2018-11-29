const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

// @TODO: Discuss - it will not be possible to sort by anonymous computed property
runner.skip('computed property: anonymous', function () {
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
  const by = [
    item => item.inner.a + item.inner.b
  ]
  const result = sort(fixture, by)
  a.deepStrictEqual(result, expected)
})

runner.test('computed property: named', function () {
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
  const sortBy = {
    total: 'asc'
  }
  const computedProperties = {
    total: item => item.inner.a + item.inner.b
  }
  const result = sort(fixture, sortBy, computedProperties)
  a.deepStrictEqual(result, expected)
})

// @TODO: Discuss - not possible to sort by anonymous computed properties
runner.skip('computed property: anonymous, descending order', function () {
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
    { inner: { number: 3 } },
    { inner: { number: 4 } },
    { inner: { number: 5 } }
  ]
  const by = [
    [ item => item.inner.number, 'desc' ]
  ]
  const result = sort(fixture, by)
  a.deepStrictEqual(result, expected)
})

runner.test('computed property: named, descending custom order', function () {
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
  const sortBy = {
    total: 'desc'
  }
  const computedProperties = {
    total: item => item.inner.number
  }
  const result = sort(fixture, sortBy, computedProperties)
  a.deepStrictEqual(result, expected)
})

runner.test('computed property: custom order', function () {
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
  
  const sortBy = {
    number: [ 1, 2, 4, 3, 5 ]
  }
  const computedProperties = {
    number: item => item.inner.number
  }
  
  const result = sort(fixture, sortBy, computedProperties)
  a.deepStrictEqual(result, expected)
})

runner.test('computed property: custom order, nulls', function () {
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
  
  const sortBy = {
    number: [ 1, 2, null, 3, 5 ]
  }
  const computedProperties = {
    number: item => item.inner.number
  }
  
  const result = sort(fixture, sortBy, computedProperties)
  a.deepStrictEqual(result, expected)
})
