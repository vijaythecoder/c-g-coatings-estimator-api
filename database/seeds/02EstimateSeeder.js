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
// const Database = use('Database')

class EstimateSeeder {
  async run () {
    await Factory.model('App/Models/Estimate').createMany(100)
    // const estimates = await Database.table('Estimates')
    // console.log(estimates)
    
  }
}

module.exports = EstimateSeeder
