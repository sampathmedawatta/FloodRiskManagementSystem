import React, { useState, useEffect } from "react";
import LocationService from "../../services/location.service";
import AdminLocationCreate from "./AdminLocationCreate";
//import AdminLocationEdit from "./AdminLocationEdit";
import AdminLocationTable from "./AdminLocationTable";
import Pagination from "./Pagination";

function AdminLocationManage() {
    
  const [locations, setLocations] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [locationToEdit, setLocationToEdit] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await LocationService.getLocations();
      if (response.length > 0) {
        setLocations(response);
      } else {
        console.warn("No Locations found in the response.");
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  const handleLocationAction = async (id, action, updatedData) => {
    try {
      if (action === "edit") {
       // await LocationService.updateLocation(id, updatedData);
      } else if (action === "publish") {
        //await LocationService.updateLocation(id, { active: true });
      } else if (action === "unpublish") {
        await LocationService.updateLocation(id, { active: false });
      }
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating Location:", error);
    }
  };

  const createLocation = async (
    name,
    description,
    type,
    refLocation,
    latitude,
    longitude,
    address,
    contact
  ) => {
    try {
      console.log(
        name,
        description,
        type,
        refLocation,
        latitude,
        longitude,
        address,
        contact
      );
      await LocationService.createLocation({
        name,
        value: description,
        type,
        refLocation,
        lat: latitude,
        long: longitude,
        address,
        contact,
      });
      fetchData();
      setShowCreateModal(false);
    } catch (error) {
      console.error("Error creating Location:", error);
    }
  };
  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const toggleEditModal = (location) => {
    setShowEditModal(!showEditModal);
    setLocationToEdit(location);
  };

  return (
    <div className="col-md-12">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-geo-alt-fill fs-5 " />
                    &nbsp;&nbsp;Manage Locations
                  </h6>
                </div>
                <div className="col-md-5">
                  <p className="text-end font-xs color-text-paragraph-2"></p>
                </div>
              </div>
            </div>
            <div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-10"></div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-login hover-up text-12 w-100"
                      onClick={toggleCreateModal}
                    >
                      <i className="bi bi-question-circle-fill" /> &nbsp; Create
                      New Location
                    </button>
                  </div>
                </div>
                <br></br>
                <AdminLocationTable
                  locations={locations}
                  toggleEditModal={toggleEditModal}
                  handleLocationAction={handleLocationAction}
                />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminLocationCreate
        showModal={showCreateModal}
        toggleModal={toggleCreateModal}
        createLocation={createLocation}
      />
      {/* <AdminLocationEdit
        showModal={showEditModal}
        toggleModal={toggleEditModal}
        location={locationToEdit}
        editLocation={handleLocationAction}
      /> */}
    </div>
  );
}

export default AdminLocationManage;
