const TODO = require("../database/toDo")
const {v4: uuid} = require("uuid");
const TodoObject = require("../model/Todo");

const getAllTodosService = () => {
    try{
        const toDos = TODO.AllTodos();
        return toDos;
    } catch (error:any){
        throw error
    }
};

const getOneTodoService = (todoId:string) =>{
    try{
        const todo = TODO.getTodo(todoId);
        return todo
    }catch(error){
        throw error;
    }
};

const createNewTodoService = (newToDo:any) => {
    var toDoInsert = new TodoObject(
        uuid(),
        newToDo.description,
        newToDo.completed,
        new Date().toLocaleDateString("en-US",{timeZone: "UTC"}),
        new Date().toLocaleDateString("en-US",{timeZone: "UTC"})
    );

    try{
        const createdToDo = TODO.createNewToDo(toDoInsert);
        return createdToDo;
    }catch(error){
        throw error
    }
};

const updateTodoService = (todoId: string,changes:any) => {
    try{
        const updatedTodo = TODO.updateOneTodo(todoId,changes);
        return updatedTodo;
    }catch(error){
        throw error;
    }
}

const deleteTodoService = (todoId: string) => {
    try{
        TODO.deleteOneTodo(todoId);
    }catch(error){
        throw error;
    }
}

module.exports = {
    getAllTodosService,
    getOneTodoService,
    createNewTodoService,
    updateTodoService,
    deleteTodoService
}