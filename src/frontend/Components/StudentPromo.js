import React, { Component } from 'react'


export class StudentPromo extends Component {
    render() {
        return (

            <select className="choice">
                <option id="options" value="grapefruit">Toute les promotion</option>
                <option id="options" value="lime">Web1</option>
                <option id="options" value="coconut">Web2</option>
                <option id="options" value="mango">Web3</option>
            </select>


        )
    }
}

export default StudentPromo
