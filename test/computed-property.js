const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

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
  const sortBy = [
    item => item.inner.a + item.inner.b
  ]
  const sortTypes = [ 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('computed property: named', function () {
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
  const sortBy = [ 'total' ]
  const sortTypes = [ 'asc' ]
  const sharedCompProps = {
    total: item => item.inner.a + item.inner.b
  }
  const result = sort(fixture, sortBy, sortTypes, sharedCompProps)
  a.deepStrictEqual(result, expected)
})

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
  const sortBy = [ item => item.inner.number ]
  const sortTypes = [ 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('computed property: named, descending custom order', function () {
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
  const sortBy = [ 'total' ]
  const sortTypes = [ 'desc' ]
  const sharedCompProps = {
    total: item => item.inner.number
  }
  const result = sort(fixture, sortBy, sortTypes, sharedCompProps)
  a.deepStrictEqual(result, expected)
})

runner.skip('computed property: custom order', function () {
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
  
  const sortBy = [ 'number' ]
  const sortTypes = [ 
    [ 1, 2, 4, 3, 5 ]
  ]
  const sharedCompProps = {
    number: item => item.inner.number
  }
  
  const result = sort(fixture, sortBy, sortTypes, sharedCompProps)
  a.deepStrictEqual(result, expected)
})

runner.skip('computed property: custom order, nulls', function () {
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
  
  const sortBy = [ 'number' ]
  const sortTypes = [
    [ 1, 2, null, 3, 5 ]
  ]
  const sharedCompProps = {
    number: item => item.inner.number
  }
  const result = sort(fixture, sortBy, sortTypes, sharedCompProps)
  a.deepStrictEqual(result, expected)
})
