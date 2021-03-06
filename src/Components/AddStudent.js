import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AddStudent extends Component {
    state =
        {
            firstname: this.props.FirstName,
            name: this.props.Name,
            email: this.props.Email,
            promotion: this.props.Promotion,
        }

    submit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
    }
    render() {
        return (
            <div>
                <div className="card card-body my-3">
                   <form onSubmit={this.submit}>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-while">
                                    <i className="fa fa-book" />
                                </div>
                            </div>
                            < input value={
                                this.state.firstname
                            }
                                name="FirstName"
                                onChange={e => this.setState({
                                    firstname: e.target.value
                                }
                                )}
                                type="text"
                                placeholder="FirstName"
                                className="text-capitalaze form-control" />
                        </div>
                        <br />
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-while">
                                    <i className="fa fa-book" />
                                </div>
                            </div>
                            <input type="text" value={this.state.name}
                                onChange={
                                    e => this.setState({
                                        name: e.target.value
                                    })
                                }
                                name="Name" placeholder="Name" className="text-capitalize form-control" />

                        </div>
                        <br />
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-while">
                                    <i className="fa fa-book" />
                                </div>
                            </div>
                            <input type="email" value={this.state.email}
                                onChange={
                                    e => this.setState({
                                        email: e.target.value
                                    })
                                }
                                placeholder="email" className="text-capitalize form-control" />

                        </div>
                        <br />
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-while">
                                    <i className="fa fa-book" />
                                </div>
                            </div>
                            <input type="text" value={this.state.promotion}
                                onChange={
                                    e => this.setState({
                                        promotion: e.target.value
                                    })
                                }
                                placeholder="promotion" className="text-capitalize form-control" />

                        </div>
                        <br/>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-while">
                                    <i className="fa fa-book" />
                                </div>
                            </div>
                            <textarea type="text"        
                                placeholder="promotion" id="exampleFormControlTextarea6" className="text-capitalizeform-control" row="10"></textarea>
                        </div>
                        <br />
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text bg-primary text-while">
                                    <i className="fa fa-book" />
                                </div>
                            </div>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Competence</th>
                                        <th scope="col">Note</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    < tr>
                                        <td>
                                            <input className="form-check-input mx-0" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label mx-4" for="defaultCheck1">
                                                Front
                                        </label>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option disable selected value>selectionner une note</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                    <option>F</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    < tr>
                                        <td>
                                            <input className="form-check-input mx-0" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label mx-4" for="defaultCheck1">
                                                Back
                                        </label>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option disable selected value>selectionner une note</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                    <option>F</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    < tr>
                                        <td>
                                            <input className="form-check-input mx-0" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label mx-4" for="defaultCheck1">
                                                Gestion de Project
                                        </label>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option disable selected value>selectionner une note</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                    <option>F</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    < tr>
                                        <td>
                                            <input className="form-check-input mx-0" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label mx-4" for="defaultCheck1">
                                                UI
                                        </label>
                                        </td>
                                        <td>
                                            <div className="form-group">
                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option disable selected value>selectionner une note</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                    <option>F</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input className="form-check-input mx-0" type="checkbox" value="" id="defaultCheck1" />
                                            <label className="form-check-label mx-4" for="defaultCheck1">
                                                UX
                                        </label>
                                        </td>
                                        <td>
                                            <div className="form-group">

                                                <select className="form-control" id="exampleFormControlSelect1">
                                                    <option disable selected value>selectionner une note</option>
                                                    <option>A</option>
                                                    <option>B</option>
                                                    <option>C</option>
                                                    <option>D</option>
                                                    <option>E</option>
                                                    <option>F</option>
                                                </select>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Link to="/list"><button type="submit" className="btn btn-block btn-primary mt-3">add Student</button></Link>
                    </form>
                </div>
            </div>
        )
    }
}
