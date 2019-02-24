'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MiscellaneousCostsSchema extends Schema {
  up () {
    this.create('miscellaneous_costs', (table) => {
      table.increments()
      table.integer('estimate_id').unsigned().references('id').inTable('estimates')
      table.string('desc').unique()
      table.integer('dollars')
      table.timestamps()
    })
  }

  down () {
    this.drop('miscellaneous_costs')
  }
}

module.exports = MiscellaneousCostsSchema
