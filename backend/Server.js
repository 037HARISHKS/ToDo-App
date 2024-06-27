const express = require("express");
const mongoose =  require("mongoose");
const cors = require('cors')
const routes = require('./routes/TodoRoute')

require("dotenv").config()

app=express();
PORT = process.env.port || 5000;

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.DB_URL)
.then(()=> console.log(`Connected to mongoDB`))
.catch((err)=> console.log(`err`))

app.use(routes);
app.listen(PORT,()=> console.log(`Listerning on ${PORT}`))