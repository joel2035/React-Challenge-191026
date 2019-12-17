import React, { Component } from 'react';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
// import uuid from 'uuid';
import AuthContext from '../contexts/AuthContext'

export class studentForm extends Component {
    state ={
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
    handleChange =(e)=>{
      this.setState({
      FirstName: e.target.value
     })
    }

    handleSubmit= data =>{
      const newItem  = {
      id: this.state.id,
      FirstName: this.state.FirstName,
       }
    //const updatedItems= [...this.state.items, newItem] 
        this.setState({
        items:[...this.state.items, data],
        FirstName : "",
        // id:uuid(),
        editItem:false
        })
    }
    render() {
        return (
           <AuthContext.Provider>
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
            </AuthContext.Provider>
        )
    }
}

export default studentForm
