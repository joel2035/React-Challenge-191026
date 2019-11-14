import React, { Component } from 'react';
import FormItem from './FormItem';

export default class FormList extends Component {
    render() {
        const  {items} = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center">Liste des etudiants</h3>
                    {
                        items.map(item=>{
                           
                            
                            return(
                                <FormItem key={item.id} data = {item.data }/>
                                
                                
                            )
                        })
                    }
                  
                  <button type="button" className="btn btn-danger text-capitalize mt-5">Clear List</button>
                </ul>
            </div>
        )
    }
} 
