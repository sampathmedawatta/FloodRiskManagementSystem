import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import axios from "axios";

import Pagination from "./Pagination";
import AdminInquireReplyTable from "./AdminInquireReplyTable";

function AdminInquireReply() {
const [replyInquiries, setReplyInquiries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/inquiries/`);
      const sortedInquiries = response.data.sort((a, b) => {
        return new Date(b.messageDate) - new Date(a.messageDate);
      });

      // Filter inquiries "REPLY"
      const replyInquiries = sortedInquiries.filter(
        (inquiry) => inquiry.inquiryStatus === "REPLY"
      );
      setReplyInquiries(replyInquiries);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="col-md-12">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-10 color-text-paragraph-2">
                  Previous Inquires
                  </div>
                  <div className="col-md-2"></div>
                </div>
                <br></br>
                <AdminInquireReplyTable replyInquiries={replyInquiries} />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInquireReply;