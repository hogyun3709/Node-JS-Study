module.exports.add = (a,b) => a + b;

module.exports.asyncAdd = (a,b, callback) => {
  setTimeout(() => {
    callback(a+b);
  }, 1500);
};

module.exports.asyncSqure = (x, callback) => {
  setTimeout(() => {
    callback(x*x);
  },1500);
}

module.exports.squre = (x) => x * x;

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ');
  user.firstName = names[0];
  user.lastName = names[1];
  return user;
};
// module.exports.add = (a,d) => {
  // return a + b;
// }
