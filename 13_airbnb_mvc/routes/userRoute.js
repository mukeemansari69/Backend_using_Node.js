const express = require('express');
const userRouter = express.Router();
const homeController = require('../controllers/home');

userRouter.get('/', (req, res) => {
    console.log(homeController.registeredHomes); // ✅ ab array aayegi
    res.render('user', {
        registeredHomes: homeController.registeredHomes
    });
});

module.exports = userRouter;
