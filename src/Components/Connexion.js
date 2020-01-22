import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

export class Connexion extends Component {

    state = {
        id: null,
        password: null,
        error: '',
    }

    static contextType = AuthContext

    handleInputChange = (e) => {
        let stateObj = {}
        stateObj[e.target.value] = e.target.value
        this.setState(stateObj)
    }

    handleConnect = () => {

        const authFromDB = this.context.auth.connect(this.state.id, this.state.password)
            
        //.then(AuthEntity => {
            //Feed context avec Auth
            this.context.register(authFromDB)
            this.setState({
                id: null,
                password: null,
                error: '',
            })

            //ca ne marche pas voir si on peux set le context avec
            //cette methode ou s'il y en a une autre, ou s'il faut 
            //tout changer pour englober tt les composants avec une putin de balise
            
        //})
        //.catch(error_message => this.setState({error: error_message}))
    }

    render() {
        if(!this.context.auth.isConnected()) {
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
                                <span className="input-item">
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
            return <Redirect to="/list"/>
        }
    }
}

export default Connexion

