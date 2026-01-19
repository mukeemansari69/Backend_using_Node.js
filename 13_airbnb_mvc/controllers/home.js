const path = require('path');   // ✅ MISSING LINE

exports.getAddhome = (req, res) => {
  res.sendFile(path.join(__dirname, '../view/addHome.html'));
};
