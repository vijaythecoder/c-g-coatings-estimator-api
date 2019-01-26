'use strict'

class ViewController {
    async contact( {view} ){
        return view.render('contact')
    }
    async create( {view} ){
        return view.render('create')
    }
    async delete( {view} ){
        return view.render('delete')
    }
    async edit( {view} ){
        return view.render('edit')
    }
    async show( {view} ){
        return view.render('show')
    }
    async estimate( {view} ){
        return view.render('estimate')
    }
}

module.exports = ViewController;

