'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialsSchema extends Schema {
  up () {
    this.create('materials', (table) => {
      table.increments()
      table.string('product').unique()
      table.integer('unit_cost')
      table.integer('coverage_area')
      table.timestamps()
    })
  }

  down () {
    this.drop('materials')
  }
}

module.exports = MaterialsSchema
