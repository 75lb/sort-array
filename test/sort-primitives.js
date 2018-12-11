const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

// @TODO: More (and larger-scale) test samples needed here.
runner.test('sort primitives: simple asc', function () {
  const fixture = [ 100, 98, 102, 100, 98 ]
  const expected = [ 98, 98, 100, 100, 102 ]

  const sortBy = []
  const sortTypes = [ 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.test('sort primitives: simple desc', function () {
  const fixture = [ 100, 98, 102, 100, 98 ]
  const expected = [ 102, 100, 100, 98, 98 ]

  const sortBy = []
  const sortTypes = [ 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.test('sort primitives: custom', function () {
  const fixture = [ 3, 1, 5, 3, 1 ]
  const expected = [ 5, 1, 1, 3, 3 ]

  const sortBy = []
  const sortTypes = [5, 1, 3]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

// @TODO: need better real-world test case here
runner.test('sort primitives: computed property (asc)', function () {
  const fixture = [ 100, 98, 102, 100, 98 ]
  const expected = [ 98, 98, 100, 100, 102 ]

  const sortBy = [
    item => item * 2
  ]
  const sortTypes = [ 'asc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

// @TODO: need better real-world test case here
runner.test('sort primitives: computed property (desc)', function () {
  const fixture = [ 100, 98, 102, 100, 98 ]
  const expected = [ 102, 100, 100, 98, 98 ]

  const sortBy = [
    item => item * 2
  ]
  const sortTypes = [ 'desc' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

// @TODO: need better real-world test case here
runner.test('sort primitives: computed property (custom)', function () {
  const fixture = [ 100, 98, 102, 100, 98 ]
  const expected = [ 100, 100, 98, 98, 102 ]

  const sortBy = [
    item => item * 2
  ]
  const sortTypes = [ 200, 196, 204 ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})
