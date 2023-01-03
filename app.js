const express = require("express");
const app = express();

var indexRouter = require("./routes/index");
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.get("/", (req, res) => {
  res.render("indexRouter");
});
app.listen(3500);
