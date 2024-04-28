import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../Shared/apiConfig";
import axios from "axios";

function AdminInquireReplyList({ replyInquiries }) {
  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    // Fetch user details for each pending inquiry
    const fetchUserDetails = async () => {
      const userDetailsPromises = replyInquiries.map((inquiry) =>
      axios.get(`http://localhost:3001/user/${inquiry.userid}`)
      );

      try {
        const userDetailsResponses = await Promise.all(userDetailsPromises);
        const userNamesMap = userDetailsResponses.reduce((acc, response) => {
          acc[response.data._id] = `${response.data.fName} ${response.data.lName}`;
          return acc;
        }, {});
        setUserNames(userNamesMap);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [replyInquiries]);

  if (!replyInquiries || replyInquiries.length === 0) {
    return <tbody>No pending inquiries to display</tbody>;
  }

  return (
    <tbody>
      {replyInquiries.map((inquiry, index) => (
        
        <tr key={index} className="tr-border">
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
            {index + 1}
            </p>
          </td>
                    <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {userNames[inquiry.userid] || "Name"}
            </p>
          </td>
          <td className="text-left pl-4">
            <span className="text-muted text-justify font-sm">
              {inquiry.messageTitle}
            </span>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
              {inquiry.messageDescription}
            </p>
          </td>
          <td className="text-left">
            <p className="text-muted text-justify font-sm word-limit">
            {inquiry.replyTitle}
            </p>
          </td>
          <td className="text-left">
          <p className="text-muted text-justify font-sm word-limit">
            {inquiry.replyDescription}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AdminInquireReplyList;