'use strict'

/**
 * Resourceful controller for interacting with estimates
 */
const Estimate = use('App/Models/Estimate')
const Material = use('App/Models/Material')
const MiscCost = use('App/Models/MiscCost')
const Mail = use('Mail')

const { validateAll } = use('Validator')
// var pagination = require('pagination');

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
    
    //Validating the estimate
    const validation = await validateAll(request.all(), Estimate.rules, Estimate.messages)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        session.flash({ notification: 'Fix the validation errors!' })
      return response.redirect('back')
    }

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
    const material = new Material()
    material.product = request.input('product')
    material.unit_cost = request.input('unit_cost')
    material.coverage_area = request.input('coverage_area')
    await estimate.materials().saveMany([material])
      
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
  async show ({params, view }) {
    
    const estimate = await Estimate.find(params.id)
    const materials = await estimate.materials().fetch()
    const miscCosts = await estimate.miscellaneous().fetch()
    return view.render('estimates.show', { estimate: estimate.toJSON(), materials: materials.toJSON(), miscCosts: miscCosts.toJSON() })
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
  async edit ({ params, view }) {
     //edit page of the estimates.
    
     console.log('edit');
    
     const estimate = await Estimate.find(params.id)
     const materials = await estimate.materials().fetch()
    const miscCosts = await estimate.miscellaneous().fetch()
     return view.render('estimates.edit', { estimate: estimate.toJSON(),materials: materials.toJSON(), miscCosts: miscCosts.toJSON()})
  }

  async duplicate ({ params, view }) {
    //Duplicate page of the estimates.
    
   
    const estimate = await Estimate.find(params.id)
    estimate.job_name = ''
    return view.render('estimates.duplicate', { estimate: estimate.toJSON()})
  


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
    
    //Validating the estimate
    const validation = await validateAll(request.all(), Estimate.updateRules(params.id), Estimate.messages)
    
    if (validation.fails()) {
      session
        .withErrors(validation.messages())
      return response.redirect('back')
    }
    
    const estimate = await Estimate.find(params.id)
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

   
   if(typeof request.input('material') != "undefined") {
     let obj = Object.keys(request.input('material'))
     if(obj.length) {
       let values = Object.values(request.input('material'))
       for (let i of values) {
        await Material.query().where('id', i.id)
        .update({'product': i.product,
                 'unit_cost': i.unit_cost,
                 'coverage_area': i.coverage_area })
       }
      }
    }
    if(typeof request.input('miscCost')!= "undefined") {
      let obj = Object.keys(request.input('miscCost'))
     if(obj.length) {
       let values = Object.values(request.input('miscCost'))
       for (let i of values) {
        await MiscCost.query().where('id', i.id)
        .update({'desc': i.desc,
                 'dollars': i.dollars })
       }
      }
    }
   
   session.flash({ notification: 'Estimate, materials, miscellaneous costs are updated' })
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
     await estimate.materials().delete()
     await estimate.miscellaneous().delete()
     await estimate.delete()
     session.flash({ notification: 'Estimate and Material Deleted!' })
     return response.redirect('/estimates')  
  }

  /* Show form to add a new material
  */
  async addMaterial ({ params, view }) {
    return view.render('estimates.addMaterial', { estimate_id: params.id})
  }

  /* Add new material for an associated estimate
  */
  async saveMaterial ({ request, response, session }) {
    //Validating the material
    const validation = await validateAll(request.all(), Material.rules, Material.messages)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
         
         session.flash({ notification: 'Fix the validation errors!' })
      return response.redirect('back')
    }

    // saving the material
    const material = new Material()
    material.product = request.input('product')
    material.unit_cost = request.input('unit_cost')
    material.coverage_area = request.input('coverage_area')
    material.estimate_id = request.input('id')

   await material.save();
    session.flash({ notification: 'Material added!' })
    return response.redirect('/estimates/' + request.input('id'))
  }

  /* Show form to add a new material
  */
  async addMisc ({ params, view }) {
    return view.render('estimates.addMisc', { estimate_id: params.id})
  }

  /* Add new material for an associated estimate
  */
  async saveMisc ({ request, response, session }) {
    //Validating the miscellaneous cost
    const validation = await validateAll(request.all(), MiscCost.rules, MiscCost.messages)

    if (validation.fails()) {
      session
        .withErrors(validation.messages())
        session.flash({ notification: 'Fix the validation errors!' })
      return response.redirect('back')
    }

    // Add logic here for saving the miscellaneous cost
    const misc = new MiscCost()
    misc.desc = request.input('desc')
   misc.dollars = request.input('dollars')
   misc.estimate_id = request.input('id')

   await misc.save();
    session.flash({ notification: 'Miscellaneous cost added!' })
    return response.redirect('/estimates/' + request.input('id'))
  }

  async contact ({ params, view }) {
    return view.render('estimates.contact')
  }

   /* Send mail for contact page
  */
 async sendMail ({ request, response, session }) {
   const data = request.all()
   console.log(data)
  await Mail.send('contact', data, (message) => {
    message
      .to('hello@vijaykumar.me')
      .from(data.email)
      .subject('support mail')
  })
  session.flash({ notification: 'Thanks for contacting us! We will get back to you soon!' })
  return response.redirect('back')
}

}


module.exports = EstimateController
