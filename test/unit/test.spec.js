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


test('Testing if estimate can be edited', async ({ assert }) => {
  const estimate = await Estimate.find(34)
  console.log(estimate.toJSON().job_name)
  estimate.job_name = 'sairam';
  const nameAltered = await Estimate.find(34)
  console.log(estimate.toJSON().job_name);
  console.log(nameAltered.toJSON().job_name);
  assert.equal(nameAltered.toJSON().job_name,'sairam');
  // assert.isNumber(estimate.id)
})
