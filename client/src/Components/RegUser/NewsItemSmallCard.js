import React from "react";

const NewsItemSmallCard = ({ newsData, lang }) => {
  // Truncate title if it exceeds a character limit of 15

  const truncatedTitle =
    newsData.title.length > 60
      ? newsData.title.substring(0, 50) + "..."
      : newsData.title;

  // Truncate body if it exceeds a character limit of 100
  const truncatedBody =
    newsData.description.length > 150
      ? newsData.description.substring(0, 120) + "..."
      : newsData.description;

  const truncatedTitle_zh =
    newsData.title_zh.length > 60
      ? newsData.title_zh.substring(0, 50) + "..."
      : newsData.title_zh;

  // Truncate body if it exceeds a character limit of 100
  const truncatedBody_zh =
    newsData.description_zh.length > 150
      ? newsData.description_zh.substring(0, 120) + "..."
      : newsData.description_zh;

  const formatDate = (datetimeString) => {
    return datetimeString.substring(0, 10);
  };

  return (
    <>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`/news-images/${newsData.imageURL}`}
              className="img-fluid rounded-start news-card-image h-100 w-100 m-0"
              alt="news"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex flex-column ">
                <div>
                  <p className="text-start news-item-title-text">
                    {lang == "Chinese" ? truncatedTitle_zh : truncatedTitle}
                  </p>
                </div>
                <div>
                  <p className="text-start fw-normal news-item-date-text">
                    {formatDate(newsData.publishedDate)}
                  </p>
                </div>
              </div>
              <div className="row min-h-100">
                <p className="news-item-body-text">
                  {lang == "Chinese" ? truncatedBody_zh : truncatedBody}
                </p>
                <p
                  className="card-text"
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target={`#${newsData._id}`}
                >
                  <small className="text-12">Read more ...</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id={`${newsData._id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby={`#${newsData._id}Label`}
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id={`#${newsData._id}Label`}>
                {lang == "Chinese" ? newsData.title_zh : newsData.title}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="row justify-content-center">
                <img
                  src={`../news-images/${newsData.imageURL}`}
                  className="img-fluid rounded-start"
                  alt="news"
                  style={{ maxWidth: "500px", height: "250px" }}
                />
              </div>
              <div>
                <span className="text-muted text-justify font-sm color-brand-1">
                  Location:{" "}
                </span>
                <span className="text-muted text-justify font-sm ">
                  {newsData.location}
                </span>
              </div>
              <div>
              <span className="text-muted text-justify font-sm color-brand-1">
             Published Date:{" "}
                    </span>
                <span className="text-muted text-justify font-sm ">
                  {newsData.publishedDate
                    ? new Date(newsData.publishedDate)
                        .toISOString()
                        .split("T")[0]
                    : "publishedDate"}
                </span>
              </div>

              <div className="row justify-content-center p-3">
                {lang == "Chinese"
                  ? newsData.description_zh
                  : newsData.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItemSmallCard;
