import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Connexion extends Component {
    render() {
        return (
            <div>
                <div className = "overlay">
                   
                        <form>
                            <div className="con"></div>
                            <header>
                                <h2>Connexion</h2>
                                <p>saisir votre address mail et mot de passe</p>
                            </header>
                            <br/>
                            <div className="field-set">
                                <span className="input-item">
                                    <i className="fa fa-user-circle"></i>
                                </span>
                                <input className="form-input" id="txt-input" type="email" required placeholder="email" ></input>
                                <br/>
                                <span className="input-item">
                                    <i className="fa fa-key"></i>
                                </span>
                                <input className="form-input" id="pwd" type="password" nname ="password" required placeholder="password"></input>
                                <span className>
                                    <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                                </span>
                                <br/>
                                <br/>
                                <Link to={"/list"}><button type="button" className="log-in">Login</button></Link>
                            </div>
                        </form>
                 
                </div>
                
            </div>
        )
    }
}

export default Connexion

