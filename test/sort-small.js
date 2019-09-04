const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort-small')

tom.test('order remains unchanged on (asc) 1', function () {
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

tom.test('order remains unchanged on (asc) 2', function () {
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

tom.test('order remains unchanged on (desc) 1', function () {
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

tom.test('order remains unchanged on (desc) 2', function () {
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

tom.test('order changes on (asc) 1', function () {
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

tom.test('order changes on (desc) 1', function () {
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

tom.test('order remains unchanged on (asc asc) 1', function () {
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

tom.test('order remains unchanged on (asc asc) 2', function () {
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

tom.test('order remains unchanged on (asc asc) 3', function () {
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

tom.test('order remains unchanged on (asc asc) 4', function () {
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

tom.test('order remains unchanged on (asc desc) 1', function () {
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

tom.test('order remains unchanged on (asc desc) 2', function () {
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

tom.test('order remains unchanged on (asc desc) 3', function () {
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

tom.test('order changes on (asc desc) 1', function () {
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

tom.test('order changes on (desc asc) 1', function () {
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

tom.test('order changes on (desc desc) 1', function () {
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
