import React, {Component} from 'react';
import './App.css';
import Form from './Form';
import FormList from './FormList';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid"

class App extends Component{
  state ={
    items:[],
    id:uuid(),
    FirstName:"",
    Name:"",
    // Name:"", 
    // email: "",
    editItem:false,

  }
  handleChange =(data)=>{
    
    console.log(data);
    
    // this.setState({
    //   FirstName: e.target.value
    // })
  }
  
  handleSubmit= data =>{

  
    console.log(data);
    const newItem  = {
    id: this.state.id,
    FirstName: this.state.FirstName
    
  }
  
  const updatedItems= [...this.state.items, newItem] 
  this.setState({
    items:updatedItems,
    FirstName : "",
    id:uuid(),
    editItem:false
  })
  }
  
  
  
  render(){
    
    
    return(
      <div className="container">
        <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4 ">
        <h1 className="text-capitalize text-center">Ajouter un Étudiant</h1>
          <Form FirstName= {this.state.FirstName} handleChange = {this.handleChange} handleSubmit={this.handleSubmit}/>
          <FormList items={this.state.items}/>
        </div>
        </div>

      </div>
    
      
    );
  }
}
export default App;


//     background-color: whitesmoke;
// }

// .todo-list {
//     background-color: white;
//     margin: auto;
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     border: 1px solid #efefef;
//     box-shadow:
//     /* The top layer shadow */
//         0 1px 1px rgba(0,0,0,0.15),
//             /* The second layer */
//         0 10px 0 -5px #eee,
//             /* The second layer shadow */
//         0 10px 1px -4px rgba(0,0,0,0.15),
//             /* The third layer */
//         0 20px 0 -10px #eee,
//             /* The third layer shadow */
//         0 20px 1px -9px rgba(0,0,0,0.15);
//     padding: 30px;
// }

// .todo-item {
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     padding: 30px 20px 0;
//     width: 70%;
//     border-bottom: 1px solid #cecece;
//     font-family: Roboto, sans-serif;
//     font-weight: 100;
//     font-size: 15px;
//     color: #333333;
// }

// input[type=checkbox] {
//     margin-right: 10px;
//     font-size: 30px;
// }

// input[type=checkbox]:focus {
//     outline: 0;
// }