import React, { useState, useEffect } from "react";
import { currentUser } from "../../../utils/index";
import axios from "axios";
const AddAgent = (props) => {
  const [data, setData] = useState({
    name: "",
    phone_number: "",
    email: "",
    user_id: "",
    hostel_id: "",
  });
  const [hostel, setHotel] = useState();
  useEffect(async () => {
    let user = currentUser();
    try {
      const response = await axios.get(
        "http://localhost:4000/api/hostel/" + user._id
      );
      setHotel(response.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
  }, []);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    let user = currentUser();
    const finalData = { ...data, user_id: user._id };
    try {
      const response = await axios.post(
        "http://localhost:4000/api/agent/",
        finalData
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
    props.history.push("/Agent");
  };
  return (
    <>
      <div class="container">
        <h2>Add Agent</h2>
        <div className="row">
          <div className="col-md-12">
            <form className="user" onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Add Agent Name..."
                  name="name"
                  value={data.name}
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
                  placeholder="Add Phone number..."
                  name="phone_number"
                  value={data.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Add email..."
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                value={data.hostel_id}
                name="hostel_id"
                onChange={handleChange}
                className="form-control"
              >
                <option>Select Hostel</option>
                {hostel &&
                  hostel.map((hos) => {
                    return <option value={hos._id}>{hos.name}</option>;
                  })}
              </select>
              <br />
              <button
                type="submit"
                className="btn btn-primary btn-user btn-block"
              >
                Add Agent
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddAgent;
