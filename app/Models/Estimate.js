'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Estimate extends Model {

  /* Validation rules
* 
*/
static get rules () {
  return {
    job_name: `required|unique:estimates,job_name,id,${this.id}`,
    num_of_people: 'required',
    num_of_days: 'required'
  }
}

static updateRules (estimate_id) {
  return {
    job_name: `required|unique:estimates,job_name,id,${estimate_id}`,
  }
}

/* Validation messages for all validation rules
*/
static get messages () {
  return {
    'job_name.required': '* Job name is mandatory',
    'job_name.unique': '* Job name already exists! It must be unique',
    'num_of_people.required': '* No. of people is mandatory',
    'num_of_days.required': '* No. of days is mandatory'
  }
}

  materials() {
    return this.hasMany('App/Models/Material')
  }
  miscellaneous() {
    return this.hasMany('App/Models/MiscCost')
  }
}

module.exports = Estimate
