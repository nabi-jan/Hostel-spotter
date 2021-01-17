import React, { useState } from "react";
import { currentUser } from "../../../utils/index";
import axios from "axios";

const AddHostelImage = (props) => {
  const [data, setData] = useState({
    image: null,
  });
  const handleChange = (e) => {
    console.log("in handler", e.target.files[0]);
    setData({ ...data, image: e.target.files[0] });
  };
  const submit = async (e) => {
    e.preventDefault();
    console.log("Image in state", data.image);
    const imageData = new FormData();
    imageData.append("file", data.image);
    console.log("Form Data", imageData);

    try {
      const response = await axios.put(
        "http://localhost:4000/api/hostel/image/" + props.match.params.id,
        imageData
      );
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
      }
    }
    props.history.push("/hostel");
  };
  return (
    <>
      <div class="container">
        <h2>Add Image</h2>
        <div className="row">
          <div className="col-md-12">
            <form className="user" onSubmit={submit}>
              <div className="form-group">
                <input
                  type="file"
                  className="form-control"
                  name="image"
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-user btn-block"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddHostelImage;
