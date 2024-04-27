import React from "react";
import AdminInquireReplyList from "./AdminInquireReplyList";

function AdminInquireReplyTable({ replyInquiries }) {
  return (
    <div className="table-responsive">
      <table className="table no-wrap user-table mb-0">
        <thead className="border-bottom thead-header">
          <tr>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "1%", textAlign: "left" }}
            >
              #
            </th>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "10%", textAlign: "left" }}
            >
              Customer Name
            </th>
            <th scope="col" style={{ width: "15%", textAlign: "left" }}>
              Inquiry Title
            </th>
            <th scope="col" style={{ width: "25%", textAlign: "left" }}>
              Inquiry
            </th>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "20%", textAlign: "left" }}
            >
              Reply Title
            </th>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "35%", textAlign: "left" }}
            >
              Reply Message
            </th>
          </tr>
        </thead>
        <AdminInquireReplyList replyInquiries={replyInquiries} />
      </table>
    </div>
  );
}

export default AdminInquireReplyTable;
