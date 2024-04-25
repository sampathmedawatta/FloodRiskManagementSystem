// AdminCreateFAQ.js

import React, { useState } from "react";

function AdminCreateFAQ({ AdminCreateFAQ }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleError(false); 
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionError(false); 
  };

  const handleSubmit = () => {
    if (!title.trim()) {
      setTitleError(true); 
      return;
    }
    if (!description.trim()) {
      setDescriptionError(true); 
      return;
    }
    AdminCreateFAQ(title, description);
    setTitle("");
    setDescription("");
  };
  

  return (
    <div className="modal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New FAQ</h5>
          </div>
          <div className="modal-body">
            <div className={`mb-3 ${titleError ? 'has-error' : ''}`}>
              <label className="form-label">Title</label>
              <input
                type="text"
                className={`form-control ${titleError ? 'is-invalid' : ''}`}
                value={title}
                onChange={handleTitleChange}
              />
              {titleError && <div className="invalid-feedback">Title is required.</div>}
            </div>
            <div className={`mb-3 ${descriptionError ? 'has-error' : ''}`}>
              <label className="form-label">Description</label>
              <textarea
                className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                rows="3"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
              {descriptionError && <div className="invalid-feedback">Description is required.</div>}
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary">
              Close
            </button>
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCreateFAQ;
