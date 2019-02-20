'use strict'

/**
 * Resourceful controller for interacting with estimates
 */
const Estimate = use('App/Models/Estimate')
const Material = use('App/Models/Material')
var pagination = require('pagination');

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
  async index ({ auth, request, response, view }) {
    const estimates = await Estimate.query().paginate(request.input('page'), 20)
    return view.render('estimates.index', { estimates: estimates })
  }

  async home({ response }) {
    return response.redirect('/estimates')
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
    // create estimate 
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
      const estimate = new Estimate()
      const material = new Material()
      estimate.job_name = request.input('job_name')
      estimate.location = request.input('location')
      estimate.num_of_sqft = request.input('num_of_sqft')
      estimate.num_of_days = request.input('num_of_days')
      estimate.hours_worked_per_day = request.input('hours_worked_per_day')
      estimate.num_of_hotel_rooms = request.input('num_of_hotel_rooms')
      estimate.num_of_hotel_nights = request.input('num_of_hotel_nights')
      estimate.hotel_dollars_per_night = request.input('hotel_dollars_per_night')
      estimate.food_dollars_per_day = request.input('food_dollars_per_day')
      estimate.num_of_vehicles = request.input('num_of_vehicles')
      estimate.num_of_miles_pervehicle = request.input('num_of_miles_pervehicle')
      estimate.dollars_per_mile = request.input('dollars_per_mile')
      estimate.multiplier = request.input('multiplier')
      
      material.product = request.input('product')
      material.unit_cost = request.input('unit_cost')
      material.coverage_area = request.input('coverage_area')
      
      await estimate.save();
      await material.save();

      session.flash({ notification: 'Estimate added!' })
      return response.redirect('/estimates')
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
  async show ({params, request, response, view }) {
  
    const estimate = await Estimate.find(params.id)
    const material = await Material.find(params.id)
    return view.render('estimates.show', { estimate: estimate.toJSON(),material: material.toJSON() })
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
     //edit page of the estimates.
    
     console.log('edit');
     const estimate = await Estimate.find(params.id)
     const material = await Material.find(params.id)
     return view.render('estimates.edit', { estimate: estimate.toJSON(),material: material.toJSON()})
   

 
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
    const estimate = await Estimate.find(params.id)
    const material = await Material.find(params.id)
   
   estimate.job_name = request.input('job_name')
   estimate.location = request.input('location')
   estimate.num_of_sqft = request.input('num_of_sqft')
   estimate.num_of_days = request.input('num_of_days')
   estimate.hours_worked_per_day = request.input('hours_worked_per_day')
   estimate.num_of_hotel_rooms = request.input('num_of_hotel_rooms')
   estimate.num_of_hotel_nights = request.input('num_of_hotel_nights')
   estimate.hotel_dollars_per_night = request.input('hotel_dollars_per_night')
   estimate.food_dollars_per_day = request.input('food_dollars_per_day')
   estimate.num_of_vehicles = request.input('num_of_vehicles')
   estimate.num_of_miles_pervehicle = request.input('num_of_miles_pervehicle')
   estimate.dollars_per_mile = request.input('dollars_per_mile')
   estimate.multiplier = request.input('multiplier')
   

   material.product = request.input('product')
   material.unit_cost = request.input('unit_cost')
   material.coverage_area = request.input('coverage_area')
   
   await estimate.save();
   await material.save();
   session.flash({ notification: 'Estimate updated! Materials updated' })
   return response.redirect('/estimates')
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
    const estimate = await Estimate.find(params.id)
    const material = await Material.find(params.id)
    await estimate.delete()
    await material.delete()
    session.flash({ notification: 'Estimate and Material Deleted!' })
    return response.redirect('/estimates')  }
}

module.exports = EstimateController
