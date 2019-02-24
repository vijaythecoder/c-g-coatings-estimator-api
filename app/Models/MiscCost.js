'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class MiscellaneousCost extends Model {
  
  /* Validation rules
* 
*/
static get rules () {
  return {
    desc: 'required|unique:miscellaneous_costs,desc',
    dollars: 'required'
  }
}

static updateRules (id) {
  return {
     desc: `required|unique:miscellaneous_costs,desc,id,${id}`,
     dollars: 'required'
  }
}

/* Validation messages for all validation rules
*/
static get messages () {
  return {
    'desc.required': '* Description is mandatory',
    'desc.unique': '* Description already exists! Description should be unique',
    'dollars.required': '* Price is mandatory',
  }
}

  estimate() {
    return this.belongsTo('App/Models/Estimate')
  }
}

module.exports = MiscellaneousCost
