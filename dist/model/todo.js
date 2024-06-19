"use strict";
module.exports = class Todo {
    constructor(id, description, completed, createdAt, updatedAt) {
        this.id = id;
        this.description = description;
        this.completed = completed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getTodo() {
        return this.description + this.completed;
    }
    getTodoId() {
        return this.id;
    }
};
