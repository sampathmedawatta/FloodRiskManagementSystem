import React, { useEffect, useState } from "react";
import QueryTable from "./QueryTable";
import InquiriesService from "../../services/inquires.service";

const AskQueryPage = () => {
  const [queries, setQueries] = useState(null);

  useEffect(() => {
    const fetchAllQueries = async () => {
      try {
        //TODO: should implement in a way that can filter in registered userId of query list
        const queryList = await InquiriesService.getAllInquiries();
        const activeQueries = queryList.filter((query) => query.inquiryStatus !== "DISABLE")
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
      <div className="row">
        <QueryTable queryData={queries}/>
      </div>
    </div>
  );
};

export default AskQueryPage;
