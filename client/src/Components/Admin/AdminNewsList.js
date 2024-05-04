import React, { useState } from "react";
import AdminNewsView from "./AdminNewsView";

function AdminNewsList({ news, toggleEditModal, handleNewsAction }) {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleViewNews = (item) => {
    setSelectedNews(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <tbody>
      {news.map((item, index) => (
        <tr key={index} className="tr-border align-middle">
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {index + 1}
            </p>
          </td>

          <td className="text-left">
            <img
              src={`../news-images/${item.imageURL}`}
              className="img-fluid rounded-start small-image"
              alt="news"
            />
          </td>
          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm word-limit-title">
              {item.location}
            </span>
          </td>

          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm word-limit-title">
              {item.title}
            </span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {item.description}
            </p>
          </td>
          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm word-limit-title">
              {item.title_zh}
            </span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {item.description_zh}
            </p>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {item.publishedDate
                ? new Date(item.publishedDate).toISOString().split("T")[0]
                : "publishedDate"}
            </p>
          </td>
          <td className="text-left">
            <span
              className={`label-status ${
                item.active ? "label-active" : "label-inactive"
              }`}
            >
              {item.active ? "Active" : "Inactive"}
            </span>
          </td>
          <td className="text-left">
            {item.active ? (
              <>
                <button
                  type="button"
                  className="btn btn-pops"
                  onClick={() => handleNewsAction(item._id, "unpublish")}
                >
                  <i className="bi bi-trash fs-6"></i>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-pops "
                onClick={() => handleNewsAction(item._id, "publish")}
              >
                <i className="bi bi-check-circle-fill fs-6"></i>
              </button>
            )}
          </td>
          <td className="text-left">
            <button
              type="button"
              className="btn btn-pops"
              onClick={() => handleViewNews(item)}
            >
              <i className="bi bi-newspaper fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
      <AdminNewsView
        show={showModal}
        handleClose={handleCloseModal}
        newsItem={selectedNews}
      />
    </tbody>
  );
}

export default AdminNewsList;
