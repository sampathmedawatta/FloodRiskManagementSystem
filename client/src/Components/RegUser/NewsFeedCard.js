import React, { useEffect, useState } from "react";
import NewsItemSmallCard from "./NewsItemSmallCard";
import NewsService from "../../services/news.service";
import { Link } from "react-router-dom";
import { useLocation } from "../../contexts/LocationContext";
import { getUserSession } from "../Shared/SessionUtils";

const NewsFeedCard = () => {
  const { location } = useLocation();
  const [news, setNews] = useState([]);

   const userSession = getUserSession();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsList = await NewsService.getAllNews();
       
        if (newsList) {
          // Filter news based on location
          const filteredNews = newsList.filter(
            (newsItem) => newsItem.location === location
          );
          //setting latest three news items into news state
          setNews(filteredNews.slice(0, 3));
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, [location]);

  return (
    <div className="row gx-2 justify-content-between mt-2">
    <div className="col-12">
      <div className="section-box">
        <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row">
              <div className="col-md-10">
                <h6 className="text-start">
                  <i className="bi bi-newspaper fs-5" />
                  &nbsp;&nbsp;News
                </h6>
              </div>
              <div className="col-md-2">
                <Link to="/news-feed">
                <p className="text-end font-xs color-text-paragraph-2">
                  See more
                </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="panel-body">
            <div className="container">
              <div className="row gx-2 justify-content-between">
                {news?.map((newsItem) => (
                  <NewsItemSmallCard newsData={newsItem} lang={userSession.user.lang}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div></div>
  );
};

export default NewsFeedCard;
