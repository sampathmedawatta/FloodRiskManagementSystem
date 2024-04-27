// AdminInquirePendingTable.js
import React from "react";
import AdminInquirePendingList from "./AdminInquirePendingList";

function AdminInquirePendingTable({ pendingInquiries, toggleSendMsg }) {
  return (
    <div className="table-responsive">
      <table className="table no-wrap user-table mb-0">
        <thead className="border-bottom thead-header">
          <tr>
            <th scope="col" className="pl-4" style={{ width: "1%", textAlign: "left" }}>
              #
            </th>
            <th scope="col" className="pl-4" style={{ width: "25%", textAlign: "left" }}>
              Title
            </th>
            <th scope="col" style={{ width: "45%", textAlign: "left" }}>
              Message
            </th>
            <th scope="col" className="pl-4" style={{ width: "20%", textAlign: "left" }}>
              Customer Name
            </th>
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
              Reply
            </th>
          </tr>
        </thead>
        <AdminInquirePendingList
          pendingInquiries={pendingInquiries}
          toggleSendMsg={toggleSendMsg}
        />
      </table>
    </div>
  );
}

export default AdminInquirePendingTable;
