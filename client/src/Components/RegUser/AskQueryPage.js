import React, { useEffect, useState } from "react";
import { getUserSession } from "../Shared/SessionUtils";
import QueryTable from "./QueryTable";
import InquiriesService from "../../services/inquires.service";

const AskQueryPage = () => {
  const [queries, setQueries] = useState(null);
  const userSession = getUserSession();
  const userId = userSession.loggedUser


  useEffect(() => {
    const fetchAllQueries = async () => {

      try {
        //TODO: should implement in a way that can filter in registered userId of query list
        const queryList = await InquiriesService.getAllInquiries();
        const activeQueries = queryList.filter((query) => query.inquiryStatus !== "DISABLE" && query.userId === userId )
        if (activeQueries) {
          setQueries(activeQueries);
        }
      } catch (error) {
        console.error("Error while fetching query data", error);
      }
    };
    fetchAllQueries();
  },[]);

  return (
    <div className="box-content">

        <QueryTable queryData={queries}/>
   
    </div>
  );
};

export default AskQueryPage;
