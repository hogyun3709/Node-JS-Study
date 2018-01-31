// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// //obj destructuring
// var user = {name: 'hogyun', age: '24'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB Server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err){
  //     return console.log('Unable to insert to do', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'minjung',
  //   age: 28,
  //   location: 'Seoul'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unalbe to insert user' ,err);
  //   }
  //   console.log(result.ops[0]._id.getTimestamp());
  // })

  db.close();
});
