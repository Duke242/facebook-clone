const { setup } = require('../models/mongoose');
const mongoose = require('mongoose');

const isAuthorize = (req, res, next) => {
  setup(mongoose);
  const User = mongoose.model('user')
  User.findById(req.session.userId, function(error, user) {
    if (error) {
      return next(error);
    } else if (user === null){
        var err = new Error('Not authorized! Go back!');
        err.status = 401;
        return next(err);
      } else {
        return next();
      }
    }
  )};



module.exports = isAuthorize
