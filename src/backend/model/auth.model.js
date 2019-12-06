const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authSchema = new Schema({
    nom: {
        type: String, 
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

const Auth = mongoose.model('Auth', authSchema)


//definir la methode insertIfNotExist
authSchema.statics.insertIfNotExist = function(auth, cb) {
    Auth.find({name : auth.name}).exec(function(err, docs) {
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

module.exports = Auth