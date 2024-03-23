var express = require('express');

var router = express.Router();

var controllerAdmin = require("../controller/Admin/account_controller")

router.get('/getAccount',controllerAdmin.getAccount);   // ok
router.patch('/updateAccountRole',controllerAdmin.updateAccountRole);    // ok



module.exports = router;