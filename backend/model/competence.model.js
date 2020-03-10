const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const competenceSchema = new Schema({
    nom: {
        type: String,
        required: true,
        enum: ["Front","Back","UI","UX","Gestion de projet"]
    }
})

competenceSchema.statics.insertIfNotExist = function(comp, cb) {
    this.find({nom : comp.nom}).exec(function(err, docs) {
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

competenceSchema.statics.getRandomEntry = function(cb) {
    this.count().exec(function (err, count) {
        // Get a random entry
        var random = Math.floor(Math.random() * count)
        // Again query all users but only fetch one offset by our random #
        this.find().skip(random).exec(function (err, comp) {
            // call back with result
            cb(err, comp)
          })
      })
}

const Competence = mongoose.model('Competence', competenceSchema)

module.exports = Competence