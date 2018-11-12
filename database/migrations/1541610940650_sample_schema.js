'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SampleSchema extends Schema {
  up () {
    this.create('samples', (table) => {
      table.increments()
      table.string('name')
      table.string('userID').unique
      table.timestamps()
    })
  }

  down () {
    this.drop('samples')
  }
}

module.exports = SampleSchema
