// Add a New Product

const { expect } = require('chai');
const request = require('supertest');


const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';

// get customerId dari sini dan pilih salah satu customerId
/*
describe('Get User List', function(){
    const response = request(baseUrl) //baseUrl
        .get('/customers') //endpoint
        .auth(TOKEN, {type:"bearer"} ) //Authorization
        .query({ // Query Params
            q : "Diah", //Filter user list by user name
            p : 1 //Filter user list by page
        })
  
    // Response Status 200 OK
    it('Response Status is 200 OK', async () =>{ 
        expect((await response).status).to.equal(200)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        console.log((await response).body.data.customers)
        expect((await response).body.status).to.equal("success")
    })

})
*/
const costumerId = '61263ced-e63d-401f-a6f5-1aec39c84ad4';

describe('Create a New User in One Company', function(){
    const response = request(baseUrl) //baseUrl
        .delete('/customers/' + costumerId) //endpoint
        .auth(TOKEN, {type:"bearer"} )
  

    // Cek Response Status 200 OK
    it('response status is 200 OK', async () =>{ 
        console.log((await response).status)
        expect((await response).status).to.equal(200)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        console.log((await response).body)
        expect((await response).body.status).to.equal("success")
    })
})


