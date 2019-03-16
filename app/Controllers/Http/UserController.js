'use strict'

class UserController {
    // async store ({ request, response }) {
    //     const User = use('App/Models/User')

    //     // creating first user
    //     const user = new User()
    //     user.username = "sID"
    //     user.email = 's531508@gmail.com'
    //     user.password = 'asd'
    //     await user.save()
    //     console.log("Inside userController Store")

    // }

    async showLogin({ view, response, auth }) {     
      if(auth.user && auth.user.id) {     
        return response.redirect('/estimates')
      }     
      return view.render('login')
    }

    async login ({ request, auth, response, session }) {
        await auth.logout()
        const { email, password } = request.all()
        await auth.attempt(email, password)   
        session.flash({ notification: 'Successfully logged in' })        
        return response.redirect('/estimates')
    }

    async show ({ auth, params }) {
        console.log('inside show')
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        console.log(auth.user.username)
        return auth.user
      }
      async register({request,response,session}){
        const User = use('App/Models/User');
        // creating first user
        const user = new User();
        user.username = request.only(['username']).username;
        user.email = request.only(['email']).email;
        user.password = request.only(['password']).password ;

        await user.save();
        session.flash({ notification: 'New user '+ (request.only(['email']).email)+' Registered' })     
        response.redirect('/')
    }
      // Logout functionality
      async logout({ auth, response }) {
          await auth.logout()
          return response.redirect('/login')
      }

      // Check user session is logged IN
      async checkLoggedIn({auth,response}){
        try {
            await auth.check()
          } catch (error) {
             session.flash({ notification:' Credentials missing ' })
             
             response.send(error.message)
          }
      }

      // Get the credentials and 
      async getUser({auth,response}){try {
        return await auth.getUser()
      } catch (error) {
       
        session.flash({ notification:' Credentials missing ' })
        response.send('Credentials missing')
      }}
}

module.exports = UserController
