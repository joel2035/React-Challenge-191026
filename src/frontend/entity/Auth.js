export default class Student {
    constructor(
        nom = null, 
        password = null, 
        role = null
        ) {
        this.id = id
        this.nom = nom
        this.password = password
        this.role = role
        }

    nom = () => {
        return this.nom
    }
    password = () => {
        return this.password
    }
   
    isConnected = () => {
        //get a '/auth/:nom'
        //then : return this avec les valeurs de BD
        //catch : console.error(JSON.parse(msg)}

    hasRole = (roleName) => {
        //get a '/student/:name/:id'
        //then : return bool
        //catch : console.error(JSON.parse(msg))
    }
}