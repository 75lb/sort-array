const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

/* tests skipped as API is under consideration */

runner.skip('sortOrder: desc 1', function () {
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
  const by = { a: 'asc', b: 'desc', c: 'asc' }
  const result = sort(fixture, by)
  a.deepStrictEqual(result, expected)
})

runner.skip('sortOrder: desc 2', function () {
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
    { a: 1, b: 3, c: 4 },
  ]
  const by = { a: 'desc', b: 'asc', c: 'desc' }
  const result = sort(fixture, by)
  a.deepStrictEqual(result, expected)
})

runner.skip('sortOrder: deep value', function () {
  const fixture = [
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 5 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 5 } },
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 2 } },
    { inner: { number: 1 } }
  ]
  const by = { 'inner.number': 'desc' }
  const result = sort(fixture, by)
  a.deepStrictEqual(result, expected)
})
