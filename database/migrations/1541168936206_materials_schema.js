'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MaterialsSchema extends Schema {
  up () {
    //creating materials table with following details
    this.create('materials', (table) => {
      table.increments()
      table.integer('estimate_id').unsigned().references('id').inTable('estimates')
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
