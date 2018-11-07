const Express = require('express'),
  Router = Express.Router(),
  UserController = require('../controllers/user');

Router
  .route('/')
  .get(UserController.list)
  .post(UserController.create);

Router
  .route('/:user_id')
  .get(UserController.get)
  .put(UserController.put)
  .delete(UserController.delete)

module.exports = Router;