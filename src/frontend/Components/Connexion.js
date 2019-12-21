import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../entity/Auth';
import AuthContext from '../contexts/AuthContext'

export class Connexion extends Component {

    state = {
        id: null,
        password: null,
        error: '',
        auth: new Auth()
    }

    handleInputChange = (e) => {
        let stateObj = {}
        stateObj[e.target.value] = e.target.value
        this.setState(stateObj)
    }

    handleConnect = () => {
        const authFromDB = this.state.auth.connect(this.state.id, this.state.password)
        this.setState({auth: authFromDB})
            
        //.then(AuthEntity => {
                //Feed context avec Auth
                const authContextValue = {
                    auth: authFromDB
                }

                //ca ne marche pas voir si on peux set le context avec
                //cette methode ou s'il y en a une autre, ou s'il faut 
                //tout changer pour englober tt les composants avec une putin de balise
                return (
                    <AuthContext.Provider value={authContextValue}>
                        <Redirect to="/list"/>
                    </AuthContext.Provider>
                )
            //})
            //.catch(error_message => this.setState({error: error_message}))
    }

    render() {
        console.log(this.state.auth.isConnected());
        if(!this.state.auth.isConnected()) {
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
                                <input id="txt-input" className="form-input" name="id" type="text" required placeholder="email" onChange={this.handleInputChange} />
                                <br/>
                                <span className="input-item">
                                    <i className="fa fa-key"></i>
                                </span>
                                <input className="form-input" id="pwd" type="password" name ="password" required placeholder="password" onChange={this.handleInputChange}></input>
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
        } else {
            console.log('ok');
            return <Redirect to="/list"/>
        }
    }
}

export default Connexion

