import React, { useState, useEffect } from "react";
import InquiriesService from "../../services/inquires.service";
import Pagination from "./Pagination";
import AdminInquireReplyTable from "./AdminInquireReplyTable";


function AdminInquireReply() {
const [replyInquiries, setReplyInquiries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await InquiriesService.getAllInquiries();
      if (response) {
        const filteredInquires = response.filter(
          (inquires) => inquires.inquiryStatus === "REPLY"
          
        );
        if (filteredInquires.length > 0) {
           setReplyInquiries(filteredInquires);
        } else {
          console.warn(
            "No REPLY inquires found in the response."
          );
        }
      }
    } catch (error) {
      console.error("Error fetching Users:", error);
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