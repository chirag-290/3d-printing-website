const multer = require('multer');

const storage = multer.memoryStorage();
const uploadFile = multer({ storage }).single('photo');

module.exports = uploadFile;