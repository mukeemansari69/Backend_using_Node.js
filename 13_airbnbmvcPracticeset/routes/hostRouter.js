const express = require('express');
const hostRouter = express.Router();
const path = require('path');
const multer = require('multer');
const hostController= require('../controllers/hostController');


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

hostRouter.get('/add-home', hostController.getAddhome);

hostRouter.post('/success', upload.array('images', 5), hostController.postAddhome);


exports.hostRouter = hostRouter;
