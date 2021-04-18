const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json()) //This line to automatically pass any incoming JSON to an Object so we can access it in our request handlers using {req.body}.
app.use(userRouter)
app.use(taskRouter)

module.exports = app