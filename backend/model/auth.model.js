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
authSchema.statics.insertIfNotExist = async function(auth) {
    const docs = await this.find({nom : auth.nom}).exec()
    if (!docs.length){
        const authDB = await auth.save()
        return /*err, */authDB
    }
    else{
        console.log('Auth <<'+ auth.nom +'>> existe deja')
    }
}


const Auth = mongoose.model('Auth', authSchema)

module.exports = Auth