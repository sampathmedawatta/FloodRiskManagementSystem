import React, { useState, useEffect } from "react";
import BasicService from "../services/basic.service";
import HashLoader from "react-spinners/HashLoader";

const BasicComponent = () => {

    const [errors, setErrors] = useState({});
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [userData, setuserData] = useState([{}]);

  // load data when page is loading. run only once
  useEffect(() => {
    async function fetchData() {
      const getList = await BasicService.get();
      if (getList !== null) {
        setuserData(getList);
      }
    }
    fetchData();
  }, []);

  // save form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
  });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};
        if (!formData.name) {
        validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!formData.contactNo.trim()) {
      validationErrors.contactNo = "ContactNo is required";
    }

     setErrors(validationErrors);

if (Object.keys(validationErrors).length === 0) {
      const params = {
        name: formData.name,
        email: formData.email.trim(),
        contactNo: formData.contactNo.trim(),
      };

       setLoading(true);
       setTimeout(() => {
         setLoading(false);
       }, 15000);
 

   BasicService.post(params).then((response) => {
     if (response.status === 200 && response.data) {
       setResponse({ status: true, error: false });
     } else {
       setResponse({ status: false, error: true });
     }
   });
    }};
   
  return (
    <div>
      <p>Hello, This is basic page</p>

      {typeof userData.users === "undefined" ? (
        <p>Loading .....</p>
      ) : (
        userData.users.map((user, i) => <p key={i}>{user}</p>)
      )}

      <div>
        <div className="row">
          <div className="col-12">{/* <SubMenu /> */}</div>

          <div className="col-12">
            <div className="title-heders">Basic Form</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <br />
            <div className="col-10 brok">
              <div className="page-title history">Registration</div>
              <br></br>
              <form onSubmit={handleSubmit}>
                {response.status && !response.error && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    User Successfully Registered.
                  </div>
                )}
                {!response.status && response.error && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    User Registration Failed!
                  </div>
                )}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.name && (
                    <span className="form-error">{errors.name}</span>
                  )}
                  <div className="invalid-feedback">Please enter name</div>{" "}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email}</span>
                  )}
                  <div className="invalid-feedback">Please enter email</div>
                </div>
                <div className="form-group">
                  <label htmlFor="contactNo">contactNo</label>
                  <input
                    type="number"
                    length="10"
                    id="contactNo"
                    className="form-control"
                    name="contactNo"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  {errors.contactNo && (
                    <span className="form-error">{errors.contactNo}</span>
                  )}
                  <div className="invalid-feedback">
                    Please enter contact No
                  </div>
                </div>
                <div className="form-group button">
                  <button
                    type="submit"
                    className="btn btn-add bi-plus-circle-fill"
                  >
                    &nbsp; Register
                  </button>

                  <br></br>

                  {loading && (
                    <div className="spinner1">
                      <HashLoader
                        color="#47c4df"
                        size={40}
                        speedMultiplier={1}
                      />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicComponent;
