import React from "react";

const AdminManageUserTable = ({ users, userStatus }) => {
  return (
    <div className="panel-body">
      <div className="row">
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
                <th scope="col" className="pl-4" style={{ textAlign: "left" }}>
                  Name
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Email
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Contact No
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Joined Date
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Preferred Location
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Status
                </th>
                <th scope="col" style={{ textAlign: "left" }}>
                  Manage
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr className="tr-border"  key={index}>
                  <td className="text-left">
                    <p className="text-muted text-justify font-sm word-limit">
                      {index + 1}
                    </p>
                  </td>{" "}
                  <td className="text-left">
                    <p className="text-muted text-justify font-sm word-limit">
                      {user.fName} {user.lName}
                    </p>
                  </td>
                  <td className="text-left">
                    <p className="text-muted text-justify font-sm word-limit">
                      {user.email}
                    </p>
                  </td>
                  <td className="text-left">
                    <p className="text-muted text-justify font-sm word-limit">
                      {user.contactNo}
                    </p>
                  </td>
                  <td className="text-left">
                    <p className="text-muted text-justify font-sm word-limit">
                      {user.registeredDate
                        ? new Date(user.registeredDate)
                            .toISOString()
                            .split("T")[0]
                        : "registeredDate"}
                    </p>
                  </td>
                  <td className="text-left">
                    <p className="text-muted text-justify font-sm word-limit">
                      {user.preferedLocation}
                    </p>
                  </td>
                  <td className="text-left">
                    <span
                      className={`label-status ${
                        user.active ? "label-active" : "label-inactive"
                      }`}
                    >
                      {user.active ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="text-left">
                    {user.active ? (
                      <button
                        type="button"
                        className="btn btn-pops"
                        onClick={() => userStatus(user._id, "unpublish")}
                      >
                        <i className="bi bi-x-circle fs-6"></i>
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-pops"
                        onClick={() => userStatus(user._id, "publish")}
                      >
                        <i className="bi bi-check-circle-fill fs-6"></i>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminManageUserTable;
