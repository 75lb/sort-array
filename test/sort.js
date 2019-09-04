const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort')

tom.test('(asc desc asc)', function () {
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
  const sortBy = ['a', 'b', 'c']
  const sortTypes = ['asc', 'desc', 'asc']
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

tom.test('(desc asc desc)', function () {
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
    { a: 1, b: 3, c: 4 }
  ]
  const sortBy = ['a', 'b', 'c']
  const sortTypes = ['desc', 'asc', 'desc']
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})
