// get token

const request = require('supertest');
const response = require('../data/dataAuth');

const baseUrl = 'https://kasir-api.belajarqa.com';


describe('My API tests', function() {

    var token = null;
  
    before(function(done) {
      request(baseUrl)
        .post('/registration')
        .send({
            "name": "nama Toko",
            "email": "sample@ex.com",
            "password": "123adsfadf@",
         }
        )
        .end(function(err, res) {
          token = res.body.token; // Or something
          done();
        });
    });
  
    it('should get a valid token for user: user1', function(done) { 
      request('/get/user')
        .set('Authorization', 'Bearer ' + token)
        .expect(200, done);
    });
  });

/*module.exports = function(){
    const response = request(baseUrl1)
    .post('/api/AuthAccount/Login')
    .send({
        "email": "diah.hikmah@gmail.com",
        "password": "123456"
      })
    .set({'Authorization' : response.body.data.Token})

    //let token = response.body.data.Token
    console.log(Authorization)
      //id = response.body.data.id
    return Token
}*/

