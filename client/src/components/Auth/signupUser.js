import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createOwner } from "../../Redux/actions/authActions";
const SignUpUser = (props) => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    const submitData = { ...data };
    props.createOwner(submitData);
    if (props.auth.isLogged) return props.history.push("/");
  };
  return (
    <React.Fragment>
      <div className="bg-gradient-primary">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Create an User Account!
                          </h1>
                        </div>

                        {props.auth.errors && (
                          <div className="alert alert-danger">
                            <p>{props.auth.errors}</p>
                          </div>
                        )}

                        <form className="user" onSubmit={submit}>
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleFirstName"
                                placeholder="First Name"
                                name="firstname"
                                value={data.firstname}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleLastName"
                                placeholder="Last Name"
                                name="lastname"
                                value={data.lastname}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              placeholder="Email Address"
                              name="email"
                              value={data.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group row">
                            <div className="col-sm-6 mb-3 mb-sm-0">
                              <input
                                type="password"
                                className="form-control form-control-user"
                                id="exampleInputPassword"
                                placeholder="Password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="col-sm-6">
                              <input
                                type="text"
                                className="form-control form-control-user"
                                id="exampleRepeatPassword"
                                placeholder="Phone Number"
                                name="phone_number"
                                value={data.phone_number}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <button
                            href="login.html"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Register Account
                          </button>
                        </form>
                        <hr />
                        <div className="text-center">
                          <Link className="small" to="/login">
                            Already Have Account!
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
const mapStateToprops = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToprops, { createOwner })(SignUpUser);
