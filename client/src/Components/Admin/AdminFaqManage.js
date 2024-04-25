
import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import axios from "axios";
import AdminCreateFAQ from "./AdminCreateFAQ";

function AdminFaqManage() {
  const [faqs, setFaqs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/faqs/`);
      const sortedFaqs = response.data.sort((a, b) => {
        return new Date(a.createdTime) - new Date(b.createdTime);
      });
      setFaqs(sortedFaqs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const publishFaq = async (id, active) => {
    try {
      await axios.put(`${API_BASE_URL}/faqs/${id}`, { active: !active });
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const unpublishFaq = async (id) => {
    try {
      await axios.put(`${API_BASE_URL}/faqs/${id}`, { active: false });
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const createFAQ = async (title, description) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/faqs/create`, {
        title,
        description,
        active: true,
      });
      fetchData();
      setShowModal(false);
    } catch (error) {
      console.error("Error creating FAQ:", error);
    }
  };

  const toggleModal = () => {
    console.log("Toggling modal");
    setShowModal(!showModal);
  };

  console.log("showModal:", showModal);

  return (
    <div className="col-md-12">
      <div className="box-content">
        <div className="container">
          <div className="panel-white">
            <div className="panel-head">
              <div className="row">
                <div className="col-md-7">
                  <h6 className="text-start">
                    <i className="bi bi-question-circle-fill fs-5 " />
                    &nbsp;&nbsp;Frequently Asked Questions (FAQ)
                  </h6>
                </div>
                <div className="col-md-5">
                  <p className="text-end font-xs color-text-paragraph-2"></p>
                </div>
              </div>
            </div>
            <div>
              <div className="panel-body">
                <div class="row">
                  <div class="col-md-10"></div>

                  <div class="col-md-2">
                  <button
  className="btn btn-login hover-up text-12 w-100"
  onClick={() => toggleModal()}
>
  <i className="bi bi-info-square-fill" /> &nbsp; Create New FAQ
</button>
                  </div>
                </div>
                <br />
                <div className="table-responsive">
                  {/* Table content */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal && <AdminCreateFAQ AdminCreateFAQ={createFAQ} />}
      </div>

    </div>
  );
}

export default AdminFaqManage;
