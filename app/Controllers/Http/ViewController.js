'use strict'

class ViewController {
    // render the views before displaying
    async contact( {view} ){
        return view.render('contact')
    }
    // render the create views before displaying
    async create( {view} ){
        return view.render('create')
    }
     // render the delete views before displaying
    async delete( {view} ){
        return view.render('delete')
    }
    // render the edit views before displaying
    async edit( {view} ){
        return view.render('edit')
    }
    // render the show views before displaying
    async show( {view} ){
        return view.render('show')
    }
        // render the estimate view before displaying
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

