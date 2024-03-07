import express from 'express';

const toDoRouter = require("./router/routes");
const parser = require("body-parser");

const app = express();
const port = 3000;

app.use(parser.json())
app.use('/api/toDos', toDoRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});