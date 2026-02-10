const path = require('path');
const Home = require('../models/home');
const { getFavorites, addFavorite, removeFavorite } = require('../utils/favorites');

// ✅ ADD THIS FUNCTION (IMPORTANT)
exports.getHomes = (req, res) => {
  const homes = Home.fetchAll(); // 👈 model se data

  res.render('store/home-list', {
    registeredHomes: homes
  });
};

exports.getBookings = (req, res) => {
  res.render('store/bookings', {
    pageTitle: 'Your Bookings'
  });
};

exports.getEditHome= (req, res) => {
  const homeId = req.params.id;
  const home = Home.findById(homeId); // 👈 model se data
  if (!home) {
    return res.status(404).render('404', { message: 'Home not found' });
  } 
  res.render('store/edit-home', {
    home: home,
    pageTitle: 'Edit Home'
  });
};

exports.getFavoriteList = (req, res) => {
  const favoriteIds = getFavorites();
  const allHomes = Home.fetchAll();
  const favoriteHomes = allHomes.filter(home => favoriteIds.includes(home.id));
  res.render('store/favorite-list', {
    favourites: favoriteHomes,
    pageTitle: 'Your Favourites'
  });
};

exports.getindex = (req, res) => {
  const homes = Home.fetchAll();
  res.render('store/index', {
    registeredHomes: homes,
    pageTitle: 'index'
  });
};

// Home details with error handling
exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;

  const home = Home.findById(homeId);

  // ❌ agar id invalid ya data nahi mila
  if (!home) {
    return res.status(404).sendFile(
      path.join(__dirname, '../view', '404.html')
    );
    // OR if using ejs:
    // return res.status(404).render('404', { message: 'Home not found' });
  }

  // ✅ agar data mil gaya
  res.render('store/home-detail', {
    home: home,
    pageTitle: home.title
  });
};


exports.postReserveHome = (req, res) => {
  const homeId = req.params.homeId;
  const home = Home.findById(homeId);
  if (!home) {
    return res.status(404).render('404', { message: 'Home not found' });
  }
  // For simplicity, just redirect to bookings
  res.redirect('/bookings');
};

// Adding Favourates Functionality
exports.postAddFavorite = (req, res) => {
  const homeId = req.params.homeId;
  addFavorite(homeId);
  res.redirect('/favorite-list');
};

exports.postRemoveFavorite = (req, res) => {
  const homeId = req.params.homeId;
  removeFavorite(homeId);
  res.redirect('/favorite-list');
};
