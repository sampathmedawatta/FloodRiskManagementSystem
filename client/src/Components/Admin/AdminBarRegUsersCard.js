import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminBarRegUsersCard() {
  const [users, setUsers] = useState([]);
  const { weekAgo } = getCurrentDateInfo();

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
        filteredUsers.length > 0
          ? setUsers(filteredUsers)
          : console.warn(
              "No users with type 'REGISTEREDUSER' found in the response."
            );
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

  const activeUsersCount = users.filter((user) => user.active).length;
  const NewUsersCount = users.filter((user) => {
    const registeredDate = new Date(user.registeredDate);
    return user.active && registeredDate > weekAgo;
  }).length;

  return (
    <div className="col-2">
      <a href="/manage-users">
        <div className="card-style-1 hover-up hover-color ">
          <div className="card-info">
            <div className="card-title row">
              <div className="col">
                <h6 className="text-start">Registered Users</h6>
              </div>
              <div className="col-auto">
                <i className="bi bi-people-fill fs-3 color-brand-1" />
              </div>
            </div>
            <div className="ptb-10">
              <p className="font-box-flood text-center color-brand-1">
                {activeUsersCount}
              </p>
            </div>
            <br></br>
            <p className="text-10 text-center strong color-brand-1">
              <strong>{NewUsersCount} </strong> new users this week
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default AdminBarRegUsersCard;
