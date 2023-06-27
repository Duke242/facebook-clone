const env = require('dotenv').config();
const mongoose = require('mongoose')

const { Schema } = mongoose;

function setup(mongoose){

  mongoose.connect(process.env.MONGO_URL)

    const UserSchema = 
        new Schema({
          firstName: { type: String, required: true },
          lastName: { type: String, required: true },
          email: { type: String, required: true },
          password: { type: String, required: true },
        }
      );


      const PostSchema = 
        new Schema({
          title: { type: String, required: true },
          text: { type: String, required: true },
          author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
          timeStamp: { type: String, required: true },
        }, { timestamps: true })
      

      const CommentSchema = 
        new Schema({
          author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
          text: { type: String, required: true },
        }, { timestamps: true })

    try { user = mongoose.model('user', UserSchema) } catch (e) {}
    try { mongoose.model('post', PostSchema) } catch (e) {}
    try { mongoose.model('comment', CommentSchema) } catch (e) {}
      
}

module.exports = { setup }


