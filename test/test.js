var TestRunner = require('test-runner')
var sortBy = require('../')
var a = require('core-assert')

var runner = new TestRunner()

runner.test('sortBy', function () {
  var fixture = [
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
  var expected = [
    { a: 1, b: 1, c: 4 },
    { a: 1, b: 2, c: 4 },
    { a: 1, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: 1, c: 1 },
    { a: 4, b: 3, c: 1 },
    { a: 4, b: 3, c: 1 }
  ]
  a.deepStrictEqual(sortBy(fixture, ['a', 'b', 'c']), expected)
})

runner.test('sortBy, with undefined vals', function () {
  var fixture = [ { a: 1 }, { }, { a: 0 } ]
  var expected = [ { }, { a: 0 }, { a: 1 } ]
  a.deepStrictEqual(sortBy(fixture, 'a'), expected)
})

runner.test('sortBy, with undefined vals 2', function () {
  var fixture = [ { a: 'yeah' }, { }, { a: 'what' } ]
  var expected = [ { }, { a: 'what' }, { a: 'yeah' } ]
  a.deepStrictEqual(sortBy(fixture, 'a'), expected)
})

runner.test('sortBy, with undefined vals 3', function () {
  var fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 },
  ]
  var expected = [
    { a: undefined },
    { a: 1 },
    { a: 2 }
  ]
  a.deepStrictEqual(sortBy(fixture, 'a'), expected)
})

runner.test('sortBy, with undefined vals 3, customOrder', function () {
  var fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 },
  ]
  var expected = [
    { a: 1 },
    { a: 2 },
    { a: undefined },
  ]
  var customOrder = {
    a: [ 1, 2, undefined ]
  }
  a.deepStrictEqual(sortBy(fixture, 'a', customOrder), expected)
})

runner.test('sortBy, with null vals, customOrder', function () {
  var fixture = [
    { a: 2 },
    { a: null },
    { a: 1 },
  ]
  var expected = [
    { a: 1 },
    { a: 2 },
    { a: null },
  ]
  var customOrder = {
    a: [ 1, 2, null ]
  }
  a.deepStrictEqual(sortBy(fixture, 'a', customOrder), expected)
})

runner.test('custom order', function () {
  var fixture = [{ fruit: 'apple' }, { fruit: 'orange' }, { fruit: 'banana' }, { fruit: 'pear' }]
  var expected = [{ fruit: 'banana' }, { fruit: 'pear' }, { fruit: 'apple' }, { fruit: 'orange' }]
  var fruitOrder = [ 'banana', 'pear', 'apple', 'orange' ]
  a.deepStrictEqual(sortBy(fixture, 'fruit', { fruit: fruitOrder }), expected)
})

runner.test('sort by two columns, both custom', function () {
  var expected = [
    { importance: 'speed', weight: 'low' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'speed', weight: 'high' },
    { importance: 'strength', weight: 'low' },
    { importance: 'strength', weight: 'medium' },
    { importance: 'strength', weight: 'high' },
    { importance: 'intelligence', weight: 'low' },
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'intelligence', weight: 'high' }
  ]
  var fixture = [
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: 'low' },
    { importance: 'strength', weight: 'low' },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: 'low' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'strength', weight: 'medium' }
  ]
  var customOrder = {
    importance: [ 'speed', 'strength', 'intelligence' ],
    weight: [ 'low', 'medium', 'high' ]
  }

  var result = sortBy(fixture, [ 'importance', 'weight' ], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('jsdoc-parse', function () {
  var fixture = require('./fixture/jsdoc-parse')
  var expected = require('./expected/jsdoc-parse')
  var customOrder = {
    kind: [ 'class', 'constructor', 'mixin', 'member', 'namespace', 'enum',
      'constant', 'function', 'event', 'typedef', 'external' ],
    scope: [ 'global', 'instance', 'static', 'inner' ]
  }
  var result = sortBy(fixture, ['kind', 'scope'], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('sort by deep value', function () {
  var fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  var expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 4 } },
    { inner: { number: 5 } }
  ]
  var result = sortBy(fixture, 'inner.number')
  a.deepStrictEqual(result, expected)
})

runner.test('sort by deep value, custom order', function () {
  var fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: 4 } }
  ]
  var expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]
  var customOrder = {
    'inner.number': [ 1, 2, 4, 3, 5 ]
  }
  var result = sortBy(fixture, 'inner.number', customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('sort nulls', function () {
  var expected = [
    { importance: 'speed', weight: null },
    { importance: 'strength', weight: null },
    { importance: 'intelligence', weight: null },
    { importance: 'strength', weight: 'high' },
    { importance: 'speed', weight: 'high' },
    { importance: 'intelligence', weight: 'high' },
    { importance: 'intelligence', weight: 'medium' },
    { importance: 'speed', weight: 'medium' },
    { importance: 'strength', weight: 'medium' }
  ]
  var fixture = [
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
  var result = sortBy(fixture, 'weight')
  a.deepStrictEqual(result, expected)
})

runner.test('sort nulls, 2 column customOrder', function () {
  var expected = [
    { importance: undefined, weight: null },
    { importance: 1, weight: 'a' },
    { importance: 1, weight: 'b' },
    { importance: 1, weight: null },
    { importance: 2, weight: 'a' },
    { importance: 2, weight: null },
    { importance: null, weight: 'a' },
    { importance: 3, weight: 'b' },
    { importance: 3, weight: null }
  ]
  var fixture = [
    { importance: 3, weight: 'b' },
    { importance: 1, weight: 'b' },
    { importance: 2, weight: 'a' },
    { importance: undefined, weight: null },
    { importance: 2, weight: null },
    { importance: 1, weight: 'a' },
    { importance: null, weight: 'a' },
    { importance: 1, weight: null },
    { importance: 3, weight: null },
  ]
  var customOrder = {
    importance: [ undefined, 1, 2, null, 3 ],
    weight: [ 'a', 'b', null ]
  }
  var result = sortBy(fixture, [ 'importance', 'weight' ], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('sortBy with nulls', function () {
  var fixture = [
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
  var expected = [
    { a: null, b: null, c: 4 },
    { a: null, b: 2, c: 4 },
    { a: null, b: 3, c: 4 },
    { a: 2, b: 2, c: 2 },
    { a: 2, b: 2, c: 3 },
    { a: 3, b: 3, c: 3 },
    { a: 4, b: null, c: 3 },
    { a: 4, b: 2, c: null },
    { a: 4, b: 3, c: null }
  ]
  var result = sortBy(fixture, ['a', 'b', 'c'])
  a.deepStrictEqual(result, expected)
})

runner.test('sort by deep value, custom order, nulls', function () {
  var fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: null } }
  ]
  var expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: null } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]
  var customOrder = {
    'inner.number': [ 1, 2, null, 3, 5 ]
  }
  var result = sortBy(fixture, 'inner.number', customOrder)
  a.deepStrictEqual(result, expected)
})
