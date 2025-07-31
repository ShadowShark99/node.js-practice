const express = require("express");
const app = express();
const authorRouter = require("./routers/authorRouter");
const bookRouter = require("./routers/bookRouter");
const indexRouter = require("./routers/indexRouter");

app.use("/authors", authorRouter);
app.use("/book", bookRouter);
app.use("/", indexRouter);

//error middleware, catch thrown errors by previous app.use calls
app.use((err, req, res, next) => {
  console.log("poop");
  console.error(err);
  res.status(err.statusCode || 500).send(err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first express app - listning on PORT: ${PORT}`);
});
