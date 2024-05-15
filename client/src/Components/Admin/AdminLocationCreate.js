import React, { useState, useEffect } from "react";
import LocationService from "../../services/location.service";

function AdminLocationCreate({ showModal, toggleModal, createLocation }) {
  const [locations, setLocations] = useState([]);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [refLocation, setRefLocation] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [contactError, setContactError] = useState(false);
  const [refLocationError, setRefLocationError] = useState(false);
  const [latitudeError, setLatitudeError] = useState(false);
  const [longitudeError, setLongitudeError] = useState(false);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const floodLocations = await LocationService.getFloodLocations("Flood");
        if (floodLocations) {
          setLocations(floodLocations);
        }
      } catch (error) {
        console.error("Error while fetching flood location data", error);
      }
    };
    fetchLocations();
  }, []);

  const handleSelectCategory = (event) => {
    setType(event.target.value);
  };

  const handleCreateLocation = () => {
    if (!name.trim()) {
      setNameError(true);
    } else {
      setNameError(false);
    }

    if (!description.trim()) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (!type.trim()) {
      setTypeError(true);
    } else {
      setTypeError(false);
    }

    if (!refLocation.trim()) {
      setRefLocationError(true);
    } else {
      setRefLocationError(false);
    }

    if (!latitude.trim()) {
      setLatitudeError(true);
    } else {
      setLatitudeError(false);
    }

    if (!longitude.trim()) {
      setLongitudeError(true);
    } else {
      setLongitudeError(false);
    }

    if (!address.trim()) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }

    if (!longitude.trim()) {
      setContactError(true);
    } else {
      setContactError(false);
    }

    if (
      name.trim() &&
      description.trim() &&
      type.trim() &&
      refLocation.trim() &&
      latitude.trim() &&
      longitude.trim() &&
      address.trim() &&
      contact.trim()
    ) {

      createLocation(
        name,
        description,
        type,
        refLocation,
        latitude,
        longitude,
        address,
        contact
      );
      
      setName("");
      setDescription("");
      setType("");
      setAddress("");
      setContact("");
      setRefLocation("");
      setLatitude("");
      setLongitude("");
      toggleModal();
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
              <i className="bi bi-geo-alt-fill"></i> &nbsp;&nbsp;Add New
              Location
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={() => {
                toggleModal();
                setNameError(false); // Set name error to false
                setDescriptionError(false); // Set description error to false
                setTypeError(false); // Set Type error to false
                setAddressError(false); // Set Address error to false
                setContactError(false); // Set Contact error to false
                setRefLocationError(false); // Set RefLocation error to false
                setLatitudeError(false); // Set Latitude error to false
                setLongitudeError(false); // Set Longitude error to false
              }}
            >
              <i className="bi bi-x-square-fill fs-5 "></i>
            </button>
          </div>
          <div className="modal-body">
            <div class="form-group">
              <label class="font-sm mb-10 " required>
                Location Name *
              </label>
              <input
                type="text"
                placeholder="name"
                className={`form-control ${nameError ? "is-invalid" : ""}`}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false); // Clear error when typing
                }}
              />

              {nameError && (
                <div className="invalid-feedback">
                  Location name is required
                </div>
              )}
            </div>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label class="font-sm mb-10 " required>
                    Latitude *
                  </label>
                  <input
                    type="text"
                    placeholder="Latitude"
                    className={`form-control ${
                      latitudeError ? "is-invalid" : ""
                    }`}
                    value={latitude}
                    onChange={(e) => {
                      setLatitude(e.target.value);
                      setLatitudeError(false); // Clear error when typing
                    }}
                  />

                  {latitudeError && (
                    <div className="invalid-feedback">Latitude is required</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label class="font-sm mb-10 " required>
                    Longitude *
                  </label>
                  <input
                    type="text"
                    placeholder="Longitude"
                    className={`form-control ${
                      longitudeError ? "is-invalid" : ""
                    }`}
                    value={longitude}
                    onChange={(e) => {
                      setLongitude(e.target.value);
                      setLongitudeError(false); // Clear error when typing
                    }}
                  />

                  {longitudeError && (
                    <div className="invalid-feedback">
                      Longitude is required
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="font-sm  mb-10 " required>
                Description *
              </label>

              <textarea
                placeholder="Description"
                className={`form-control ${
                  descriptionError ? "is-invalid" : ""
                }`}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setDescriptionError(false); // Clear error when typing
                }}
              ></textarea>
              {descriptionError && (
                <div className="invalid-feedback">Description is required</div>
              )}
            </div>

            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label class="font-sm mb-10 " required>
                    Location Category *
                  </label>

                  <select
                    className="form-control"
                    id="locationCategory"
                    value={type}
                    onChange={handleSelectCategory}
                  >
                    <option value="">Select Location Category</option>
                    <option value="Hospital">Hospital</option>
                    <option value="Evacuation Point">Evacuation Point</option>
                    <option value="Police Station">Police Station</option>
                    <option value="Other">Other</option>
                  </select>
                 
                  {typeError && (
                    <div className="invalid-feedback">Type is required</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label className="font-sm mb-10" required>
                    Reference Location *
                  </label>
                  <select
                    className={`form-control ${
                      refLocationError ? "is-invalid" : ""
                    }`}
                    value={refLocation}
                    onChange={(e) => {
                      setRefLocation(e.target.value);
                      setRefLocationError(false);
                    }}
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                  {refLocationError && (
                    <div className="invalid-feedback">
                      Ref-Location is required
                    </div>
                  )}
                </div>
              </div>
              <div class="form-group">
                <label class="font-sm mb-10 " required>
                  Address *
                </label>
                <input
                  type="text"
                  placeholder="Address"
                  className={`form-control ${addressError ? "is-invalid" : ""}`}
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setAddressError(false); // Clear error when typing
                  }}
                />
                {addressError && (
                  <div className="invalid-feedback">Address is required</div>
                )}
              </div>
              <div class="form-group">
                <label class="font-sm mb-10 " required>
                  Contact *
                </label>
                <input
                  type="text"
                  placeholder="Contact"
                  className={`form-control ${contactError ? "is-invalid" : ""}`}
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    setContactError(false); // Clear error when typing
                  }}
                />
                {contactError && (
                  <div className="invalid-feedback">Contact is required</div>
                )}
              </div>
            </div>
          </div>

          <div className="row modal-footer">
            <div className="col-md-9"></div>
            <div className="col-md-3 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-login hover-up text-12"
                onClick={handleCreateLocation}
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
export default AdminLocationCreate;
