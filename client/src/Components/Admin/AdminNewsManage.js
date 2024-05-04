import React, { useState, useEffect } from "react";
import NewsService from "../../services/news.service";
import AdminNewsTable from "./AdminNewsTable";
import AdminCreateNews from "./AdminNewsCreate";
import AdminNewsView from "./AdminNewsView";

import Pagination from "./Pagination";

function AdminNewsManage() {
  const [news, setNews] = useState([]);
  const [showNewsCreateModal, setShowCreateModal] = useState(false);
  const [showNewsViewModal, setShowViewModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await NewsService.getAllNews();
      if (response.length > 0) {
        setNews(response);
      } else {
        console.warn("No News found in the response.");
      }
    } catch (error) {
      console.error("Error fetching News:", error);
    }
  };

  const handleNewsAction = async (id, action) => {
    try {
      if (action === "publish") {
        await NewsService.updateNewsById(id, { active: true });
      } else if (action === "unpublish") {
        await NewsService.updateNewsById(id, { active: false });
      }
      fetchData(); // Refresh data after update
    } catch (error) {
      console.error("Error updating News:", error);
    }
  };

  const toggleNewsCreateModal = () => {
    setShowCreateModal(!showNewsCreateModal);
  };

  const toggleNewsViewModal = () => {
    setShowViewModal(!showNewsViewModal);
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
                    <i className="bi bi-newspaper fs-5 " />
                    &nbsp;&nbsp;Manage News
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
                      onClick={toggleNewsCreateModal}
                    >
                      <i className="bi bi-newspaper" /> &nbsp; Add News
                    </button>
                  </div>
                </div>
                <br></br>
                <AdminNewsTable
                  news={news}
                  handleNewsAction={handleNewsAction}
                />
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AdminCreateNews
        showModal={showNewsCreateModal}
        toggleModal={toggleNewsCreateModal}
      />
    </div>
  );
}

export default AdminNewsManage;
