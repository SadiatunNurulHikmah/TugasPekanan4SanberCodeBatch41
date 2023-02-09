// Add a New Product

const { expect } = require('chai');
const request = require('supertest');


const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';
const categoryId = '466c4955-d315-4943-be0a-11432b420758';

describe('Add Product', function(){
    const response = request(baseUrl) //baseUrl
        .post('/products') //endpoint
        .auth(TOKEN, {type:"bearer"} )
        .send({
            "category_id" : categoryId,
            "code": "NSL123456",
            "name": "Nescafe Original",
            "price": "9200",
            "cost": "8600",
            "stock": "100"
         })
  

    // Cek Response Status 201 Created
    it('response status is 201 Created', async () =>{ 
        console.log((await response).status)
        expect((await response).status).to.equal(201)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        console.log((await response).body)
        expect((await response).body.status).to.equal("success")
        expect((await response).body.message).to.equal("Product berhasil ditambahkan")
        expect((await response).body.data.name).to.equal("Nescafe Original")
    })
})


