const router = require('express').Router();
const orderController = require('../controllers/order.controllers');
// create order
router.route('/create-order').post(orderController.createOrder);

module.exports = router;