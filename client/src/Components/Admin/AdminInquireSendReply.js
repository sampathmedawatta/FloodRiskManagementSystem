import React, { useState } from "react";

function AdminInquireSendReply({ showModal, toggleModal, sendReply, inquiry }) {
  // State variables for reply title, message, and error flags
  const [replyTitle, setReplyTitle] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [replyTitleError, setReplyTitleError] = useState(false);
  const [replyMessageError, setReplyMessageError] = useState(false);

  // Function to handle sending reply
  const handleSend = () => {
    // Validation for both reply title and message
    if (!replyTitle.trim() && !replyMessage.trim()) {
      setReplyTitleError(true);
      setReplyMessageError(true);
      return;
    }
    // Validation for reply title
    if (!replyTitle.trim()) {
      setReplyTitleError(true);
      return;
    }
    // Validation for reply message
    if (!replyMessage.trim()) {
      setReplyMessageError(true);
      return;
    }
    // Proceed with sending reply
    sendReply(replyTitle, replyMessage);
    // Close modal
    toggleModal();
    // Reset form fields and errors
    setReplyTitle("");
    setReplyMessage("");
    setReplyTitleError(false);
    setReplyMessageError(false);
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
              <i className="bi bi-envelope"></i>&nbsp;&nbsp;Reply Inquiry
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
            <div className="form-group">
              <label className="font-sm mb-10">Inquiry Title</label>
              <input
                className="form-control"
                value={inquiry?.messageTitle || ""}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="font-sm mb-10">Inquiry</label>
              <textarea
                className="form-control"
                value={inquiry?.messageDescription || ""}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="font-sm mb-10">Reply Title *</label>
              <input
                placeholder="Reply Title"
                className={`form-control ${
                  replyTitleError ? "is-invalid" : ""
                }`}
                value={replyTitle}
                onChange={(e) => {
                  setReplyTitle(e.target.value);
                  setReplyTitleError(false); // Clear error when typing
                }}
              />
              {replyTitleError && (
                <div className="invalid-feedback">Reply Title is required</div>
              )}
            </div>
            <div className="form-group">
              <label className="font-sm mb-10">Reply Message *</label>
              <textarea
                placeholder="Reply Message"
                className={`form-control ${
                  replyMessageError ? "is-invalid" : ""
                }`}
                value={replyMessage}
                onChange={(e) => {
                  setReplyMessage(e.target.value);
                  setReplyMessageError(false); // Clear error when typing
                }}
              />
              {replyMessageError && (
                <div className="invalid-feedback">
                  Reply Message is required
                </div>
              )}
            </div>
          </div>
          <div className="row modal-footer">
            <div className="col-md-8"></div>
            <div className="col-md-4 d-flex justify-content-end">
              <button
                type="button"
                className="btn btn-login hover-up text-12"
                onClick={handleSend}
              >
                <i className="bi bi-envelope"></i>&nbsp;&nbsp;Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInquireSendReply;
