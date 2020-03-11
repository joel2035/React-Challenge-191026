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
const uri = "mongodb://localhost:27017/react-challenge-191026"//process.env.DB_URI
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
    console.log('Connection à la base de données etablie')
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
app.use('/note_student', compNoteRouter)

const competenceRouter = require('./routes/competence.routes.js')
app.use('/competence', competenceRouter)

const noteRouter = require('./routes/note.routes.js')
app.use('/note', noteRouter)

//lancer le serv
const serv_port = "27017" //process.env.SERV_PORT
app.listen(serv_port, function() {
    console.log("server runing PORT: " + serv_port)
})