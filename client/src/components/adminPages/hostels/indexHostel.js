import React, { Component } from "react";
import { Link } from "react-router-dom";
import { currentUser } from "../../../utils/index";
import axios from "axios";
class IndexHostel extends Component {
  state = {
    data: [],
  };
  async componentDidMount() {
    let user = currentUser();
    try {
      const response = await axios.get(
        "http://localhost:4000/api/hostel/" + user._id
      );

      this.setState({
        data: response.data,
      });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  }
  handleDelete = async (hostel) => {
    try {
      await axios.delete("http://localhost:4000/api/hostel/" + hostel._id);
      window.location = "/hostel";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };
  render() {
    const { data } = this.state;
    console.log("data", data);
    return (
      <React.Fragment>
        <div className="container">
          <h2>Hostels</h2>
          <div className="row">
            <div className="col-md-3 ml-2 mt-2">
              <Link to="addHostel" className="btn btn-primary">
                Add Hostel <i className="fas fa-plus-square" />
              </Link>
            </div>
          </div>
          <br />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Area</th>
                <th>Facilities</th>
                <th>Add Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 &&
                data.map((hostel) => {
                  return (
                    <tr key={hostel._id}>
                      <td>{hostel.name}</td>
                      <td>{hostel.address}</td>
                      <td>{hostel.area}</td>
                      <td>
                        {hostel.facilities.map((fac) => {
                          return <li>{fac}</li>;
                        })}
                      </td>
                      <td>
                        <Link
                          to={`/addHostelImage/${hostel._id}`}
                          className="text-info"
                        >
                          Add Image
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/editHostel/${hostel._id}`}
                          className="text-info"
                        >
                          <i className="fas fa-edit" />
                        </Link>
                      </td>
                      <td>
                        <Link
                          onClick={() => this.handleDelete(hostel)}
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

export default IndexHostel;
