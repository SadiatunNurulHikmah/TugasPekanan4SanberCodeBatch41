// Add a New Product

const { expect } = require('chai');
const request = require('supertest');


const baseUrl = 'https://kasir-api.belajarqa.com';

// untuk Login 
// email = diah.hikmah@gmail.com
// password = tokodiah
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA0NjNmZDQzLTk3MWMtNDY0Yi04NzllLTdkMzQ3OTllMTkwOCIsImNvbXBhbnlJZCI6ImY2MGUxNTFjLTZhOTMtNGI4My1iNDBhLWM0Yjc1MzA3OTkwZSIsImlhdCI6MTY3NTc2MDEzM30.MLqY9_WxeOJVqVtCSdczua9_3Kvg-WIAs9fl4v2QNe4';

// get categoryId dari sini dan pilih salah satu categoryId
/*
describe('Get User List', function(){
    const response = request(baseUrl) //baseUrl
        .get('/categories') //endpoint
        .auth(TOKEN, {type:"bearer"} ) //Authorization
        .query({ // Query Params
            q : "minuman", //Filter user list by user name
            p : 1 //Filter user list by page
        })
  
    // Response Status 200 OK
    it('Response Status is 200 OK', async () =>{ 
        expect((await response).status).to.equal(200)
    })

    // Cek isi Response Body
    it('Response Body is OK', async () =>{ 
        console.log((await response).body.data.categories)
        expect((await response).body.status).to.equal("success")
    })

})
*/
const categoryId = '232983d4-14fe-4836-ad8c-884681ec12fd';

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


