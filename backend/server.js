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
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
//ouvrir & deleguer la gestion de la connection a nodemon
mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established')
})

//create base values to init DB if nescessary
//Auth
let Auth = require('./model/auth.model')
const AuthAdmin = new Auth({nom: "heticeric", password: "heticeric" , role: "prof"})
const AuthEtudiant = new Auth({nom: "student", password: "student" , role: "etu"})
Auth.insertIfNotExist(AuthAdmin, (err, auth) => {console.error(err)})
Auth.insertIfNotExist(AuthEtudiant, (err, auth) => {console.error(err)})

//Comp
let Comp = require('./model/competence.model')
const CompFront = new Comp({nom: "Front"})
const CompBack = new Comp({nom: "Back"})
const CompUX = new Comp({nom: "UX"})
const CompUI = new Comp({nom: "UI"})
const CompGP= new Comp({nom: "Gestion de projet"})
Comp.insertIfNotExist(CompFront, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompBack, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompUX, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompUI, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompGP, (err, comp) => {console.error(err)})

//Route to end points
const studentRouter = require('./routes/student.route.js')
app.use('/student', studentRouter)

const authRouter = require('./routes/auth.route.js')
app.use('/auth', authRouter)

//lancer le serv
const db_port = process.env.DB_PORT
app.listen(db_port, function() {
    console.log("server runing PORT: " + db_port)
})