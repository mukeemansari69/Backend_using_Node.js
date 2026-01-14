const express = require('express');
const hostRouter = express.Router();
const path=require('path');

hostRouter.get('/add-home', (req, res) => {
    res.sendFile(path.join(__dirname,'../','view','addHome.html'));
});

hostRouter.post('/success', (req, res) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname, '../', 'view', 'success.html'));
});

module.exports = hostRouter;
