'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstimatesMisccostsSchema extends Schema {
  up () {
    this.create('estimates_misccosts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('estimates_misccosts')
  }
}

module.exports = EstimatesMisccostsSchema
