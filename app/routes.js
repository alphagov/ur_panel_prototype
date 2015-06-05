module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // add your routes here

    // The 'NextURL' value of a branching page, should be itself

    // Age
    app.get('/apply/age', function (req, res) {
    	switch (req.query['age16']){
      		case 'age16-1'	: 	res.redirect('apply/contact-details');
      		case 'age16-2'	:  	res.redirect('apply/ineligible');
      		default			:   res.render('apply/age');
      	}
    });

    // English first language
    app.get('/apply/speak-english', function (req, res) {
      switch (req.query['english']){
          case 'english-yes'  :  res.redirect('apply/housing');
          case 'english-no'  :   res.redirect('apply/speak-english-confidence');
          default     :   res.render('apply/speak-english');
        }
    });

    // Children under 18
    app.get('/apply/children-under-18', function (req, res) {
      switch (req.query['children-under-18']){
          case 'children-under-18-yes'  :  res.redirect('apply/children-age');
          case 'children-under-18-no'  :   res.redirect('apply/employment');
          default     :   res.render('apply/children-under-18');
        }
    });
    
    // Employment
    app.get('/apply/confirmation', function (req, res) {

      if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
        res.redirect('apply/employment-sector');
      } else {
        res.render('apply/confirmation');
      }

    });


    

  }
};
