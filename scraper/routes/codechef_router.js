
const express=require('express');
const codechef_controller = require('../controllers/codechef_controller');

const router = express.Router();

router
  .route('/:handle')
  .get(codechef_controller.getdata);
  

module.exports = router;