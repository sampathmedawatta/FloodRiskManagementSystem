import React from "react";

function AdminFaqList({ faqs, toggleEditModal, handleFAQAction }) {
  return (
    <tbody>
      {faqs.map((faq, index) => (
        <tr key={index}>
          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm">{faq.title}</span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">{faq.description}</p>
          </td>
          <td className="text-left">
            <span className={`label-status ${faq.active ? "label-active" : "label-inactive"}`}>
              {faq.active ? "Active" : "Inactive"}
            </span>
          </td>
          <td className="text-left">
            {faq.active ? (
              <>
                <button
                  type="button"
                  className="btn btn-pops"
                  onClick={() => toggleEditModal(faq)}
                >
                  <i className="bi bi-pencil-square fs-6"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-pops"
                  onClick={() => handleFAQAction(faq.id, "unpublish")}
                >
                  <i className="bi bi-trash fs-6"></i>
                </button>
              </>
            ) : (
              <button
                type="button"
                className="btn btn-pops "
                onClick={() => handleFAQAction(faq.id, "publish")}
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

export default AdminFaqList;
