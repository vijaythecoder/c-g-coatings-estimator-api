'use strict'

class UserController {
    async store ({ request, response }) {
        const User = use('App/Models/User')

        // creating first user
        const user = new User()
        user.username = "sID"
        user.email = 's531508@gmail.com'
        user.password = 'asd'
        await user.save()
        console.log("Inside userController Store")
    }

    async login ({ request, auth, response, session }) {
        await auth.logout()
        const { email, password } = request.all()
        // console.log('Inside login ')

        await auth.attempt(email, password)   
        session.flash({ notification: 'Successfully logged in' })        
        return response.redirect('/estimates')
    }

    show ({ auth, params }) {
        console.log('inside show')
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        console.log(auth.user.username)
        return auth.user
      }
      
      async logout({ auth, response }) {
          await auth.logout()
          return response.redirect('/')
      }
}

module.exports = UserController
