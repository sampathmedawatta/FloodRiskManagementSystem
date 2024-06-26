import React from "react";

const NewsDisplayCard = ({ newsData, lang }) => {
  console.log(lang);

  const formatDate = (datetimeString) => {
    return datetimeString.substring(0, 10);
  };
  return (
    <div>
      <div
        className="card hover-up"
        type="button"
        style={{ width: "18rem", height: "25rem" }}
        data-bs-toggle="modal"
        data-bs-target={`#${newsData._id}`}
      >
        {/* TODO: imageURL should be placed here */}
        <img
          src={`/news-images/${newsData.imageURL}`}
          class="card-img-top"
          alt="news"
        />
        <div class="card-body flex">
          <div className="d-flex flex-column justify-content-between flex-wrap">
            <div style={{ maxWidth: "100%" }}>
              <h5
                className="card-title"
                style={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                title={newsData.title}
              >
                {lang == "Chinese" ? newsData.title_zh : newsData.title}
              </h5>
            </div>
            <div>
              <p className="text-12">{formatDate(newsData.publishedDate)}</p>
            </div>
 
          </div>

          <div
            className="overflow-hidden text-wrap"
            style={{ marginBottom: "5px", maxHeight: "7.5rem" }}
          >
            <p class="card-text ">
              {lang == "Chinese"
                ? newsData.description_zh
                : newsData.description}
            </p>
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
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
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
    </div>
  );
};

export default NewsDisplayCard;
