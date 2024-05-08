import React, { useState, useEffect } from "react";
import LocationService from "../../services/location.service";
import { useLocation } from "../../contexts/LocationContext";

const EmergencyContactCardHolder = () => {
  const [emergencyContacts, setEmergencyContacts] = useState({});
  const { location } = useLocation();

  useEffect(() => {
    const loadEmergencyContacts = async () => {
      try {
        const locationsResponse = await LocationService.getLocations();
        const emergencyLocations = locationsResponse.filter(
          (location) => location.type != "Flood"
        );

        const locationList = emergencyLocations.filter(
          (loc) => loc.refLocation == location
        );
     
        const groupedContacts = groupContactsByType(locationList);

        setEmergencyContacts(groupedContacts);
      } catch (error) {
        console.error("Error loading emergency contacts:", error);
      }
    };

    loadEmergencyContacts();
  }, [location]);


  const groupContactsByType = (locations) => {
    const groupedContacts = {};
    locations.forEach((location) => {
        if (!groupedContacts[location.type]) {
          groupedContacts[location.type] = [];
        }
        groupedContacts[location.type].push(location);    
    });
    return groupedContacts;
  };

  return (
    <div className="section-box">
      <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-12">
                <h6 className="text-left">
                  <i className="bi bi-hospital fs-5" />
                  &nbsp;&nbsp;Emergency Contact Details
                </h6>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="accordion" id="contactAccordion">
              {Object.keys(emergencyContacts).map((type, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0}
                      aria-controls={`collapse${index}`}
                    >
                      {type}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#contactAccordion"
                  >
                    <div className="accordion-body">
                      <table className="table no-wrap user-table mb-0">
                        <thead className="border-bottom thead-header">
                          <tr className="tr-border">
                            <th scope="col" className="col-4">
                              Name
                            </th>
                            <th scope="col" className="col-4">
                              Address
                            </th>
                            <th scope="col" className="col-4">
                              Contact
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {emergencyContacts[type].map((contact, idx) => (
                            <tr key={idx} className="tr-border ">
                              <td className="pl-4 col-4">
                                <span className="text-muted text-12 ">
                                  {contact.name}
                                </span>
                              </td>
                              <td className="pl-4 col-4">
                                <span className="text-muted text-12">
                                  {contact.address}
                                </span>
                              </td>
                              <td className="pl-4 col-4 text-center">
                                <span className="text-muted text-12">
                                  {contact.contact}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactCardHolder;
