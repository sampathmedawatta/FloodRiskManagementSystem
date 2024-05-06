import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service"; 

function AdminInquireReplyList({ replyInquiries, updateReplyInquiries }) {
  const [userNames, setUserNames] = useState({});
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userNamesMap = {};
        for (const inquiry of replyInquiries) {
          const user = await UserService.getUserById(inquiry.userId);
          userNamesMap[inquiry.userId] = `${user.fName} ${user.lName}`;
        }
        setUserNames(userNamesMap);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (replyInquiries && replyInquiries.length > 0) {
      fetchUserDetails();
    }
  }, [replyInquiries]);

  if (!replyInquiries || replyInquiries.length === 0) {
    return (
      <tbody>
        <tr>
          <td colSpan="5" className="text-center">
            No pending inquiries to display
          </td>
        </tr>
      </tbody>
    );
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
              {userNames[inquiry.userId] || "Name"}
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
