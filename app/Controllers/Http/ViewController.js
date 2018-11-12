'use strict'

class ViewController {
    async login( {view} ){
        return view.render('login')
    }
    async contact( {view} ){
        return view.render('contact')
    }

}

module.exports = ViewController;

