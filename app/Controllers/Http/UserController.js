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
        console.log('Inside login ')
        try{
        await auth.attempt(email, password)
        session.flash({ notification:' Successfully logged in' })   
        }
        catch{
        session.flash({ notification:' Enter correct credentials' }) 
        }      
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
        // session.flash({ notification: 'Successfully Registered' }) 
        session.flash({ notification: 'New user '+ (request.only(['email']).email)+' Registered' })     
        console.log("New user "+ (request.only(['email']).email)+" Registered")
        console.log("Inside userController Register");
        response.redirect('/')
    }
    // async isLoggedIn({request,response,auth}){
    //     if(auth.)
    // }
      
      async logout({ auth, response }) {
          await auth.logout()
          return response.redirect('/')
      }
      async checkLoggedIn({auth,response}){
          console.log('Inside checkLoggedIn')
        try {
            await auth.check()
          } catch (error) {
            session.flash({ notification:' Credentials missing ' })
            response.send(error.message)
          }
      }

      async getUser({auth,response}){try {
        console.log('Inside getuser')
        return await auth.getUser()
      } catch (error) {
        session.flash({ notification:' Credentials missing ' })
        response.send('Credentials missing')
      }}
}

module.exports = UserController
