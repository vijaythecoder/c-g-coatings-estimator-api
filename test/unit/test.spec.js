'use strict'
const operations = use('/operations')
const { test } = use('Test/Suite')('Test')

test('make sure add operation gives 4', async ({ assert }) => {
  assert.equal(operations.add(1, 3), 4)
})
