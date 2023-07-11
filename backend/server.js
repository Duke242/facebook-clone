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
  console.log('json')
})

app.listen(3002, () => [
  console.log('listening on port 3002')
])

initialize()

app.post('/api/login', passport.authenticate("local", {
  failureRedirect: "/?msg=Login%20Failed",
}),
  (req, res) => {
    console.log(req.user)
    res.cookie('userId', req.user.id, { maxAge: 2592000000 }); // Expires in one month
    res.redirect('/dashboard')
  }
);

app.get('/dashboard', passport.authenticate('local', { session: false }), (req, res) => {
  // Only authenticated users can access this route
  // Implement your own logic to handle the request
  console.log('authenticated')
  console.log(req.user)
  res.redirect('/dashboard');
});

app.get('/api/posts', async (req, res) => {
  console.log('line 63')
  setup(mongoose)
  const Post = mongoose.model('post')
  const posts = await Post.find()
    .populate({
      path: 'author',
    });
  console.log({ posts })
  res.json(posts)
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
  console.log(req.session)
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

    // passport.authenticate("local", (err, user, info) => {
    //   if (err) {
    //     return next(err);
    //   }
    //   console.log({ user, info })

    //   if (!user) {
    //     return res.redirect("/login");
    //   }
    //   req.logIn(user, (err) => {
    //     if (err) {
    //       return next(err);
    //     }
    //     const returnTo = req.session.returnTo;
    //     delete req.session.returnTo;
    //     res.redirect(returnTo || "/");
    //   });
    // })(req, res, next);
  }
)

