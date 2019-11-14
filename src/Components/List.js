import React, { Component } from 'react'

export class List extends Component {
    render() {
        const {FirstName, Name}=this.props
        return (
            <div>
                <tbody>
                        <tr className="">
                              <td>{FirstName}</td>
                              <td>{Name}</td>
                              <td>antoine@yahoo.fr</td>
                              <td>WeB3</td>
                              <td>Front</td>
                        </tr>
                       
                </tbody>
            </div>
        )
    }
}

export default List
