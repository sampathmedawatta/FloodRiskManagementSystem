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
              style={{ width: "8%", textAlign: "left" }} // Adjusted width for Image
            >
              Image
            </th>
            <th scope="col" style={{ width: "7%", textAlign: "left" }}>
              Location
            </th>
            <th
              scope="col"
              style={{ width: "14%", textAlign: "left" }} // Adjusted width for Title
            >
              Title
            </th>
            <th
              scope="col"
              style={{ width: "18%", textAlign: "left" }} // Adjusted width for Description
            >
              Description
            </th>
            <th
              scope="col"
              style={{ width: "14%", textAlign: "left" }} // Adjusted width for Title Zh
            >
              Title Cantonese
            </th>
            <th
              scope="col"
              style={{ width: "18%", textAlign: "left" }} // Adjusted width for Description Zh
            >
              Description Cantonese
            </th>
            <th
              scope="col"
              style={{ width: "8%", textAlign: "left" }} // Adjusted width for Published Date
            >
              Published Date
            </th>
            <th
              scope="col"
              style={{ width: "5%", textAlign: "left" }} // Adjusted width for Status
            >
              Status
            </th>
            <th
              scope="col"
              style={{ width: "3%", textAlign: "left" }} // Adjusted width for Manage
            >
              Manage
            </th>
            <th
              scope="col"
              style={{ width: "3%", textAlign: "left" }} // Adjusted width for View
            >
              View
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
