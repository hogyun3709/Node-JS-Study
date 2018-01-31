const expect= require('expect');
const utils = require('./utils');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(33, 11);

      expect(res).toBe(44).toBeA('number');
      // if(res !== 44){
        // throw new Error(`Expected 44 but you got ${res}`);
      // }
    });
  });

  it('should asyn two numbers', (done) => {
    utils.asyncAdd(5, 5, (sum) => {
      expect(sum).toBe(10).toBeA('number');
      done();
    });
  });

  it('should asyn the value of x square', (done) =>{
    utils.asyncSqure(11, (mutiply) => {
      expect(mutiply).toBe(121).toBeA('number');
      done();
    });
  });

  it('should be squre of the value', () =>{
    var res = utils.squre(11);

    expect(res).toBe(121).toBeA('number');

    // if(res !== 121){
      // throw new Error(`Expected 121 but you got ${res}`);
    // }
  });
});


it('should set first name and last name', () => {
  var user = {location: 'DongTan', age:'24'};
  var res = utils.setName(user, 'Hogyun Kim');

  expect(res).toInclude({
    firstName: 'Hogyun',
    lastName: 'Kim'
  });
});






//
// it('should expect some values', () => {
//   expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
//   expect([2,3,4]).toInclude(2);
//   expect([1,2,3,4]).toExclude(6);
//   expect({
//     name: 'Hogyun',
//     age: 25,
//     location: 'DongTan'
//
//   }).toInclude({
//     age:25
//   }).toExclude({
//     age:23
//   })
// });
