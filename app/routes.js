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
    app.get('/version-1/age', function (req, res) {
    	switch (req.query['age16']){
      		case 'age16-1'	: 	res.redirect('version-1/contact-details');
      		case 'age16-2'	:  	res.redirect('version-1/ineligible');
      		default			:   res.render('version-1/age');
      	}
    });

    // English first language
    app.get('/version-1/speak-english', function (req, res) {
      switch (req.query['english']){
          case 'english-yes'  :  res.redirect('version-1/housing');
          case 'english-no'  :   res.redirect('version-1/speak-english-confidence');
          default     :   res.render('version-1/speak-english');
        }
    });

    // Children under 18
    app.get('/version-1/children-under-18', function (req, res) {
      switch (req.query['children-under-18']){
          case 'children-under-18-yes'  :  res.redirect('version-1/children-age');
          case 'children-under-18-no'  :   res.redirect('version-1/employment');
          default     :   res.render('version-1/children-under-18');
        }
    });

    // Employment
    app.get('/version-1/confirmation', function (req, res) {

      if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
        res.redirect('version-1/employment-sector');
      } else {
        res.render('version-1/confirmation');
      }

    });



    // ROUTES - V2

    // Age
    app.get('/version-2/age', function (req, res) {
      switch (req.query['age16']){
          case 'age16-1'  :   res.redirect('version-2/contact-details');
          case 'age16-2'  :   res.redirect('version-2/ineligible');
          default     :   res.render('version-2/age');
        }
    });

    // English first language
    app.get('/version-2/speak-english', function (req, res) {
      switch (req.query['english']){
          case 'english-yes'  :  res.redirect('version-2/housing');
          case 'english-no'  :   res.redirect('version-2/speak-english-confidence');
          default     :   res.render('version-2/speak-english');
        }
    });

    // Children under 18
    app.get('/version-2/children-under-18', function (req, res) {
      switch (req.query['children-under-18']){
          case 'children-under-18-yes'  :  res.redirect('version-2/children-age');
          case 'children-under-18-no'  :   res.redirect('version-2/employment');
          default     :   res.render('version-2/children-under-18');
        }
    });

    // Employment
    app.get('/version-2/confirmation', function (req, res) {

      if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
        res.redirect('version-2/employment-sector');
      } else {
        res.render('version-2/confirmation');
      }

    });


    // ROUTES - V3

    // Age
    app.get('/version-3/age', function (req, res) {
      switch (req.query['age16']){
          case 'age16-1'  :   res.redirect('version-3/contact-details');
          case 'age16-2'  :   res.redirect('version-3/ineligible');
          default     :   res.render('version-3/age');
        }
    });


    // ROUTES - V4

    // Age
    app.get('/version-4/age', function (req, res) {
      switch (req.query['age']){
          case req >= 16  :   res.redirect('version-4/contact-details');
          case req < 16   :   res.redirect('version-4/ineligible');
          default     :   res.render('version-4/age');
        }
    });

  }
};
