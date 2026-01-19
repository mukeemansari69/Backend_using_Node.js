const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const multer = require('multer');
const homeController= require('../controllers/home');
const registeredHomes = [];

/* Multer storage */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage }); // ✅ FIX 1

hostRouter.get('/add-home',homeController.getAddhome); 

hostRouter.post(
  '/success',
  upload.array('images', 5),
  (req, res) => {

    const imagePaths = req.files
      ? req.files.map(file => `/uploads/${file.filename}`)
      : [];

    registeredHomes.push({
      houseTitle: req.body.title,
      houseDescription: req.body.description,
      houseLocation: req.body.location,
      housePrice: req.body.price,
      images: imagePaths
    });

    res.sendFile(path.join(__dirname, '../view/success.html'));
  }
);

module.exports = { hostRouter, registeredHomes };
