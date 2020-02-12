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

//definir la methode insertIfNotExist
studentShema.statics.insertIfNotExist = function(student, cb) {
    this.find({nom : student.nom}).exec(function(err, docs) {
        if (!docs.length){
            student.save(function(err) {
                cb(err, student)
            })
        }
        else{
            cb('Student <<'+ student.nom +'>> existe deja', null);
        }
    })
}

const Student = mongoose.model('Student', studentShema)

module.exports = Student