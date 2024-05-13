import React, { useState, useEffect } from "react";
import Quill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import AlertsService from "../../services/alert.service";

function AdminCreateAlert({ showModal, toggleModal, alertData, fetchData }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleZh, setTitleZh] = useState("");
  const [descriptionZh, setDescriptionZh] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [titleZhError, setTitleZhError] = useState(false);
  const [descriptionZhError, setDescriptionZhError] = useState(false);
  const [urgentChecked, setUrgentChecked] = useState(false); // State to track checkbox status

  useEffect(() => {
    if (!showModal) {
      resetFormData();
    }
  }, [showModal]);

  const resetFormData = () => {
    setTitle("");
    setDescription("");
    setTitleZh("");
    setDescriptionZh("");
    setTitleError(false);
    setDescriptionError(false);
    setTitleZhError(false);
    setDescriptionZhError(false);
    setUrgentChecked(false); // Reset checkbox status
  };

  const handleCreateAlert = async () => {
    const titleValid = title.trim();
    const descriptionValid = description.trim();
    const titleZhValid = titleZh.trim();
    const descriptionZhValid = descriptionZh.trim();

    setTitleError(!titleValid);
    setDescriptionError(!descriptionValid);
    setTitleZhError(!titleZhValid);
    setDescriptionZhError(!descriptionZhValid);

    if (titleValid && descriptionValid && titleZhValid && descriptionZhValid) {
      try {
        const newAlertData = {
          location: alertData.location,
          riskLevel: alertData.riskLevel,
          floodPrediction: alertData.flood,
          alertDate: alertData.date,
          title,
          description,
          title_zh: titleZh,
          description_zh: descriptionZh,
          urgent: urgentChecked,
        };

        await AlertsService.createAlert(newAlertData);

        resetFormData();
        toggleModal();
        fetchData();
      } catch (error) {
        console.error("Error creating alert item:", error);
      }
    }
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/);
    if (words.length <= 25) {
      setTitle(value);
      setTitleError(false);
    }
  };

  const handleTitleZhChange = (e) => {
    const value = e.target.value;
    const words = value.trim().split(/\s+/);
    if (words.length <= 25) {
      setTitleZh(value);
      setTitleZhError(false);
    }
  };

  return (
    <form>
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h6 className="modal-title">
                <i className="bi bi-file-plus-fill"></i> &nbsp;&nbsp;Add Alert
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
                      Title *
                    </label>
                    <input
                      type="text"
                      placeholder="Title"
                      className={`form-control ${
                        titleError ? "is-invalid" : ""
                      }`}
                      value={title}
                      onChange={handleTitleChange}
                    />
                    {titleError && (
                      <div className="invalid-feedback">Title is required</div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="font-sm mb-10" required>
                      Description *
                    </label>
                    <Quill
                      className={`form-control ${
                        descriptionError ? "is-invalid" : ""
                      }`}
                      value={description}
                      onChange={setDescription}
                      style={{ minHeight: "200px" }}
                    />
                    {descriptionError && (
                      <div className="invalid-feedback">
                        Description is required
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="font-sm mb-10" required>
                      Urgent &nbsp;&nbsp;&nbsp;
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="urgentChecked"
                      checked={urgentChecked}
                      onChange={(e) => {
                        setUrgentChecked(e.target.checked);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="font-sm mb-10" required>
                      Title (Chinese) *
                    </label>
                    <input
                      type="text"
                      placeholder="Title (Chinese)"
                      className={`form-control ${
                        titleZhError ? "is-invalid" : ""
                      }`}
                      value={titleZh}
                      onChange={handleTitleZhChange}
                    />
                    {titleZhError && (
                      <div className="invalid-feedback">
                        Title (Chinese) is required
                      </div>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="font-sm mb-10" required>
                      Description (Chinese) *
                    </label>
                    <Quill
                      className={`form-control ${
                        descriptionZhError ? "is-invalid" : ""
                      }`}
                      value={descriptionZh}
                      onChange={setDescriptionZh}
                      style={{ minHeight: "200px" }}
                    />
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
                  onClick={handleCreateAlert}
                >
                  <i className="bi bi-plus-square-fill"></i> &nbsp;&nbsp;Create
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AdminCreateAlert;
