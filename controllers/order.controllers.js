const CatchAsyncErrors = require("../middlewares/CatchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const Order = require("../models/order.model");

/**
 * @desc   create new order
 * @route  POST /api/v1/order/create-order
 * @access public
 * @returns {object}
 **/
exports.createOrder = CatchAsyncErrors(
  async (req, res, next) => {
    const { user } = req.body.data;
    const order = await Order.create({
      user: user,
      ...req.body.data,
    });

    return res.status(200).json({
      success: true,
      data: order,
    });
  } // end of createOrder
);
