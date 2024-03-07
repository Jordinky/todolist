"use strict";
const TODO = require("../database/toDo");
const { v4: uuid } = require("uuid");
const getAllTodosService = () => {
    try {
        const toDos = TODO.AllTodos();
        return toDos;
    }
    catch (error) {
        throw error;
    }
};
const getOneTodoService = (todoId) => {
    try {
        const todo = TODO.getTodo(todoId);
        return todo;
    }
    catch (error) {
        throw error;
    }
};
const createNewTodoService = (newToDo) => {
    const toDoInsert = Object.assign(Object.assign({}, newToDo), { id: uuid(), createdAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }), updatedAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }) });
    try {
        const createdToDo = TODO.createNewToDo(toDoInsert);
        return createdToDo;
    }
    catch (error) {
        throw error;
    }
};
const updateTodoService = (todoId, changes) => {
    try {
        const updatedTodo = TODO.updateOneTodo(todoId, changes);
        return updatedTodo;
    }
    catch (error) {
        throw error;
    }
};
const deleteTodoService = (todoId) => {
    try {
        TODO.deleteOneTodo(todoId);
    }
    catch (error) {
        throw error;
    }
};
module.exports = {
    getAllTodosService,
    getOneTodoService,
    createNewTodoService,
    updateTodoService,
    deleteTodoService
};
