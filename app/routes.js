var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});

// add your routes here

// ROUTES - V1

// Age
router.get('/version-1/age', function (req, res) {
  switch (req.query['age16']){
      case 'age16-1'  :   res.redirect('/version-1/contact-details');break;
      case 'age16-2'  :   res.redirect('/version-1/ineligible');break;
      default     :   res.render('version-1/age');
    }
});

// English first language
router.get('/version-1/speak-english', function (req, res) {
  switch (req.query['english']){
      case 'english-yes'  :  res.redirect('/version-1/housing');break;
      case 'english-no'  :   res.redirect('/version-1/speak-english-confidence');break;
      default     :   res.render('version-1/speak-english');
    }
});

// Children under 18
router.get('/version-1/children-under-18', function (req, res) {
  switch (req.query['children-under-18']){
      case 'children-under-18-yes'  :  res.redirect('/version-1/children-age');break;
      case 'children-under-18-no'  :   res.redirect('/version-1/employment');break;
      default     :   res.render('version-1/children-under-18');
    }
});

// Employment
router.get('/version-1/confirmation', function (req, res) {

  if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
    res.redirect('/version-1/employment-sector');
  } else {
    res.render('version-1/confirmation');
  }

});



// ROUTES - V2

// Age
router.get('/version-2/age', function (req, res) {
  switch (req.query['age16']){
      case 'age16-1'  :   res.redirect('/version-2/contact-details');break;
      case 'age16-2'  :   res.redirect('/version-2/ineligible');break;
      default     :   res.render('version-2/age');
    }
});

// English first language
router.get('/version-2/speak-english', function (req, res) {
  switch (req.query['english']){
      case 'english-yes'  :  res.redirect('/version-2/housing');break;
      case 'english-no'  :   res.redirect('/version-2/speak-english-confidence');break;
      default     :   res.render('version-2/speak-english');
    }
});

// Children under 18
router.get('/version-2/children-under-18', function (req, res) {
  switch (req.query['children-under-18']){
      case 'children-under-18-yes'  :  res.redirect('/version-2/children-age');break;
      case 'children-under-18-no'  :   res.redirect('/version-2/employment');break;
      default     :   res.render('version-2/children-under-18');
    }
});

// Employment
router.get('/version-2/confirmation', function (req, res) {

  if (req.query['employment-1'] === "on" || req.query['employment-2'] === "on" || req.query['employment-3'] === "on"){
    res.redirect('/version-2/employment-sector');
  } else {
    res.render('version-2/confirmation');
  }

});


// ROUTES - V3

// Age
router.get('/version-3/age', function (req, res) {
  switch (req.query['age16']){
      case 'age16-1'  :   res.redirect('/version-3/contact-details');break;
      case 'age16-2'  :   res.redirect('/version-3/ineligible');break;
      default     :   res.render('version-3/age');
    }
});


// ROUTES - V4

// Age
router.get('/version-4/age', function (req, res) {
  switch (req.query['age']){
      case req >= 16  :   res.redirect('/version-4/contact-details');break;
      case req < 16   :   res.redirect('/version-4/ineligible');break;
      default     :   res.render('version-4/age');
    }
});

module.exports = router;
