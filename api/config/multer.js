const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './public/image/imgProfil');
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

exports.upload = multer({ storage: storage })