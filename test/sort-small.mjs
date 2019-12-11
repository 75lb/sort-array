import Tom from 'test-object-model'
import sortArray from '../index.mjs'
import getAssert from 'isomorphic-assert'

async function getTom () {
  const a = await getAssert()
  const tom = new Tom()

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
    const by = ['a']
    const order = ['asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a']
    const order = ['asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a']
    const order = ['desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a']
    const order = ['desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a']
    const order = ['asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a']
    const order = ['desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['asc', 'desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['desc', 'asc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
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
    const by = ['a', 'b']
    const order = ['desc', 'desc']
    const result = sortArray(fixture, { by, order })
    a.deepEqual(result, expected)
  })

  return tom
}

export default getTom()
