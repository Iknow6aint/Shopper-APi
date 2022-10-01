/* eslint-disable import/order */
const {
  getAllOrders,
  getOrders,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/order');
const { authIsVendor, isAuth } = require('../utils/verifyToken');

const OrderRouter = require('express').Router();

OrderRouter.post('/api/order/add', isAuth, createOrder);
OrderRouter.put('/api/order/:id', authIsVendor, updateOrder);
OrderRouter.delete('/api/order/:id', authIsVendor, deleteOrder);
OrderRouter.get('/api/order/find/:id', authIsVendor, getOrders);
OrderRouter.get('/api/order', authIsVendor, getAllOrders);

module.exports = OrderRouter;
