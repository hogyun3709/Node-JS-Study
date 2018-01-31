var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // db.saveUser({
    // email: email,
    // password: password
  // });
  //ES6 Call
  db.saveUser({email, password});
}
