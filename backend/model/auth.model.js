const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({
    nom: {
        type: String, 
        unique: true,
        required: true,
        trim: true,
        minlength: 2
    },
    password: {
        type: String, 
        required: true,
        trim: true,
        minlength: 6
    },
    role : {
        type: String, 
        required: true,
        trim: true
    }
})

/**
 * Only used for inseting base Auth 
 */
//definir la methode insertIfNotExist
authSchema.statics.insertIfNotExist = function(auth, cb) {
    this.find({nom : auth.nom}).exec(function(err, docs) {
        if (!docs.length){
            auth.save(function(err) {
                cb(err, auth)
            })
        }
        else{
            cb('Auth <<'+ auth.nom +'>> existe deja', null);
        }
    })
}


const Auth = mongoose.model('Auth', authSchema)

module.exports = Auth