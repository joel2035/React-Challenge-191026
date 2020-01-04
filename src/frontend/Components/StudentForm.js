import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import { AuthContext } from '../contexts/AuthContext'

// import uuid from 'uuid';
import Auth from '../entity/Auth';

export class studentForm extends Component {
    state = {
      items:[],
    //   id:uuid(),
      FirstName:"",
      Name:"",
      Email:"",
      Promotion:"",
      Note: "",

      // Name:"", 
      // email: "",
      editItem:false,
    }

    static contextType = AuthContext

    handleChange =(e)=>{
      this.setState({
      FirstName: e.target.value
     })
    }

    handleSubmit= data =>{
      /*const newItem  = {
        id: this.state.id,
        FirstName: this.state.FirstName,
      }*/
      //const updatedItems= [...this.state.items, newItem] 
      this.setState({
      items:[...this.state.items, data],
      FirstName : "",
      // id:uuid(),
      editItem:false
      })
    }

    render() {
      if(this.context.auth.isConnected()){
        return (
              <div>
                  <div className="container">
                    <div className="row">
                          <div className="col-10 mx-auto col-md-8 mt-4 ">
                              <h1 className="text-capitalize text-center">Ajouter un Étudiant</h1>
                              <AddStudent FirstName= {this.state.FirstName} handleChange = {this.handleChange} handleSubmit={this.handleSubmit}/>
                              <StudentList items={this.state.items}/>
                          </div>
                    </div>
                  </div>
              </div>
        )
    } else {
        return <Redirect to="/"/>
    }
  }
}

export default studentForm
