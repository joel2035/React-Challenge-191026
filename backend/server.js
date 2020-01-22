const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const DB_LOCAL_IP = process.env.DB_LOCAL_IP
const DB_NAME = process.env.DB_NAME
const DB_PORT = process.env.DB_PORT
//brancher cors
app.use(cors())
//brancher le parseur d'HttpRequest
app.use(express.json())

//connection a la base mongo
mongoose.connect('mongodb://' + DB_LOCAL_IP + '/' + DB_NAME)
//ouvrir & deleguer la gestion de la connection a nodemon
mongoose.once('open', () => {
    console.log('MongoDB database connection established')
})

//create base values to init DB if nescessary
//Auth
let Auth = require('../model/student.model')
const AuthAdmin = new Auth(nom = "heticeric", password = "heticeric" , role = "prof")
const AuthEtudiant = new Auth(nom = "student", password = "student" , role = "etu")
//Comp
let Comp = require('../model/compentence.model')
const CompFront = new Comp(nom = "Front")
const CompBack = new Comp(nom = "Back")
const CompUX = new Comp(nom = "UX")
const CompUI = new Comp(nom = "UI")
const CompGP= new Comp(nom = "Gestion de projet")

//insert base values
Auth.insertIfNotExist(AuthAdmin, (err, auth) => {console.error(err)})
Auth.insertIfNotExist(AuthEtudiant, (err, auth) => {console.error(err)})
Comp.insertIfNotExist(CompFront, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompBack, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompUX, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompUI, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompGP, (err, comp) => {console.error(err)})

//Route to end points
const studentRouter = require('./routes/student.routes.js.js')
app.use('/student', studentRouter)

const authRouter = require('./routes/auth.routes.js.js')
app.use('/auth', authRouter)

//lancer le serv
app.listen(DB_PORT, function() {
    console.log("server runing PORT: " + DB_PORT)
})