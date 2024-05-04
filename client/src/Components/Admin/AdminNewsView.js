import React from "react";

function AdminNewsView({ show, handleClose, handleCreateNews, newsItem }) {
  if (!newsItem) {
    return null; // If newsItem is null, don't render anything
  }
  return (
    <div
      className={`modal fade ${show ? "show" : ""}`}
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title">
              <i className="bi bi-file-plus-fill"></i> &nbsp;&nbsp;News Article
            </h6>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
              className="btn"
              onClick={handleClose}
            >
              <i className="bi bi-x-square-fill fs-5 "></i>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row justify-content-center">
                <img
                  src={`../news-images/${newsItem.imageURL}`}
                  className="img-fluid rounded-start"
                  alt="news"
                  style={{ maxWidth: "500px", height: "250px" }}
                />
              </div>
              <div className="row" style={{ padding: '1%' }}>
                <div className="col-12">
                  <div>
                    <span className="text-muted text-justify font-sm color-brand-1">
                      Location:{" "}
                    </span>
                    <span className="text-muted text-justify font-sm ">
                      {newsItem.location}
                    </span>
                  </div>
                  <div></div>
                  <div>
                    <span className="text-muted text-justify font-sm color-brand-1">
                      Published Date:{" "}
                    </span>
                    <span className="text-muted text-justify font-sm ">
                      {newsItem.publishedDate
                        ? new Date(newsItem.publishedDate)
                            .toISOString()
                            .split("T")[0]
                        : "publishedDate"}
                    </span>
                  </div>
                  <br></br>
                  <div>
                    <h6>{newsItem.title}</h6>
                    <p className="text-muted text-justify font-sm">
                      {newsItem.description}
                    </p>
                  </div>

                  <br></br>
                  <div>
                    <h6>{newsItem.title_zh}</h6>
                    <p className="text-muted text-justify font-sm">
                      {newsItem.description_zh}
                    </p>
                  </div>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNewsView;
