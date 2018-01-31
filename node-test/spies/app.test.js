const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {

  var db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('minjung', 28);
    expect(spy).toHaveBeenCalledWith('minjung', 28);
  });

  it('should call saveUser with user OBJ', () => {
    var email = 'hogyun3709@gmail.com';
    var password = '123qwe';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({email, password});
  });

});
