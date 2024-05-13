import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import LocationService from "../../services/location.service";
import WeatherHistoryService from "../../services/weatherhistory.service";

const AdminFloodMissing = () => {
  const [locations, setLocations] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [locationValid, setLocationValid] = useState(true);

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

  useEffect(() => {
    let timeout;
    if (updateSuccess) {
      timeout = setTimeout(() => {
        setUpdateSuccess(false);
      }, 10000); // Hide alert after 10 seconds
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [updateSuccess]);

  const handleUpdateData = async () => {
    if (selectedLocation !== "") {
      try {
        await WeatherHistoryService.updateHistoryData(selectedLocation);
        setUpdateSuccess(true); // Update success state
      } catch (error) {
        console.error("Error creating update history data:", error);
      }
    } else {
      setLocationValid(false);
    }
  };

  return (
    <div className="box-content">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-12">
                  <h6 className="text-left">
                    <i className="bi bi-cloud-upload-fill  fs-5" />
                    &nbsp;&nbsp; Update Flood History Missing Data
                  </h6>
                </div>
              </div>
            </div>
            <div className="panel-body">
              {updateSuccess && (
                <div className="alert alert-success" role="alert">
                  Data updated successfully !
                </div>
              )}
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <label className="font-sm mb-10" required>
                      Select Location *
                    </label>
                    <select
                      className={`form-control ${
                        !locationValid && "is-invalid"
                      }`}
                      value={selectedLocation}
                      onChange={(e) => {
                        setSelectedLocation(e.target.value);
                        setLocationValid(true);
                      }}
                    >
                      <option value="">Select Location</option>
                      {locations &&
                        locations.map((location, index) => (
                          <option key={index} value={location.code}>
                            {location.name}
                          </option>
                        ))}
                    </select>
                    {!locationValid && (
                      <div className="invalid-feedback">
                        Location is required
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-md-2 align-self-end">
                  <div className="form-group ">
                    <button
                      onClick={handleUpdateData}
                      className="btn btn-login hover-up text-12 w-100"
                    >
                      <i className="bi bi-download"></i> &nbsp; Update History
                      Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminFloodMissing;
