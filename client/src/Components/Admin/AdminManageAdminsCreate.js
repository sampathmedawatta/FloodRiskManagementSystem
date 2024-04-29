import React, { useState } from "react";

function AdminManageAdminsCreate({ showModal, toggleModal, createAdmin }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [contactNoError, setContactNoError] = useState(false);

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validateContactNo = (value) => {
    const contactNoRegex = /^\d+$/;
    return contactNoRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName) {
      setFirstNameError(true);
    }

    if (!lastName) {
      setLastNameError(true);
    }

    if (!validateEmail(email)) {
      setEmailError(true);
    }

    if (!validateContactNo(contactNo)) {
      setContactNoError(true);
    }

    if (
      firstName &&
      lastName &&
      validateEmail(email) &&
      validateContactNo(contactNo)
    ) {
      createAdmin(firstName, lastName, email, contactNo);
    }
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="bi bi-file-plus-fill"></i> &nbsp;&nbsp;Add New Admin
              User
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={() => {
                toggleModal();
                //setTitleError(false); // Set title error to false
                //setDescriptionError(false); // Set description error to false
              }}
            >
              <i className="bi bi-x-square-fill fs-5 "></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="font-sm mb-10" htmlFor="firstName">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className={`form-control ${
                      firstNameError ? "is-invalid" : ""
                    }`}
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      setFirstNameError(false); // Clear error when typing
                    }}
                  />
                  {firstNameError && (
                    <div className="invalid-feedback">
                      First Name is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="font-sm mb-10" htmlFor="email">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError(false); // Clear error when typing
                    }}
                  />
                  {emailError && (
                    <div className="invalid-feedback">
                      Please enter a valid email
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="font-sm mb-10" htmlFor="lastName">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className={`form-control ${
                      lastNameError ? "is-invalid" : ""
                    }`}
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      setLastNameError(false); // Clear error when typing
                    }}
                  />
                  {lastNameError && (
                    <div className="invalid-feedback">
                      Last Name is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="font-sm mb-10" htmlFor="contactNo">
                    Contact No *
                  </label>
                  <input
                    type="text"
                    id="contactNo"
                    placeholder="Contact No"
                    className={`form-control ${
                      contactNoError ? "is-invalid" : ""
                    }`}
                    value={contactNo}
                    onChange={(e) => {
                      setContactNo(e.target.value);
                      setContactNoError(false); // Clear error when typing
                    }}
                  />
                  {contactNoError && (
                    <div className="invalid-feedback">
                      Please enter a valid contact number
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="row modal-footer">
            <div className="col-md-9"></div>
            <div className="col-md-3 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-login hover-up text-12"
                onClick={handleSubmit} // Changed from handleCreateFAQ to handleSubmit
              >
                <i className="bi bi-plus-square-fill"></i> &nbsp;&nbsp;Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminManageAdminsCreate;
