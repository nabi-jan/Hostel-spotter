import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { connect } from "react-redux";
import { logout } from "../../../Redux/actions/authActions";
import { currentUser } from "../../../utils/index";
const Header = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/login";
  };
  const user = currentUser();
  return (
    <>
      {/* header */}

      <header>
        <div className="container">
          {/* top nav */}
          <nav className="top_nav d-flex pt-3 pb-1">
            {/* logo */}
            <h1>
              <Link className="navbar-brand" to="/">
                Hostel Spotter
              </Link>
            </h1>
            {/* //logo */}
            <div className="w3ls_right_nav ml-auto d-flex">
              {/* search form */}
              {/* <form
                className="nav-search form-inline my-0 form-control"
                action="#"
                method="post"
              >
                <input
                  className="form-control input-lg"
                  placeholder="Search by Area"
                />
                <input
                  className="btn btn-outline-secondary  ml-3 my-sm-0"
                  type="submit"
                  defaultValue="Search"
                />
              </form> */}
              {/* search form */}
              <div className="nav-icon d-flex">
                {/* sigin and sign up */}
                <a
                  className="text-dark login_btn align-self-center mx-3"
                  href="#myModal_btn"
                  data-toggle="modal"
                  data-target="#myModal_btn"
                ></a>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic">
                    <i className="far fa-user" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link to="/login">Login</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/signup-user">Sign Up</Link>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <Link to="/signupOwner">Owner Sign Up</Link>
                    </Dropdown.Item>
                    {user && (
                      <Dropdown.Item>
                        <Link to="/signupOwner" onClick={handleLogout}>
                          Logout
                        </Link>
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                {/* sigin and sign up */}
              </div>
            </div>
          </nav>
          {/* //top nav */}
          {/* bottom nav */}
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto text-center">
                <li className="nav-item">
                  <Link className="nav-link  active" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item" style={{ position: "static" }}>
                  <Link className="nav-link" to="/boys-hostel">
                    Boys Hostel
                  </Link>
                </li>
                <li className="nav-item" style={{ position: "static" }}>
                  <Link className="nav-link" to="/girls-hostel">
                    Girls Hostel
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* //bottom nav */}
        </div>
        {/* //header container */}
      </header>
    </>
  );
};

// export default Header;
export default connect(null, { logout })(Header);
