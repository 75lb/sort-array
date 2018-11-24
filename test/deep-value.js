const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

/* Skipped as under consideration */

runner.skip('sort: deep value', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 4 } },
    { inner: { number: 5 } }
  ]
  const by = item => item.inner.number
  const result = sort(fixture, by)
  a.deepStrictEqual(result, expected)
})

runner.skip('sort: deep value descending', function () {
  /* need to decide syntax */
})
