var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'noexpo-starter'
    },
    port: process.env.PORT || 3000,
    secret:'knowledgeisimmenselypowerful',
    db: 'postgres://localhost/dev-starter'
  },

  test: {
    root: rootPath,
    app: {
      name: 'noexpo-starter'
    },
    port: process.env.PORT || 3000,
    secret:'knowledgeisimmenselypowerful',
    db: 'postgres://localhost/test-starter'
  },

  production: {
    root: rootPath,
    app: {
      name: 'noexpo-starter'
    },
    port: process.env.PORT || 3000,
    secret:'knowledgeisimmenselypowerful',
    db: 'postgres://localhost/prod-starter'
  }
};

module.exports = config[env];
