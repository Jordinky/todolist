const DB = require("./db.json");
const utils = require("./utils");

const AllTodos = () => {
    try{
        return DB.todos;
    }catch(error){
        throw {status: 500, message: error}
    }
};

const getTodo = (todoId:string) => {
    try{
        const todo = DB.todos.find((todo:any)=>todo.id ===todoId);
        if(!todo){
            throw {
                status: 400,
                message: `Can't find todo with the id '${todoId}'`,
            };
        }
        return todo;
    }catch(error:any){
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const createNewToDo = (newTodo: any) => {
    try{
        const isAlreadyAdded = 
        DB.todos.findIndex((todo:any) => todo.description === newTodo.description) > -1;
    if(isAlreadyAdded){
        throw {
            status: 400,
            message: `Todo with the name '${newTodo.description}' already exists`,
          };
    }
    DB.todos.push(newTodo);
    utils.saveToDatabase(DB);
    return newTodo;
    }catch(error:any){
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const updateOneTodo = (todoId:any,changes: Array <string>) => {
   try{
    const isAlreadyAdded = 
    DB.todos.findIndex((todo:any) => todo.description === todoId.description) > -1;
        if(isAlreadyAdded){
        throw {
            status: 400,
            message: `Todo with the name '${changes}' already exists`,
        };
    }
    const todoUpdate = DB.todos.findIndex((todo:any)=>todo.id === todoId);
    if (todoUpdate === -1){
        throw {
            status: 400,
            message: `Can't find workout with the id '${todoId}'`,
          };
    }
    const updatedTodo = {
        ...DB.todos[todoUpdate],
        ...changes,
        updatedAt: new Date().toLocaleDateString("en-US",{timeZone: "UTC"}),
    };
    DB.todos[todoUpdate] = updatedTodo;
    utils.saveToDatabase(DB);
    return updatedTodo;
    }catch(error:any){
        throw { status: error?.status || 500, message: error?.message || error };
    }
};  

const deleteOneTodo = (todoID:string) => {
    try{
        const indexTodoDelete = DB.todos.findIndex((todo:any)=>todo.id === todoID);
        if(indexTodoDelete === -1){
            throw {
                status: 400,
                message: `Can't find workout with the id '${todoID}'`,
              };
        }
        DB.todos.splice(indexTodoDelete,1);
        saveToDatabase(DB);
    }catch(error:any){
        throw { status: error?.status || 500, message: error?.message || error };
    }
};
module.exports = {AllTodos,getTodo,createNewToDo,updateOneTodo,deleteOneTodo}; 