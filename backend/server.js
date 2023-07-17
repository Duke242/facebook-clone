const express = require('express');
const app = express();
const passport = require('passport');
const { initialize } = require('./validators/passportConfig');
const mongoose = require('mongoose');
const { setup } = require('./models/mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const { v4: uuidv4 } = require('uuid');
const isAuthorized = require('./middleware/isAuthorized');
const cookieParser = require('cookie-parser');
const { populate } = require('dotenv');

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const maxAge = 1000 * 60 * 60 * 24 // 24 Hours in ms

app.use(session({
  name: "sid", // custom session id name default is connect.sid
  csrfToken: uuidv4(),
  resave: false,
  saveUninitialized: false,
  secret: process.env.SECRET,
  cookie: {
    maxAge: maxAge,
    httpOnly: false,
    sameSite: true, // same as 'strict'
    secure: false //IN_PROD //if production set to secure true else false
  }
}));

app.get('/forgotPassword', (req, res) => {
  res.json({ msg: "Make a new account" })
  // console.log('json')
})

app.listen(3002, () => [
  console.log('listening on port 3002')
])

initialize()

app.post('/api/login', passport.authenticate("local", {
  failureRedirect: "/?msg=Login%20Failed",
}),
  (req, res) => {
    // console.log(req.user)
    res.cookie('userId', req.user.id, { maxAge: 2592000000 }); // Expires in one month
    res.redirect('/dashboard')
  }
);

app.get('/dashboard', passport.authenticate('local', { session: false }), (req, res) => {
  res.redirect('/dashboard');
});

app.get('/api/posts', async (req, res) => {
  setup(mongoose)
  const Post = mongoose.model('post')
  const posts = await Post.find({})
    .populate('author')
    .populate({ path: "comments", populate: { path: 'author' } })
  const out = posts.map((post) => post.toJSON({ virtuals: true }))
  console.log({ out })
  res.json(out)
})

app.post('/api/users', async (req, res) => {
  setup(mongoose)
  const User = mongoose.model('user')
  try {
    const { email, birthday, gender, firstName, lastName } = req.body
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      birthday,
      gender,
    })
    await newUser.save()
    res.json({ user: newUser })
  }
  catch (error) {
    res.json({ error })
  }

})

app.post('/api/posts', async (req, res) => {
  // console.log(req.session)
  const Post = mongoose.model('post')
  const { text } = req.body
  const newPost = new Post({
    author: req.cookies.userId,
    text,
  })
  await newPost.save()
  res.redirect('/dashboard')
})

app.get(
  '/api/users/current',
  async (req, res, next) => {
    if (req.cookies.userId) {
      const User = mongoose.model('user')
      const user = await User.findById(req.cookies.userId)
      const out = user.toJSON()
      delete out.password
      res.json(out)
    }
  }
)

app.post('/api/posts/:id/comments', async (req, res) => {
  setup(mongoose)
  const Comment = mongoose.model('comment')
  const { text } = req.body
  const newComment = new Comment({
    author: req.cookies.userId,
    text,
    post: req.params.id,
  })
  await newComment.save()
  res.redirect('/dashboard')
})

app.get('/api/users', async (req, res) => {
  setup(mongoose)
  const User = mongoose.model('user')
  const users = await User.find()
  res.json(users)
})

app.post('/api/users/:id/requests', async (req, res) => {
  setup(mongoose)
  const User = mongoose.model('user')
  const FriendRequest = mongoose.model('friendRequest')
  const currentUser = await User.findById(req.cookies.userId)
  if (currentUser._id.toString() === req.body.friendId) {
    return res.json('Friend request can not be sent to self')
  }
  const request = new FriendRequest({ to: req.body.friendId, from: currentUser })
  await request.save()
  res.redirect('/dashboard')
})

app.get('/api/users/friendRequests', async (req, res) => {
  setup(mongoose)
  const User = mongoose.model('user')
  const user = await User.findById(req.cookies.userId)
    .populate('incomingRequests')
    .populate({ path: 'incomingRequests' })
  console.log({ 1: user })
  const out = user.incomingRequests.map((user) => {
    user.toJSON({ virtuals: true })
  })
  console.log({ out })
  res.json(user)
})

// const out = posts.map((post) => post.toJSON({ virtuals: true }))
// const user = await User.findById(userId);
// const userJson = user.toJSON({ virtuals: true });

// list friend requests 
// if accept => push to opposite users into friend array for both from and to user 



