var express = require("express");
var cors = require('cors')
var app = express();
const connectDB = require("./connection");
connectDB();
app.use(cors());
app.use(express.json(extended = true));
app.use('/', require('../API/user'));
app.post('/', async(req, res) => {
    console.log(req.body)

})

console.log("Server Started");
app.listen(4000);