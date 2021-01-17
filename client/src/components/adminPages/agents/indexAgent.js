import React, { Component } from "react";
import { Link } from "react-router-dom";
import { currentUser } from "../../../utils/index";
import axios from "axios";
class IndexAgent extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    let user = currentUser();
    try {
      const response = await axios.get(
        "http://localhost:4000/api/agent/" + user._id
      );
      console.log("Agents", response.data);
      this.setState({
        data: response.data,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  }
  handleDelete = async (agent) => {
    try {
      await axios.delete("http://localhost:4000/api/agent/" + agent._id);
      window.location = "/Agent";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };
  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <h2>Agents</h2>
          <div className="row">
            <div className="col-md-3 ml-2 mt-2">
              <Link to="/addAgent" className="btn btn-primary">
                Add Agent <i className="fas fa-plus-square" />
              </Link>
            </div>
          </div>
          <br />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((agent) => {
                return (
                  <tr key={agent._id}>
                    <td>{agent.name}</td>
                    <td>{agent.phone_number}</td>
                    <td>{agent.email}</td>
                    <td>
                      <Link
                        to={`/editAgent/${agent._id}`}
                        className="text-info"
                      >
                        <i className="fas fa-edit" />
                      </Link>
                    </td>
                    <td>
                      <Link
                        onClick={() => this.handleDelete(agent)}
                        className="text-danger"
                      >
                        <i className="fas fa-trash-alt" />
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default IndexAgent;
