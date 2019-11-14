import React, { Component } from 'react';
import FormItem from './FormItem';

export default class FormList extends Component {
    render() {
        const  {items} = this.props
        return (
            <div>
                <ul className="list-group my-5">
                   
                    {
                        items.map(item=>{
                            console.log();
                            
                            return(
                                <FormItem key={item.id} data = {item.data }/>
                                
                                
                            )
                        })
                    }
                  
    
                </ul>
            </div>
        )
    }
} 
