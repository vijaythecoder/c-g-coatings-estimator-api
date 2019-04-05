'use strict'
const operations = use('/operations')
const { test } = use('Test/Suite')('Test')
const Estimate = use('App/Models/Estimate')

test('make sure add operation gives 4', async ({ assert }) => {
  assert.equal(operations.add(1, 3), 4)
})

let data = {
  name: 'aakcja',
  acasd: 'avsd'
} 

test('Testing if job is created and generating numeric ID', async ({ assert }) => {
  let estimate = Estimate.create(data)
  console.log(estimate.id)
  // assert.isNumber(estimate.id)

})

// estimate.name = 'vijay'