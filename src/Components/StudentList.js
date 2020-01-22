import React, { Component } from 'react';
import StudentListItem from './StudentListItems';
export default class StudentList extends Component {
    render() {
        const { items } = this.props
        return (
            <div>
                <ul className="list-group my-5">
                    {
                        items.map(item => {
                            console.log(item);
                            
                            return (
                                <div>
                                    <StudentListItem data={item} />
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
} 
