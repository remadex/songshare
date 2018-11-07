/*jshint node:true*/
const Passport = require('passport'),
    User = require('../models/user'),
    bcrypt = require("bcrypt");



exports.token = async (req, res) => {
    if (req.body.grant_type === 'password') {
        try {
            const { user } = await User.authenticate()(req.body.username, req.body.password);
            if (user) {
                console.log("COOL");
                res.status(200).json({ "access_token": "secret token!", "account_id": user._id });
            } else {
                res.status(400).json({ "error": "invalid_grant" });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}