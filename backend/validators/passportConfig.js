const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require('bcryptjs');
const { setup } = require('../models/mongoose')
const mongoose = require('mongoose')



setup(mongoose)
const User = mongoose.model('user')

function initialize(passport) {
  console.log("In initialize.")

  passport.use(new LocalStrategy(
    { usernameField: 'email', // Assuming email is the field for username
      }, async (email, password, done) => {
    try {
      
      const user = await User.findOne({ email });
      console.log({ user })
      if (!user) {
        return done(null, false, { message: "Incorrect email" });
      };
      const res = await bcrypt.compare(password, user.password)
      console.log({ res })
      if (res) {
        // passwords match! log user in
        console.log('password match')
        return done(null, user)
      }
      // passwords do not match!
      console.log('passwords do not match')
      return done(null, false, { message: "Incorrect password" })

    } catch (err) {
      return done(err);
    };
  }))


  passport.serializeUser(function (user, done) {
    console.log("in serialize user.", user.id)
    done(null, user.id);
  });

  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err);
    };
  });

}


module.exports = { initialize }