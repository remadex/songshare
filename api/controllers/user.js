/*jshint node:true*/
const Passport = require('passport'),
    User = require('../models/user');

/*****************************/
/*------ GET ALL USER ------*/
/***************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.list = async (req, res) => {
    let users = await User.find();
    if (!users) {
        return res.status(400).json({
            message: 'Users cannot be retrieved'
        })
    }
    return res.json({ users });
}
/********************************/
/*------ POST A NEW USER ------*/
/******************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.create = async (req, res) => {
    console.log('---------------------')
    console.log(req.body);
    var newUser = new User({
        username: req.body.user.username,
        imgProfil: req.body.user.imgProfil,
        email: req.body.user.email
    });
    User.register(newUser, req.body.user.password,
        function (err, user) {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    user, err
                });
            }
            console.log(user);
        });
}
/************************************/
/*------ GET A SPECIFIC USER ------*/
/**********************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.get = async (req, res) => {

    let id = req.params.user_id;
    let user = await User.findOne({ _id: id }).catch((err) => {
        console.log(err);
    });

    if (!user) {
        return res.status(400).json({
            message: 'User cannot be retrieved',
            id: id
        })
    }

    return res.json({ user });
};
/************************************/
/*------ PUT A SPECIFIC USER ------*/
/**********************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.put = async (req, res) => {
    let id = req.params.user_id;
    let user = User.findByIdAndUpdate(id, { $set: req.body.user }).catch((err) => {
        console.log(err);
    });
    if (!user) {
        return res.status(400).json({
            message: 'User cannot be retrieved',
            id: id
        })
    }

    return res.json({ user });
}
/**************************************/
/*------ DELETE A SPECIFIC USER ------/
/************************************/
/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
exports.delete = async (req, res) => {
    let id = req.params.user_id;
    await User.findOneAndRemove({ _id: id }).catch((err) => {
        console.log(err);
    });

    return res.json({ id });
}