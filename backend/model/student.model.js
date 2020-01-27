const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentShema = new Schema({
    nom: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }, 
    prenom: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }, 
    promo: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }, 
    descCursus: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    }, 
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    competenceNote: [
        {
            name: {
                type: String,
                required: true,
            },
            note:{
                type: String,
                required: true
            }
        },
    ]
})

const Student = mongoose.model('Student', studentShema)

module.exports = Student