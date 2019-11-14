import React, {Component} from 'react';
import FormItem from './FormItem';
import studentForm from './studentForm'
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
class App extends Component{
  
  render(){
    return(
        <Router>
        <Switch>
            <Route exact path ="/"component ={studentForm}/>
            <Route path ="/list"component = {FormItem}/>
        </Switch>    
       </Router>
      )
  }
}
export default App;

