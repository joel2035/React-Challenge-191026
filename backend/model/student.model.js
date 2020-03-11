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
studentSchema.statics.insertIfNotExist = async function(student) {
    const docs = await this.find({nom: student.nom, prenom: student.prenom}).exec()
    if (!docs.length){
        const studentDB = await student.save()
        return /*err, */studentDB
    }
    else{
        console.log('Student <<'+ student.nom +'>> existe deja')
    }
}

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;