const request = require("supertest")
const app = require("../index")




describe("test GET http://localhost:3000/api/todos",()=>{
    it("should return all todos",async () =>{
        return await request(app)
            .get("http://localhost:3000/api/todos")
            .expect('Content-Type',/json/)
            .expect(200);
    });
});
