import { Component } from 'react';
import Model from 'DBDAO';

export class DB extends Component {

    constructor(
        
        ) {
        
        this.errors = new Map()
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

    static init = () => {
        //insert base values
        //compétences
        //comptes de base
    }

    //Model
    /*
     * Racourcis ici, si l'Auth est correctement construit, on check l'existence pour 
     * verifier la connection car le couple id, password de la classe est unique 
     */ 
    connect = () => {
        return Model.connect()
    }
}

export default DB