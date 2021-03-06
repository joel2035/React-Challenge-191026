import { Component } from 'react';
import Model from 'StudentDAO';

export class Student extends Component {

    constructor(
        id = null, 
        nom = null, 
        prenom = null, 
        promo = null, 
        descCusrus = null, 
        email = null, 
        competenceNote = null
        ) {
        this.id = id
        this.nom = nom
        this.prenom = prenom
        this.promos = promo
        this.descCusrus = descCusrus
        this.email = email
        this.competenceNote = competenceNote //Tableau d'objets CompetenceNote

        this.errors = new Map()
    }

    /*
     * Console log les erreurs si les propriété de l'objets 
     * ne correspondent pas au model
     */
    errors = () => {
        for (var [cle, valeur] of this.errors.entries()) {
            switch(cle) {
                case 'competenceNote' :
                    valeur.forEach( competenceNoteObj => competenceNoteObj.errors());
                    break;
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
    Nom = () => {
        return this.nom;
    }

    /*
     * Retourn le Prenom
     */
    Prenom = () => {
        return this.prenom;
    }

    /*
     * Retourn la Promo
     */
    Promo = () => {
        return this.promo;
    }

    /*
     * Retourn la Desciption du Cusrus
     */
    DescCusrus = () => {
        return this.descCusrus;
    }

    /*
     * Retourn l'email
     */
    Email = () => {
        return this.email;
    }

    /*
     * Retourn la Competence (object)
     */
    CompetenceNote = () => {
        return this.competenceNote;
    }

    /*
     * Valide la classe pour Insertion
     */
    isValid = () => {
        if(!this.nom) {
            this.errors.set(nom, 'invalide')
        }
        if(!this.prenom) {
            this.errors.set(prenom, 'invalide')
        }
        if(!this.promo) {
            this.errors.set(promo, 'invalide')
        }
        if(!this.descCusrus) {
            this.errors.set(descCusrus, 'invalide')
        }
        if(!this.email) {
            this.errors.set(email, 'invalide')
        }
        this.competenceNote.forEach((competenceNoteObj) => {
            if(!competenceNoteObj.isValid()) {
                this.errors.set(competenceNote, competenceNoteObj)
            }
        })
      

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
    get = () => {
        Model.get(this)
    }

    save = () => {
        Model.save(this)
    }

    delete = () => {
        Model.del(this)
    }

    update = () => {
        Model.update(this)
    }
}

export default Student