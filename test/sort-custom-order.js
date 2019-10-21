const Tom = require('test-runner').Tom
const sort = require('../')
const a = require('assert')

const tom = module.exports = new Tom('sort-custom-order')

tom.test('unnamed sort order (inc undefined) 1', function () {
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

  const by = ['a']
  const order = ['custom']
  const custom = [1, 2, undefined]
  const result = sort(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

tom.test('named sort order (inc undefined) 1', function () {
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

  const by = ['a']
  const order = ['custom']
  const custom = [1, 2, undefined]
  const result = sort(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

tom.test('unnamed sort order (inc null) 1', function () {
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

  const by = ['a']
  const order = ['custom']
  const custom = [1, 2, null]
  const result = sort(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

tom.test('unnamed sort order 1', function () {
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

  const by = ['fruit']
  const order = ['custom']
  const custom = ['banana', 'pear', 'apple', 'orange']
  const result = sort(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

tom.test('unnamed 2-column sort 1', function () {
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

  const by = ['importance', 'weight']
  const order = ['importance', 'weight']
  const customOrders = {
    importance: ['speed', 'strength', 'intelligence'],
    weight: ['low', 'medium', 'high']
  }
  const result = sort(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})

tom.test('jsdoc-parse usage 1', function () {
  const fixture = require('./fixture/jsdoc-parse')
  const expected = require('./expected/jsdoc-parse')

  const by = ['kind', 'scope']
  const order = ['kind', 'scope']
  const customOrders = {
    kind: ['class', 'constructor', 'mixin', 'member', 'namespace', 'enum', 'constant', 'function', 'event', 'typedef', 'external'],
    scope: ['global', 'instance', 'static', 'inner']
  }
  const result = sort(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})

tom.test('unnamed 2-column sort (inc null) 1', function () {
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

  const by = ['importance', 'weight']
  const order = ['importance', 'weight']
  const customOrders = {
    importance: [undefined, 1, 2, null, 3],
    weight: ['a', 'b', null]
  }
  const result = sort(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})

tom.test('named 2-column sort (inc null) 1', function () {
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

  const by = ['importance', 'weight']
  const order = ['importance', 'weight']
  const customOrders = {
    importance: [undefined, 1, 2, null, 3],
    weight: ['a', 'b', null]
  }
  const result = sort(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})
