const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {
  describe('GET /' , () => {
    it('should return hello world return', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res)=>{
          expect(res.body).toInclude({
            error: 'Page not Found'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return my user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'minjung',
            age: '28'
          });
        })
        .end(done);
    });
  });
});
