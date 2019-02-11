'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RelationsSchema extends Schema {
  up () {
    this.table('estimates', (table) => {
      table.integer('cost_id').unsigned().references('id').inTable('miscellaneous_costs')
      table.integer('material_id').unsigned().references('id').inTable('materials')
    })

    this.table('miscellaneous_costs', (table) => {
      table.integer('estimate_id').unsigned().references('id').inTable('materials')
    })

  }

  down () {
    this.table('relations', (table) => {
      // reverse alternations
    })
  }
}

module.exports = RelationsSchema
