/*jshint node:true*/
const Passport = require('passport'),
    User = require('../models/user');

exports.token = async (req, res) => {
    if (req.body.grant_type === 'password') {
        try {
            const { user } = await User.authenticate()(req.body.username, req.body.password);
            if (user) {
                res.status(200).json({ "access_token": "secret token!", "account_id": user._id });
            } else {
                res.status(400).json({ "errors": { "msg": "Login is incorrect" } });
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}