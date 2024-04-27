import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import axios from "axios";

import Pagination from "./Pagination";
import AdminInquirePendingTable from "./AdminInquirePendingTable";

function AdminInquireManage() {
const [pendingInquiries, setPendingInquiries] = useState([]);

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

  /*  const handleFAQAction = async (id, action, updatedData) => {
    try {
      if (action === "edit") {
        await axios.put(`${API_BASE_URL}/inquiries/${id}`, updatedData);
      } else if (action === "publish") {
        await axios.put(`${API_BASE_URL}/inquiries/${id}`, { active: true });
      } else if (action === "unpublish") {
        await axios.put(`${API_BASE_URL}/inquiries/${id}`, { active: false });
      }
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const createFAQ = async (title, description) => {
    try {
      await axios.post(`${API_BASE_URL}/inquiries`, {
        title,
        description,
        active: true,
      });
      fetchData();
      setShowCreateModal(false);
    } catch (error) {
      console.error("Error creating FAQ:", error);
    }
  };

  const toggleCreateModal = () => {
    setShowCreateModal(!showCreateModal);
  };

  const toggleEditModal = (faq) => {
    setShowEditModal(!showEditModal);
    setFaqToEdit(faq);
  };
*/
  return (
    <div className="col-md-12">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-envelope fs-5 " />
                    &nbsp;&nbsp;Manage Customer Inquires
                  </h6>
                </div>
                <div className="col-md-5">
                  <p className="text-end font-xs color-text-paragraph-2"></p>
                </div>
              </div>
            </div>
            <div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-md-10 color-text-paragraph-2">
                    Pending Inquires
                  </div>
                  <div className="col-md-2"></div>
                </div>
                <br></br>
                <AdminInquirePendingTable pendingInquiries={pendingInquiries} />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminInquireManage;
