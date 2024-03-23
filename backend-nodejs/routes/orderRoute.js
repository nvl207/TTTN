var express = require('express');

var router = express.Router();
var controller = require('../controller/order_controller');


router.post('/getProductByCart',controller.getProductByCart)  //
// router.post('/getProductFavorite',controller.getProductFavorite)

router.post('/getBillByIdAccount',controller.getBillByIdAccount) 






module.exports = router;