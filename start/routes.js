'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', 'UserController.showLogin')
Route.get('/login', 'UserController.showLogin')

//Routes for estimates and materials

Route.resource('/estimates', 'EstimateController').middleware(['auth'])
Route.put('estimates/:id', 'EstimateController.update').middleware('auth')
Route.get('/estimates/:id/duplicate', 'EstimateController.duplicate')
Route.get('/add-material/:id', 'EstimateController.addMaterial')
Route.post('/add-material/:id', 'EstimateController.saveMaterial')
Route.get('/add-misc/:id', 'EstimateController.addMisc')
Route.post('/add-misc/:id', 'EstimateController.saveMisc')
Route.post('login', 'UserController.login')

Route.resource('/users','UserController')

//conact form routes
Route.get('/contact', 'EstimateController.contact')
Route.post('/send-mail', 'EstimateController.sendMail')
Route.resource('/UserController', 'UserController')

// 
Route.get('/posts', async () => {
    return await Database.table('samples').select('*')
  })

  // Route.post('/login', 'UserController.login')
  Route.get('/login','UserController.show')
  Route.get('/logout','UserController.logout')
  // Route.post('/login', 'UserController.store')

  //Register 
  Route.on('/register').render('register').middleware(['auth']);
  Route.post('register','UserController.register').middleware(['auth']);



