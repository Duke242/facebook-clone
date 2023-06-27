const express = require('express');
const app = express();
const passport = require('passport');
const { initialize } = require('./validators/passportConfig');
const flash = require('connect-flash');

app.use(flash());

app.get('/api',(req, res) => {
 res.json({'users': ['userOne', 'userTwo']});
});

app.listen(3002, () => [
    console.log('listening on port 3002')
])

initialize(passport)

app.post('/api/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/?msg=Login%20Failed",
}),
);

