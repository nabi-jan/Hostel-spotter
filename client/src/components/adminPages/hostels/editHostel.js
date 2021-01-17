import React, { useState } from "react";
import { currentUser } from "../../../utils/index";
import axios from "axios";

const EditHostel = (props) => {
  const [data, setData] = useState({
    name: "",
    address: "",
    area: "",
    facilities: [],
    category: "",
    user_id: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const setCheckboxData = (e, index) => {
    const target = e.target;
    var value = target.value;
    if (target.checked) {
      data.facilities.push(value);
      let finalArray = data.facilities.filter((acc) => acc);
      setData({ ...data, facilities: finalArray });
    } else {
      let newArray = data.facilities.filter((acc) => acc !== value);
      setData({ ...data, facilities: newArray });
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    let user = currentUser();
    const finalData = { ...data, user_id: user._id };
    try {
      const response = await axios.put(
        "http://localhost:4000/api/hostel/" + props.match.params.id,
        finalData
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
    props.history.push("/hostel");
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
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Add HosteL Name..."
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
                  placeholder="Add Address..."
                  name="address"
                  value={data.address}
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
                  placeholder="Add Area..."
                  name="area"
                  value={data.area}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  name="category"
                  value="boys hostel"
                  onChange={handleChange}
                />
                <label>Boys Hostel</label>
              </div>
              <div className="form-group">
                <input
                  type="radio"
                  name="category"
                  value="girls hostel"
                  onChange={handleChange}
                />
                <label>Girls Hostel</label>
              </div>
              <h2>Facilties</h2>
              <div className="form-group">
                <input
                  type="checkbox"
                  name="facilities"
                  value="AC"
                  onChange={(e) => setCheckboxData(e, 0)}
                />
                &nbsp;
                <label>AC</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="facilities"
                  value="NON-AC"
                  onChange={(e) => setCheckboxData(e, 1)}
                />
                &nbsp;
                <label>NON-AC</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="facilities"
                  value="Almari"
                  onChange={(e) => setCheckboxData(e, 2)}
                />
                &nbsp;
                <label>Almari</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="facilities"
                  value="Mess"
                  onChange={(e) => setCheckboxData(e, 3)}
                />
                &nbsp;
                <label>Mess</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="facilities"
                  value="Wifi"
                  onChange={(e) => setCheckboxData(e, 4)}
                />
                &nbsp;
                <label>Wifi</label>&nbsp;&nbsp;
                <input
                  type="checkbox"
                  name="facilities"
                  value="Attached Washroom"
                  onChange={(e) => setCheckboxData(e, 5)}
                />
                &nbsp;
                <label>Attached Washroom</label>&nbsp;&nbsp;
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-user btn-block"
              >
                Add Hostel
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditHostel;
