const router = require('express').Router();
const Note = require('../model/note.model');

//route Get specifiq
/*
 * @params : void
 * @return : array(object) : [{competenceDB}]
 */
router.route('/all').get((req, res) => {
    //recup les competences
    Note.find()
        .then(competencesNotes => res.status(200).json(competencesNotes))
        .catch(err => res.status(400).json('Erreurs: ' + err))
})

module.exports = router;