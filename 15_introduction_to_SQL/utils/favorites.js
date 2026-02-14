const fs = require('fs');
const path = require('path');
const rootDir = require('./pathUtils');

const favoritesFilePath = path.join(rootDir, 'data', 'favorites.json');

// Get all favorite home IDs
function getFavorites() {
  if (fs.existsSync(favoritesFilePath)) {
    const data = fs.readFileSync(favoritesFilePath, 'utf8');
    return JSON.parse(data);
  }
  return [];
}

// Add a home ID to favorites if not already present
function addFavorite(homeId) {
  const favorites = getFavorites();
  if (!favorites.includes(homeId)) {
    favorites.push(homeId);
    fs.writeFileSync(favoritesFilePath, JSON.stringify(favorites));
  }
}

// Remove a home ID from favorites
function removeFavorite(homeId) {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(id => id !== homeId);
  fs.writeFileSync(favoritesFilePath, JSON.stringify(updatedFavorites));
}

module.exports = {
  getFavorites,
  addFavorite,
  removeFavorite
};
