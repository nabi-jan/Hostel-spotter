import React, { useState, useEffect } from "react";
import axios from "axios";
const About = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/about/");
      console.log(response.data);
      setData(response.data[0]);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response);
      }
    }
  }, []);
  console.log(" data", data);
  return (
    <>
      <h1 className="text-center">About Us</h1>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>{data && data.title}</h2>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <p>{data && data.description}</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default About;
