'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstimatesMaterialsSchema extends Schema {
  up () {
    this.create('estimates_materials', (table) => {
      table.increments()
      table.integer('estimate_id').unique().references('id').inTable('Estimates')
      table.integer('material_id').unique().references('id').inTable('MiscellaneousCosts')
      table.timestamps()
    })
  }

  down () {
    this.drop('estimates_materials')
  }
}

module.exports = EstimatesMaterialsSchema
