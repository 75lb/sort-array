const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

// @TODO: Remove these small 'debug' tests when no longer needed
/*
runner.test('sort order: prop:asc, change:no, 1', function () {
  const fixture = [
    { a: 4 },
    { a: 4 },
    { a: 4 }
  ]
  const expected = [
    { a: 4 },
    { a: 4 },
    { a: 4 }
  ]
  const sortBy = {
    a: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc, change:no, 2', function () {
  const fixture = [
    { a: 1 },
    { a: 2 },
    { a: 3 }
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: 3 }
  ]
  const sortBy = {
    a: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc, change:yes, 3', function () {
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
  const sortBy = {
    a: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:desc, change:no, 1', function () {
  const fixture = [
    { a: 4 },
    { a: 4 },
    { a: 4 }
  ]
  const expected = [
    { a: 4 },
    { a: 4 },
    { a: 4 }
  ]
  const sortBy = {
    a: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:desc, change:yes, 2', function () {
  const fixture = [
    { a: 1 },
    { a: 2 },
    { a: 3 }
  ]
  const expected = [
    { a: 3 },
    { a: 2 },
    { a: 1 }
  ]
  const sortBy = {
    a: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:desc, change:no, 3', function () {
  const fixture = [
    { a: 3 },
    { a: 2 },
    { a: 1 }
  ]
  const expected = [
    { a: 3 },
    { a: 2 },
    { a: 1 }
  ]
  const sortBy = {
    a: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:asc, change:no, 1', function () {
  const fixture = [
    { a: 4, b: 1 },
    { a: 4, b: 1 },
    { a: 4, b: 1 }
  ]
  const expected = [
    { a: 4, b: 1 },
    { a: 4, b: 1 },
    { a: 4, b: 1 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:asc, change:no, 2', function () {
  const fixture = [
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 }
  ]
  const expected = [
    { a: 1, b: 1 },
    { a: 2, b: 1 },
    { a: 3, b: 1 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:asc, change:no, 3', function () {
  const fixture = [
    { a: 1, b: 1 },
    { a: 2, b: 2 },
    { a: 3, b: 3 }
  ]
  const expected = [
    { a: 1, b: 1 },
    { a: 2, b: 2 },
    { a: 3, b: 3 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:asc, change:no, 4', function () {
  const fixture = [
    { a: 4, b: 1 },
    { a: 4, b: 2 },
    { a: 4, b: 3 }
  ]
  const expected = [
    { a: 4, b: 1 },
    { a: 4, b: 2 },
    { a: 4, b: 3 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:desc, change:no, 1', function () {
  const fixture = [
    { a: 4, b: 1 },
    { a: 4, b: 1 },
    { a: 4, b: 1 }
  ]
  const expected = [
    { a: 4, b: 1 },
    { a: 4, b: 1 },
    { a: 4, b: 1 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:desc, change:no, 2', function () {
  const fixture = [
    { a: 4, b: 3 },
    { a: 4, b: 2 },
    { a: 4, b: 1 }
  ]
  const expected = [
    { a: 4, b: 3 },
    { a: 4, b: 2 },
    { a: 4, b: 1 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:desc, change:no, 3', function () {
  const fixture = [
    { a: 1, b: 3 },
    { a: 2, b: 2 },
    { a: 3, b: 1 }
  ]
  const expected = [
    { a: 1, b: 3 },
    { a: 2, b: 2 },
    { a: 3, b: 1 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:asc|prop:desc, change:yes, 4', function () {
  const fixture = [
    { a: 5, b: 1 },
    { a: 5, b: 2 },
    { a: 5, b: 3 },
    { a: 3, b: 3 },
    { a: 2, b: 2 },
    { a: 1, b: 1 }
  ]
  const expected = [
    { a: 1, b: 1 },
    { a: 2, b: 2 },
    { a: 3, b: 3 },
    { a: 5, b: 3 },
    { a: 5, b: 2 },
    { a: 5, b: 1 }
  ]
  const sortBy = {
    a: 'asc',
    b: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:desc|prop:asc, change:yes, 1', function () {
  const fixture = [
    { a: 1, b: 1 },
    { a: 2, b: 2 },
    { a: 3, b: 3 },
    { a: 5, b: 1 },
    { a: 5, b: 2 },
    { a: 5, b: 3 }
  ]
  const expected = [
    { a: 5, b: 1 },
    { a: 5, b: 2 },
    { a: 5, b: 3 },
    { a: 3, b: 3 },
    { a: 2, b: 2 },
    { a: 1, b: 1 }
  ]
  const sortBy = {
    a: 'desc',
    b: 'asc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: prop:desc|prop:desc, change:yes, 1', function () {
  const fixture = [
    { a: 1, b: 1 },
    { a: 2, b: 2 },
    { a: 3, b: 3 },
    { a: 5, b: 1 },
    { a: 5, b: 2 },
    { a: 5, b: 3 }
  ]
  const expected = [
    { a: 5, b: 3 },
    { a: 5, b: 2 },
    { a: 5, b: 1 },
    { a: 3, b: 3 },
    { a: 2, b: 2 },
    { a: 1, b: 1 }
  ]
  const sortBy = {
    a: 'desc',
    b: 'desc'
  }
  const result = sort(fixture, sortBy)
  a.deepStrictEqual(result, expected)
})
*/

runner.skip('sort order: asc|desc|asc', function () {
  const fixture = [
    { a: 4, b: 1, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: 1, b: 3, c: 4 },
    { a: 1, b: 1, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: 1 }
  ]
  const expected = [
    { a: 1, b: 3, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 1, b: 1, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 4, b: 1, c: 1 }
  ]
  const sortBy = [ 'a', 'b', 'c' ]
  const sortTypes = [ 'asc', 'desc', 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.test('sort order: desc|asc|desc', function () {
  const fixture = [
    { a: 4, b: 1, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: 1, b: 3, c: 4 },
    { a: 1, b: 1, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: 1 }
  ]
  const expected = [
    { a: 4, b: 1, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 3, b: 3, c: 3 },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: 1, b: 1, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 1, b: 3, c: 4 },
  ]
  const sortBy = [ 'a', 'b', 'c' ]
  const sortTypes = [ 'desc', 'asc', 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('sort order: computed property', function () {
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
  const sortBy = [ 'output' ]
  const sortTypes = [ 'desc' ]
  const sharedCompProps = {
    output: item => item.inner.number * 2
  }
  const result = sort(fixture, sortBy, sortTypes, sharedCompProps)
  a.deepStrictEqual(result, expected)
})
