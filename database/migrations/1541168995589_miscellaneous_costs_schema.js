'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MiscellaneousCostsSchema extends Schema {
  up () {
    this.create('miscellaneous_costs', (table) => {
      table.increments()
      table.string('desc').unique()
      // table.integer('estimate_id').references('id').inTable('materials')
      table.integer('dollars')
      table.timestamps()
    })
  }

  down () {
    this.drop('miscellaneous_costs')
  }
}

module.exports = MiscellaneousCostsSchema
