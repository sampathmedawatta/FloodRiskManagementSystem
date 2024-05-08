import React, { useState, useEffect } from "react";

import NewsService from "../../services/news.service";
import { getCurrentDateInfo } from "../Shared/Utils";

function AdminBarNewsArticlesCard() {
  const [news, setNews] = useState([]);
  const { weekAgo } = getCurrentDateInfo();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const news = await NewsService.getAllNews();
      if (news.length > 0) {
        setNews(news);
      } else {
        console.warn("No News found in the response.");
      }
    } catch (error) {
      console.error("Error fetching News:", error);
    }
  };
  const activeNews = news.filter((news) => news.active);
  const newNews = activeNews.filter((news) => {
    const publishDate = new Date(news.publishedDate);
    return publishDate > weekAgo;
  });

  return (
    <div className="col-2">
      <a href="manage-news">
        <div className="card-style-1 hover-up hover-color ">
          <div className="card-info">
            <div className="card-title row">
              <div className="col">
                <h6 className="text-start">News Articles</h6>
              </div>
              <div className="col-auto">
                <i className="bi bi-newspaper fs-3 color-brand-1" />
              </div>
            </div>
            <div className="ptb-10">
              <p className="font-box-flood text-center color-brand-1">
                {activeNews.length}
              </p>
            </div>
            <br></br>
            <p className="text-10 text-center strong color-brand-1">
              <strong>{newNews.length} </strong> news articles this week.
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
export default AdminBarNewsArticlesCard;
