import Tom from 'test-object-model'
import sortArray from '../index.mjs'
import getAssert from 'isomorphic-assert'

async function getTom () {
  const a = await getAssert()
  const tom = new Tom()

  tom.test('missing named computed property 1 - no sort performed', function () {
    const fixture = [
      { inner: { a: 5, b: 10 } },
      { inner: { a: 2, b: 10 } },
      { inner: { a: 3, b: 10 } },
      { inner: { a: 1, b: 10 } },
      { inner: { a: 4, b: 10 } }
    ]
    const expected = [
      { inner: { a: 5, b: 10 } },
      { inner: { a: 2, b: 10 } },
      { inner: { a: 3, b: 10 } },
      { inner: { a: 1, b: 10 } },
      { inner: { a: 4, b: 10 } }
    ]
    const by = ['total']
    const order = ['asc']
    const computed = {
      MISSPELT: item => item.inner.a + item.inner.b
    }
    const result = sortArray(fixture, { by, order, computed })
    a.deepEqual(result, expected)
  })

  tom.test('missing named custom order 1 - no sort performed', function () {
    const fixture = [
      { a: 2 },
      { a: undefined },
      { a: 1 }
    ]
    const expected = [
      { a: 2 },
      { a: undefined },
      { a: 1 }
    ]

    const by = ['a']
    const order = ['custom1']
    const customOrders = {
      MISSSPELLED: [1, 2, undefined]
    }
    const result = sortArray(fixture, { by, order, customOrders })
    a.deepEqual(result, expected)
  })

  return tom
}

export default getTom()
