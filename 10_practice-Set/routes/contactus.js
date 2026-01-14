const express = require('express');
const contactus = express.Router();
const path = require('path');

contactus.use(express.urlencoded({ extended: false }));

contactus.get('/contact-us', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/contactus.html'));
});

contactus.post('/succesfull', (req, res) => {
    const { username, useremail } = req.body;
    res.redirect(`/succesfull?username=${username}&email=${useremail}`);
});

contactus.get('/succesfull', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/succesfull.html'));
});

module.exports = contactus;
