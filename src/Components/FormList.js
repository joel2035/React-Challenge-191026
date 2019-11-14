import React, { Component } from 'react';
import FormItem from './FormItem';

export default class FormList extends Component {
    render() {
        const  {items} = this.props
        return (
            <div>
                <h3 className="text-capitalize text-center">Liste des etudiants</h3>
                <ul className="list-group my-5">
                   
                    {
                        items.map(item=>{
                            return(
                                <div>
                                    <FormItem key={item.id} data={item}/>
                                </div>
                                
                            )
                        })
                    }
                  
    
                </ul>
            </div>
        )
    }
} 
