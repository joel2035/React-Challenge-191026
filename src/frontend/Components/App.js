import React, {Component} from 'react';
import StudentListItem from './StudentListItems';
import StudentForm from './StudentForm'
import StudentInfo from './StudentInfo'
import Connexion from './Connexion';

import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component{
  render(){
    return(
        <Router>
          <Switch>
              <Route exact path="/" component={Connexion} />
              <Route exact path="/formulaire" component={StudentForm} />  
              <Route path ="/list" component = {StudentListItem}/>
              <Route path ="/info" component = {StudentInfo}/>
          </Switch>    
       </Router>
      )
  }
}
export default App;

