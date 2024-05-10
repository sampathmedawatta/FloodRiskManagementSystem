import React, { useEffect, useState } from "react";
import NewsDisplayCard from "./NewsDisplayCard";
import NewsService from "../../services/news.service";
import { useLocation } from "../../contexts/LocationContext";
import { getUserSession } from "../Shared/SessionUtils";

const NewsFeedPage = () => {

  const userSession = getUserSession();

  const { location } = useLocation();
  const [newsList, setNewsList] = useState(null);
  const [lang, setlang] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsList = await NewsService.getAllNews();
        
        if (newsList && userSession.userType !== "UnRegistered") {
          // Filter news based on location
          const filteredNews = newsList.filter(
            (newsItem) => newsItem.location === location
          );

          setlang(userSession.user.lang);
          setNewsList(filteredNews);
        }
        if (userSession.userType === "UnRegistered") {
          setNewsList(newsList);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, [location]);

  return (
    <div className="section-box query-section-box mx-2">
      <div className="container">
        <div className="panel-white">
          <div className="panel-head">
            <div className="row align-items-center">
              <div className="col-md-8">
                <h6 className="text-left ">
                  <i className="bi bi-newspaper" />
                  &nbsp;&nbsp; News
                </h6>
              </div>
            </div>
          </div>
          <div className="panel-body d-flex flex-wrap gap-3 justify-content-evenly justify-content-lg-around justify-content-xl-start">
            {newsList?.length === 0 && <p>No News to display</p>}
            {newsList?.map((newsItem) => (
              <NewsDisplayCard
                key={newsItem.id}
                newsData={newsItem}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedPage;
