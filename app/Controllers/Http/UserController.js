'use strict'

class UserController {
    async store ({ request, response }) {
        const User = use('App/Models/User')
        const user = new User()
        user.username = "asdfas"
        user.email = 'virk@gmail.com'
        user.password = 'some-password'
        await user.save()
        console.log("Inside userController Store")
    }

    async login ({ request, auth }) {

        const { email, password } = request.all()
        console.log('Inside login ')
        console.log(auth.email)
        console.log(auth.id)
        await auth.attempt(email, password)       
        return 'Logged in successfully'
    }

    show ({ auth, params }) {
        console.log('inside show')
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        return auth.user
      }
      
    //   logout(){
    //   await auth.logout()
    //   }
}

module.exports = UserController
