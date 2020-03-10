const mongoose = require('mongoose');

const Student = require('./student.model');
const Note = require('./student.model');
const Competence = require('./student.model');

const Schema = mongoose.Schema;

const competenceNoteStudentSchema = new Schema({
    student_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Student', 
        required: true,
    },
    note_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Note', 
        required: true,
    },
    comp_id: {
        type: Schema.Types.ObjectId, 
        ref: 'Competence', 
        required: true,
    },
})
competenceNoteStudentSchema.statics.insertIfNotExist = function(comp, cb) {
    this.find({student_id: comp.student_id, note_id : comp.note_id, comp_id : comp.comp_id}).exec(function(err, docs) {
        if (!docs.length){
            comp.save(function(err) {
                cb(err, comp)
            })
        }
        else{
           cb('Association Competence/Note/Student <<'+ comp._id +'>> existe deja', null);
        }
    })
}

const competenceNoteStudent = mongoose.model('CompetenceNote', competenceNoteStudentSchema)

module.exports = competenceNoteStudent