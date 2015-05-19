module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here


    // Check age
    app.get('/apply/age', function (req, res) {
    	switch (req.query['age16']){
      		case 'age16-1'	: 	res.redirect('apply/contact-details');
      		case 'age16-2'	:  	res.redirect('apply/ineligible');
      		default			:   res.render('apply/age');
      	}
    });

  }
};
