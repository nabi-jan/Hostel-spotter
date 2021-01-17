import React from "react";
import { Link } from "react-router-dom";
import { currentUser } from "../../../utils/index";
const Sidebar = (props) => {
  const user = currentUser();
  return (
    <React.Fragment>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/indexCategory"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-home"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Dashboard</div>
        </Link>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        {user && user.role === "admin" && (
          <li className="nav-item">
            <Link className="nav-link" to="/getHostelOwners">
              <i className="fas fa-users" />
              Hostel Owners
            </Link>
          </li>
        )}
        {user && user.role === "admin" && (
          <li className="nav-item">
            <Link className="nav-link" to="/users">
              <i className="fas fa-users" />
              Users
            </Link>
          </li>
        )}
        {/* Divider */}
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/category">
            <i className="fa fa-list-alt" aria-hidden="true"></i>
            <span>Category</span>
          </Link>
        </li>

        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item">
          <Link className="nav-link" to="/hostel">
            <i className="fas fa-hotel" />
            <span>Hostel</span>
          </Link>
        </li>
        {user && user.role === "admin" && (
          <li className="nav-item">
            <Link className="nav-link" to="/Agent">
              <i className="fas fa-user" />
              <span>Agent</span>
            </Link>
          </li>
        )}
        {/* Divider */}
        <hr className="sidebar-divider" />
        {user && user.role === "admin" && (
          <li className="nav-item">
            <Link className="nav-link" to="/aboutus">
              <i className="fas fa-address-card" />

              <span>About Us</span>
            </Link>
          </li>
        )}
      </ul>
    </React.Fragment>
  );
};

export default Sidebar;
