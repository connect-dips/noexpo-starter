/**
 * Created by dipinkrishnan on 13/12/16.
 */

'use strict';

var bcrypt = require('bcrypt-nodejs');

module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    mobile:{
      type: DataTypes.STRING,
      allowNull:false
    },
    password: DataTypes.STRING,
    snId: DataTypes.STRING,
    dp: DataTypes.STRING,
    role:{
      type: DataTypes.STRING,
      defaultValue:'gen'
    },
    mobile_verified:{
      type: DataTypes.BOOLEAN,
      defaultValue:false
    },
    email_verified:{
      type: DataTypes.BOOLEAN,
      defaultValue:false
    }
  },{
    hooks:{
      beforeCreate: function (user) {
        if(user.password && user.password.length > 0){
          user.password = this.generateHash(user.password);
        }

        user.createdAt = new Date.now();
        user.updatedAt = new Date.now();
      },
      beforeUpdate: function (user) {
        user.updatedAt = new Date.now();
      }
    },
    classMethods: {
      associate: function (models) {

      },
      generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
      },
      validatePassword: function (password, user) {
        return bcrypt.compareSync(password, user.password);
      }
    },
    instanceMethods:{
      toJSON: function () {
        var values = Object.assign({}, this.get());

        delete values.password;
        return values;
      }
    }
  })
};
