const Express = require('express'),
  Router = Express.Router(),
  MusicController = require('../controllers/music');

Router
  .route('')
  .post(MusicController.create);

module.exports = Router;