'use strict'

class EstimatorController {
    async login( {view} ){
        return view.render('login')
    }

}

module.exports = EstimatorController
