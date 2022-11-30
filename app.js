const express = require("express");
const connect = require("./connection/connect");
const Taskroutes = require("./Routes/task")

const app = express();

app.use(express.json());

app.use("/", Taskroutes);

app.listen(8080,()=>{console.log('server is connected to port 8080')})