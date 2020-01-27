const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({
    nom: {
        type: String, 
        unique: true,
        required: true,
        trim: true,
        minlength: 3
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

//definir la methode insertIfNotExist
authSchema.statics.insertIfNotExist = function(auth, cb) {
    this.find({name : auth.name}).exec(function(err, docs) {
        if (!docs.length){
            user.save(function(err) {
                cb(err, auth)
            })
        }
        else{
            cb('Auth '+ auth.name +'existe deja', null);
        }
    })
}

const Auth = mongoose.model('Auth', authSchema)

module.exports = Auth