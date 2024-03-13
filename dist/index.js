"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const toDoRouter = require("./router/routes");
const parser = require("body-parser");
const app = (0, express_1.default)();
const port = 3000;
app.use(parser.json());
app.use('/api/toDos', toDoRouter);
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`Listening on port ${port}`));
}
module.exports = app;
