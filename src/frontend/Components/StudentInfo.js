import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class StudentInfo extends Component {
    //reception en props de l'objet Student 
        //mettre l'étudiants danbs le state



    render() {
        // on utilise l'objet Student du state de la façon suivante 
            // nom: student.nom()
            // prenom: student.prenom()
            // ect ... 
            // pour les compétences:
                // c'est student.competence() qui renvoir un tableaux d'objet Compétence
                    // sur chaque compétence appleler:
                    // compétence.note()
                    // competence.name() 


        return (
            <div className="spacer">
                <Link to="/list">
                    <button type="button" className="close" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </Link>

                <di className="well">
                    <div className="nameContent">
                        <h1>firtName</h1>
                        <h1>name</h1>
                    </div>
                   
                        {/* ici bouclé sur la propriéte competence de l'objet Student (du state) */}
                    <div className="container">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Competence</th>
                                    <th>UI</th>
                                    <th>UX</th>
                                    <th>Front</th>
                                    <th>Back</th>
                                    <th>Gestion De Projet</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Note</td>
                                    <td>A</td>
                                    <td>B</td>
                                    <td>A</td>
                                    <td>C</td>
                                    <td>B</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="">
                        <p>Description :</p>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam illum commodi consectetur vel sint quae amet autem ratione! Ad veritatis fuga quam reiciendis sit suscipit laborum distinctio praesentium dolore, dolores in deleniti voluptate a aut atque illum nobis, iure non?</p>
                    </div>


                </di>
            </div>
        )
    }
}

export default StudentInfo
