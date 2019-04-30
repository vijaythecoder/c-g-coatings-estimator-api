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

// We are creating Users data with columns username, password, email.
Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    password: 'adonis',
    email: faker.email()
  }
})

/**  */

Factory.blueprint('App/Models/Estimate', async (faker) => {
  return {
    job_name: faker.name(),
    location: faker.address(),
    num_of_sqft: faker.integer({ min: 1, max: 10000 }),
    num_of_days: faker.integer({ min: 1, max: 365 }),
    num_of_people :  faker.integer({ min: 1, max: 100 }),
    hours_worked_per_day: faker.integer({ min: 1, max: 24 }),
    dollar_per_hour: faker.integer({min:1, max:40}),
    num_of_hotel_rooms : faker.integer({ min: 1, max: 100 }),
    num_of_hotel_nights :faker.integer({ min: 1, max: 100 }),
    hotel_dollars_per_night:faker.integer({ min: 1, max: 100 }),
    food_dollars_per_day:faker.integer({ min: 1, max: 100 }),
    num_of_vehicles:faker.integer({ min: 1, max: 100 }),
    num_of_miles_pervehicle:faker.integer({ min: 1, max: 100 }),
    dollars_per_mile:faker.integer({ min: 1, max: 100 }),
    multiplier:faker.integer({ min: 1, max: 10 })

  }
})

Factory.blueprint('App/Models/Material', async (faker) => {
  return {
    estimate_id: faker.integer({ min: 1, max: 100 }),
    product: faker.name(),
    unit_cost: faker.integer({ min: 100, max: 1000 }),
    coverage_area: faker.integer({ min: 1, max: 500 })
  }
})

Factory.blueprint('App/Models/MiscCost', async (faker) => {
  return {
    estimate_id: faker.integer({ min: 1, max: 100 }),
    desc: faker.name(),
    dollars: faker.integer({ min: 100, max: 1000 })
        
  }
})
