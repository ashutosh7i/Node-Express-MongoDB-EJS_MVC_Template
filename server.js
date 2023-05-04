const express = require('express')
const app = express()
const port = 3000

//main router to handle requests
const mainRouter = require("./Routes/mainRouter")
//bodyParser to parse the form body
const bodyParser = require('body-parser');

//setting EJS view engine
app.set("view engine", "ejs");
const path = require("path");

//setting views directory
app.set("views", path.resolve("./Views"))

//json middleware for Json body parsing
app.use(express.json())

//parsing the form body
app.use(bodyParser.urlencoded({ extended: true }));

//sending all requests to the router
app.use("/", mainRouter)

app.listen(port, () => console.log(`Server started on port ${port}`))