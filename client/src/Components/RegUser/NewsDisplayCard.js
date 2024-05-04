import React from "react";

const NewsDisplayCard = ({ newsData }) => {
  return (
    <div class="card" style={{ width: "18rem", height: "25rem" }}>
      {/* TODO: imageURL should be placed here */}
      <img
        src="https://plus.unsplash.com/premium_photo-1661962476059-13543ea45d4d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body flex">
        <div className="d-flex flex-column flex-sm-row justify-content-between flex-wrap">
          <div style={{ maxWidth: "70%" }}>
            <h5 class="card-title">{newsData.title}</h5>
          </div>
          <div>
            <p className="text-12">{newsData.publishedDate}</p>
          </div>
        </div>

        <div className="overflow-auto" style={{ maxHeight: "9rem" }}>
          <p class="card-text ">
            {newsData.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsDisplayCard;
