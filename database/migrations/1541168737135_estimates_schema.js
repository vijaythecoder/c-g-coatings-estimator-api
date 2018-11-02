'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstimatesSchema extends Schema {
  up () {
    this.create('estimates', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('estimates')
  }
}

module.exports = EstimatesSchema
