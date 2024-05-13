import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import LocationService from "../../services/location.service";
import UserService from "../../services/user.service";

function UserRegistration() {
  const [locations, setLocations] = useState([]);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    preferedLocation: "",
    lang: "",
    email: "",
    contactNo: "",
    password: "",
    repassword: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const locationsData = await LocationService.getFloodLocations('Flood');
        setLocations(locationsData);
      } catch (error) {
        console.error("Error loading locations", error);
      }
    };
    loadLocation();
  }, []);

  const verifyEmail = async () => {
    try {
      const users = await UserService.getAllUsers();
      const existingEmails = users.map((user) => user.email);
      if (existingEmails.includes(formData.email)) {
        // Email already exists
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is already in use",
        }));
      } else {
        // Email is available
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "", // Clear any existing error for email
        }));
      }
    } catch (error) {
      console.error("Error checking email availability", error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Validation logic
    if (!formData.fName.trim()) {
      errors.fName = "First Name is required";
      isValid = false;
    }
    if (!formData.lName.trim()) {
      errors.lName = "Last Name is required";
      isValid = false;
    }
    if (!formData.preferedLocation) {
      errors.preferedLocation = "Preferred Location is required";
      isValid = false;
    }
    if (!formData.lang) {
      errors.lang = "Preferred Language is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    } else {
      verifyEmail();
    }
    if (!formData.contactNo.trim()) {
      errors.contactNo = "Contact No is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.contactNo)) {
      errors.contactNo = "Contact No should contain only numbers";
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
    if (formData.password !== formData.repassword) {
      errors.repassword = "Passwords do not match";
      isValid = false;
    }
    if (!formData.repassword.trim()) {
      errors.repassword = "Re-Password is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const updatedFormData = { ...formData, type: "REGISTEREDUSER" };

        console.log(updatedFormData);

       await UserService.createUser(updatedFormData);
        console.log("Form submitted successfully:", formData);

        setSuccessMessage("Registration Successful!   Please login to your account.");
        setTimeout(() => {
          setSuccessMessage("");
        }, 50000);
        setFormData({
          fName: "",
          lName: "",
          preferedLocation: "",
          lang: "",
          email: "",
          contactNo: "",
          password: "",
          repassword: "",
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
                    <div className="login-register">
                      <div className="row login-register-cover">
                        <div className="col-md-8 mx-auto">
                          <div className="form-login-cover">
                            <div className="text-center">
                              <h2 className="mt-10 mb-5 text-brand-1">
                                Registration
                              </h2>
                              {successMessage && (
                                <div className="alert alert-success" role="alert">
                                  {successMessage}
                                </div>
                              )}

                              <p className="font-sm text-muted mb-30">
                                Access to all features. No credit card required.
                              </p>
                              {/* <button className="btn social-login hover-up mb-20">
                                <img src="imgs/icon-google.svg" alt />
                                <strong>Sign up with Google</strong>
                              </button>
                              <div className="divider-text-center">
                                <span>Or continue with</span>
                              </div> */}
                            </div>
                            <form
                              className="login-register text-start mt-20 needs-validation"
                              noValidate
                              onSubmit={handleSubmit}
                            >
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-1"
                                    >
                                      First Name *
                                    </label>
                                    <input
                                      className={`form-control ${
                                        errors.fName ? "is-invalid" : ""
                                      }`}
                                      id="input-1"
                                      type="text"
                                      required
                                      name="fName"
                                      value={formData.fName}
                                      onChange={handleChange}
                                      placeholder="Steven"
                                    />
                                    {errors.fName && (
                                      <div className="invalid-feedback">
                                        {errors.fName}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-2"
                                    >
                                      Last Name *
                                    </label>
                                    <input
                                      className={`form-control ${
                                        errors.lName ? "is-invalid" : ""
                                      }`}
                                      id="input-2"
                                      type="text"
                                      required
                                      name="lName"
                                      value={formData.lName}
                                      onChange={handleChange}
                                      placeholder="Job"
                                    />
                                    {errors.lName && (
                                      <div className="invalid-feedback">
                                        {errors.lName}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-3"
                                    >
                                      Preferred Location *
                                    </label>
                                  
                                    <select
                                      className={`form-control  ${
                                        errors.preferedLocation
                                          ? "is-invalid"
                                          : ""
                                      }`}
                                      id="input-3"
                                      required
                                      name="preferedLocation"
                                      value={formData.preferedLocation}
                                      onChange={handleChange}
                                    >
                                      <option value="">
                                        Select Preferred Location
                                      </option>
                                      {Array.isArray(locations) &&
                                        locations.map((location) => (
                                          <option
                                            key={location.code}
                                            value={location.name}
                                          >
                                            {location.name}
                                          </option>
                                        ))}
                                    </select>
                                    {errors.preferedLocation && (
                                      <div className="invalid-feedback">
                                        {errors.preferedLocation}
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-4"
                                    >
                                      Preferred Language *
                                    </label>
                                    <select
                                      className={`form-control ${
                                        errors.lang ? "is-invalid" : ""
                                      }`}
                                      id="input-4"
                                      required
                                      name="lang"
                                      value={formData.lang}
                                      onChange={handleChange}
                                    >
                                      <option value="">
                                        Select Preferred Language
                                      </option>
                                      <option value="English">English</option>
                                      <option value="Chinese">Cantonese</option>
                                    </select>
                                    {errors.lang && (
                                      <div className="invalid-feedback">
                                        {errors.lang}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-5"
                                    >
                                      Email *
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
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-6"
                                    >
                                      Contact No *
                                    </label>
                                    <input
                                      className={`form-control ${
                                        errors.contactNo ? "is-invalid" : ""
                                      }`}
                                      id="input-6"
                                      type="text"
                                      required
                                      name="contactNo"
                                      value={formData.contactNo}
                                      onChange={handleChange}
                                      placeholder="1234567890"
                                    />
                                    {errors.contactNo && (
                                      <div className="invalid-feedback">
                                        {errors.contactNo}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-7"
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
                                </div>
                                <div className="col-md-6">
                                  <div className="form-group">
                                    <label
                                      className="form-label"
                                      htmlFor="input-8"
                                    >
                                      Re-Password *
                                    </label>
                                    <input
                                      className={`form-control ${
                                        errors.repassword ? "is-invalid" : ""
                                      }`}
                                      id="input-8"
                                      type="password"
                                      required
                                      name="repassword"
                                      value={formData.repassword}
                                      onChange={handleChange}
                                      placeholder="************"
                                    />
                                    {errors.repassword && (
                                      <div className="invalid-feedback">
                                        {errors.repassword}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="form-group">
                                <button
                                  className="btn btn-login hover-up w-100"
                                  type="submit"
                                  name="login"
                                >
                                  Register
                                </button>
                              </div>
                              <div className="text-muted text-center">
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
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
  );
}

export default UserRegistration;
