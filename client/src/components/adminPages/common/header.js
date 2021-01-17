import React from "react";
import { connect } from "react-redux";
import { logout } from "../../../Redux/actions/authActions";
import { Link } from "react-router-dom";
import { currentUser } from "../../../utils/index";
const Header = (props) => {
  const handleLogout = () => {
    props.logout();
    window.location = "/login";
  };
  const user = currentUser();
  return (
    <React.Fragment>
      {/* Topbar */}

      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* Sidebar Toggle (Topbar) */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars" />
        </button>
        {/* Topbar Search */}
        {user && user.role === "admin" ? (
          <h2 className="pl-5" style={{ color: "#4E73DF" }}>
            Admin Dashboard
          </h2>
        ) : (
          <h2 className="pl-5" style={{ color: "#4E73DF" }}>
            Owner Dashboard
          </h2>
        )}

        {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input
                type="text"
                className="form-control bg-light border-0 small"
                placeholder="Search for..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-primary" type="button">
                  <i className="fas fa-search fa-sm" />
                </button>
              </div>
            </div>
          </form> */}
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block" />
          {/* Nav Item - User Information */}
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                {user && user.firstname}
              </span>
              <Link className="dropdown-item" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                Logout
              </Link>
            </Link>
          </li>
        </ul>
      </nav>
      {/* End of Topbar */}
    </React.Fragment>
  );
};

export default connect(null, { logout })(Header);
