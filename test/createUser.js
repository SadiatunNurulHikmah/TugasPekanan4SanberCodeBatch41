// Create a New User in One Company

const { expect } = require('chai');
const request = require('supertest');


const baseUrl = 'https://kasirdemo.belajarqa.com';

describe('Create a New User in One Company', function(){
    const response = request(baseUrl) //baseUrl
        .post('/users') //endpoint
        .send({
            "name": "kasir-serbaguna",
            "email": "user@example.com",
            "password": "jiasda2321@"
         })

    // Cek Response Status 200
    it('response status is 200', async () =>{ 
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })

    /*it('message is equal to Pet ID', async () =>{ 
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).body.petId).to.equal(0)
    })*/
})


