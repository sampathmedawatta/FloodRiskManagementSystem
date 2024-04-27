import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import axios from "axios";
import AdminCreateFAQ from "./AdminFaqCreate";
import AdminFaqEdit from "./AdminFaqEdit";
import Pagination from "./Pagination";

function AdminFaqManage() {
  const [faqs, setFaqs] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [faqToEdit, setFaqToEdit] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/faqs/`);
      const sortedFaqs = response.data.sort((a, b) => {
        return new Date(b.createdTime) - new Date(a.createdTime);
      });
      setFaqs(sortedFaqs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFAQAction = async (id, action, updatedData) => {
    try {
      if (action === "edit") {
        await axios.put(`${API_BASE_URL}/faqs/${id}`, updatedData);
      } else if (action === "publish") {
        await axios.put(`${API_BASE_URL}/faqs/${id}`, { active: true });
      } else if (action === "unpublish") {
        await axios.put(`${API_BASE_URL}/faqs/${id}`, { active: false });
      }
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating FAQ:", error);
    }
  };

  const createFAQ = async (title, description) => {
    try {
      await axios.post(`${API_BASE_URL}/faqs`, {
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
                <div className="row">
                  <div className="col-md-10"></div>

                  <div className="col-md-2">
                    <button
                      type="button"
                      className="btn btn-login hover-up text-12 w-100"
                      onClick={toggleCreateModal}
                    >
                      <i className="bi bi-question-circle-fill" /> &nbsp;
                      Create New FAQ
                    </button>
                  </div>
                </div>
                <br></br>
                <div className="table-responsive">
                  <table className="table no-wrap user-table mb-0">
                    <thead className="border-bottom thead-header">
                      <tr>
                        <th
                          scope="col"
                          className="pl-4"
                          style={{ width: "30%", textAlign: "left" }}
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          style={{ width: "50%", textAlign: "left" }}
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          style={{ width: "10%", textAlign: "left" }}
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          style={{ width: "10%", textAlign: "left" }}
                        >
                          Manage
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {faqs.map((faq, index) => (
                        <tr key={index}>
                          <td className="text-left pl-4">
                            <span className="text-muted  text-justify font-sm">
                              {faq.title}
                            </span>
                          </td>
                          <td className="text-left">
                            <p className="text-muted text-justify font-sm word-limit">
                              {faq.description}
                            </p>
                          </td>

                          <td className="text-left">
                            <span
                              className={`label-status ${
                                faq.active ? "label-active" : "label-inactive"
                              }`}
                            >
                              {faq.active ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="text-left">
                            {faq.active ? (
                              <>
                                <button
                                  type="button"
                                  className="btn btn-pops"
                                  onClick={() =>
                                    toggleEditModal(faq)
                                  }
                                >
                                  <i className="bi bi-pencil-square fs-6"></i>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-pops"
                                  onClick={() =>
                                    handleFAQAction(faq.id, "unpublish")
                                  }
                                >
                                  <i className="bi bi-trash fs-6"></i>
                                </button>
                              </>
                            ) : (
                              <button
                                type="button"
                                className="btn btn-pops "
                                onClick={() =>
                                  handleFAQAction(faq.id, "publish")
                                }
                              >
                                <i className="bi bi-check-circle-fill fs-6"></i>
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AdminCreateFAQ
        showModal={showCreateModal}
        toggleModal={toggleCreateModal}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        createFAQ={createFAQ}
      />
      <AdminFaqEdit
        showModal={showEditModal}
        toggleModal={toggleEditModal}
        faq={faqToEdit}
        editFAQ={handleFAQAction}
      />
    </div>
  );
}
export default AdminFaqManage;
