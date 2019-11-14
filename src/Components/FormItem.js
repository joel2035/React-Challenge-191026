import React, { Component } from 'react'

export default class FormItem extends Component {
    render() {
        const {FirstName, Name}=this.props
        return (
            
            <div>
                 <h3 className="text-capitalize text-center">Liste des etudiants</h3>
                <table className= "table table-striped table-hover">
                    <thead>
                        <tr>
                            
                           
                            <th>
                                <p>FirsName</p> 
                            </th>
                           <th>
                                <p>Name</p> 
                            </th>
                           <th>
                                <p>email</p> 
                            </th>
                            <th>
                                <p>Promotion</p> 
                            </th>
                           <th>
                                <p>Competence</p> 
                            </th>
                           
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr className="">
                      
                        
                              <td>{FirstName}</td>
                              <td>{Name}</td>
                              <td>antoine@yahoo.fr</td>
                              <td>WeB3</td>
                              <td>Front</td>
                          

                              
                        </tr>
                       
                    </tbody>
                            
                </table>
            </div>
        )
    }
}
{/* <div className="todo-icon">
                                <span className="mx-2 text-success"><i className="fas fa-pen"/></span>
                                <span className="mx-2 text-danger"><i className="fas fa-trash"/></span>
                             </div> */
                            //  list-group-item text-capitalize -flex justify-content-between my-2
                             }