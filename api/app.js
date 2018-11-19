const express = require('express'),
  bodyParser = require('body-parser'),
  expressValidator = require('express-validator'),
  UsersRouter = require('./routes/user'),
  ImageRouter = require('./routes/img'),
  MusicImageRouter = require('./routes/musicImg'),
  MusicRouter = require('./routes/music'),
  MusicsRouter = require('./routes/musics'),
  AuthRouter = require('./routes/auth'),
  cors = require('cors'),
  multerConfig = require('./config/multer'),
  User = require('./models/user'),
  passport = require('passport');

require('./config/passport');

const app = express();
app.use(express.static('./'));
/**
 * Expose body on req.body
 */
app.use(bodyParser.json({ limit: '500mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))

/**
 * Config cors for headers
 */
app.use(cors());

/**
 * Config passport
 */
app.use(passport.initialize());
app.use(passport.session());
// passport.serializeUser(User.serialUser());
// passport.deserializeUser(User.deserializeUser());

/**
 * Validation
 */
app.use(expressValidator());

/**
 * Set Router
 */
app.use('/api', AuthRouter);
app.use('/api/musics', MusicsRouter);
app.use('/api/users', UsersRouter);
app.use('/api/users/image', multerConfig.uploadImage.single('imgProfil'), ImageRouter);
app.use('/api/users/music/image/', multerConfig.uploadImgMusic.single('imgMusic'), MusicImageRouter);
app.use('/api/users/music', multerConfig.uploadMusic.single('musicAccount'), MusicRouter);

/**
 * Export our config of middleware and route
 */
module.exports = app;