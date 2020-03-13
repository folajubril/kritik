let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Student Model
let contentSchema = require('../models/content');

router.route('/create-content').post((req, res, next) => {
    creatorSchema.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        console.log(data)
        res.json(data)
      }
    })
  });