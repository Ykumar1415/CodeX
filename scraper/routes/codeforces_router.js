
const express=require('express');
const codeforces_controller = require('./../controllers/codeforces_controller');

const router = express.Router();

router
  .route('/:handle')
  .get(codeforces_controller.getdata);
  

module.exports = router;