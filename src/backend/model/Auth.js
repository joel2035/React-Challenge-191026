import { Component } from 'react';
import Model from 'AuthDAO';

export class Auth extends Component {

    constructor(
        id = null, 
        password = null,
        role = null
        ) {
        Object.defineProperty(this, "id", {value: id, writable: false})
        Object.defineProperty(this, "password", {value: password, writable: false})
        Object.defineProperty(this, "role", {value: role, writable: false})

        this.errors = new Map()
    }

    /*
     * Retourn l'email
     */
    Id = () => {
        return this.id
    }

    /*
     * Retourn le role
     */
    Role = () => {
        return this.role
    }

    /*
     * Retourn le role
     */
    hasRole = (roleName) => {
        return this.role === roleName
    }

    /*
     * Console log les erreurs si les propriété de l'objets 
     * ne correspondent pas au model
     */
    errors = () => {
        for (var [cle, valeur] of this.errors.entries()) {
            switch(cle) {
                case 'password' :
                    console.error(cle + " invalid")
                    break
                default :
                    console.error(cle + " " + valeur)
            }
          }
    }

    /*
     * Valide la classe pour Insertion
     */
    isValid = () => {
        if(!this.id) {
            this.errors.set(id, 'invalide')
        }
        if(!this.password) {
            this.errors.set(password, 'invalide')
        }

        if(this.errors.size > 0) {
            this.errors();
            return false;
        }
        else{
            return true;
        }
    }

    //Model
    /*
     * Racourcis ici, si l'Auth est correctement construit, on check l'existence pour 
     * verifier la connection car le couple id, password de la classe est unique 
     */ 
    isConnected = () => {
        if(Model.exist(this)) {
            return true
        }
        return "Connectez vous pour continuer"
    }
    
    save = () => {
        if(Auth.isValid()) {
            //insert mongo
            Model.save(this)
        }    
    }
}

export default Student