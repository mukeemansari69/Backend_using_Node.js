const path = require('path');

const registeredHomes = [];

// ✅ EXPORT THE ARRAY
exports.registeredHomes = registeredHomes;

exports.getAddhome = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/addHome.html'));
};

exports.postAddhome = (req, res) => {
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
};
