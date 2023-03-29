var express = require('express');
const app = require('../app');
var router = express.Router();

const mysql = require('mysql2');

router.get('/', function(req, res, next) {

  req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT * FROM offices JOIN employees ON offices.officeCode = employees.officeCode`;

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }

      console.log("result", result)
      res.send(result);
    })
  })




});

module.exports = router;
