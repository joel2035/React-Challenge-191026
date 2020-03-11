const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const competenceSchema = new Schema({
    nom: {
        type: String,
        required: true,
        enum: ["Front","Back","UI","UX","Gestion de projet"]
    }
})

competenceSchema.statics.insertIfNotExist = async function(comp) {
    const docs = await this.find({nom : comp.nom}).exec()
    if (!docs.length){
        const compDB = await comp.save()
        return /*err,*/compDB
    }
    else{
        console.log('Compentence <<'+ comp.nom +'>> existe deja')
    }
}

competenceSchema.statics.getRandomEntry = async function() {
    const values = ["Front","Back","UI","UX","Gestion de projet"]
    const randomComp = values[Math.floor(Math.random() * values.length)]
    const docs = await this.find({nom : randomComp}).exec()
    if (!docs.length) {
        return /*err,*/ docs[0]
    }
    else{
        console.log('Compentence <<'+ randomComp +'>>  inexistante')
    }
}

const Competence = mongoose.model('Competence', competenceSchema)

module.exports = Competence