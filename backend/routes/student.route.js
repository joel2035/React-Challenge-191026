const router = require('express').Router();
let Student = require('../model/student.model');

//route Get specifiq
router.route('/student/get/:id').get((req, res) => {
    Student.findById(req.params.id)
    .then(student => res.json(student))
    .catch(err => res.status(400).json('Erreurs: ' + err))
})

//route getAll
router.route('/student/getAll/').post((req, res) => {
    let mongoFilter = array()
    let filterObj = {}

    JSON.parse(res.body.filters).map(filter => {
        //create filter from request
        filterObj[filter.field] = filter.value

        //populate aray filters
        mongoFilter.push(
            {filterObj}
        )
    })

    Student.find(mongoFilter)
        .then(students => res.json(students))
        .catch(err => res.status(400).json('Erreurs: ' + err))
})

//route Add
router.route('/student/add').get((req, res) => {
    //creer model student
    const newStudent = new Student(
        nom = req.body.nom, 
        prenom = req.body.prenom, 
        promo = req.body.promo, 
        descCursus = req.body.descCursus, 
        email = req.body.email, 
        competenceNote = JSON.parse(req.body.competenceNote)
        )
    
    //save
    newStudent.save()
        .then(() => res.json('Etudiant ajouté'))
        .catch(err => res.status(400).json('Erreurs: ' + err))
})

//route Edit
router.route('/student/edit/:id').post((req, res) => {
    Student.findOneAndUpdate(
        { id: req.params.id }, 
        { $set: { 
            nom: req.body.nom,
            prenom: req.body.prenom,
            promo: req.body.promo,
            descCursus: req.body.descCursus,
            email: req.body.email,
            competenceNote: JSON.parse(req.body.competenceNote)
        }}, 
        { new: true }
        )
        .then(() => { res.json('Etudiant édité')})
        .catch(err => res.status(400).json('Erreurs: ' + err))

})

module.exports = router;