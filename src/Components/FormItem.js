import React, { Component } from 'react'

export default class FormItem extends Component {
    render() {
        return (
            
            <div>
                 
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
                      
                        
                              <td>{this.props.data.firstname}</td>
                              <td>{this.props.data.name}</td>
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
