'use strict'

class ViewController {
    // render the views before displaying
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

    /* Send mail for contact page
  */
  async sendMail ({ request }) {
    console.log(request.all())
  }
}

module.exports = ViewController;

