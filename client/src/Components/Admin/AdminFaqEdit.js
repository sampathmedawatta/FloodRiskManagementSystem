import React, { useState, useEffect } from "react";

function AdminFaqEdit({ showModal, toggleModal, faq, editFAQ }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const modalContainerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
    zIndex: "1001",
    maxWidth: "80%",
    maxHeight: "80%",
    overflow: "auto"
  };

  const modalTitleStyle = {
    fontSize: "1.2rem",
    marginBottom: "15px"
  };

  useEffect(() => {
    console.log("FAQ prop in AdminFaqEdit:", faq);
    if (faq) {
      console.log("Setting title and description:", faq.title, faq.description);
      setTitle(faq.title || "");
      setDescription(faq.description || "");
    }
  }, [faq]);

  const handleUpdateFAQ = () => {
    console.log("Updating FAQ...");
    if (!title.trim()) {
      console.log("Title is empty");
      setTitleError(true);
    } else {
      console.log("Title is not empty:", title);
      setTitleError(false);
    }

    if (!description.trim()) {
      console.log("Description is empty");
      setDescriptionError(true);
    } else {
      console.log("Description is not empty:", description);
      setDescriptionError(false);
    }

    if (title.trim() && description.trim()) {
      console.log("Updating FAQ with title and description:", title, description);
      editFAQ(faq.id, { title, description });
      toggleModal(); // Close modal after updating FAQ
    }
  };

  console.log("showModal:", showModal);

  return (
  
    <div className={`modal fade ${showModal ? "show" : ""}`}   style={{ display: showModal ? "block" : "none" }}
  >


      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id=""> <i className="bi bi-pencil-square"></i>&nbsp;&nbsp;Edit FAQ</h6>
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
              className={`form-control ${descriptionError ? "is-invalid" : ""}`}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionError(false); // Clear error when typing
              }}
            ></textarea>
            {descriptionError && (
              <div className="invalid-feedback">Description is required</div>
            )}
          </div></div>
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

export default AdminFaqEdit;
