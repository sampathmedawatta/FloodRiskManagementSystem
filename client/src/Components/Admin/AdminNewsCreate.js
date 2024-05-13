import React, { useState, useEffect } from "react";
import LocationService from "../../services/location.service";
import NewsService from "../../services/news.service";
import { getUserSession } from "../Shared/SessionUtils";
function AdminCreateNews({ showModal, toggleModal }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleZh, setTitleZh] = useState("");
  const [descriptionZh, setDescriptionZh] = useState("");
  const [location, setLocation] = useState("");
  const [file, setFile] = useState(null);
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [titleZhError, setTitleZhError] = useState(false);
  const [descriptionZhError, setDescriptionZhError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [fileError, setFileError] = useState(false);
  const [locations, setLocations] = useState([]);
  const userSession = getUserSession();
  const userId = userSession.loggedUser;

  useEffect(() => {
    fetchLocations();
    // Reset form data when modal is closed
    if (!showModal) {
      resetFormData();
    }
  }, [showModal]);

  const resetFormData = () => {
    setTitle("");
    setDescription("");
    setTitleZh("");
    setDescriptionZh("");
    setLocation("");
    setFile(null);
    setTitleError(false);
    setDescriptionError(false);
    setTitleZhError(false);
    setDescriptionZhError(false);
    setLocationError(false);
    setFileError(false);
  };

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

  const handleCreateNews = async () => {
    const titleValid = title.trim();
    const descriptionValid = description.trim();
    const titleZhValid = titleZh.trim();
    const descriptionZhValid = descriptionZh.trim();
    const locationValid = !!location;
    const fileValid = !!file;

    setTitleError(!titleValid);
    setDescriptionError(!descriptionValid);
    setTitleZhError(!titleZhValid);
    setDescriptionZhError(!descriptionZhValid);
    setLocationError(!locationValid);
    setFileError(!fileValid);

    if (
      titleValid &&
      descriptionValid &&
      titleZhValid &&
      descriptionZhValid &&
      locationValid &&
      fileValid
    ) {
      const createdBy = userId;

      try {
        console.log("File:", file);
        const formData = new FormData();
        formData.append("location", location);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("title_zh", titleZh);
        formData.append("description_zh", descriptionZh);
        formData.append("createdBy", createdBy);
        formData.append("imageURL", file); // Append the file with the correct field name

        await NewsService.createNewsItem(formData);
        console.log("FormData:", formData);
        resetFormData();
        toggleModal();
      } catch (error) {
        console.error("Error creating news item:", error);
      }
    }
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="bi bi-file-plus-fill"></i> &nbsp;&nbsp;Add News
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={() => {
                toggleModal();
              }}
            >
              <i className="bi bi-x-square-fill fs-5 "></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label className="font-sm mb-10" required>
                    Location *
                  </label>
                  <select
                    className={`form-control ${
                      locationError ? "is-invalid" : ""
                    }`}
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      setLocationError(false);
                    }}
                  >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                      <option key={location.id} value={location.id}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                  {locationError && (
                    <div className="invalid-feedback">Location is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label className="font-sm mb-10" required>
                    Title *
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className={`form-control ${titleError ? "is-invalid" : ""}`}
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      setTitleError(false);
                    }}
                  />
                  {titleError && (
                    <div className="invalid-feedback">Title is required</div>
                  )}
                </div>
                <div className="form-group">
                  <label className="font-sm mb-10" required>
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
                      setDescriptionError(false);
                    }}
                  ></textarea>
                  {descriptionError && (
                    <div className="invalid-feedback">
                      Description is required
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="font-sm mb-10">Image*</label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className={` btn form-control-file ${
                      fileError ? "is-invalid" : ""
                    }`}
                  />
                  {fileError && (
                    <div className="invalid-feedback">
                      File upload is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="font-sm mb-10" required>
                    Title (Cantonese) *
                  </label>
                  <input
                    type="text"
                    placeholder="Title (Cantonese)"
                    className={`form-control ${
                      titleZhError ? "is-invalid" : ""
                    }`}
                    value={titleZh}
                    onChange={(e) => {
                      setTitleZh(e.target.value);
                      setTitleZhError(false);
                    }}
                  />
                  {titleZhError && (
                    <div className="invalid-feedback">
                      Title (Cantonese) is required
                    </div>
                  )}
                </div>
                <div className="form-group">
                  <label className="font-sm mb-10" required>
                    Description (Cantonese) *
                  </label>
                  <textarea
                    placeholder="Description (Cantonese)"
                    className={`form-control ${
                      descriptionZhError ? "is-invalid" : ""
                    }`}
                    value={descriptionZh}
                    onChange={(e) => {
                      setDescriptionZh(e.target.value);
                      setDescriptionZhError(false);
                    }}
                  ></textarea>
                  {descriptionZhError && (
                    <div className="invalid-feedback">
                      Description (Chinese) is required
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
                onClick={handleCreateNews}
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
export default AdminCreateNews;
