import React from "react";

const AdminManageAdminStatistics = ({
  activeUsersCount,
  inactiveUsersCount,
}) => {
  return (
    <div className="row justify-content-end">
      <div className="col-3 ">
        <div className="card-style-1">
          <div className="card-info">
            <span className="col">
              <i className="bi bi-people-fill fs-6 color-brand-1" />
              &nbsp;&nbsp; <strong>Active Users &nbsp;&nbsp;</strong>
              <p className="label-active"> {activeUsersCount} </p>
            </span>
          </div>
        </div>
      </div>
      <div className="col-3">
        <div className="card-style-1">
          <div className="card-info">
            <span className="col">
              <i className="bi bi-people-fill fs-6 color-brand-1" />
              &nbsp;&nbsp; <strong>Inactive Users &nbsp;&nbsp;</strong>
              <p className="label-inactive"> {inactiveUsersCount}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminManageAdminStatistics;
