import React from "react";
import AdminNewsList from "./AdminNewsList";

function AdminNewsTable({ news, toggleEditModal, handleNewsAction }) {
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
              style={{ width: "5%", textAlign: "left" }}
            >
              Location
            </th>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "15%", textAlign: "left" }}
            >
              Title
            </th>
            <th scope="col" style={{ width: "20%", textAlign: "left" }}>
              Description
            </th>
            <th
              scope="col"
              className="pl-4"
              style={{ width: "15%", textAlign: "left" }}
            >
              Title Zh
            </th>
            <th scope="col" style={{ width: "20%", textAlign: "left" }}>
              Description Zh
            </th>
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
            Published Date
            </th>
            
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
              Status
            </th>
            <th scope="col" style={{ width: "10%", textAlign: "left" }}>
              Manage
            </th>
          </tr>
        </thead>
        <AdminNewsList
          news={news}
         // toggleEditModal={toggleEditModal}
          handleNewsAction={handleNewsAction}
        />
      </table>
    </div>
  );
}

export default AdminNewsTable;
