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
competenceNoteStudentSchema.statics.insertIfNotExist = async function(assoc) {
    const docs = await this.find({student_id: assoc.student_id, note_id : assoc.note_id, comp_id : assoc.comp_id}).exec()
    if (!docs.length){
        const assocDB = await assoc.save()
        return /*err,*/assocDB
    }
    else{
        console.log('Association Competence/Note/Student <<'+ comp._id +'>> existe deja')
    }
}

const competenceNoteStudent = mongoose.model('CompetenceNote', competenceNoteStudentSchema)

module.exports = competenceNoteStudent