const express = requir('express')
const app = express()
const bodyParser  = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 4000
const DB_LOCAL_IP = '127.0.0.1:27017'
const DB_NAME = 'React_Challenge'

//brancher cors
app.use(cors())
//brancher le parseur d'HttpRequest
app.use(bodyParser.json())

//connection a la base mongo
mongoose.connect('mongodb://' + DB_LOCAL_IP + '/' + DB_NAME)

//ouvrir & deleguer la gestion de la connection a nodemon
mongoose.once('open', function() {
    console.log('MongoDB database connection established')
})

app.listen(PORT, function() {
    console.log("server runinf port: " + PORT)
})