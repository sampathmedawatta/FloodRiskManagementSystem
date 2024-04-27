import React from "react";
import AdminFaqList from "./AdminFaqList";

function AdminFaqTable({ faqs, toggleEditModal, handleFAQAction }) {
  return (
    <div className="table-responsive">
      <table className="table no-wrap user-table mb-0">
        <thead className="border-bottom thead-header">
          <tr>
            <th scope="col" className="pl-4" style={{ width: "30%", textAlign: "left" }}>
              Title
            </th>
            <th scope="col" style={{ width: "50%", textAlign: "left" }}>
              Description
            </th>
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
              Status
            </th>
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
              Manage
            </th>
          </tr>
        </thead>
        <AdminFaqList faqs={faqs} toggleEditModal={toggleEditModal} handleFAQAction={handleFAQAction} />
      </table>
    </div>
  );
}

export default AdminFaqTable;
