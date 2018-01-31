var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'random'
  };
  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(31, (userObj)=> {
  console.log('Hello');
  console.log(userObj);
});
