export default class Auth {
    constructor(
        nom = null, 
        password = null, 
        role = null
        ) {
            Object.defineProperty(this, "id", {value: id, writable: false})
            Object.defineProperty(this, "password", {value: nom, writable: false})
            Object.defineProperty(this, "password", {value: password, writable: false})
            Object.defineProperty(this, "role", {value: role, writable: false})
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
        return new Auth(nom = 'heticeric', password = 'heticeric', role= 'prof')
        //catch : console.error(JSON.parse(msg)}
    }

    hasRole = (roleName) => {
        //get a '/student/:name/:id'
        //then : return bool
        return true
        //catch : console.error(JSON.parse(msg))
    }
}