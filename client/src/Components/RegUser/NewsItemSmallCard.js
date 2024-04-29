import React from "react";

const NewsItemSmallCard = ({newsData}) => {

  // Truncate title if it exceeds a character limit of 15
  const truncatedTitle = newsData.title.length > 15 ? newsData.title.substring(0, 15) + '...' : newsData.title;

  // Truncate body if it exceeds a character limit of 100
  const truncatedBody = newsData.description.length > 100 ? newsData.description.substring(0, 100) + '...' : newsData.description;
  
  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://images.unsplash.com/photo-1485617359743-4dc5d2e53c89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            class="img-fluid rounded-start"
            alt="news"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <div className="row">
              <div className="col-sm-8">
                <p className="text-start text-truncate news-item-title-text">
                  {truncatedTitle}
                </p>
              </div>
              <div className="col-sm-4">
                <p className="text-end fw-normal news-item-date-text">
                  {newsData.publishedDate}
                </p>
              </div>
            </div>
            <div className="row min-h-100">
              <p class="news-item-body-text text-truncate">
                {truncatedBody}
              </p>
              <p class="card-text">
                <small class="text-12">Read more ...</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItemSmallCard;
