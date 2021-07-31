var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});
router.get('/contactme', function(req, res, next) {
  res.render('contactme', { title: 'Express' })
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Express' })
});
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme', { title: 'Express' })
});


module.exports = router;
