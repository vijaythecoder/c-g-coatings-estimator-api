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
<<<<<<< HEAD
  async index ({ auth, request, response, view }) {
    console.log('inside Estimate controller index')
    const estimates = await Estimate.all()
    if(auth.user === null){
      return response.redirect('/')
       }
    else{
      return view.render('estimates.index', { estimates: estimates.toJSON() })

    }
=======
  async index ({ request, response, view }) {
    const estimates = await Estimate.all()
    return view.render('estimates.index', { estimates: estimates.toJSON() })
>>>>>>> a5adfb665641a7141d471857be25a8d9a6dfcf49
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
<<<<<<< HEAD
    // 
=======
    // create estimate
>>>>>>> a5adfb665641a7141d471857be25a8d9a6dfcf49
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
<<<<<<< HEAD
      const estimate = new Estimate()
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
      
      await estimate.save();
      session.flash({ notification: 'Estimate added!' })
      return response.redirect('/estimates')
=======
     // Add logic here for saving the estimate
     const estimate = new Estimate()
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
     
     await estimate.save();
     session.flash({ notification: 'Estimate added!' })
     return response.redirect('/estimates')
>>>>>>> a5adfb665641a7141d471857be25a8d9a6dfcf49
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
    return view.render('estimates.show', { estimate: estimate.toJSON() })
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
    const estimate = await Estimate.find(params.id)
<<<<<<< HEAD
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
   
   await estimate.save();
   session.flash({ notification: 'Estimate updated!' })
   return response.redirect('/estimates')
    // update estimate
=======
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
    
    await estimate.save();
    session.flash({ notification: 'Estimate updated!' })
    return response.redirect('/estimates')
>>>>>>> a5adfb665641a7141d471857be25a8d9a6dfcf49
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
    await estimate.delete()
    session.flash({ notification: 'Estimate Deleted!' })
<<<<<<< HEAD
    return response.redirect('/estimates')  }
=======
    return response.redirect('/estimates')
    // Delete estimate
  }
>>>>>>> a5adfb665641a7141d471857be25a8d9a6dfcf49
}

module.exports = EstimateController
