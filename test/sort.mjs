import Tom from 'test-object-model'
import sortArray from '../index.mjs'
import getAssert from 'isomorphic-assert'

async function getTom () {
  const a = await getAssert()
  const tom = new Tom()

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
    const by = ['a', 'b', 'c']
    const order = ['asc', 'desc', 'asc']
    const result = sortArray(fixture, { by, order })
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
    const by = ['a', 'b', 'c']
    const order = ['desc', 'asc', 'desc']
    const result = sortArray(fixture, { by, order })
    a.deepStrictEqual(result, expected)
  })

  return tom
}

export default getTom()
