const router = require('express').Router();
const CompetenceNote = require('../model/competence_note_student.model');
const Competence = require('../model/competence.model');
const Note = require('../model/note.model');

//route Get specifiq
/*
 * @params : idstudent
 * @return : array(object) : [{competence : competenceDB, note : noteDB}]
 */
router.route('/get/:idstudent').get((req, res) => {
    //recup les assocs competence/note/etudiant
    CompetenceNote.find({student_id: req.params.idstudent})
        .then(async competencesNotes => {
            //creer le tableau [{competence, note}] relatif a l'etudiant
            //si aucune note
            if(!competencesNotes.length) {
                const compNoteArray = []
                res.status(200).json(compNoteArray)
            }
            //sinon retourner tableau competenceNote
            else{
                const compNoteArray = []
                //parcours des association competence/note/etudiant
                for(competenceNote of competencesNotes) {
                    //creation d'un element du tableau resultat :
                    const compNote = []
                    const competenceDB = await Competence.findById(competenceNote.comp_id)
                    const noteDB = await Note.findById(competenceNote.note_id)
                    compNote['competence'] = competenceDB
                    compNote['note'] = noteDB                  
                    compNoteArray.push(compNote)
                }
                res.status(200).json(compNoteArray)
            }
        })
        .catch(err => res.status(400).json('Erreurs: ' + err))
})

//route Add
/*
 * @params :
 *      idstudent : ObjectId,
 *      competenceDB : object,
 *      noteDB : object,
 * @return : 
 *      string : confirm string
 */
router.route('/add/:idstudent').get(async (req, res) => {
    //creer model competenceNote
    for(compNote of req.body) {
        const compNoteAssoc = new CompetenceNote({
            student_id: req.params.idstudent, 
            comp_id: compNote.competence.id, 
            note_id: compNote.note.id ? compNote.note : null
        })
        //save
        const competenceNoteDB = await compNoteAssoc.save()
        if(!result){
            return res.status(400).json('Erreurs: ' + err)
        }
    }
    res.status(200).json('Associations ajoutées')
})

//route Edit
/*
 * @params :
 *      array(object) : [{competence : competenceDB, note : noteDB}]
 * @return : 
 *      string : confirm string
 */
router.route('/update/:idstudent').post(async (req, res) => {
    for(compNote of req.body){
        const CompetenceNoteDB = await CompetenceNote.findOneAndUpdate(
            { 
                student_id: req.params.idstudent, 
                comp_id: compNote.competence.id, 
            }, 
            { $set: { 
                note_id: compNote.note.id
            }}, 
            //{ new: true }
            )
        if(competenceNoteDB) {
            res.status(200).json('Compentence & Note éditée', competenceNoteDB)
        } else {
            res.status(400).json('Erreurs: ' + err)
        }
    }
})

module.exports = router;