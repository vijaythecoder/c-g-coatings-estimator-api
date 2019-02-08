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
    password: 'adonis',
    email: faker.email()
  }
})

Factory.blueprint('App/Models/Sample', async (faker) => {
  return {
    name: faker.name(),
    userID: faker.integer({ min: 1, max: 100 })
  }
})

Factory.blueprint('App/Models/Estimate', async (faker) => {
  return {
    job_name: faker.name(),
    location: faker.name(),
    num_of_sqft: faker.integer({ min: 1, max: 100000 }),
    num_of_days: faker.integer({ min: 1, max: 365 }),
    hours_worked_per_day: faker.integer({ min: 1, max: 24 }),
    num_of_hotel_rooms : faker.integer({ min: 1, max: 100 }),
    num_of_hotel_nights :faker.integer({ min: 1, max: 100 }),
    hotel_dollars_per_night:faker.integer({ min: 1, max: 1000 }),
    food_dollars_per_day:faker.integer({ min: 1, max: 1000 }),
    num_of_vehicles:faker.integer({ min: 1, max: 100 }),
    num_of_miles_pervehicle:faker.integer({ min: 1, max: 1000 }),
    dollars_per_mile:faker.integer({ min: 1, max: 1000 }),
    multiplier:faker.integer({ min: 1, max: 50 })

  }
})

Factory.blueprint('App/Models/Material', async (faker) => {
  return {
    product: faker.name(),
    unit_cost: faker.integer({ min: 100, max: 1000 }),
    coverage_area: faker.integer({ min: 1, max: 500 })
  }
})
