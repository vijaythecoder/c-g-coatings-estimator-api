'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MiscellaneousCostsSchema extends Schema {
  up () {
    this.create('miscellaneous_costs', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('miscellaneous_costs')
  }
}

module.exports = MiscellaneousCostsSchema
