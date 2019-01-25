'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    password: await Hash.make('adonis'),
    email: faker.email()
  }
})

Factory.blueprint('App/Models/Sample', async (faker) => {
  return {
    name: faker.name(),
    userID: faker.integer({ min: 1, max: 100 })
  }
})

Factory.blueprint('App/Models/Material', async (faker) => {
  return {
    product: faker.name(),
    unit_cost: faker.integer({ min: 100, max: 1000 }),
    coverage_area: faker.integer({ min: 1, max: 500 })
  }
})
