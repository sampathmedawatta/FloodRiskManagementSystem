import React, { useState, useEffect } from "react";
import AuthService from "../../services/auth.service";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validation form data

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (!/(?=.*\d)(?=.*[a-zA-Z]).{8,}/.test(formData.password)) {
      errors.password =
        "Password must contain at least one letter and one number, and must be at least 8 characters long";
      isValid = false;
    }

    console.log(errors);
    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (validateForm()) {
      try {
        console.log(formData);
        //  const response = await AuthService.Login(formData);
        console.log("Form submitted successfully:", formData);

        setSuccessMessage("Login Successful!");

        setTimeout(() => {
          setSuccessMessage("");
        }, 50000);

        setFormData({
          email: "",
          password: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle error submission if necessary
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="box-content">
      <div className="row">
        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-box">
                <div className="container">
                  <div className="panel-white mb-30">
                    <div className="box-padding">
                      <div className="login-register">
                        <div className="row login-register-cover">
                          <div className=" col-md-8  mx-auto">
                            <div className="form-login-cover">
                              <div className="text-center">
                                <p className="font-sm text-brand-2">
                                  Welcome Back!{" "}
                                </p>
                                <h2 className="mt-10 mb-5 text-brand-1">
                                  Member Login
                                </h2>
                                <p className="font-sm text-muted mb-30">
                                  Access to all features. No credit card
                                  required.
                                </p>
                                <button className="btn social-login hover-up mb-20">
                                  <img
                                    src="imgs/icon-google.svg"
                                    alt="google"
                                  />
                                  <strong>Sign in with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                  <span>Or continue with</span>
                                </div>
                              </div>
                              <form
                                className="login-register text-start mt-20"
                                noValidate
                                onSubmit={handleSubmit}
                              >
                                <div className="form-group">
                                  <label
                                    className="form-label"
                                    htmlFor="input-1"
                                  >
                                    Email address *
                                  </label>
                                  <input
                                    className={`form-control ${
                                      errors.email ? "is-invalid" : ""
                                    }`}
                                    id="input-5"
                                    type="email"
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Jhon@gmail.com"
                                  />
                                  {errors.email && (
                                    <div className="invalid-feedback">
                                      {errors.email}
                                    </div>
                                  )}
                                </div>
                                <div className="form-group">
                                  <label
                                    className="form-label"
                                    htmlFor="input-4"
                                  >
                                    Password *
                                  </label>
                                  <input
                                    className={`form-control ${
                                      errors.password ? "is-invalid" : ""
                                    }`}
                                    id="input-7"
                                    type="password"
                                    required
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="************"
                                  />
                                  {errors.password && (
                                    <div className="invalid-feedback">
                                      {errors.password}
                                    </div>
                                  )}
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                  <label className="cb-container">
                                    <input type="checkbox" />
                                    <span className="text-small">
                                      Remember me
                                    </span>
                                    <span className="checkmark" />
                                  </label>
                                  <a className="text-muted" href="#">
                                    Forgot Password
                                  </a>
                                </div>
                                <div className="form-group">
                                  <button
                                    className="btn btn-login hover-up w-100"
                                    type="submit"
                                    name="login"
                                  >
                                    Login
                                  </button>
                                </div>
                                <div className="text-muted text-center">
                                  Don't have an Account?{" "}
                                  <a href="register.html">Sign up</a>
                                </div>
                              </form>
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
        </div>
      </div>
    </div>
  );
}
export default Login;
