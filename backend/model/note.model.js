const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    nom: {
        type: String,
        required: true,
        enum: ["A", "B", "C","D","E","F"]
    }
})

noteSchema.statics.insertIfNotExist = async function(note) {
    const docs = await this.find({nom : note.nom}).exec()
    if (!docs.length){
        const noteDB = note.save()
        return /*err, */noteDB
    }
    else{
        console.log('Note <<'+ note.nom +'>> existe deja')
    }
}

noteSchema.statics.getRandomEntry = async function() {
    const values = ["A", "B", "C","D","E","F"]
    const randomNote = values[Math.floor(Math.random() * values.length)]
    const docs = await this.find({nom : randomNote}).exec()
    if (!docs.length){
        return /*err, */docs[0]
    }
    else{
        console.log('Note <<'+ comp.nom +'>> existe deja')
    }
}

const Competence = mongoose.model('Note', noteSchema)

module.exports = Competence