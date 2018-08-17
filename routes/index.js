let express = require('express');
let router = express.Router();
let resumeData = require('../service/data-resume');
let skillList = require('../service/data-skills');

/* GET home page. */
router.get('/', function(req, res, next) {
 
  
  res.render('index', { title: 'Ben\'s CV (NodeJS + Express + Sass) | Resume', resumeData: resumeData, skillList: skillList});
});

module.exports = router;
