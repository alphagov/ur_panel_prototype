module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    app.get('/examples/template-data', function (req, res) {
      res.render('examples/template-data', { 'name' : 'Foo' });
    });

    // ROUTES - V1

    // Age
    app.get('/apply-1/age', function (req, res) {
    	switch (req.query['age16']){
      		case 'age16-1'	: 	res.redirect('apply-1/contact-details');
      		case 'age16-2'	:  	res.redirect('apply-1/ineligible');
      		default			:   res.render('apply-1/age');
      	}
    });

    // English first language
    app.get('/apply-1/speak-english', function (req, res) {
      switch (req.query['english']){
          case 'english-yes'  :  res.redirect('apply-1/housing');
          case 'english-no'  :   res.redirect('apply-1/speak-english-confidence');
          default     :   res.render('apply-1/speak-english');
        }
    });

    // Children under 18
    app.get('/apply-1/children-under-18', function (req, res) {
      switch (req.query['children-under-18']){
          case 'children-under-18-yes'  :  res.redirect('apply-1/children-age');
          case 'children-under-18-no'  :   res.redirect('apply-1/employment');
          default     :   res.render('apply-1/children-under-18');
        }
    });
    
    // Employment
    app.get('/apply-1/confirmation', function (req, res) {

      if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
        res.redirect('apply-1/employment-sector');
      } else {
        res.render('apply-1/confirmation');
      }

    });



    // ROUTES - V2
 
    // Age
    app.get('/apply-2/age', function (req, res) {
      switch (req.query['age16']){
          case 'age16-1'  :   res.redirect('apply-2/contact-details');
          case 'age16-2'  :   res.redirect('apply-2/ineligible');
          default     :   res.render('apply-2/age');
        }
    });

    // English first language
    app.get('/apply-2/speak-english', function (req, res) {
      switch (req.query['english']){
          case 'english-yes'  :  res.redirect('apply-2/housing');
          case 'english-no'  :   res.redirect('apply-2/speak-english-confidence');
          default     :   res.render('apply-2/speak-english');
        }
    });

    // Children under 18
    app.get('/apply-2/children-under-18', function (req, res) {
      switch (req.query['children-under-18']){
          case 'children-under-18-yes'  :  res.redirect('apply-2/children-age');
          case 'children-under-18-no'  :   res.redirect('apply-2/employment');
          default     :   res.render('apply-2/children-under-18');
        }
    });
    
    // Employment
    app.get('/apply-2/confirmation', function (req, res) {

      if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
        res.redirect('apply-2/employment-sector');
      } else {
        res.render('apply-2/confirmation');
      }

    });   

  }
};
