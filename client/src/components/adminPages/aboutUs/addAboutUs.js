import React, { useState } from "react";
import { currentUser } from "../../../utils/index";
import axios from "axios";

const AddAboutUs = (props) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  //   const setCheckboxData = (e, index) => {
  //     const target = e.target;
  //     var value = target.value;
  //     if (target.checked) {
  //       data.facilities.push(value);
  //       let finalArray = data.facilities.filter(acc => acc);
  //       setData({ ...data, facilities: finalArray });
  //     } else {
  //       let newArray = data.facilities.filter(acc => acc !== value);
  //       setData({ ...data, facilities: newArray });
  //     }
  //   };

  const submit = async (e) => {
    e.preventDefault();
    //  let user = currentUser();
    const finalData = { ...data };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/about/",
        finalData
      );

      console.log(response);
      window.location = "/aboutus";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
    // props.history.push("/hostel");
  };
  return (
    <React.Fragment>
      <div class="container">
        <h2>Add Hostel</h2>
        <div className="row">
          <div className="col-md-12">
            <form className="user" onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="title"
                  aria-describedby="emailHelp"
                  placeholder="title"
                  name="title"
                  value={data.titile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-user"
                  id="description"
                  aria-describedby="emailHelp"
                  placeholder="description"
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
                Add About Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddAboutUs;
