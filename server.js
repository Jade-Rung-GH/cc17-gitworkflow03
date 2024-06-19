const express = require("express");

const app = express();


app.use('/login',(req,res)=>{
    res.json({msg: 'Login...'})
})

let port = process.env.PORT || 8000;
app.listen(port, () => console.log("Server is on port", port));