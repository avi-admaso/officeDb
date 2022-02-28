require("dotenv").config();
const express = require("express");
require('./DB/Office-DB');
const cors = require("cors");
const officeRouter = require('./Route/Worker-Routes')
const app = express() ;
app.use(express.json())
app.use(cors());
const port = process.env.PORT ;
app.listen(port);

app.use("/workers" , officeRouter);

