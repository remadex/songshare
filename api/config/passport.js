/*jshint node:true*/
const passport = require('passport'),
  localStrategy = require('passport-local').Strategy,
  User = require('../models/user'),
  passportJWT = require('passport-jwt'),
  JWTStrategy = passportJWT.Strategy,
  extractJWT = passportJWT.ExtractJwt;


const BearerStrategy = require('passport-http-bearer').Strategy;

passport.use(
  new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
    function (username, password, done) {
      User.findOne({ email: username }, { username: 1, email: 1, hash: 1 }, function (err, user) {
        console.log('-----------------------');
        console.log(user);
        if (err) return done(err);
        if (!user) return done(null, false);
        if (!user.validPassword(password, user)) return done(null, false);
        return done(null, user);
      })
    })
)

// passport.use(
//   new JWTStrategy({
//     jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'jesuislemotdepasse'
//   },
//     function (jwtPayload, cb) {
//       console.log(jwtPayload.id);
//       return User.findOneById(jwtPayload.id)
//         .then((user) => {
//           return cb(null, user);
//         })
//         .catch((error) => {
//           return cb(error);
//         });
//     })
// )