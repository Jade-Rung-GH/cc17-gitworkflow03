const express = require("express");

const app = express();


app.use('/login',(req,res)=>{
    res.json({msg: 'Login...'})
})
app.use("/register", (req, res, next) => {
  res.json({ msg: "Register..." });
});


let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is on port", port));
