'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')


class Material extends Model {

/* Validation rules
* 
*/
static get rules () {
  return {
    product: 'required|unique:materials,product',
    unit_cost: 'required'
  }
}

static updateRules (id) {
  return {
     product: `unique:materials,product,id,${id}`,
    //  unit_cost: 'required'
  }
}

/* Validation messages for all validation rules
*/
static get messages () {
  return {
    'product.required': '* Product is mandatory',
    'product.unique': '* Product already exists! Product should be unique',
    'unit_cost.required': '* Unit cost is mandatory',
  }
}
  estimate() {
    return this.belongsTo('App/Models/Estimate')
  }
}

module.exports = Material
