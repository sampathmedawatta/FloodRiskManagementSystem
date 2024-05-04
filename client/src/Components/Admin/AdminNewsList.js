import React from "react";

function AdminNewsList({ news, toggleEditModal, handleNewsAction }) {
  return (
    <tbody>
      {news.map((item, index) => (
        <tr key={index} className="tr-border">
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {index + 1}
            </p>
          </td>
          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm">
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
              {item.publishedDate}
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
                  onClick={() => toggleEditModal(item)}
                >
                  <i className="bi bi-pencil-square fs-6"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-pops"
                  onClick={() => handleNewsAction(item.id, "unpublish")}
                >
                  <i className="bi bi-trash fs-6"></i>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-pops "
                onClick={() => handleNewsAction(item.id, "publish")}
              >
                <i className="bi bi-check-circle-fill fs-6"></i>
              </button>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AdminNewsList;
