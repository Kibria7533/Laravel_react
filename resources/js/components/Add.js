import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddAction from './Actions/AddAction';
class Add extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }
    save=e=>{
        this.setState({ name: e.target.value });
    }
    sub=e=>{
        e.preventDefault();

        this.props.dispatch(AddAction(this.state));

    }
    render() {
        return (
            <div>
                <h1>Your Form</h1>
                <br>
                </br>
                <hr></hr>
                <form onSubmit={this.sub}>
                    <div className="form-group">
                        <label >Enter Your Nmae</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.save} className="form-control" required></input>

                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        );
    }
}

export default connect()(Add);