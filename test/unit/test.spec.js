'use strict'
const operations = use('/operations')
const { test } = use('Test/Suite')('Test')
const Estimate = use('App/Models/Estimate')

test('make sure add operation gives 4', async ({ assert }) => {
  assert.equal(operations.add(1, 3), 4)
})

let data = {
  job_name: 'newChange',
 num_of_days: 12
} 

test('Testing if job is created and generating numeric ID', async ({ assert }) => {
  const estimated = new Estimate()
  estimated.job_name =  'newjjChange',
  estimated.num_of_days =  12
  await estimated.save();
  console.log(estimated.id)
  assert.isNumber(estimated.id)
})


test('Testing if estimate can be edited', async ({ assert }) => {
  const estimate = await Estimate.find(34)
  estimate.job_name = 'sairam';
  await estimate.save();
  const nameAltered = await Estimate.find(34)
  assert.equal(nameAltered.toJSON().job_name,'sairam');
})
