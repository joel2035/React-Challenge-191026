const router = require('express').Router();
let Auth = require('../model/auth.model');

//route Get specifiq
router.route('/auth/:name/:password').get((req, res) => {
    Auth.find({name: req.params.name, password: req.params.password})
        .then(auth => res.json(auth))
        .catch(err => res.status(400).json('Erreurs: ' + err))
})
