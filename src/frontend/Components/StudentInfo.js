import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Auth from '../entity/Auth';

export class StudentInfo extends Component {

    render() {
        if(Auth.isConnected()) {
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
                        <div className="competence">
                            <p>Competence :</p>
                            <p>UI</p>
                        </div>
                        <div className="note">
                            <p>Note :</p>
                            <p>13</p>
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
