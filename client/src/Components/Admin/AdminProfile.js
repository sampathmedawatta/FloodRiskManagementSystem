import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { getUserSession } from "../Shared/SessionUtils";
import AdminPasswordChange from "./AdminPasswordChange"

function AdminProfile() {
  const userSession = getUserSession();
  const userId = userSession.loggedUser;
  const [userDetails, setUserDetails] = useState(null);
  const [contactNo, setContactNo] = useState("");
  const [contactNoError, setContactNoError] = useState(""); // State for contact number error
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // State for showing success alert

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDetails = await UserService.getUserById(userId);
        setUserDetails(userDetails);
        setContactNo(userDetails.contactNo);
      } catch (error) {
        console.error("Error while fetching User data", error);
      }
    };
    fetchUser();
  }, [userId]);

  const validateContactNo = () => {
    if (!contactNo) {
      setContactNoError("Contact number is required.");
    } else if (!/^\d+$/.test(contactNo)) {
      setContactNoError("Contact number should contain only numbers.");
    } else {
      setContactNoError("");
    }
  };

  const handleUpdate = async () => {
    validateContactNo(); // 
    if (!contactNoError) {
      try {
        await UserService.updateUser(userId, { contactNo });
        const updatedUserDetails = await UserService.getUserById(userId);
        setUserDetails(updatedUserDetails);
        setShowSuccessAlert(true);
        setTimeout(() => {
          setShowSuccessAlert(false); 
        }, 3000);
      } catch (error) {
        console.error("Error updating user details:", error);
      }
    }
  };

  return (
    <div className="box-content">
      <br />
      <div className="row">
        <div className="col-md-6">
          <div className="box-content">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <div className="row">
                    <div className="col-md-7">
                      <h6 className="text-start">
                        <i className="bi bi-person fs-5 " />
                        &nbsp;&nbsp;My Profile
                      </h6>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="panel-body">
                    <div className="box-padding">
                      {showSuccessAlert && (
                        <div className="alert alert-success" role="alert">
                          User Contact details updated successfully!
                        </div>
                      )}
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              First Name *
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={userDetails ? userDetails.fName : ""}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Last Name *
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={userDetails ? userDetails.lName : ""}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Email *
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={userDetails ? userDetails.email : ""}
                              readOnly
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Contact number
                            </label>
                            <input
                              className={`form-control ${
                                contactNoError ? "is-invalid" : ""
                              }`}
                              type="text"
                              value={contactNo}
                              onChange={(e) => setContactNo(e.target.value)}
                              onBlur={validateContactNo} // Validate on blur
                            />
                            {contactNoError && (
                              <div className="invalid-feedback">
                                {contactNoError}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="row ">
                          <div className="col-10 "></div>
                          <div className="col-2 ">
                            <div className="form-group mt-10 text-end">
                              <button
                                className="btn btn-login hover-up"
                                onClick={handleUpdate}
                              >
                                &nbsp;&nbsp;Update
                              </button>
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
        <AdminPasswordChange></AdminPasswordChange>
   </div>
    </div>
  );
}
export default AdminProfile;
