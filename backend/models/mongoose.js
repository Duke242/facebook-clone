const env = require('dotenv').config();
const mongoose = require('mongoose')

const { Schema } = mongoose;

function setup(mongoose) {

  mongoose.connect(process.env.MONGO_URL)

  const UserSchema =
    new Schema({
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      birthday: { type: Date, required: true },
      gender: { type: String, required: false },
      friends: [{ type: Schema.Types.ObjectId, ref: "user", required: false }],
    },
      {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
      });

  const FriendRequestSchema =
    new Schema({
      from: { type: Schema.Types.ObjectId, ref: "user", required: true },
      to: { type: Schema.Types.ObjectId, ref: "user", required: true },
    })

  const PostSchema =
    new Schema({
      text: { type: String, required: true },
      author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
      likes: { type: Number, default: 0, required: true },
      // comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
    }, { timestamps: true })


  const CommentSchema =
    new Schema({
      post: { type: Schema.Types.ObjectId, ref: 'post', required: true },
      author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
      text: { type: String, required: true },
    }, {
      timestamps: true,
      toJSON: { virtuals: true },
      // toObject: { virtuals: true },

    })

  mongoose.models = {};
  const Comment = mongoose.model('comment', CommentSchema)
  const friendRequest = mongoose.model('friendRequest', FriendRequestSchema)
  mongoose.model('user', UserSchema)
  mongoose.model('post', PostSchema)

  PostSchema.virtual('comments', {
    ref: 'comment',
    localField: '_id',
    foreignField: 'post',
  });

  UserSchema.virtual('incomingRequests', {
    ref: 'friendRequest',
    localField: '_id',
    foreignField: 'to',
  });

  UserSchema.virtual('outgoingRequests', {
    ref: 'friendRequest',
    localField: '_id',
    foreignField: 'from',
  })

  UserSchema.set('toJSON', { virtuals: true })
  UserSchema.set('toObject', { virtuals: true })

  //circleSchema.set('toObject', { virtuals: true });
  // circleSchema.set('toJSON', { virtuals: true });
}

module.exports = { setup }


