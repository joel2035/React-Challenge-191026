const Comp = require('./model/competence.model')
const Note = require('./model/note.model')
const Auth = require('./model/auth.model')
const Student = require('./model/student.model')
const AssocNoteComp = require('./model/competence_note_student.model')

const insertRandomValues = async function() {
    //clean DB
    await Student.deleteMany({})
    await AssocNoteComp.deleteMany({})

    //Insert comps enums
    const CompFront = new Comp({nom: "Front"})
    const CompBack = new Comp({nom: "Back"})
    const CompUX = new Comp({nom: "UX"})
    const CompUI = new Comp({nom: "UI"})
    const CompGP = new Comp({nom: "Gestion de projet"})
    await Comp.insertIfNotExist(CompFront/*, (err, comp) => {console.error(err)}*/)
    await Comp.insertIfNotExist(CompBack/*, (err, comp) => {console.error(err)}*/)
    await Comp.insertIfNotExist(CompUX/*, (err, comp) => {console.error(err)}*/)
    await Comp.insertIfNotExist(CompUI/*, (err, comp) => {console.error(err)}*/)
    await Comp.insertIfNotExist(CompGP/*, (err, comp) => {console.error(err)}*/)

    //Insert notes enums
    const NoteA = new Note({nom: "A"})
    const NoteB = new Note({nom: "B"})
    const NoteC = new Note({nom: "C"})
    const NoteD = new Note({nom: "D"})
    const NoteE = new Note({nom: "E"})
    const NoteF = new Note({nom: "F"})
    await Note.insertIfNotExist(NoteA/*, (err, note) => {console.error(err)}*/)
    await Note.insertIfNotExist(NoteB/*, (err, note) => {console.error(err)}*/)
    await Note.insertIfNotExist(NoteC/*, (err, note) => {console.error(err)}*/)
    await Note.insertIfNotExist(NoteD/*, (err, note) => {console.error(err)}*/)
    await Note.insertIfNotExist(NoteE/*, (err, note) => {console.error(err)}*/)
    await Note.insertIfNotExist(NoteF/*, (err, note) => {console.error(err)}*/)

    //Insert predefined Auths with main different roles
    const AuthAdmin = new Auth({nom: "heticeric", password: "heticeric" , role: "prof"})
    const AuthEtudiant = new Auth({nom: "student", password: "student" , role: "etu"})
    await Auth.insertIfNotExist(AuthAdmin/*, (err, auth) => {console.error(err)}*/)
    await Auth.insertIfNotExist(AuthEtudiant/*, (err, auth) => {console.error(err)}*/)

    //Insert Students & Assocs entities
    /*const userArray = [
        new Student({nom: "Quentin", prenom: "titi", promo: "P2020", role: "eleve", descCursus: "bla bla bla", email: "emailA@gmail.fr", }),
        new Student({nom: "Clement", prenom: "toto", promo: "P2020", role: "eleve", descCursus: "bla bla bla", email: "emailB@gmail.fr", }),
        new Student({nom: "Benoit", prenom: "tutu", promo: "P2021", role: "eleve", descCursus: "bla bla bla", email: "emailC@gmail.fr", })
    ]
    for(const student of userArray){
        const studentDB = await Student.insertIfNotExist(student)
        //store id student
        const student_id = studentDB._id
        //loop to get few comps/note associated with Student
        const nbComps = await Comp.countDocuments()
        //for(let i = 0; i < nbComps; i++ ){
            //get random comp
            const random_compDB = await Comp.getRandomEntry()
            //store id comp
            const comp_id = random_compDB._id
            //get random note
            const random_noteDB = await Note.getRandomEntry()
            //store id note
            const note_id = random_noteDB._id
            //create assoc object
            const objAssocNoteComp = new AssocNoteComp({student_id, comp_id, note_id})
            await AssocNoteComp.insertIfNotExist(objAssocNoteComp)
        //}
    }*/
}

module.exports = insertRandomValues