const Express = require('express'),
    Router = Express.Router(),
    AuthController = require('../controllers/auth');

Router
    .route('/token')
    .post(AuthController.token);

module.exports = Router;