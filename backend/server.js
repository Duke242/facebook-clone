const express = require('express');
const app = express();
const passport = require('passport');
const { initialize } = require('./validators/passportConfig');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const { setup } = require('./models/mongoose');




app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api',(req, res) => {
 res.json({'users': ['userOne', 'userTwo']});
});

app.listen(3002, () => [
    console.log('listening on port 3002')
])

initialize(passport)

app.post('/api/login', passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/?msg=Login%20Failed",
}),
);

app.get('/api/posts', async (req, res) => {
    setup(mongoose)
    const Post = mongoose.model('post')
    const posts = await Post.find({})
    res.json({posts})
})

app.post('/api/users', async (req, res) => {
    setup(mongoose)
    const User = mongoose.model('user')
    const { email, password, birthday, gender, firstName, lastName } = req.body
    const newUser = new User({
        firstName,
        lastName,
        email,
        password,
        birthday,
        gender,
    }) 
    await newUser.save()
    res.json({user: newUser})
})
