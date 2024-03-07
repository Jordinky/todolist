"use strict";
const todoService = require("../services/todoService");
const getAllTodos = (req, res) => {
    try {
        const allTodos = todoService.getAllTodosService();
        res.send({ status: "ok", data: allTodos });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ status: "Failed", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
};
const getOneTodo = (req, res) => {
    const { params: { todoId }, } = req;
    if (!todoId) {
        res
            .status(400)
            .send({
            status: "FAILED",
            data: { error: "Parameter ':todoId' can not be empty" },
        });
    }
    try {
        const todo = todoService.getOneTodoService(todoId);
        res.send({ status: "OK", data: todo });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ status: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
};
const createNewTodo = (req, res) => {
    const { body } = req;
    if (!body.description || !body.completed) {
        res
            .status(400)
            .send({
            status: "FAILED",
            data: {
                error: "One of the following keys is missing: 'description','completed'",
            },
        });
        return;
    }
    const newToDo = {
        description: body.description,
        completed: body.completed
    };
    try {
        const createdToDo = todoService.createNewTodoService(newToDo);
        res.status(201).send({ status: "OK", data: createdToDo });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ status: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
};
const updateTodo = (req, res) => {
    const { body, params: { todoId }, } = req;
    if (!todoId) {
        res
            .status(400)
            .send({
            status: "FAILED",
            data: { error: "Parameter ':todoId' can not be empty" },
        });
    }
    try {
        const updatedTodo = todoService.updateTodoService(todoId, body);
        res.send({ status: "OK", data: updatedTodo });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ status: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
};
const deleteTodo = (req, res) => {
    const { params: { todoId }, } = req;
    if (!todoId) {
        res
            .status(400)
            .send({
            status: "FAILED",
            data: { error: "Parameter ':todoId' can not be empty" },
        });
    }
    try {
        const todoDelete = todoService.deleteTodoService(todoId);
        res.status(204).send({ status: "OK" });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ status: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
};
module.exports = {
    getAllTodos,
    getOneTodo,
    createNewTodo,
    updateTodo,
    deleteTodo,
};
