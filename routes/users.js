var express = require('express');
const app = require('../app');
var router = express.Router();

const mysql = require('mysql2');


/* GET users listing. */
router.get('/', function(req, res, next) {
res.send('Working...')

});

module.exports = router;
