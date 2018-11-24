const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.test('customOrder: undefined vals 3', function () {
  const fixture = [
    { a: 2 },
    { a: undefined },
    { a: 1 }
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: undefined }
  ]
  const by = 'a'
  const customOrder = {
    a: [ 1, 2, undefined ]
  }
  const result = sort(fixture, by, customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: null vals', function () {
  const fixture = [
    { a: 2 },
    { a: null },
    { a: 1 }
  ]
  const expected = [
    { a: 1 },
    { a: 2 },
    { a: null }
  ]
  const by = 'a'
  const customOrder = {
    a: [ 1, 2, null ]
  }
  const result = sort(fixture, by, customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder', function () {
  const fixture = [
    { fruit: 'apple' },
    { fruit: 'orange' },
    { fruit: 'banana' },
    { fruit: 'pear' }
  ]
  const expected = [
    { fruit: 'banana' },
    { fruit: 'pear' },
    { fruit: 'apple' },
    { fruit: 'orange' }
  ]
  const by = 'fruit'
  const customOrder = {
    fruit: [ 'banana', 'pear', 'apple', 'orange' ]
  }
  const result = sort(fixture, by, customOrder)
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
  const by = [ 'importance', 'weight' ]
  const customOrder = {
    importance: [ 'speed', 'strength', 'intelligence' ],
    weight: [ 'low', 'medium', 'high' ]
  }

  const result = sort(fixture, by, customOrder)
  a.deepStrictEqual(result, expected)
})

runner.test('customOrder: jsdoc-parse usage', function () {
  const fixture = require('./fixture/jsdoc-parse')
  const expected = require('./expected/jsdoc-parse')
  const customOrder = {
    kind: [ 'class', 'constructor', 'mixin', 'member', 'namespace', 'enum', 'constant', 'function', 'event', 'typedef', 'external' ],
    scope: [ 'global', 'instance', 'static', 'inner' ]
  }
  const by = [ 'kind', 'scope' ]
  const result = sort(fixture, by, customOrder)
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
    { importance: 3, weight: null }
  ]
  const by = [ 'importance', 'weight' ]
  const customOrder = {
    importance: [ undefined, 1, 2, null, 3 ],
    weight: [ 'a', 'b', null ]
  }
  const result = sort(fixture, by, customOrder)
  a.deepStrictEqual(result, expected)
})
