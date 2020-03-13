let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let creatorSchema = require('../models/creator');


//create new creator 
router.route('/create-creator').post((req, res, next) => {
    creatorSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });