import { useContext } from 'react';

import AuthContext from '../contexts/AuthContext'

export default class Auth {
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
        this.isConnected()
    }

    isConnected = () => {
        const { auth } = useContext(AuthContext)
        return auth
        //get a '/auth/:nom'
        //then : return this avec les valeurs de BD
        return new Auth('0552dfdggdg','heticeric', 'heticeric', 'prof')
        //catch : console.error(JSON.parse(msg)}
    }

    hasRole = (roleName) => {
        //get a '/student/:name/:id'
        //then : return bool
        return true
        //catch : console.error(JSON.parse(msg))
    }
}