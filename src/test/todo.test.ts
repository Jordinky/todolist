const request = require("supertest")
const app = require("../index")
const {v4: UUID} = require("uuid");
const todo = require ("../model/Todo")
const id = "64e8658e-7681-4dcf-a357-9a58c68e8643"

const todoInsert = new todo(
    "00003",
    "aprender GO",
    "FALSE",
    new Date().toLocaleDateString("en-US",{timeZone: "UTC"}),
    new Date().toLocaleDateString("en-US",{timeZone: "UTC"})
);

//test get all todos
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

//test get one todo

describe("test GET http://localhost:3000/api/todos:todoId", ()=>{
    it("should return one todo by id", async () =>{
        return await request(app)
            .get(`/api/todos/${id}`)
            .expect('Content-Type',/json/)
            .expect(200)
            .then((res:any)=>{
                expect(res.statusCode).toBe(200);
            })
    });
});

//test create todo
let todoId = " "
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
//test update todo
const setCompleted ={
    completed: "TRUE"
}
describe("test PUT http://localhost:3000/api/todos", ()=>{
    it("should update a todo 'competed' given his id",async ()=>{
        return await request(app)
            .put(`/api/todos/${id}`)
            .send(setCompleted)
            .expect(201)
            .then(({body}:any)=>{
                console.log(id)
            })
    });
});
//test delete todo
describe("DELETE /api/product/delete/:id", () =>{
    test("should delete a todo",async () =>{
        return request(app)
            .delete(`/api/todos/${id}`)
            .expect(410)
    });
});
