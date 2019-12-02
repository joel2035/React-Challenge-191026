import { Component } from 'react';
import Model from 'DBDAO';
import Competence from 'CompetenceNote';

export class DB extends Component {

    constructor(
        
        ) {
        //init part
        this.baseAuths = [
            new Auth(id = 'heticeric', pwd = 'heticeric', role = 'prof'),
            new Auth(id = 'eleve', pwd = 'eleve', role = 'eleve')
        ]
        this.baseCompetences = [
            new Competence(null, competenceName = 'Programmation coté client', null),
            new Competence(null, competenceName = 'Programmation coté derveur', null),
            new Competence(null, competenceName = 'Design UI', null),
            new Competence(null, competenceName = 'UX', null),
            new Competence(null, competenceName = 'Gestion de projet', null)
        ]

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

    //Model
    static insertBaseValues = () => {
        //insert base values
        //comptes de base
        this.baseAuths.forEach(authObj => authObj.save())
        //compétences
        this.baseCompetences.forEach(competenceObj => competenceObj.save())
    }

   static connect = () => {
        DB.insertBaseValues();
        return Model.connect()
    }
}

export default DB