// get about one user details

const { expect } = require('chai');
const request = require('supertest');

// deklarasi base Url
const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';

/*
//Get User List
const searchUser = 'minimarket'
const searchPage = 1

describe('Get User List', function(){
    const response = request(baseUrl) //baseUrl
        .get('/users') //endpoint
        .auth(TOKEN, {type:"bearer"} ) //Authorization
        .query({ // Query Params
            q : searchUser, //Filter user list by user name
            p : searchPage //Filter user list by page
        })
  
    // Response Status 200 OK
    it('Response Status is 200 OK', async () =>{ 
        console.log((await response).status)
        expect((await response).status).to.equal(200)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        console.log((await response).body.data.users)
        expect((await response).body.status).to.equal("success")
    })

})
*/

// Get User Detail
const userId = '7c4f1bb5-8783-4b72-9a6c-04cb26912a9e=-=-=';

describe('Get User Detail By Id', function(){
    const response = request(baseUrl) //baseUrl
        .get('/users/' + userId) //endpoint
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
    }) 
*/
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
