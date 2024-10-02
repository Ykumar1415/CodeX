const express=require('express');
const leetcode_controller = require('./../controllers/leetcode_controller');

const router = express.Router();

router
  .route('/:handle')
  .get(leetcode_controller.getdata);
  

module.exports = router;