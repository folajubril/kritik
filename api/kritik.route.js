let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

//kritik Model
let KritikSchema = require('../models/kritik');

//create Kritik
router.route('/create-kritik').post((req, res, next) => {
    kritikSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });