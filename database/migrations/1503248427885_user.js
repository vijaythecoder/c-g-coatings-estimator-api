'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
//creating user model with username, email, password.
      table.increments()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.string('confirmation_token')
      table.string('reset_token')

      table.timestamps()
     
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
