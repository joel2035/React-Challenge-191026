const express = require('express')
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

//insert Base Value
//Auth
let Auth = require('../model/student.model')
const AuthAdmin = new Auth(nom = "heticeric", password = "heticeric" , role = "prof")
const AuthEtudiant = new Auth(nom = "student", password = "student" , role = "etu")
Auth.insertIfNotExist(AuthAdmin, (err, auth) => {console.error(err)})
Auth.insertIfNotExist(AuthAdmin, (err, auth) => {console.error(err)})
//Comp
let Comp = require('../model/compentence.model')
const CompFront = new Comp(nom = "Front")
const CompBack = new Comp(nom = "Back")
const CompUX = new Comp(nom = "UX")
const CompUI = new Comp(nom = "UI")
const CompGP= new Comp(nom = "Gestion de projet")
Comp.insertIfNotExist(CompFront, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompBack, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompUX, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompUI, (err, comp) => {console.error(err)})
Comp.insertIfNotExist(CompGP, (err, comp) => {console.error(err)})


//save
newStudent.save()
.then(() => res.json('Etudiant ajouté'))
.catch(err => res.status(400).json('Erreurs: ' + err))

//Route to end points
const studentRouter = require('./routes/Student')
app.use('/student', studentRouter)

//lancer le serv
app.listen(PORT, function() {
    console.log("server runinf port: " + PORT)
})