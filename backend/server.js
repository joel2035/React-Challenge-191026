const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
//brancher cors
app.use(cors())
//brancher le parseur d'HttpRequest
app.use(express.json())

//connection a la base mongo
const uri = process.env.DB_URI
mongoose.connect(
    uri, 
    {
        useNewUrlParser: true,   
        useCreateIndex: true, 
        useUnifiedTopology: true 
    })
    .then(msg => console.log("Connection au serveur etablie"))
    .catch(msg => console.error("Erreur de connection à la BD"))
//ouvrir & deleguer la gestion de la connection a nodemon
mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established')
})

//create base values to init DB if nescessary
const randomValuesInsertor = require('./randomValuesInsert.js')
randomValuesInsertor() //<-- check Terminal for errors

//Route to end points
const studentRouter = require('./routes/student.routes.js')
app.use('/student', studentRouter)

const authRouter = require('./routes/auth.routes.js')
app.use('/auth', authRouter)

const compNoteRouter = require('./routes/competenceNote.routes.js')
app.use('/auth', compNoteRouter)

//lancer le serv
const serv_port = process.env.SERV_PORT
app.listen(serv_port, function() {
    console.log("server runing PORT: " + serv_port)
})