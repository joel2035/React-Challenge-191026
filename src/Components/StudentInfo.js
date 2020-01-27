import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'


export class StudentInfo extends Component {

    static contextType = AuthContext

    render() {
        if(this.context.auth.isConnected()) {
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
        } else {
            return <Redirect to="/"/>
        }
    }
}

export default StudentInfo
