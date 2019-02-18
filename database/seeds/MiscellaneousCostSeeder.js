'use strict'

/*
|--------------------------------------------------------------------------
| MiscellaneousCostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class MiscellaneousCostSeeder {
  async run () {
    await Factory.model('App/Models/MiscellaneousCost').createMany(50)
  }
}

module.exports = MiscellaneousCostSeeder
