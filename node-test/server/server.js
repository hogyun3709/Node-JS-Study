const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not Found',
    name: 'Hogyun App v1.0'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'minjung',
    age: '28'
  }, {
    name: 'hogyun',
    age: '24'
  }, {
    name: 'hugo',
    age: '23'
  }]);
});
app.listen(3000);

module.exports.app = app;

// const express = require('express');
//
// var app = express();
//
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });
//
//
// app.listen(3000)
