const mongoose = require('mongoose');

const Student = require('model/student.model');

const Schema = mongoose.Schema;

const competenceNoteSchema = new Schema({
    student_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Student', 
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    note:{
        type: String,
        required: true
    }
})
competenceNoteSchema.statics.insertIfNotExist = function(comp, cb) {
    this.find({name : comp.name}).exec(function(err, docs) {
        if (!docs.length){
            comp.save(function(err) {
                cb(err, comp)
            })
        }
        else{
           cb('Compentence <<'+ comp.nom +'>> existe deja', null);
        }
    })
}

const CompetenceNote = mongoose.model('CompetenceNote', competenceNoteSchema)

module.exports = CompetenceNote