const path = require('path');
const Home = require('../models/home');

exports.getAddhome = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/addHome.html'));
};

exports.postAddhome = (req, res) => {
  const imagePaths = req.files
    ? req.files.map(file => `/uploads/${file.filename}`)
    : [];

  const { title, description, location, price } = req.body;

  const home = new Home(
    title,
    description,
    location,
    price,
    imagePaths
  );

  home.save(); // ✅ model handles push

  res.sendFile(path.join(__dirname, '../view/success.html'));
};

// ✅ ADD THIS FUNCTION (IMPORTANT)
exports.getHomes = (req, res) => {
  const homes = Home.fetchAll(); // 👈 model se data

  res.render('user', {
    registeredHomes: homes
  });
};
