const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort-primitives')

tom.test('simple asc', function () {
  const fixture = [4, 1, 32, 21, 34, 39, 46, 11, 19, 12, 52, 65, 75, 23, 74]
  const expected = [1, 4, 11, 12, 19, 21, 23, 32, 34, 39, 46, 52, 65, 74, 75]

  const sortBy = []
  const sortTypes = ['asc']
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

tom.test('simple desc', function () {
  const fixture = [22, 79, 66, 10, 70, 38, 100, 34, 60, 99, 88, 4, 39, 33, 52]
  const expected = [100, 99, 88, 79, 70, 66, 60, 52, 39, 38, 34, 33, 22, 10, 4]

  const sortBy = []
  const sortTypes = ['desc']
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

tom.test('custom', function () {
  const fixture = [3, 1, 3, 3, 5, 3, 1, 5, 1, 5]
  const expected = [5, 5, 5, 1, 1, 1, 3, 3, 3, 3]

  const sortBy = []
  const sortTypes = [5, 1, 3]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

/*
// @TODO: need better real-world test case here
tom.test('computed property (asc)', function () {
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
tom.test('computed property (desc)', function () {
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
tom.test('computed property (custom)', function () {
  const fixture = [ 100, 98, 102, 100, 98 ]
  const expected = [ 100, 100, 98, 98, 102 ]

  const sortBy = [
    item => item * 2
  ]
  const sortTypes = [ 200, 196, 204 ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})
*/
