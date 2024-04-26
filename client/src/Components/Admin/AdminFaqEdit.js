import React, { useState, useEffect } from "react";

function AdminFaqEdit({ showModal, toggleModal, faq, updateFAQ }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  useEffect(() => {
    if (faq) {
      setTitle(faq.title);
      setDescription(faq.description);
    }
  }, [faq]);

  const handleUpdateFAQ = () => {
    if (!title.trim()) {
      setTitleError(true);
    } else {
      setTitleError(false);
    }

    if (!description.trim()) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }

    if (title.trim() && description.trim()) {
      updateFAQ(faq.id, { title, description });
    }
  };

  return (
    <div className={`modal fade ${showModal ? "show" : ""}`}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="bi bi-pencil-square"></i> &nbsp;&nbsp;Edit FAQ
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={toggleModal}
            >
              <i className="bi bi-x-square-fill"></i>
            </button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              placeholder="Title"
              className={`form-control ${titleError ? "is-invalid" : ""}`}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleError(false); // Clear error when typing
              }}
            />
            {titleError && (
              <div className="invalid-feedback">Title is required</div>
            )}
            <br></br>
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
              <div className="invalid-feedback">
                Description is required
              </div>
            )}
          </div>

          <div className="row modal-footer">
            <div className="col-md-9"></div>
            <div className="col-md-3 d-flex">
              <button
                type="button"
                className="btn btn-login hover-up text-12"
                onClick={handleUpdateFAQ}
              >
                <i className="bi bi-pencil-square"></i> &nbsp;&nbsp;Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFaqEdit;
