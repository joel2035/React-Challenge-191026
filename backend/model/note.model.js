const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ["A", "B", "C","D","E","F"]
    }
})

noteSchema.statics.insertIfNotExist = function(comp, cb) {
    this.find({name : comp.name}).exec(function(err, docs) {
        if (!docs.length){
            comp.save(function(err) {
                cb(err, comp)
            })
        }
        else{
           cb('Note <<'+ comp.nom +'>> existe deja', null);
        }
    })
}

noteSchema.statics.getRandomEntry = function(cb) {
    this.count().exec(function (err, count) {
        // Get a random entry
        var random = Math.floor(Math.random() * count)
        // Again query all users but only fetch one offset by our random #
        this.findOne().skip(random).exec(function (err, note) {
            // call back with result
            cb(err, note)
          })
      })
}

const Competence = mongoose.model('Note', noteSchema)

module.exports = Competence