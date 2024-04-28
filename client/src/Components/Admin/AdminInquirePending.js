// AdminInquirePending.js

import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import Pagination from "./Pagination";
import axios from "axios";
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
      const response = await axios.get(`${API_BASE_URL}/inquiries/`);
      const sortedInquiries = response.data.sort((a, b) => {
        return new Date(b.messageDate) - new Date(a.messageDate);
      });

      // Filter inquiries "PENDING"
      const pendingInquiries = sortedInquiries.filter(
        (inquiry) => inquiry.inquiryStatus === "PENDING"
      );
      setPendingInquiries(pendingInquiries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const toggleSendMsg = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowReplyModal(true);
  };

  const sendReply = async (replyTitle, replyDescription) => {
    try {
      const date = new Date();
      const replyDate = date.toISOString();
      const inquiryStatus = "REPLY";
      const updatedInquiry = {
        ...selectedInquiry,
        replyTitle: replyTitle,
        replyDescription: replyDescription,
        replyDate: replyDate,
        inquiryStatus: inquiryStatus,
      };
      console.log(updatedInquiry);
      await axios.put(
        `${API_BASE_URL}/inquiries/${selectedInquiry.id}`,
        updatedInquiry
      );
      setShowReplyModal(false);
      fetchData(); // Refresh data after update
      // Delay reload by 500 milliseconds (adjust as needed)
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
