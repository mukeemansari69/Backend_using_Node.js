const express = require('express');
const userRouter = express.Router();
const homeController = require('../controllers/home');

// ✅ Use controller method
userRouter.get('/', homeController.getHomes);

module.exports = userRouter;
