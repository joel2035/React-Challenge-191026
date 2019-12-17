import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Auth from '../entity/Auth';
import AuthContext from '../contexts/AuthContext'

export class Connexion extends Component {

    state = {
        id: null,
        password: null,
        error: ''
    }

    handleInputChange = (e) => {
        let stateObj = {}
        stateObj[e.target.value] = e.target.value
        this.setState(stateObj)
    }

    handleConnect = () => {
        const auth = new Auth(null, this.state.id, this.state.password, null)
        auth.connect()
            .then(authJSON => {
                /* stocker l'objet en local storage*/
                let tmp = JSON.parse(authJSON)
                const authContextValue = {
                    auth: new Auth(tmp.id, tmp.nom, tmp.password, tmp.role)
                }
                return (
                    <AuthContext.Provider value={authContextValue}>

                    </AuthContext.Provider>
                );
            })
            .catch(error_message => this.setState({error: error_message}))
    }

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
                            <input id="txt-input" className="form-input" name="id" type="email" required placeholder="email" onChange={this.handleInputChange} />
                            <br/>
                            <span className="input-item">
                                <i className="fa fa-key"></i>
                            </span>
                            <input className="form-input" id="pwd" type="password" nname ="password" required placeholder="password" onChange={this.handleInputChange}></input>
                            <span className>
                                <i className="fa fa-eye" aria-hidden="true" type="button" id="eye"></i>
                            </span>
                            <br/>
                            <br/>
                            <button type="button" className="log-in" onClick={this.handleConnect}></button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Connexion

