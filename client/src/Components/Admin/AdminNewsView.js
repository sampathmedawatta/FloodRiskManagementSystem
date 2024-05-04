import React, { useEffect } from "react";

function AdminNewsView({ showModal, toggleModal, newsItem }) {
  useEffect(() => {
    if (!showModal) {
      // Additional cleanup or actions if needed when modal is closed
    }
  }, [showModal]);

  return (
    <div className={`modal fade ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }}>
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="bi bi-file-plus-fill"></i> &nbsp;&nbsp;View News
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
            <h2 className="title">{}</h2>
              <p className="description">{}</p>
              <img src={`../news-images/`} alt="News" className="image" />
              <p className="location">{}</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNewsView;