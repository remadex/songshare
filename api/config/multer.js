const multer = require('multer');
const path = require('path');

const storageImage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './public/image/imgProfil');
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const storageImgMusic = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './public/music/image/');
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const storageMusic = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './public/music/');
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

exports.uploadImage = multer({ storage: storageImage });

exports.uploadImgMusic = multer({ storage: storageImgMusic });

exports.uploadMusic = multer({ storage: storageMusic });