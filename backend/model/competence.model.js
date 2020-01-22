const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const competenceSchema = new Schema({
    nom: {
        type: String, 
        required: true,
        trim: true,
        minlength: 3
    }
})

const Competence = mongoose.model('Competence', competenceSchema)

competenceSchema.statics.insertIfNotExist = function(comp, cb) {
    Competence.find({name : comp.name}).exec(function(err, docs) {
        if (!docs.length){
            user.save(function(err) {
                cb(err, auth)
            })
        }
        else{
           cb('Compentence '+ comp.name +'existe deja', null);
        }
    })
}

module.exports = Competence