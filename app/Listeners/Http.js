'use strict'

const Http = exports = module.exports = {}
console.log("In the listeners")
Http.method = async () => {
    
    Http.handleError = function * (error, request, response) {
        if (error.name === 'ModelNotFoundException') { (1)
          yield response.status(404).sendView('404')
          return
        }
        if (error.name === 'InvalidSessionException') { (2)
            yield response.status(1132).sendView('1132')
            console.log("Invalid session exception handled")
          return "hi"
        }
      
        if (error.name === 'PasswordMisMatch') { (3)
          response.status(400).send('Invalid credentials')
          return
        }
      
        response.status(error.status).send(error.message) (4)
      }
}

