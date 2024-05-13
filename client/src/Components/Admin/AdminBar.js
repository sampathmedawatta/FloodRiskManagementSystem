import React, { useState, useEffect } from "react";
import { getCurrentDateInfo } from "../Shared/Utils";
import AdminBarRegUsersCard from "./AdminBarRegUsersCard";
import AdminBarPendingInquiriesCard from "./AdminBarPendingInquiriesCard";
import AdminBarNewsArticlesCard from "./AdminBarNewsArticlesCard";
import AdminBarAlertCard from "./AdminBarAlertCard";

function AdminBar() {
  const { today, twoWeeksDate } = getCurrentDateInfo();
  return (
    <div className="">
      <div className="section-box">
        <div className="container">
          <div className="panel-white">
            <div className="panel-body">
              <div className="container">
                <div className="row gx-2 justify-content-between">
                  <AdminBarRegUsersCard></AdminBarRegUsersCard>
                  <AdminBarPendingInquiriesCard></AdminBarPendingInquiriesCard>

                  <AdminBarAlertCard></AdminBarAlertCard>
                  <AdminBarNewsArticlesCard></AdminBarNewsArticlesCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AdminBar;
