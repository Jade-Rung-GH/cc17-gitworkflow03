const express = require("express");

const app = express();

app.use("/register", (req, res, next) => {
  res.json({ msg: "Register..." });
});

app.listen(8000);
