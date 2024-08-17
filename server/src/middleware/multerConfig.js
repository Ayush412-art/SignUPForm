const multer = require('multer');
const path = require('path');

// Define storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to filename
    }
});

// Initialize multer with the storage configuration
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Accept only image files
        if (!file.mimetype.startsWith('image/')) {
            return cb(new Error('Please upload an image'), false);
        }
        cb(null, true);
    }
});

module.exports = upload;
