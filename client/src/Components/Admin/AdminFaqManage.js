import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import axios from "axios";

function AdminFaqManage() {
  const [faqs, setFaqs] = useState([]);

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
                            <span className="text-muted font-sm">
                              {faq.title}
                            </span>
                          </td>
                          <td className="text-left">
                            <p className="text-muted font-sm word-limit">
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
          <button type="button" className="btn btn-pops">
            <i className="bi bi-file-earmark-text-fill fs-6"></i>
          </button>
          <button type="button" className="btn btn-pops"
          onClick={() => unpublishFaq(faq.id)}>
            <i className="bi bi-trash fs-6"></i>
          </button>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-pops "
          onClick={() => publishFaq(faq.id, faq.active)}
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
                <div class="paginations text-center">
                  <ul class="pager">
                    <li>
                      <a class="pager-prev" href="#"></a>{" "}
                      <i class="bi bi-caret-left-fill"></i>
                    </li>
                    <li>
                      <a class="pager-number active" href="#">
                        1
                      </a>
                    </li>
                    <li>
                      <a class="pager-number" href="#">
                        2
                      </a>
                    </li>
                    <li>
                      <a class="pager-number" href="#">
                        3
                      </a>
                    </li>
                    <li>
                      <a class="pager-number" href="#">
                        4
                      </a>
                    </li>
                    <li>
                      <a class="pager-number" href="#">
                        5
                      </a>
                    </li>
                    <li>
                      <a class="pager-number " href="#">
                        6
                      </a>
                    </li>
                    <li>
                      <a class="pager-number" href="#">
                        7
                      </a>
                    </li>
                    <li>
                      <a class="pager-next" href="#"></a>
                      <i class="bi bi-caret-right-fill"></i>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminFaqManage;
