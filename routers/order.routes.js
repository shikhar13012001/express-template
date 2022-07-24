const router = require("express").Router();
const orderController = require("../controllers/order.controllers");
// create order
router.route("/create-order").post(orderController.createOrder);
// get all orders
router.route("/get-orders/:userId").get(orderController.getOrders);
// create user order
router.route("/create-user-order").post(orderController.createUserOrder); 

module.exports = router;
