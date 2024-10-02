
const express=require('express');
const github_controller = require('./../controllers/github_controller');

const gitrouter = express.Router();


// router.param('username', tourController.checkID);

// router
//   .route('/')
//   .get(tourController.getAllTours)
//   .post(tourController.checkBody, tourController.createTour);


gitrouter
  .route('/:username')
  .get(github_controller.getdata);
  

module.exports = gitrouter;