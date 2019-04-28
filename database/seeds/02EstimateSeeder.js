'use strict'

/*
|--------------------------------------------------------------------------
| EstimateSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')


class EstimateSeeder {
  async run () {
    // create 100 samples for estimates
    await Factory.model('App/Models/Estimate').createMany(100)
    
  }
}

module.exports = EstimateSeeder
