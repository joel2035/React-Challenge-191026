import React, { Component } from 'react';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
// import uuid from 'uuid';

export class studentForm extends Component {
  // soit l'objet Student est passsez en props 
    // formulaire d'édition 
  // soit les props sont vides 
    // formulaire de création 
    

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
    // construire le tableaux d'ojet CompetencesNotes
      // pour chaque compétence:
        // ajouter au tableaux de competence: 
         /*  CompetencesNotes.push(
            new CompetenceNotes(nomCompetence = x , noteCompetence = y)

          )
 */
    // construire l'objet Student 
      /*  Student = new Student(
                id = null,
                nom = null,
                prenom = null,
                promo = null,
                descCusrus = null,
                email = null,
                competenceNote = tabeaux de competenceNote
      )    */
    //appeler l'objet Student.save()
        
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
      
        // si le state student contient un student alors 
          //   titre = modifier un etudiant 
        // sinon 
          // titre = ajouter un étudiant  
        return (
            <div>
                <div className="container">
                   <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-4 ">
                            <h1 className="text-capitalize text-center">Ajouter un Étudiant</h1>
                            <AddStudent /* envoyer this.state.student *//>
                        </div>
                   </div>
                </div>
            </div>
        )
    }
}

export default studentForm
