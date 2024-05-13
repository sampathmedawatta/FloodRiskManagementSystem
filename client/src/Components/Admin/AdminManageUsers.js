import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import Pagination from "./Pagination";
import AdminManageUserStatistics from "./AdminManageUserStatistics";
import AdminManageUserTable from "./AdminManageUserTable";

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

  const activeUsersCount = users.filter((user) => user.active).length;
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
    <div className="box-content">
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
              <AdminManageUserStatistics
                activeUsersCount={activeUsersCount}
                inactiveUsersCount={inactiveUsersCount}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="box-content">
          <div className="container">
            <div className="panel-white">
              <div className="panel-body">
                <AdminManageUserTable users={users} userStatus={userStatus} />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminManageUsers;