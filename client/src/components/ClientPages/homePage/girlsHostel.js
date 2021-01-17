import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
const GirlsHostel = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/hostel/girls"
      );
      setData(response.data);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        console.log(ex.response);
      }
    }
  }, []);
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5">
          {data &&
            data.map((hostel) => {
              return (
                <>
                  <div className="col-md-3" key={hostel._id}>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={`/images/${hostel.image}`} />
                      <Card.Body>
                        <Card.Title>{hostel.name}</Card.Title>
                        <Card.Text>
                          Adress: {hostel.address}
                          <br />
                          Area: {hostel.area}
                          <br />
                          Category: {hostel.category}
                        </Card.Text>
                        <br />
                        {/* <Button variant="primary">View Detail</Button> */}
                      </Card.Body>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default GirlsHostel;
