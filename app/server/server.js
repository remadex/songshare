const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const User = require('./models/user');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
// const storage = require('./multer/storage')
const passport = require("passport");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(passport.initialize());

app.use(passport.session());

app.use(expressValidator());

// app.use(multer({
//     dest: "./uploads/",
//     rename: function (fieldname, filename) {
//         return filename;
//     }
// }));

app.use(express.static('uploads'));

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
/********************************/
/*------ POST A NEW USER ------*/
/******************************/
// app.use(multer({ dest: './uploads/' }).single('imgProfil'));

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({ storage: storage }).single('imgProfil')


app.post('/api/users', (req, res) => {
    console.log(req.body)
    // let data = new User(req.body);
    // console.log(data);
    // upload(req, res, (err) => {
    // console.log(req.file);
    // })

    // console.log(data);
    // console.log(req.file);
    // data.imgProfil.data = fs.readFileSync(req.files.imgProfil.path)
    // data.imgProfil.contentType = "image/png";
    // let username = req.body.user.username;
    // console.log(username);
    // let image = req.body.user.imgProfil;
    // console.log("------------------------");
    // console.log(image);
    // console.log("------------------------");
    // storage(req, res, (err) => {
    //     if (err) {
    //         return res.end('error request file');
    //     }
    //     var data = new User({
    //         username: req.body.username,
    //         email: req.body.email,
    //         imgProfil: req.body.imgProfil,
    //         password: req.body.password
    //     });
    //     data.save().then((data) => {
    //         res.json({ user: data });
    //     });
    //     console.log(req.file);
    //     res.end('upload file success');
    //     console.log('success');
    // });
    // data.save();
    // res.json({ user: data })
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