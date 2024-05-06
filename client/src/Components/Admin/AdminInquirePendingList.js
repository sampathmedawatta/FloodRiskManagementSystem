import React, { useState, useEffect } from "react";
import axios from "axios";
import UserService from "../../services/user.service";

function AdminInquirePendingList({ pendingInquiries, toggleSendMsg }) {
  const [userNames, setUserNames] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userNamesMap = {};
        for (const inquiry of pendingInquiries) {
          const user = await UserService.getUserById(inquiry.userId);
          userNamesMap[inquiry.userId] = `${user.fName} ${user.lName}`;
        }
        setUserNames(userNamesMap);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (pendingInquiries && pendingInquiries.length > 0) {
      fetchUserDetails();
    }
  }, [pendingInquiries]);

  if (!pendingInquiries || pendingInquiries.length === 0) {
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
      {pendingInquiries.map((inquiry, index) => (
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
            <button
              type="button"
              className="btn btn-pops"
              onClick={() => toggleSendMsg(inquiry)}
            >
              <i className="bi bi-reply-all-fill fs-6"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}

export default AdminInquirePendingList;
