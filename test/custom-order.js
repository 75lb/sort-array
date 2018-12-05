const TestRunner = require('test-runner')
const sort = require('../')
const a = require('assert')

const runner = new TestRunner()

runner.skip('customOrder: undefined vals 3', function () {
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
  
  const sortBy = [ 'a' ]
  const sortTypes = [ 1, 2, undefined ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('customOrder: null vals', function () {
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
  
  const sortBy = [ 'a' ]
  const sortTypes = [ 1, 2, null ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('customOrder', function () {
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
  
  const sortBy = [ 'fruit' ]
  const sortTypes = [ 'banana', 'pear', 'apple', 'orange' ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('customOrder: two columns', function () {
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
  
  const sortBy = [ 'importance', 'weight' ]
  const sortTypes = [
    [ 'speed', 'strength', 'intelligence' ],
    [ 'low', 'medium', 'high' ]
  ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('customOrder: jsdoc-parse usage', function () {
  const fixture = require('./fixture/jsdoc-parse')
  const expected = require('./expected/jsdoc-parse')
  
  const sortBy = [ 'kind', 'scope' ]
  const sortTypes = [
    [ 'class', 'constructor', 'mixin', 'member', 'namespace', 'enum', 'constant', 'function', 'event', 'typedef', 'external' ],
    [ 'global', 'instance', 'static', 'inner' ]
  ]
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})

runner.skip('customOrder: sort nulls, 2 column customOrder', function () {
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
  
  const sortBy = [ 'importance', 'weight' ]
  const sortTypes = [
    [ undefined, 1, 2, null, 3 ],
    [ 'a', 'b', null ]
  ]
  
  const result = sort(fixture, sortBy, sortTypes)
  a.deepStrictEqual(result, expected)
})
