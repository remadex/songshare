const Express = require('express'),
  Router = Express.Router(),
  ImageController = require('../controllers/img');

Router
  .route('/profil')
  .post(ImageController.postImage);

module.exports = Router;