import React from "react";
import AdminInquireList from "./AdminInquireList";

function AdminInquireTable({ pendingInquiries }) {
  return (
    <div className="table-responsive">
      <table className="table no-wrap user-table mb-0">
        <thead className="border-bottom thead-header">
          <tr>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "30%", textAlign: "left" }}
            >
              Title
            </th>
            <th scope="col" style={{ width: "50%", textAlign: "left" }}>
              Message
            </th>
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
              Reply
            </th>
          </tr>
        </thead>
        <AdminInquireList pendingInquiries={pendingInquiries} />
      </table>
    </div>
  );
}

export default AdminInquireTable;
