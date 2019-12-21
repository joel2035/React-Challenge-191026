import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Auth from '../entity/Auth';

export default class StudentListItem extends Component {

    state = {
        auth: new Auth()
    }

    render() {
        if(this.state.auth.isConnected()) {
            return (
                <div>
                    <ul>
                        <li>
                            <Link to={"/formulaire"}><button type="button" className="btn btn-success">Ajouter un étudiant</button></Link>
                        </li>
                        <li>
                            <Link to={"/list"}><button type="button" className="btn btn-primary">Liste des étudiants</button></Link>
                        </li>
                    </ul>
                    <table className= "table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <p>FirsName</p> 
                                </th>
                            <th>
                                    <p>Name</p> 
                                </th>
                            <th>
                                    <p>email</p> 
                                </th>
                                <th>
                                    <p>Promotion</p> 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        
                                <tr>
                                    <td></td>
                                    <td>jojo</td>
                                    <td>antoine@yahoo.fr</td>
                                    <td>WeB3</td>
                                    <Link to="/info">
                                        <button className="btn btn-info" id="btn" type="button">Info</button>
                                    </Link>   
                                </tr>
                        
                        </tbody>  
                    </table>
                </div>
            )
        } else {
            return <Redirect to="/"/>
        }
    }
}
