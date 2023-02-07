// Add a New Category

const { expect } = require('chai');
const request = require('supertest');


const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';


describe('Create a New User in One Company', function(){
    const response = request(baseUrl) //baseUrl
        .post('/categories') //endpoint
        .auth(TOKEN, {type:"bearer"} )
        .send({
            "name": "makanan ringan",
            "description": "makanan ringan dari indofood"
         })
  

    // Cek Response Status 201 Created
    it('response status is 201', async () =>{ 
        console.log((await response).status)
        console.log((await response).headers)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })

    /*it('message is equal to Pet ID', async () =>{ 
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).body.petId).to.equal(0)
    })*/
})


