"use strict";
const DB = require("./db.json");
const utils = require("./utils");
const AllTodos = () => {
    try {
        return DB.todos;
    }
    catch (error) {
        throw { status: 500, message: error };
    }
};
const getTodo = (todoId) => {
    try {
        const todo = DB.todos.find((todo) => todo.id === todoId);
        if (!todo) {
            throw {
                status: 400,
                message: `Can't find todo with the id '${todoId}'`,
            };
        }
        return todo;
    }
    catch (error) {
        throw { status: (error === null || error === void 0 ? void 0 : error.status) || 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
const createNewToDo = (newTodo) => {
    try {
        const isAlreadyAdded = DB.todos.findIndex((todo) => todo.description === newTodo.description) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Todo with the name '${newTodo.description}' already exists`,
            };
        }
        DB.todos.push(newTodo);
        utils.saveToDatabase(DB);
        return newTodo;
    }
    catch (error) {
        throw { status: (error === null || error === void 0 ? void 0 : error.status) || 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
const updateOneTodo = (todoId, changes) => {
    try {
        const isAlreadyAdded = DB.todos.findIndex((todo) => todo.description === todoId.description) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Todo with the name '${changes}' already exists`,
            };
        }
        const todoUpdate = DB.todos.findIndex((todo) => todo.id === todoId);
        if (todoUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find todo with the id '${todoId}'`,
            };
        }
        const updatedTodo = Object.assign(Object.assign(Object.assign({}, DB.todos[todoUpdate]), changes), { updatedAt: new Date().toLocaleDateString("en-US", { timeZone: "UTC" }) });
        DB.todos[todoUpdate] = updatedTodo;
        utils.saveToDatabase(DB);
        return updatedTodo;
    }
    catch (error) {
        throw { status: (error === null || error === void 0 ? void 0 : error.status) || 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
const deleteOneTodo = (todoID) => {
    try {
        const indexTodoDelete = DB.todos.findIndex((todo) => todo.id === todoID);
        if (indexTodoDelete === -1) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${todoID}'`,
            };
        }
        DB.todos.splice(indexTodoDelete, 1);
        utils.saveToDatabase(DB);
    }
    catch (error) {
        throw { status: (error === null || error === void 0 ? void 0 : error.status) || 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
};
module.exports = { AllTodos, getTodo, createNewToDo, updateOneTodo, deleteOneTodo };
