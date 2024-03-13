import express from 'express';

const toDoRouter = require("./router/routes");
const parser = require("body-parser");

const app = express();
const port = 3000;

app.use(parser.json())
app.use('/api/toDos', toDoRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`Listening on port ${port}`))
}

module.exports = app