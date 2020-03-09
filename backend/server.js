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

//Eleves
let Student = require('./model/student.model')
let CompetenceNote = require("/model/competenceNote.model")
const allowedComps = ["Front","Back","UI","UX","GP"]
const allowedNotes = ["A", "B", "C","D","E","F"]

const a = new Student({nom: "Quentin", prenom: "titi", promo: "P2020", role: "eleve", descCursus: "bla bla bla", email: "emailA@gmail.fr", })
const b = new Student({nom: "Clement", prenom: "toto", promo: "P2020", role: "eleve", descCursus: "bla bla bla", email: "emailB@gmail.fr", })
const c = new Student({nom: "Benoit", prenom: "tutu", promo: "P2021", role: "eleve", descCursus: "bla bla bla", email: "emailC@gmail.fr", })
Student.insertIfNotExist(a, (err, student) => {
    allowedComps.forEach(comp => {
        //random note
        const note = allowedNotes[Math.floor(Math.random() * allowedNotes.length)]
        const student_id = student._id
        //insert ompétences notes ici
        const compNote = new competenceNote({student_id, name: comp, note})
        CompetenceNote.insertIfNotExist(compNote) //#tester ca : nodemon server
    })
})
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
const serv_port = process.env.SERV_PORT
app.listen(serv_port, function() {
    console.log("server runing PORT: " + serv_port)
})