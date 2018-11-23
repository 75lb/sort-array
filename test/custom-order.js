const TestRunner = require('test-runner')
const sortBy = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('customOrder: undefined vals 3', function () {
  const fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 },
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: undefined },
  ]
  const customOrder = {
    a: [ 1, 2, undefined ]
  }
  const result = sortBy(fixture, 'a', customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: null vals', function () {
  const fixture = [
    { a: 2 },
    { a: null },
    { a: 1 },
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: null },
  ]
  const customOrder = {
    a: [ 1, 2, null ]
  }
  const result = sortBy(fixture, 'a', customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder', function () {
  const fixture = [{ fruit: 'apple' }, { fruit: 'orange' }, { fruit: 'banana' }, { fruit: 'pear' }]
  const expected = [{ fruit: 'banana' }, { fruit: 'pear' }, { fruit: 'apple' }, { fruit: 'orange' }]
  const customOrder = { fruit: [ 'banana', 'pear', 'apple', 'orange' ] }
  const result = sortBy(fixture, 'fruit', customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: two columns', function () {
  const expected = [
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
  const fixture = [
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
  const customOrder = {
    importance: [ 'speed', 'strength', 'intelligence' ],
    weight: [ 'low', 'medium', 'high' ]
  }

  const result = sortBy(fixture, [ 'importance', 'weight' ], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: jsdoc-parse usage', function () {
  const fixture = require('./fixture/jsdoc-parse')
  const expected = require('./expected/jsdoc-parse')
  const customOrder = {
    kind: [ 'class', 'constructor', 'mixin', 'member', 'namespace', 'enum',
      'constant', 'function', 'event', 'typedef', 'external' ],
    scope: [ 'global', 'instance', 'static', 'inner' ]
  }
  const result = sortBy(fixture, ['kind', 'scope'], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: sort by deep value', function () {
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
    { inner: { number: 4 } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]
  const customOrder = {
    'inner.number': [ 1, 2, 4, 3, 5 ]
  }
  const result = sortBy(fixture, 'inner.number', customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: sort nulls, 2 column customOrder', function () {
  const expected = [
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
  const fixture = [
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
  const customOrder = {
    importance: [ undefined, 1, 2, null, 3 ],
    weight: [ 'a', 'b', null ]
  }
  const result = sortBy(fixture, [ 'importance', 'weight' ], customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: sort by deep value, nulls', function () {
  const fixture = [
    { inner: { number: 5 } },
    { inner: { number: 2 } },
    { inner: { number: 3 } },
    { inner: { number: 1 } },
    { inner: { number: null } }
  ]
  const expected = [
    { inner: { number: 1 } },
    { inner: { number: 2 } },
    { inner: { number: null } },
    { inner: { number: 3 } },
    { inner: { number: 5 } }
  ]
  const customOrder = {
    'inner.number': [ 1, 2, null, 3, 5 ]
  }
  const result = sortBy(fixture, 'inner.number', customOrder)
  a.deepStrictEqual(result, expected)
})
