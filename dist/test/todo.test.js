"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const request = require("supertest");
const app = require("../index");
const { v4: UUID } = require("uuid");
const todo = require("../model/Todo");
//test get all todos
describe("test GET http://localhost:3000/api/todos", () => {
    it("should return all todos", () => __awaiter(void 0, void 0, void 0, function* () {
        return yield request(app)
            .get("/api/todos")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.statusCode).toBe(200);
        });
    }));
});
//test get one todo
const id = "00003";
describe("test GET http://localhost:3000/api/todos:todoId", () => {
    it("should return one todo by id", () => __awaiter(void 0, void 0, void 0, function* () {
        return yield request(app)
            .get(`/api/todos/${id}`)
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.statusCode).toBe(200);
        });
    }));
});
//test create todo
const todoInsert = new todo(UUID(), "TDD todo", "FALSE", new Date().toLocaleDateString("en-US", { timeZone: "UTC" }), new Date().toLocaleDateString("en-US", { timeZone: "UTC" }));
let todoId = " ";
describe("test POST http://localhost:3000/api/todos", () => {
    it("should insert a new todo", () => __awaiter(void 0, void 0, void 0, function* () {
        return yield request(app)
            .post("/api/todos")
            .send(todoInsert)
            .expect(201)
            .then(({ body }) => {
            todoId = body.data.id;
        });
    }));
});
//test update todo
//test delete todo
