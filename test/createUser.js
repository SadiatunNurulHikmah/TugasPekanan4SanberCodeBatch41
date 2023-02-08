// Create a New User in One Company

const { expect } = require('chai');
const request = require('supertest');

// deklarasi base Url
const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';


describe('Create a New User in One Company', function(){
    const response = request(baseUrl) //baseUrl
        .post('/users') //endpoint
        .auth(TOKEN, {type:"bearer"} ) //Authorization
        .send({
            "name": "kasir minimarket 1",
            "email": "kasirmm1@example.com",
            "password": "password"
         })
  
    // Response Status 201 Created
    it('Response Status is 201 Created', async () =>{ 
        expect((await response).status).to.equal(201)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        //console.log((await response).body)
        expect((await response).body.status).to.equal("success")
        expect((await response).body.message).to.equal("User berhasil ditambahkan")
        expect((await response).body.data.name).to.equal("kasir minimarket 1")
    })

})


