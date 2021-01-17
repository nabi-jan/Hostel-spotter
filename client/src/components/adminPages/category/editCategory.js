import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { currentUser } from "../../../utils/index";

import { addCaegory } from "../../../Redux/actions/categoryAction";
import axios from "axios";

const EditCategory = (props) => {
  const [data, setData] = useState({
    name: "",
    user_id: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = async (e) => {
    e.preventDefault();
    let user = currentUser();
    const submitData = { ...data, user_id: user._id };
    try {
      const response = await axios.put(
        "http://localhost:4000/api/category/" + props.match.params.id,
        submitData
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
    props.history.push("/category");
  };
  return (
    <React.Fragment>
      <div class="container">
        <h2>Edit Category</h2>
        <div className="row">
          <div className="col-md-12">
            <form className="user" onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Edit Category..."
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-user btn-block"
              >
                Update Category
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToprops = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToprops, { addCaegory })(EditCategory);
