import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteAction from './Actions/DeleteAction';

class Home extends Component {
  render() {

    return (
      <div>
        <br></br>
        <h1>Your Name List:</h1>
        <br></br>
        <hr></hr>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Delete</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((item,index)=> {
              return (<tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td> <button type="submit" className="btn btn-primary" onClick={() => this.props.dispatch(DeleteAction(item.id))}>Delete</button></td>
                <td> <Link to={`/edit/${item.id}`}><button type="submit" className="btn btn-primary">Edit</button></Link> </td>

              </tr>)

            })}

          </tbody>
        </table>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    data: state.post.names

  }
}

export default connect(mapStateToProps)(Home);