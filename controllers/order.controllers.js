const CatchAsyncErrors = require('../middlewares/CatchAsyncErrors');
const ErrorHandler = require('../utils/ErrorHandler');


/**
 * @desc   create new order
 * @route  POST /api/v1/order/create-order
 * @access public
 * @returns {object}
 **/
exports.createOrder = CatchAsyncErrors(async (req, res, next) => {
    return res.status(200).json({
        success: true,
        data: 'Create Order Route Working 🚀',
    });
    } // end of createOrder
);

