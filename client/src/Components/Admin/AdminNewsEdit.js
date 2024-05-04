import React, { useState, useEffect } from "react";

function AdminNewsEdit({ showModal, toggleModal, faq, editFAQ }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  useEffect(() => {
    if (faq) {
      setTitle(faq.title || "");
      setDescription(faq.description || "");
    }
  }, [faq]);

  const handleUpdateFAQ = async () => {
    try {
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
        await editFAQ(faq.id, "edit", { title, description });
        toggleModal(); // Close modal after updating FAQ
      }
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="">
              {" "}
              <i className="bi bi-pencil-square"></i>&nbsp;&nbsp;Edit FAQ
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={toggleModal}
            >
              <i className="bi bi-x-square-fill fs-5 "></i>
            </button>
          </div>
          <div className="modal-body">
            <div class="form-group">
              <label class="font-sm mb-10 " required>
                Title *
              </label>
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
            </div>
            <div class="form-group">
              <label class="font-sm mb-10 " required>
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
          </div>
          <div className="row modal-footer">
            <div className="col-md-8"></div>
            <div className="col-md-4 d-flex justify-content-end">
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

export default AdminNewsEdit;
