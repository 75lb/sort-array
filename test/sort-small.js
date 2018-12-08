const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

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
  const sortBy = [ 'a' ]
  const sortTypes = [ 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a' ]
  const sortTypes = [ 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a' ]
  const sortTypes = [ 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a' ]
  const sortTypes = [ 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a' ]
  const sortTypes = [ 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a' ]
  const sortTypes = [ 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'asc', 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'desc', 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
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
  const sortBy = [ 'a', 'b' ]
  const sortTypes = [ 'desc', 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})
