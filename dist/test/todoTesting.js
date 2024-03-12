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
const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../src/index");
require("dotenv").config();
describe("GET http://localhost:3000/api/todos", () => {
    it("should return all todos", () => __awaiter(void 0, void 0, void 0, function* () {
        return request(app)
            .get("http://localhost:3000/api/todos")
            .expect('Content-Type', /json/)
            .expect(200)
            .then((res) => {
            expect(res.statusCode).toBe(200);
        });
    }));
});
