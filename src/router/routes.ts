const express = require("express")
const router = express.Router();
const toDoController = require("../controller/toDoController")


router.get("/", toDoController.getAllTodos);
router.get("/:todoId", toDoController.getOneTodo);
router.post("/", toDoController.createNewTodo);
router.patch("/:todoId", toDoController.updateTodo);
router.delete("/:todoId", toDoController.deleteTodo);

module.exports = router;