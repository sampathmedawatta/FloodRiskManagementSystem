import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import Pagination from "./Pagination";

function AdminManageUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await UserService.getAllUsers();
      if (response) {
        const filteredUsers = response.filter(
          (user) => user.type === "REGISTEREDUSER"
        );
        if (filteredUsers.length > 0) {
          setUsers(filteredUsers);
        } else {
          console.warn(
            "No users with type 'REGISTEREDUSER' found in the response."
          );
        }
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };
  const activeUsersCount = users.filter(user => user.active).length;
  const inactiveUsersCount = users.length - activeUsersCount;
  const userStatus = async (id, action) => {
    try {
      if (action === "publish") {
        await UserService.updateUser(id, { active: true });
      } else if (action === "unpublish") {
        await UserService.updateUser(id, { active: false });
      }
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };
  return (
    <div className="container-fluid">
      <br />
      <div className="col-md-12">
        <div className="box-content">
          <div className="container">
          <div className="panel-white">
              <div className="panel-head">
                <div className="row">
                  <div className="col-md-7">
                    <h6 className="text-start">
                      <i className="bi bi-people-fill fs-5" />
                      &nbsp;&nbsp;Manage Registered Users
                    </h6>
                  </div>
                  <div className="col-md-5">
                    <p className="text-end font-xs color-text-paragraph-2"></p>
                  </div>
                </div>
              </div>
              <div>
                <div className="panel-body">
                  <div className="row row justify-content-end">
                    <div className="col-3 ">
                      <div className="card-style-1">
                        <div className="card-info">
                          <span className="col">
                            <i className="bi bi-people-fill fs-6 color-brand-1" />
                            &nbsp;&nbsp;{" "}
                            <strong>
                              Active  Users &nbsp;&nbsp;
                            </strong>
                            <p className="label-active"> {activeUsersCount} </p>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="col-3">
                      <div className="card-style-1">
                        <div className="card-info">
                          <span className="col">
                            <i className="bi bi-people-fill fs-6 color-brand-1" />
                            &nbsp;&nbsp;{" "}
                            <strong>
                              Inactive Users &nbsp;&nbsp;
                            </strong>
                            <p className="label-inactive"> {inactiveUsersCount}</p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="box-content">
          <div className="container">
            <div className="panel-white">
  
              <div>
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
                            <th
                              scope="col"
                              className="pl-4"
                              style={{ textAlign: "left" }}
                            >
                              Name
                            </th>

                            <th
                              scope="col"
                              className="pl-4"
                              style={{ textAlign: "left" }}
                            >
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
                            <tr key={index}>
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
                                    user.active
                                      ? "label-active"
                                      : "label-inactive"
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
                                    onClick={() =>
                                      userStatus(user._id, "unpublish")
                                    }
                                  >
                                    <i className="bi bi-x-circle fs-6"></i>
                                  </button>
                                ) : (
                                  <button
                                    type="button"
                                    className="btn btn-pops"
                                    onClick={() =>
                                      userStatus(user._id, "publish")
                                    }
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
                  <br />
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminManageUsers;
