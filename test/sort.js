import sortArray from 'sort-array'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('(asc desc asc)', function () {
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
  const by = ['a', 'b', 'c']
  const order = ['asc', 'desc', 'asc']
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})

test.set('(desc asc desc)', function () {
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
  const by = ['a', 'b', 'c']
  const order = ['desc', 'asc', 'desc']
  const result = sortArray(fixture, { by, order })
  a.deepStrictEqual(result, expected)
})


export { test, only, skip }
