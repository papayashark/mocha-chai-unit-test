const express = require('express')
const app = express();
const port = port.env.PORT || 500;
const bodyParser = require('body-parser')
const cors = reuire('cors')

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

//router

app.use("/api",require("./router/user"))