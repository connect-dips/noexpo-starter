/**
 * Created by dipinkrishnan on 13/12/16.
 */

var express = require('express'),
  routes = express.Router(),
  controllers = require('./controllers/index'),
  utils = require('./utils'),
  api = '/api/1.0';

routes.get('/', controllers.home.index);

module.exports = routes;
