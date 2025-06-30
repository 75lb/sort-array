import sortArray from 'sort-array'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('sort by array of column names (inc nulls) 1', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('sort by array of column names (inc nulls) 2', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('sort by single column name (inc empty object) 1', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('sort by single column name (inc empty object) 2', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('sort by single column name (inc empty object) 3', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('sort by single column name (inc undefined) 1', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('sort by single column name (inc nulls) 1', function () {
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
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('nullRank: -1', function () {
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
    { a: null, b: null, c: 4 },
    { a: null, b: 2, c: 4 },
    { a: null, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: null, c: 3 },
    { a: 4, b: 2, c: null },
    { a: 4, b: 3, c: null },
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sortArray(fixture, { by, order, nullRank: -1 })
  a.deepStrictEqual(result, expected)
})

test.set('nullRank: 1', function () {
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
    { a: null, b: null, c: 4 },
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sortArray(fixture, { by, order, nullRank: 1 })
  a.deepStrictEqual(result, expected)
})

test.set('undefinedRank: -1', function () {
  const fixture = [
    { a: 4, b: undefined, c: 3 },
    { a: 4, b: 2, c: undefined },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: undefined, b: 3, c: 4 },
    { a: undefined, b: undefined, c: 4 },
    { a: undefined, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: undefined }
  ]
  const expected = [
    { a: undefined, b: undefined, c: 4 },
    { a: undefined, b: 2, c: 4 },
    { a: undefined, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: undefined, c: 3 },
    { a: 4, b: 2, c: undefined },
    { a: 4, b: 3, c: undefined },
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sortArray(fixture, { by, order, undefinedRank: -1 })
  a.deepStrictEqual(result, expected)
})

test.set('undefinedRank: 1', function () {
  const fixture = [
    { a: 4, b: undefined, c: 3 },
    { a: 4, b: 2, c: undefined },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: undefined, b: 3, c: 4 },
    { a: undefined, b: undefined, c: 4 },
    { a: undefined, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: undefined }
  ]
  const expected = [
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 2, c: undefined },
    { a: 4, b: 3, c: undefined },
    { a: 4, b: undefined, c: 3 },
    { a: undefined, b: 2, c: 4 },
    { a: undefined, b: 3, c: 4 },
    { a: undefined, b: undefined, c: 4 },
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sortArray(fixture, { by, order, undefinedRank: 1 })
  a.deepStrictEqual(result, expected)
})

test.set('nanRank: -1', function () {
  const fixture = [
    { a: 4, b: NaN, c: 3 },
    { a: 4, b: 2, c: NaN },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: NaN, b: 3, c: 4 },
    { a: NaN, b: NaN, c: 4 },
    { a: NaN, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: NaN }
  ]
  const expected = [
    { a: NaN, b: NaN, c: 4 },
    { a: NaN, b: 2, c: 4 },
    { a: NaN, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: NaN, c: 3 },
    { a: 4, b: 2, c: NaN },
    { a: 4, b: 3, c: NaN },
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sortArray(fixture, { by, order, nanRank: -1 })
  a.deepStrictEqual(result, expected)
})

test.set('nanRank: 1', function () {
  const fixture = [
    { a: 4, b: NaN, c: 3 },
    { a: 4, b: 2, c: NaN },
    { a: 2, b: 2, c: 3 },
    { a: 2, b: 2, c: 2 },
    { a: NaN, b: 3, c: 4 },
    { a: NaN, b: NaN, c: 4 },
    { a: NaN, b: 2, c: 4 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 3, c: NaN }
  ]
  const expected = [
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 2, c: NaN },
    { a: 4, b: 3, c: NaN },
    { a: 4, b: NaN, c: 3 },
    { a: NaN, b: 2, c: 4 },
    { a: NaN, b: 3, c: 4 },
    { a: NaN, b: NaN, c: 4 },
  ]

  const by = ['a', 'b', 'c']
  const order = ['asc', 'asc', 'asc']
  const result = sortArray(fixture, { by, order, nanRank: 1 })
  a.deepStrictEqual(result, expected)
})

export { test, only, skip }
