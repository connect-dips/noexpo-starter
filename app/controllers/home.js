
'use strict';

var utils = require('../utils');

module.exports = {
  index(req, res){
    /*
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
    */
    utils.response(res, {status:200, message:"success",error: null, data:[]});
  }
};
