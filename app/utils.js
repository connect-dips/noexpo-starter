/**
 * Created by dipinkrishnan on 13/12/16.
 */
 'use strict';

 var jwt = require('jsonwebtoken'),
   config = require('../config/config');

 module.exports = {
   validateToken(req, res, next){
     var token = req.body.token || req.headers['x-access-token'];
     if(token){
       jwt.verify(token, config.secret, function (err, decoded) {
         if(err){
           return res.status(403).send({message:"Invalid API token", error: err});
         }
         else{
           console.log(decoded);
           req.decoded = decoded;
           return next();
         }
       });
     }
     else{
       res.status(403).send({message:"Token not provided"});
     }
   },
   response(res, obj){
     console.log(obj.error);
     res.status(obj.status).send({message:obj.message,data: obj.data, error: obj.error});
   }
 };
