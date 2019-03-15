const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jet').ExtractJwt;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerTOken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => console.log(passport);
