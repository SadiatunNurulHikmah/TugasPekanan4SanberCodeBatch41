// Delete Customer By Id

const { expect } = require('chai');
const request = require('supertest');


const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';

// Get Customer Id
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

// Delete Customer By Id
const costumerId = '9c9939bb-30ec-4292-add8-b83f30bbff0d=-=-';

describe('Delete Customer By Id', function(){
    const response = request(baseUrl) //baseUrl
        .delete('/customers/' + costumerId) //endpoint
        .auth(TOKEN, {type:"bearer"} )
  
/*
    // Positive Case
    // Cek Response Status 200 OK
    it('response status is 200 OK', async () =>{ 
        console.log((await response).status)
        expect((await response).status).to.equal(200)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        console.log((await response).body)
        expect((await response).body.status).to.equal("success")
    }) */

    // Negative Case
    // Response Status 404 Not Found
    it('Response Status is 404 Not Found', async () =>{ 
        console.log((await response).status)
        expect((await response).status).to.equal(404)
    }) 

    // Cek isi Response Body
    it('Response Body for Status Fail', async () =>{ 
        console.log((await response).body)
        expect((await response).body.status).to.equal("fail")
        expect((await response).body.message).to.equal("id tidak valid")
    })
})


