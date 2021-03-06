const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Order = require("../models/order.model");
const User = require("../models/user.model");
const Notifications = require("../models/notification.model");
/**
 * @desc   create new order
 * @route  POST /api/v1/order/create-order
 * @access public
 * @returns {object}
 **/
exports.createOrder = CatchAsyncErrors(
  async (req, res, next) => {
    const { userId, orderId } = req.body.data;
    if (!userId || !orderId) {
      return next(new ErrorHandler(400, "User ID and Order ID are required"));
    }
    const order = await Order.create({
      userId: userId,
      ...req.body.data,
    });
    // add to notifications
    await Notifications.create({
      userId: userId,
      orderId: orderId,
      type: "order",
      notification: "You have purchased new course " + order.orderDetails.course,
    });

    return res.status(200).json({
      success: true,
      data: order,
    });
  } // end of createOrder
);

/**
 * @desc   get all orders
 * @route  GET /api/v1/order/get-orders/:userId
 * @access public
 * @returns {object}
 * @param {string} userId
 **/

exports.getOrders = CatchAsyncErrors(
  async (req, res, next) => {
    const { userId } = req.params;
    if (!userId) {
      return next(new ErrorHandler(400, "User ID is required"));
    }
    const orders = await Order.find({ userId: userId }).populate("userDetails");
    return res.status(200).json({
      success: true,
      data: orders,
    });
  } // end of getOrders
);


/**
 * @desc  create user and order together
 * @route  POST /api/v1/order/create-user-order
 * @access public
 * @returns {object}
 * 
 */
exports.createUserOrder = CatchAsyncErrors(
  async (req, res, next) => {
    //create user
    const user = await User.create(req.body.data.user);
    //get userId
    const userId = user._id;
    //create order
    console.log(req.body.data);
    const order = await Order.create({
      userId: userId,
      ...req.body.data,
    });
    // add to notifications
    await Notifications.create({
      userId: userId,
      orderId: order._id,
      type: "order",
      notification: "You have purchased new course " + order.orderDetails.course,
    });
    return res.status(200).json({
      success: true,
      data: order,
    });
  } // end of createUserOrder
);

