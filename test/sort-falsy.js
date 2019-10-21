const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort-falsy')

tom.test('sort by array of column names (inc nulls) 1', function () {
  const fixture = [
    { a: 4, b: null, c: 3 },
    { a: 4, b: 2, c: null },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: null, b: 3, c: 4 },
    { a: null, b: null, c: 4 },
    { a: null, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: null }
  ]
  const expected = [
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 2, c: null },
    { a: 4, b: 3, c: null },
    { a: 4, b: null, c: 3 },
    { a: null, b: 2, c: 4 },
    { a: null, b: 3, c: 4 },
    { a: null, b: null, c: 4 }
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

tom.test('sort by array of column names (inc nulls) 2', function () {
  const fixture = [
    { a: null, b: 3, c: 4 },
    { a: 1, b: null, c: 5 },
    { a: 5, b: 4, c: null },
    { a: 6, b: 1, c: 6 },
    { a: null, b: null, c: 7 },
    { a: -1, b: 2, c: 2 },
    { a: null, b: 8, c: 4 },
    { a: 3, b: -1, c: 3 },
    { a: 8, b: 3, c: null }
  ]
  const expected = [
    { a: -1, b: 2, c: 2 },
    { a: 1, b: null, c: 5 },
    { a: 3, b: -1, c: 3 },
    { a: 5, b: 4, c: null },
    { a: 6, b: 1, c: 6 },
    { a: 8, b: 3, c: null },
    { a: null, b: 3, c: 4 },
    { a: null, b: 8, c: 4 },
    { a: null, b: null, c: 7 }
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

tom.test('sort by single column name (inc empty object) 1', function () {
  const fixture = [
    { a: 1 },
    { a: null },
    {},
    { a: 0 }
  ]
  const expected = [
    { a: 0 },
    { a: 1 },
    {},
    { a: null }
  ]
  const by = ['a']
  const order = ['asc']
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

tom.test('sort by single column name (inc empty object) 2', function () {
  const fixture = [
    { a: 'yeah' },
    {},
    { a: 'what' }
  ]
  const expected = [
    { a: 'what' },
    { a: 'yeah' },
    {}
  ]
  const by = ['a']
  const order = ['asc']
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

tom.test('sort by single column name (inc empty object) 3', function () {
  const fixture = [
    {},
    { a: 1 },
    { a: 2 },
    { a: null },
    { a: 0 }
  ]
  const expected = [
    { a: 2 },
    { a: 1 },
    { a: 0 },
    { a: null },
    {}
  ]
  const by = 'a'
  const order = 'desc'
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

tom.test('sort by single column name (inc undefined) 1', function () {
  const fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 }
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: undefined }
  ]
  const by = ['a']
  const order = ['asc']
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

tom.test('sort by single column name (inc nulls) 1', function () {
  const fixture = [
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: null },
    { importance: 'strength', weight: null },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: null },
    { importance: 'speed', weight: 'medium' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'strength', weight: 'medium' }
  ]
  const expected = [
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'strength', weight: 'medium' },
    { importance: 'speed', weight: null },
    { importance: 'strength', weight: null },
    { importance: 'intelligence', weight: null }
  ]
  const by = ['weight']
  const order = ['asc']
  const result = sort(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})
