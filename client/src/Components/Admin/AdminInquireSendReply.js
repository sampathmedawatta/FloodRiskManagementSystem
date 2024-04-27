import React, { useState } from "react";

function AdminInquireSendReply({ showModal, toggleModal, sendReply, inquiry }) {
  const [replyTitle, setReplyTitle] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [replytitleError, setTitleError] = useState(false);
  const [replymessageError, setMessageError] = useState(false);

  const handleSend = () => {
    // Validation
    if (!replyTitle.trim()) {
      setTitleError(true);
      return;
    }
    if (!replyMessage.trim()) {
      setMessageError(true);
      return;
    }
    // Proceed with sending reply
    sendReply(replyTitle, replyMessage);
    // Close modal
    toggleModal();
    // Reset form fields
    setReplyTitle("");
    setReplyMessage("");
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
              <label className="font-sm mb-10" required>
                Inquiry Title
              </label>
              <input
                type="text"
                className={`form-control'}`}
                //value={inquiry.messageTitle}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="font-sm mb-10" required>
                Inquiry
              </label>
              <textarea
                className={`form-control`}
                //value={inquiry.messageDescription}
                readOnly
              />
            </div>
            <div className="form-group">
              <label className="font-sm mb-10" required>
                Reply Title
              </label>
              <input
                placeholder="Reply Title"
                className={`form-control ${replytitleError ? "is-invalid" : ""}`}
                value={replyTitle}
                onChange={(e) => {
                  setReplyTitle(e.target.value);
                  setTitleError(false); // Clear error when typing
                }}
              />
              {replytitleError && (
                <div className="invalid-feedback">Reply Title is required</div>
              )}
            </div>
            <div className="form-group">
              <label className="font-sm mb-10" required>
                Reply Message *
              </label>
              <textarea
                placeholder="Reply Message"
                className={`form-control ${replymessageError ? "is-invalid" : ""}`}
                value={replyMessage}
                onChange={(e) => {
                  setReplyMessage(e.target.value);
                  setMessageError(false); // Clear error when typing
                }}
              />
              {replymessageError && (
                <div className="invalid-feedback">Reply Message is required</div>
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
