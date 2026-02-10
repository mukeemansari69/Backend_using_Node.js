const path = require('path');
const Home = require('../models/home');

exports.getAddhome = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/host/addHome.html'));
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

  res.sendFile(path.join(__dirname, '../view/host/homeAdded.html'));
};

exports.getHomeList = (req, res) => {
  const homes = Home.fetchAll();
  res.render('host/host-home-list', {
    registeredHomes: homes
  });
};

exports.getEditHome = (req, res) => {
  const homeId = req.params.id;
  const home = Home.findById(homeId);
  if (!home) {
    return res.status(404).render('404', { message: 'Home not found' });
  }
  res.render('host/edit-home', {
    home: home,
    pageTitle: 'Edit Home'
  });
};

exports.postEditHome = (req, res) => {
  const homeId = req.params.id;
  const home = Home.findById(homeId);
  if (!home) {
    return res.status(404).render('404', { message: 'Home not found' });
  }

  const imagePaths = req.files
    ? req.files.map(file => `/uploads/${file.filename}`)
    : home.images; // Keep existing images if no new ones uploaded

  const { title, description, location, price } = req.body;

  const updatedHome = new Home(
    title,
    description,
    location,
    price,
    imagePaths
  );
  updatedHome.id = homeId; // Preserve the original ID

  updatedHome.update(); // Update the home in the data store

  res.redirect('/host/home-list');
};

exports.getHomeDetail = (req, res) => {
  const homeId = req.params.id;
  const home = Home.findById(homeId);
  if (!home) {
    return res.status(404).render('404', { message: 'Home not found' });
  }
  res.render('host/home-detail', {
    home: home,
    pageTitle: home.title
  });
};

