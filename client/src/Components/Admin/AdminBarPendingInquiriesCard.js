import React, { useState, useEffect } from "react";

import InquiriesService from "../../services/inquires.service";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminBarPendingInquiriesCard() {
  const [filteredInquires, setPendingInquiries] = useState([]);
  const { weekAgo } = getCurrentDateInfo();

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

  const newPendingInc = filteredInquires.filter((inquiry) => {
    const messageDate = new Date(inquiry.messageDate);
    return messageDate > weekAgo;
  });

  return (
    <div className="col-2">
      <a href="manage-inquires">
        <div className="card-style-1 hover-up hover-color">
          <div className="card-info">
            <div className="card-title row">
              <div className="col">
                <h6 className="text-start">Pending Inquiries</h6>
              </div>
              <div className="col-auto">
                <i className="bi bi-envelope fs-3 color-brand-1" />
              </div>
            </div>
            <div className="ptb-10">
              <p className="font-box-flood text-center color-brand-1">
                {filteredInquires.length}
              </p>
            </div>
            <br></br>
            <p className="text-10 text-center strong color-brand-1">
              <strong>{newPendingInc.length} </strong> pending inquiries
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default AdminBarPendingInquiriesCard;
