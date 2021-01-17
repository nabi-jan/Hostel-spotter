import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import img1 from "../../../assets/images/slider/slider1.jpg";
import img2 from "../../../assets/images/slider/slider2.jpg";
import img3 from "../../../assets/images/slider/slider3.jpg";
import BoysHostel from "./boysHostel";
import GirlsHostel from "./girlsHostel";
const Home = (props) => {
  const [key, setKey] = useState("boys");
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>Hostel</h3>
            <p>Hostel is like home</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Furnished Hostel</h3>
            <p>Furnished hostel is better.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Best Hostel</h3>
            <p>Best hostel for best people.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container-fluid">
        <h5 class="head_agileinfo text-center text-capitalize pb-5">
          <span>H</span>ostels
        </h5>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="boys" title="Boys">
            <BoysHostel />
          </Tab>
          <Tab eventKey="girls" title="Girls">
            <GirlsHostel />
          </Tab>
        </Tabs>
      </div>
      <br />
    </>
  );
};

export default Home;
