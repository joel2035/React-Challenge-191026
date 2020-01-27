import React, { Component } from 'react';
import StudentListItem from './StudentListItems';
// imorté l'objet Filtre 
// importé l'objet Student
export default class StudentList extends Component {
    // à la construction de la classe
        // recuperer le filtre promo
            // avec le filtre promo il faut crée un objet Filtre
                // stoqué l'objet Filtre dans le state
    render() {
        // recuperer les etudiants en utilisants le filtre 
            // crée l'objet Student
                // appeler la methode getAll() avec en paramètre l'objet filtre 

        // bouclé sur les etdiant et afficher la liste

        const { items } = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    {/* 
                        ici mapé la liste d'etudiants du states
                      */}
                    {
                        items.map(item => {
                            console.log(item);
                            
                            return (
                                <div>
                                    <StudentListItem data={item}  /* ici
                                 envoyer l'étudiants au composant *//>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 
