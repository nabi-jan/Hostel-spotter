import React from "react";
import "../../assets/css/shop.css";
import "../../assets/css/style.css";
import Header from "../ClientPages/common/header";
import Footer from "../ClientPages/common/footer";
const UserLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default UserLayout;
