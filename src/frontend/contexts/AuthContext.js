import React, { createContext, Component } from "react";
import Auth from '../entity/Auth';

export const AuthContext = createContext()

export default class AuthContextProvider extends Component {
    state = {
        auth : new Auth(),
    }

    register = (auth) => {
        this.setState({auth})
    }

    logout = () => {
        this.setState({auth: new Auth()})
    }

    render() {
        return (
            <AuthContext.Provider value={{
                auth: this.state.auth, 
                register: this.register,
                logout: this.logout}}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}