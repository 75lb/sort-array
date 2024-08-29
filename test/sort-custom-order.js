import sortArray from 'sort-array'
import jsdocParseFixture from './fixture/jsdoc-parse.js'
import jsdocParseExpected from './expected/jsdoc-parse.js'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]

test.set('unnamed sort order (inc undefined) 1', function () {
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
  const result = sortArray(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

test.set('named sort order (inc undefined) 1', function () {
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
  const result = sortArray(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

test.set('unnamed sort order (inc null) 1', function () {
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
  const result = sortArray(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

test.set('unnamed sort order 1', function () {
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
  const result = sortArray(fixture, { by, order, customOrders: { custom }})
  a.deepStrictEqual(result, expected)
})

test.set('unnamed 2-column sort 1', function () {
  const fixture = [
    { skill: 'intelligence', weight: 'medium' },
    { skill: 'strength', weight: 'high' },
    { skill: 'speed', weight: 'low' },
    { skill: 'strength', weight: 'low' },
    { skill: 'speed', weight: 'high' },
    { skill: 'intelligence', weight: 'low' },
    { skill: 'speed', weight: 'medium' },
    { skill: 'intelligence', weight: 'high' },
    { skill: 'strength', weight: 'medium' }
  ]
  const expected = [
    { skill: 'speed', weight: 'low' },
    { skill: 'speed', weight: 'medium' },
    { skill: 'speed', weight: 'high' },
    { skill: 'strength', weight: 'low' },
    { skill: 'strength', weight: 'medium' },
    { skill: 'strength', weight: 'high' },
    { skill: 'intelligence', weight: 'low' },
    { skill: 'intelligence', weight: 'medium' },
    { skill: 'intelligence', weight: 'high' }
  ]

  const by = ['skill', 'weight']
  const order = ['skill', 'weight']
  const customOrders = {
    skill: ['speed', 'strength', 'intelligence'],
    weight: ['low', 'medium', 'high']
  }
  const result = sortArray(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})

test.set('jsdoc-parse usage 1', function () {
  const by = ['kind', 'scope']
  const order = ['kind', 'scope']
  const customOrders = {
    kind: ['class', 'constructor', 'mixin', 'member', 'namespace', 'enum', 'constant', 'function', 'event', 'typedef', 'external'],
    scope: ['global', 'instance', 'static', 'inner']
  }
  const result = sortArray(jsdocParseFixture, { by, order, customOrders })
  a.deepStrictEqual(result, jsdocParseExpected)
})

test.set('unnamed 2-column sort (inc null) 1', function () {
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
  const result = sortArray(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})

test.set('named 2-column sort (inc null) 1', function () {
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
  const result = sortArray(fixture, { by, order, customOrders })
  a.deepStrictEqual(result, expected)
})

export { test, only, skip }
