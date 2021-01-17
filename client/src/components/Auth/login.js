import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../Redux/actions/authActions";
const Login = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    const submitData = { ...data };
    props.login(submitData);
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
                          <h1 className="h4 text-gray-900 mb-4">Login!</h1>
                        </div>
                        <form className="user" onSubmit={submit}>
                          {props.auth.errors && (
                            <div className="alert alert-danger">
                              <p>{props.auth.errors}</p>
                            </div>
                          )}
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control form-control-user"
                              id="exampleInputEmail"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email Address..."
                              name="email"
                              value={data.email}
                              onChange={handleChange}
                            />
                          </div>
                          <div className="form-group">
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
                          <button
                            type="submit"
                            className="btn btn-primary btn-user btn-block"
                          >
                            Login
                          </button>
                        </form>
                        <hr />

                        <div className="text-center">
                          <Link className="small" to="/signupOwner">
                            Create an Account!
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
export default connect(mapStateToprops, { login })(Login);
