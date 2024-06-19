const request = require("supertest")
const app = require("../index")
const {v4: UUID} = require("uuid");
const todo = require ("../model/Todo")



const todoInsert = new todo(
    UUID(),
    "testear",
    "FALSE",
    new Date().toLocaleDateString("en-US",{timeZone: "UTC"}),
    new Date().toLocaleDateString("en-US",{timeZone: "UTC"})
);

let todoId = ""
describe("test POST http://localhost:3000/api/todos", ()=>{
    it("should insert a new todo", async ()=>{
        return await request(app)
            .post("/api/todos")
            .send(todoInsert)
            .expect(201)
            .then(({body}:any)=>{
                todoId = body.data.id;
            })
    });
});
describe("test GET http://localhost:3000/api/todos:todoId", ()=>{
    it("should return one todo by id", async () =>{
        
        return await request(app)
            .get(`/api/todos/${todoId}`)
            .expect('Content-Type',/json/)
            .expect(200)
            .then((res:any)=>{
                expect(res.statusCode).toBe(200);
            })
            
    });
    
});
describe("test GET http://localhost:3000/api/todos", ()=>{
    it("should return all todos",async () =>{
        return await request(app)
            .get("/api/todos")
            .expect('Content-Type',/json/)
            .expect(200)
            .then((res:any) => {
                expect(res.statusCode).toBe(200)
            })
    });
});
//test update todo
const setCompleted ={
    completed: "TRUE"
}
describe("test PUT http://localhost:3000/api/todos", ()=>{
    it("should update a todo 'competed' given his id",async ()=>{
        return await request(app)
            .patch(`/api/todos/${todoId}`)
            .send(setCompleted)
            .expect(200)
    });
});
describe("DELETE /api/product/delete/:id", () =>{
    test("should delete a todo",async () =>{
        return request(app)
            .delete(`/api/todos/${todoId}`)
            .expect(204)
    });
});
