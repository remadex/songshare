const Express = require('express'),
    Router = Express.Router(),
    MusicController = require('../controllers/music');

Router
    .route('/')
    .post(MusicController.postMusic);

module.exports = Router;