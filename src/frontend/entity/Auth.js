export default class Student {
    constructor(
        nom = null, 
        password = null, 
        role = null
        ) {
        this.id = id
        this.nom = nom
        this.password = password
        }

    nom = () => {
        return this.nom
    }
    password = () => {
        return this.password
    }
   
    isConnected = () => {
        //get a '/auth/:nom'
    }

    hasRole = (roleName) => {
        //get a '/student/:name/:id'
    }
}