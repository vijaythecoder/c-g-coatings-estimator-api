'use strict'
const uuid = use('uuid/v1')
const { validate } = use('Validator')
const Hash = use('Hash')
const Mail = use('Mail')
const User = use('App/Models/User')
const Event = use('Event')
const Env = use('Env')
const app_from_title = Env.get('APP_FROM_TITLE')
const app_from_email = Env.get('APP_FROM_EMAIL')

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

    // once user is authticated redirect him to login page
    async showLogin({ view, response, auth }) {     
      if(auth.user && auth.user.id) {     
        return response.redirect('/estimates')
      }     
      return view.render('login')
    }

    // once user clicked forget password redirect him to forget password page
    async showForgot({ view, response, auth }) {     
      if(auth.user && auth.user.id) {     
        return response.redirect('/estimates')
      }     
      return view.render('forgot-password')
    }


    // is user is already logged in logout and tehen authnticate and display notification
    async login ({ request, auth, response, session }) {
        await auth.logout()
        const { email, password } = request.all()
        await auth.attempt(email, password)   
        session.flash({ notification: 'Successfully logged in' })        
        return response.redirect('/estimates')
    }

    // if unautherised user trying to access your account display message
    async show ({ auth, params }) {
        console.log('inside show')
        if (auth.user.id !== Number(params.id)) {
          return 'You cannot see someone else\'s profile'
        }
        console.log(auth.user.username)
        return auth.user
      }
      async register({request,response,session}){
        
        // creating new user by taking inputs and save them in database
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

      // Get the credentials if wrong or missing display llowing message
      async getUser({auth,response}){
        try {
          return await auth.getUser()
        } catch (error) {
          session.flash({ notification:' Credentials missing ' })
          response.send('Credentials missing')
        }
      }

        // forgot password
  async forgot ({ request, response, session }) {

    const data = request.only(['email'])

    // find or fail user by email
    const user = await User.findBy('email', data.email )
    if ( !user ) {
      session.flash({ notification: 'If the email you entered was right, in a minute you will receive the link to reset the password.' })
      return response.redirect('back')
    }

    // add reset token to user
    user.reset_token = uuid()
    await user.save()

    // resend verification
    await Mail.send('emails.forgot', { token: user.reset_token }, (message) => {
      message.from(`${app_from_title} <${app_from_email}>`)
      message.subject('Reset password')
      message.to(user.email)
    })

    // Event.fire('AUTH_FORGOT_PASSWORD', user)

    // send response
    session.flash({ notification: 'If the email you entered was right, in a minute you will receive the link to reset the password.' })
    return response.route('login')
  }

  // render reset password page
  async render_reset ({ response, params, view }) {
    const token = params.token

    // check if token exists
    if ( !token.length ) {
      return response.route('login')
    }

    // find or fail user by reset token
    const user = await User.findBy('reset_token', token )
    if ( !user ) {
      return response.route('login')
    }

    return view.render('auth.reset', { token: token })

  }

  // reset password
  async reset ({ request, response, session }) {

    const data = request.only(['token', 'password'])

    // find or fail user by reset token
    const user = await User.findBy('reset_token', data.token )
    if ( !user ) {
      return response.route('login')
    }

    // add new password to user
    user.password = await Hash.make( data.password )
    user.reset_token = null
    await user.save()

    session.flash({ flash_info: 'Password has been changed, thank you.' })
    return response.route('login')
  }
  

}

module.exports = UserController
