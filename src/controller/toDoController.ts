
const todoService = require("../services/todoService");

const getAllTodos = (req: any, res: any) => {
    try{
        const allTodos = todoService.getAllTodosService();
        res.send({status: "ok", data: allTodos});
    }catch(error:any){
        res
            .status(error?.status || 500)
            .send({ status: "Failed", data : {error: error?.message || error} });
    }
};

const getOneTodo = (req: any, res: any) => {
    const {
        params: {todoId},
    } = req;
    if(!todoId){
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {error: "Parameter ':todoId' can not be empty"},
            });
    }
    try{
        const todo = todoService.getOneTodoService(todoId);
        res.send({status: "OK",data: todo});
    }catch (error:any){
        res
            .status(error?.status || 500)
            .send({status: "FAILED",data: {error: error?.message || error} });
    }
};

const createNewTodo = (req: any, res: any) =>{
    const {body} = req;
    if(!body.description || !body.completed){
        res
            .status(400)
            .send({
                status: "FAILED",
                data:{
                    error: "One of the following keys is missing: 'description','completed'",
                },
            });
            return
    }
    const newToDo = {
        description: body.description,
        completed: body.completed
    };
    try{
        const createdToDo = todoService.createNewTodoService(newToDo);
        res.status(201).send({status: "OK", data: createdToDo}); 
    }catch(error: any){
        res
            .status(error?.status||500)
            .send({status: "FAILED",data: {error: error?.message || error} });
    }
};

const updateTodo = (req: any, res: any) =>{
    const {
        body,
        params: {todoId},
    } = req;
    if(!todoId){
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {error: "Parameter ':todoId' can not be empty"},
            });
    }
    try{
        const updatedTodo = todoService.updateTodoService(todoId,body);
        res.send({status: "OK",data: updatedTodo});
    }catch (error:any){
        res
            .status(error?.status || 500)
            .send({status: "FAILED",data: {error: error?.message || error} });
    }
};

const deleteTodo = (req: any, res: any) => {
    const {
        params: {todoId},
    } = req;
    if(!todoId){
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {error: "Parameter ':todoId' can not be empty"},
            });
    }
    try{
        const todoDelete = todoService.deleteTodoService(todoId);
        res.status(204).send({ status: "OK" });
    }catch (error:any){
        res
            .status(error?.status || 500)
            .send({status: "FAILED",data: {error: error?.message || error} });
    }
};

module.exports = {
    getAllTodos,
    getOneTodo,
    createNewTodo,
    updateTodo,
    deleteTodo,
};