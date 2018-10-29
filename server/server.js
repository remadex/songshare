const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./models/user');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const passport = require("passport");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const cors = require('cors');
const app = express();

app.use(bodyParser.json({ limit: '500mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
//     next();
// });
app.use(cors());
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());

app.use(passport.session());

app.use(expressValidator());

app.use(express.static('./'));

mongoose.connect('mongodb://localhost/songshare');

app.listen('4500');

app.get('/api/', (req, res) => {
    res.send('Working');
});
/*****************************/
/*------ GET ALL USER ------*/
/***************************/
app.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ users: data });
        }
    });
});
/************************************/
/*------ GET A SPECIFIC USER ------*/
/**********************************/
app.get('/api/users/:user_id', (req, res) => {
    let id = req.params.user_id;
    User.findOne({ _id: id }, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({ user: data });
        }
    });
});
/*******************************/
/*------ POST A NEW IMG ------*/
/*****************************/
const storage = multer.diskStorage({
    destination: (req, file, next) => {
        next(null, './public/imageProfil');
    },
    filename: (req, file, next) => {
        next(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

var upload = multer({ storage: storage })


app.post('/api/users/image', upload.single('imgProfil'), (req, res) => {
    console.log(req.file);
    res.send(req.file)
});


/********************************/
/*------ POST A NEW USER ------*/
/******************************/
app.post('/api/users', (req, res) => {
    let data = new User(req.body.user);
    data.save();
    res.json({ user: data });
});
/************************************/
/*------ PUT A SPECIFIC USER ------*/
/**********************************/
app.put('/api/users/:user_id', (req, res) => {
    let id = req.params.user_id;
    User.findByIdAndUpdate(id, { $set: req.body.user }, (err, data) => {
        if (err) {
            res.send(err);
        };
        res.json({ user: data });
    });
});
/**************************************/
/*------ DELETE A SPECIFIC USER ------/
/************************************/
app.delete('/api/users/:user_id', (req, res) => {
    let id = req.params.user_id;
    User.findOneAndRemove({ _id: id }, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json({ user: data });
    });
});