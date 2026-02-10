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

hostRouter.get('/home-list', hostController.getHomeList);
hostRouter.get('/edit-home/:id', hostController.getEditHome);
hostRouter.post('/edit-home/:id', upload.array('images', 5), hostController.postEditHome);
hostRouter.get('/home-detail/:id', hostController.getHomeDetail);

exports.hostRouter = hostRouter;
