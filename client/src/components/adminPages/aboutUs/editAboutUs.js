import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { currentUser } from "../../../utils/index";

import axios from "axios";

const EditAboutUs = (props) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    //let user = currentUser();
    const submitData = { ...data };
    try {
      const response = await axios.put(
        "http://localhost:4000/api/about/" + props.match.params.id,
        submitData
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
    props.history.push("/aboutus");
  };
  return (
    <React.Fragment>
      <div class="container">
        <h2>Edit About Us</h2>
        <div className="row">
          <div className="col-md-12">
            <form className="user" onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Edit title"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Edit description"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-user btn-block"
              >
                Update About Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditAboutUs;
