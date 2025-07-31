const express = require("express");
const app = express();
const authorRouter = require("./routers/authorRouter");
const bookRouter = require("./routers/bookRouter");
const indexRouter = require("./routers/indexRouter");

app.use("/authors", authorRouter);
app.use("/book", bookRouter);
app.use("/", indexRouter);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`My first express app - listning on PORT: ${PORT}`);
});
