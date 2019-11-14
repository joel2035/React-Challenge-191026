import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import FormItem from './Components/FormItem';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

const Rout = ()=>(
    <Router>
       <div className="spacer navbar">
         <ul className = "nav nav-pills navbar-left active">
            <li><a className=""><Link to ={"/list"}>List</Link></a></li>
            <li><a className="badge badge-success"><Link to ={"/"}>Ajouter un étudiant</Link></a></li>
        </ul>

       </div>
       
        <Switch>
            <Route exact path ="/"component ={App}/>
            <Route path ="/list"component = {FormItem}/>
         
        </Switch>    
    </Router>
    
)

ReactDOM.render(<Rout/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
if(module.hot){
    module.hot.accept();
}