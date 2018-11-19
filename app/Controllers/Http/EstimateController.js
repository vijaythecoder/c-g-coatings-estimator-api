'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estimates
 */
//const estimate = use('App/Model/Estimate')
class EstimateController {
  /**
   * Show a list of all estimates.
   * GET estimates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async index ({ request, response, view }) {
  //   const estimates = yield estimate.all()
  //   yield response.sendView('create', { estimates: estimates.toJSON() })
  //  // return view.render('index')
  // }

  /**
   * Render a form to be used for creating a new estimate.
   * GET estimates/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    

    return view.render('create')

  }


  /**
   * Create/save a new estimate.
   * POST estimates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single estimate.
   * GET estimates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const posts = [
      {title: 'Job name', body: 'name'},
      {title: 'location', body: 'location'},
      {title: 'num_of_sqft', body: 'sqft'},
      {title: 'num_of_days', body: 'days'},

    ]
	return view.render('show', {
    title: 'Estimates',
    posts: posts
  })

}
    
    
  

  /**
   * Render a form to update an existing estimate.
   * GET estimates/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    return view.render('edit')
  }

  /**
   * Update estimate details.
   * PUT or PATCH estimates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a estimate with id.
   * DELETE estimates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
  

}

module.exports = EstimateController
