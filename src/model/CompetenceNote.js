import { Component } from 'react';
import Model from 'StudentDAO';

export class CompetenceNote extends Component {

    constructor(
        id = null, 
        competenceName = null, 
        note = null, 
        ) {
        this.id = id
        this.competenceName = competenceName
        this.note = note

        this.errors = new Map()
    }

    /*
     * Console log les erreurs si les propriété de l'objets 
     * ne correspondent pas au model
     */
    errors = () => {
        for (var [cle, valeur] of this.errors.entries()) {
            switch(cle) {
                default :
                    console.error(cle + " " + valeur);
            }
          }
    }

    /*
     * Retourn l'id
     */
    Id = () => {
        return this.id;
    }

    /*
     * Retourn le Nom
     */
    Competence = () => {
        return this.competence;
    }

    /*
     * Retourn le Prenom
     */
    Note = () => {
        return this.note;
    }

    /*
     * Valide la classe pour Insertion
     */
    isValid = () => {
        if(!this.competenceName) {
            this.errors.set(competenceName, 'invalide')
        }
        if(!this.note) {
            this.errors.set(note, 'invalide')
        }      

        if(this.errors.size > 0) {
            this.errors();
            return false;
        }
        else{
            return true;
        }
    }

    /*
     * Valide la classe pour Read, Update ou Delete
     */
    isValidForUD = () => {
        if(!this.id) {
            this.errors.set(id, 'manquant')
        }
        return this.isValid()
    }

    //Model
    save = () => {
        Model.save(this)
    }
}

export default Student