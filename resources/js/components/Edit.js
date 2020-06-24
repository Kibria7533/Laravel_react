import React, { useEffect,Component } from 'react';
import { connect } from 'react-redux';
import EditAction from './Actions/EditAction';
import { Link } from 'react-router-dom';


class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: ""
        }
      
    }
    save = e => {
        this.setState({ name: e.target.value });
    }
    sub = e => {
        e.preventDefault();
           
        this.props.dispatch(EditAction(this.state));

    }
 
        
componentDidMount(){
    {this.props.data.map(item => {

        if (item.id == this.props.match.params.id) {
            this.setState({name:item.name,id:item.id})
        }})
      }
}
  
       

   



    render() {
        return (
            <div>
                <h1>Your Edit Form</h1>
                <br>
                </br>
                <hr></hr>
                <form onSubmit={this.sub}>
                    <div className="form-group">
                        <label>Edit Your Name</label>
                        <input type="text" name="name" onChange={this.save} value={this.state.name} className="form-control" required ></input>

                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>

            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        data: state.post.names

    }
}

export default connect(mapStateToProps)(Edit);