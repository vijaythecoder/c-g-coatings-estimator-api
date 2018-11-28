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
const Database = use('Database')

// Route.on('/').render('welcome')
Route.on('/').render('login')

Route.resource('/jobs', 'JobController')
Route.resource('/estimates', 'EstimateController').middleware(['auth'])

Route.resource('/users','UserController')

Route.get('/contact', 'ViewController.contact')

Route.get('/posts', async () => {
    return await Database.table('samples').select('*')
  })

  //for authentication
  Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')

  Route.post('/login', 'UserController.login')
  Route.get('/login','UserController.show')
  Route.get('/logout','UserController.logout')
  // Route.post('/login', 'UserController.store')



