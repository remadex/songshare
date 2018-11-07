const mongoose = require('mongoose'),
    passportLocalMongoose = require("passport-local-mongoose"),
    validator = require("validator"),
    bcrypt = require("bcrypt");



let userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        require: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
        required: "You must specify an email",
        validate: [validator.isEmail, "Invalid email"]
    },
    imgProfil: {
        type: String
    },
    password: String,
    salt: String,
    hash: String
});


userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password, user) {
    return bcrypt.compareSync(password, user.password);
};

userSchema.plugin(passportLocalMongoose, {
    usernameField: "email",
    passwordField: "password"
});

module.exports = mongoose.model("user", userSchema);