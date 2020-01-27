import AuthContext from '../contexts/AuthContext'

export default class Auth {

    context = AuthContext
    
    constructor(id = null, nom = null, password = null, role = null) {
        //Si context existe l'objet est initialisé avec ses valeurs
        //Sinon avec les props
        if(this.context.auth) {
            Object.defineProperty(
                this, "id", {
                    value: this.context.auth ? this.context.auth.id : id, 
                    writable: false
                })
            Object.defineProperty(
                this, "nom", {
                    value: this.context.auth ? this.context.auth.nom : nom, 
                    writable: false
                })
            Object.defineProperty(
                this, "password", {
                    value: this.context.auth ? this.context.auth.password : password, 
                    writable: false
                })
            Object.defineProperty(
                this, "role", {
                    value: this.context.auth ? this.context.auth.role : role,
                    writable: false
                })
        }
    }

    getNom = () => {
        return this.nom
    }
    getPassword = () => {
        return this.password
    }
   
    connect = (id, password) => {
        //get a '/auth/:id/:password'
        //then : return this avec les valeurs de BD
        //return this mais tmp :
        this.id = '0552dfdggdg'
        this.nom = 'connectedUser'
        this.password = '******'
        this.role = 'prof'
        return this
        //ici faut new context, mtn a savoir si on l'export ds une classe a part ou si Auth gere tout, mais voir comment réaliser

        //catch : console.error(JSON.parse(msg)}
    }

    isConnected = () => {
        return true
        //get a '/auth/:nom'
        //then : return this avec les valeurs de BD
        //return new Auth('0552dfdggdg','heticeric', 'heticeric', 'prof')
        //catch : console.error(JSON.parse(msg)}
    }

    hasRole = (roleName) => {
        //get a '/student/:name/:id'
        //then : return bool
        return true
        //catch : console.error(JSON.parse(msg))
    }
}