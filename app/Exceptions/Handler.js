'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

/**
 * This class handles all exceptions thrown during
 * the HTTP request lifecycle.
 *
 * @class ExceptionHandler
 */
class ExceptionHandler extends BaseExceptionHandler {
  /**
   * Handle exception thrown during the HTTP lifecycle
   *
   * @method handle
   *
   * @param  {Object} error
   * @param  {Object} options.request
   * @param  {Object} options.response
   *
   * @return {void}
   */
  async handle (error, { request, response, session }) {
    // console.log(error.name)
    if (error.name === 'ValidationException') {
      session.withErrors(error.messages).flashAll()
      await session.commit()
      return response.redirect('back')
    }
    if (error.name === 'InvalidSessionException'){
      session.flash({ notification:' You need to login first' })   
      await session.commit()
      return response.redirect('/login')
    }

    if (error.name === 'PasswordMisMatchException'){
      session.flash({ notification:'Your password is invalid' }) 
      await session.commit()
      return response.redirect('/login')
    }

    if (error.name === 'UserNotFoundException'){
      session.flash({ notification:'Your email is not found' }) 
      await session.commit()
      return response.redirect('/login')
    }

    response.status(error.status).send(error.message)
  }

  /**
   * Report exception for logging or debugging.
   *
   * @method report
   *
   * @param  {Object} error
   * @param  {Object} options.request
   *
   * @return {void}
   */
  async report (error, { request }) {
  }
}

module.exports = ExceptionHandler
