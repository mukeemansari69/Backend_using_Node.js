const express = require('express');
const hostRouter = express.Router();
const path=require('path');

hostRouter.get('/add-home', (req, res) => {
    res.sendFile(path.join(__dirname,'../','view','addHome.html'));
});
const registeredHomes = [];
hostRouter.post('/success', (req, res) => {
    registeredHomes.push({houseTitle:req.body.title, houseDescription:req.body.description, houseLocation:req.body.location, housePrice:req.body.price});
        
    res.sendFile(path.join(__dirname, '../', 'view', 'success.html'));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
