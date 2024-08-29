import sortArray from 'sort-array'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('missing named computed property 1 - no sort performed', function () {
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

test.set('missing named custom order 1 - no sort performed', function () {
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

export { test, only, skip }
