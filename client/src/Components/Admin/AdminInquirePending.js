// AdminInquirePending.js

import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import InquiriesService from "../../services/inquires.service";
import AdminInquirePendingTable from "./AdminInquirePendingTable";
import AdminInquireSendReply from "./AdminInquireSendReply";

function AdminInquirePending() {
  const [pendingInquiries, setPendingInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showReplyModal, setShowReplyModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await InquiriesService.getAllInquiries();
      if (response) {
        const filteredInquires = response.filter(
          (inquiry) => inquiry.inquiryStatus === "PENDING"
        );
        if (filteredInquires.length > 0) {
          setPendingInquiries(filteredInquires);
        } else {
          console.warn("No PENDING inquiries found in the response.");
        }
      }
    } catch (error) {
      console.error("Error fetching Inquiries:", error);
    }
  };

  const toggleSendMsg = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowReplyModal(true);
  };

  const sendReply = async (replyTitle, replyDescription) => {
    try {
      const date = new Date();
      const replyDate = date;
      const inquiryStatus = "REPLY";
      const updatedInquiry = {
        replyTitle: replyTitle,
        replyDescription: replyDescription,
        replyDate: replyDate,
        inquiryStatus: inquiryStatus,
      };
      await InquiriesService.updateInquiry(selectedInquiry._id, updatedInquiry);
      fetchData(); // Refresh data after update
      setTimeout(() => {
        window.location.reload(); // Reload the page after successful update
      }, 500);
    } catch (error) {
      console.error("Error sending reply:", error);
    }
  };

  return (
    <div className="col-md-12">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-10 color-text-paragraph-2">
                  Pending Inquiries
                </div>
                <div className="col-md-2"></div>
              </div>
              <br></br>
              <AdminInquirePendingTable
                pendingInquiries={pendingInquiries}
                toggleSendMsg={toggleSendMsg}
              />
              <AdminInquireSendReply
                showModal={showReplyModal}
                toggleModal={() => setShowReplyModal(!showReplyModal)}
                sendReply={sendReply}
                inquiry={selectedInquiry} // Pass the selected inquiry here
              />
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInquirePending;
