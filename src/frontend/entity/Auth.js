import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext'

export default class Auth {

    context = useContext(AuthContext)
    
    constructor(
        id = null,
        nom = null, 
        password = null, 
        role = null
        ) {
            Object.defineProperty(this, "id", {value: id, writable: false})
            Object.defineProperty(this, "nom", {value: nom, writable: false})
            Object.defineProperty(this, "password", {value: password, writable: false})
            Object.defineProperty(this, "role", {value: role, writable: false})
        }

    nom = () => {
        return this.nom
    }
    password = () => {
        return this.password
    }
   
    connect = () => {
        //get a '/auth/:nom'
        //then : return this avec les valeurs de BD

        //ici faut new context, mtn a savoir si on l'export ds une classe a part ou si Auth gere tout, mais voir comment réaliser

        return new Auth('0552dfdggdg','heticeric', 'heticeric', 'prof')
        //catch : console.error(JSON.parse(msg)}
    }

    isConnected = () => {
        return context.auth
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