'use strict'

class UserController {
    async store ({ request, response }) {
        const User = use('App/Models/User')
        const user = new User()
        user.username = "sID"
        user.email = 's531508@gmail.com'
        user.password = 'asd'
        await user.save()
        console.log("Inside userController Store")
    }

    async login ({ request, auth }) {
        await auth.logout()
        const { email, password } = request.all()
        console.log('Inside login ')

        await auth.attempt(email, password)   
        // console.log(auth.email)
        // console.log(auth.id)
        
        return 'Logged in successfully'
    }

    show ({ auth, params }) {
        console.log('inside show')
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        console.log(auth.user.username)
        return auth.user
      }
      
    //   logout(){
    //   await auth.logout()
    //   }
}

module.exports = UserController
