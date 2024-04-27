import React from "react";

function AdminInquireList({ pendingInquiries }) {

  if (!pendingInquiries) {
    return <tbody>No inquiries to display</tbody>;
  }
  if (pendingInquiries.length === 0) {
    return <tbody>No pending inquiries to display</tbody>;
  }

  return (
    <tbody>
      {pendingInquiries.map((inquiry, index) => (
        <tr key={index} className="tr-border">
          <td className="text-left pl-4">
            <span className="text-muted  text-justify font-sm">
              {inquiry.messageTitle}
            </span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {inquiry.messageDescription}
            </p>
          </td>
          <td className="text-left">
            <button type="button" className="btn btn-pops ">
              <i className="bi bi-reply-all-fill fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AdminInquireList;
