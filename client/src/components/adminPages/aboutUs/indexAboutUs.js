import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { currentUser } from "../../../utils/index";

const AboutUs = (props) => {
  // const { _id } = currentUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAboutUs();
  }, []);
  const fetchAboutUs = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/about/");
      console.log(response);
      setData(response.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response);
      }
    }
  };

  const handleDelete = async (cat) => {
    try {
      await axios.delete("http://localhost:4000/api/about/" + cat._id);
      fetchAboutUs();
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  };
  return (
    <React.Fragment>
      <div className="container">
        <h2>AboutUs</h2>
        <div className="row">
          {data < 2 && (
            <div className="col-md-3 ml-2 mt-2">
              <Link to="addabout" className="btn btn-primary">
                Add About Us <i className="fas fa-plus-square" />
              </Link>
            </div>
          )}
        </div>
        <br />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((cat) => {
                return (
                  <tr key={cat._id}>
                    <td>{cat.title}</td>
                    <td>{cat.description}</td>
                    <td>
                      <Link
                        to={`/editAboutUs/${cat._id}`}
                        className="text-info"
                      >
                        <i className="fas fa-edit" />
                      </Link>
                    </td>
                    <td>
                      <Link
                        onClick={() => handleDelete(cat)}
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
};

export default AboutUs;
