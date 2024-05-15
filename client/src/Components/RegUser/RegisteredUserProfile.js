import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import { getUserSession } from "../Shared/SessionUtils";
import AdminPasswordChange from "../Admin/AdminPasswordChange";
import LocationService from "../../services/location.service";

const RegisteredUserProfile = () => {
  const userSession = getUserSession();
  const userId = userSession.loggedUser;
  const [userDetails, setUserDetails] = useState(null);
  const [contactNo, setContactNo] = useState("");
  const [contactNoError, setContactNoError] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [lang, setLanguagePreference] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [locations, setLocations] = useState(null);

  useEffect(() => {
    //fetching locations for the location dropdown
    const fetchLocations = async () => {
      try {
        const floodLocations = await LocationService.getFloodLocations('Flood');
        if (floodLocations) {
          setLocations(floodLocations);
        }
      } catch (error) {
        console.error("Error while fetching flood location data", error);
      }
    };
    fetchLocations();
  }, []);

  useEffect(() => {
    //fetching user details at initial render
    const fetchUser = async () => {
      try {
        const userDetails = await UserService.getUserById(userId);
        setUserDetails(userDetails);
        setContactNo(userDetails.contactNo);
        setAddress(userDetails.address);
        setState(userDetails.state);
        setPostalCode(userDetails.postCode);
        setPreferredLocation(userDetails.preferedLocation);
        setLanguagePreference(userDetails.lang);

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
    validateContactNo();
    if (!contactNoError) {
      try {
        await UserService.updateUser(userId, {
          contactNo,
          address,
          state,
          postCode: postalCode,
          lang: lang,
          preferedLocation: preferredLocation,
        });
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
                        <div className="col-lg-6 col-md-12">
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
                        <div className="col-lg-6 col-md-12">
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
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Preferred Location
                            </label>
                            <div class="dropdown">
                              <button
                                class="btn dropdown-toggle text-14 border w-100 text-start p-3 profile-dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-display="static"
                              >
                                {preferredLocation}
                              </button>
                              <ul class="dropdown-menu w-100 dropdown-menu-light">
                                {locations?.map((location) => (
                                  <li key={location.name}>
                                    <button
                                      className="dropdown-item "
                                      onClick={() =>
                                        setPreferredLocation(location.name)
                                      }
                                    >
                                      {location.name}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Preferred Language
                            </label>
                            <div class="dropdown">
                              <button
                                class="btn dropdown-toggle text-14 border w-100 text-start justify-items-between p-3 profile-dropdown"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                data-bs-display="static"
                              >
                                {lang}
                              </button>
                              <ul class="dropdown-menu w-100 dropdown-menu-light">
                                <li>
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      setLanguagePreference("Chinese")
                                    }
                                  >
                                    Cantonese
                                  </button>
                                  <button
                                    className="dropdown-item"
                                    onClick={() =>
                                      setLanguagePreference("English")
                                    }
                                  >
                                    English
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Address
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              State
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={state}
                              onChange={(e) => setState(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-brand-1 mb-10">
                              Postal Code
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              value={postalCode}
                              onChange={(e) => setPostalCode(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="col-12">
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
        <AdminPasswordChange></AdminPasswordChange>
      </div>
    </div>
  );
};

export default RegisteredUserProfile;
