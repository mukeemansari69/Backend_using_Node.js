const express = require('express');
const storeRouter = express.Router();
const storeController = require('../controllers/storeController');

// GET routes
storeRouter.get('/', storeController.getHomes);
storeRouter.get('/bookings', storeController.getBookings);
storeRouter.get('/favorite-list', storeController.getFavoriteList);
storeRouter.get('/index', storeController.getindex);
storeRouter.get('/homes/:homeId', storeController.getHomeDetails);

// POST routes
storeRouter.post('/reserve/:homeId', storeController.postReserveHome);
storeRouter.post('/favorite/:homeId', storeController.postAddFavorite);
storeRouter.post('/favorite/remove/:homeId', storeController.postRemoveFavorite);

module.exports = storeRouter;
