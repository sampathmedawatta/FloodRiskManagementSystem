import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import Pagination from "./Pagination";
import AdminManageAdminTable from "./AdminManageAdminTable";
import AdminManageAdminsCreate from "./AdminManageAdminsCreate";

function AdminManageAdmins() {
  const [users, setUsers] = useState([]);
  const [showAddAdmineModal, setShowAddAdmineModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await UserService.getAllUsers();
      if (response) {
        const filteredUsers = response.filter((user) => user.type === "ADMIN");
        if (filteredUsers.length > 0) {
          setUsers(filteredUsers);
        } else {
          console.warn("No users with type 'ADMIN' found in the response.");
        }
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
    }
  };

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

  const generateRandomPassword = (length) =>
    Array.from(Array(length), () => Math.random().toString(36)[2]).join("");

  const createAdmin = async (fName, lName, email, contactNo) => {
    try {
      const type = "ADMIN";
      const password = generateRandomPassword(8);
      await UserService.createUser({
        fName,
        lName,
        contactNo,
        password,
        email,
        type,
        lang:'English',
        active: true,
      });
      fetchData();
      setShowAddAdmineModal(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const toggleAddAdmin = () => {
    setShowAddAdmineModal(!showAddAdmineModal);
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
                      <i className="bi bi-person-fill-gear fs-5" />
                      &nbsp;&nbsp;Manage Admin Users
                    </h6>
                  </div>
                  <div className="col-md-5">
                    <p className="text-end font-xs color-text-paragraph-2"></p>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-10"></div>
                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-login hover-up text-12 w-100"
                      onClick={toggleAddAdmin}
                    >
                      <i className="bi bi-person-fill-gear fs-6" /> &nbsp; Add
                      Admin User
                    </button>
                  </div>
                </div>
                <AdminManageAdminTable users={users} userStatus={userStatus} />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>

      {}
      {showAddAdmineModal && (
        <AdminManageAdminsCreate
          showModal={showAddAdmineModal}
          toggleModal={toggleAddAdmin}
          createAdmin={createAdmin}
        />
      )}
    </div>
  );
}

export default AdminManageAdmins;
