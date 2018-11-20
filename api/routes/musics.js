const Express = require('express'),
  Router = Express.Router(),
  MusicController = require('../controllers/music');

Router
  .route('')
  .get(MusicController.get)
  .post(MusicController.create);

module.exports = Router;