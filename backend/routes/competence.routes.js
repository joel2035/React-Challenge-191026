const router = require('express').Router();
const Competence = require('../model/competence.model');

//route Get specifiq
/*
 * @params : void
 * @return : array(object) : [{competenceDB}]
 */
router.route('/all').get((req, res) => {
    //recup les competences
    Competence.find()
        .then(competencesNotes => res.status(200).json(competencesNotes))
        .catch(err => res.status(400).json('Erreurs: ' + err))
})

module.exports = router;