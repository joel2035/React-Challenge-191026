const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
    }
})


//definir la methode insertIfNotExist
studentShema.statics.insertIfNotExist = function(student, cb) {
    this.find({nom: student.nom, prenom: student.prenom}).exec(function(err, docs) {
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

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;