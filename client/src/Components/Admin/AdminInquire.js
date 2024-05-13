import React, { useState, useEffect } from "react";
import AdminInquirePending from "./AdminInquirePending";
import AdminInquireReply from "./AdminInquireReply";

function AdminInquire() {
  return (
    <div className="box-content">
      <div className="row">
        <AdminInquirePending />  
      </div>
      <div className="row">
        <AdminInquireReply />  
      </div>
    </div>
  );
}
export default AdminInquire;
