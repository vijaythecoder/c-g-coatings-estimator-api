'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with estimates
 */
const Estimate = use('App/Models/Estimate')
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
  async index ({ request, response, view }) {
    // List out all the estimates
  }

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
    return view.render('estimates.create', { estimate: [] })
  }

  /**
   * Create/save a new estimate.
   * POST estimates
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, session }) {
    // Add logic here for saving the estimate
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
    // show single estimate
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
    // Edit Estimate
  }

  /**
   * Update estimate details.
   * PUT or PATCH estimates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, session }) {

    // update estimate
  }

  /**
   * Delete a estimate with id.
   * DELETE estimates/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response, session }) {
    // Delete estimate
  }
}

module.exports = EstimateController
