'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EstimatesSchema extends Schema {
  up () {
    this.create('estimates', (table) => {
      table.increments()
      table.string('job_name').unique()
      table.string('location')
      table.integer('num_of_sqft').defaultTo(10)
      table.integer('num_of_days').defaultTo(1)
      table.integer('hours_worked_per_day')
      table.integer('num_of_hotel_rooms')
      table.integer('num_of_hotel_nights')
      table.integer('hotel_dollars_per_night')
      table.integer('food_dollars_per_day')
      table.integer('num_of_vehicles')
      table.integer('num_of_miles_pervehicle')
      table.float('dollars_per_mile')
      table.float('multiplier')
      table.integer('cost_id').references('id').inTable('MiscellaneousCosts')
      table.integer('material_id').references('id').inTable('Materials')
      table.timestamps()
    })
  }

  down () {
    this.drop('estimates')
  }
}

module.exports = EstimatesSchema
