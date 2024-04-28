const crypto = require("crypto");

const inquiries = [
  {
    id: "9b9865f6-9c27-4e76-aa52-bc925cb6e6c5",
    messageTitle: "Inquiry 1",
    messageDescription: "This is the first inquiry message description.",
    messageDate: "2024-04-01T00:00:00.000Z",
    userid: "662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "7cf7a28c-f69f-4f7b-bab5-078f446e5f1a",
    messageTitle: "Inquiry 2",
    messageDescription: "This is the second inquiry message description.",
    messageDate: "2024-04-15T00:00:00.000Z",
    userid: "662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "3d3bf204-dcc5-43e7-b24e-7e1f10f64d42",
    messageTitle: "Inquiry 3",
    messageDescription: "This is the third inquiry message description.",
    messageDate: "2024-04-20T00:00:00.000Z",
    userid: "662c4e93312931e3091ce72f",
    inquiryStatus: "REPLY",
    replyTitle: "Reply to Inquiry 3",
    replyDescription: "This is the reply to the third inquiry.",
    replyDate: "2024-04-21T00:00:00.000Z",
  },
  {
    id: "5dc7d9f5-f433-4c46-b146-8d3b2ffbd760",
    messageTitle: "Inquiry 4",
    messageDescription: "This is the fourth inquiry message description.",
    messageDate: "2024-04-25T00:00:00.000Z",
    userid: "662b88f73d3f48e2ac19ec8a",
    inquiryStatus: "DISABLE",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "7b698f5f-b848-41df-a083-2e42d4f00c48",
    messageTitle: "Inquiry 5",
    messageDescription: "This is the fifth inquiry message description.",
    messageDate: "2024-05-01T00:00:00.000Z",
    userid: "662b8e69e452dd7cd0626de6",
    inquiryStatus: "REPLY",
    replyTitle: "Reply to Inquiry 5",
    replyDescription: "This is the reply to the fifth inquiry.",
    replyDate: "2024-05-02T00:00:00.000Z",
  },
  {
    id: "06fc9d3c-61b1-4969-b7ff-0309c4307c07",
    messageTitle: "Inquiry 6",
    messageDescription: "This is the sixth inquiry message description.",
    messageDate: "2024-05-10T00:00:00.000Z",
    userid: "662c4e93312931e3091ce72f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "32c8e416-7ad0-42c8-9206-df6b272f179a",
    messageTitle: "Inquiry 7",
    messageDescription: "This is the seventh inquiry message description.",
    messageDate: "2024-05-15T00:00:00.000Z",
    userid: "662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "498e29ec-d363-46d9-9b61-02a3c6db3b11",
    messageTitle: "Inquiry 8",
    messageDescription: "This is the eighth inquiry message description.",
    messageDate: "2024-05-20T00:00:00.000Z",
    userid: "662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "DISABLE",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "f8ad362a-42d9-4568-924e-5078b15c21f1",
    messageTitle: "Inquiry 9",
    messageDescription: "This is the ninth inquiry message description.",
    messageDate: "2024-05-25T00:00:00.000Z",
    userid: "662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "REPLY",
    replyTitle: "Reply to Inquiry 9",
    replyDescription: "This is the reply to the ninth inquiry.",
    replyDate: "2024-05-26T00:00:00.000Z",
  },
  {
    id: "8fbbce4e-836e-43b1-8dd7-3a64e302f8d1",
    messageTitle: "Inquiry 10",
    messageDescription: "This is the tenth inquiry message description.",
    messageDate: "2024-05-30T00:00:00.000Z",
    userid: "662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
];

exports.getAllInquiries = (request, response) => {
  response.status(200).json(inquiries);
};

exports.getInquiryById = (request, response) => {
  const inquiry = inquiries.find((inquiry) => inquiry.id == request.params.id);

  if (!inquiry) {
    return response.status(404).json({ message: "inquiry not found" });
  }

  response.status(200).json(inquiry);
};

exports.createInquiry = (request, response) => {
  const { messageTitle, messageDescription, messageDate, inquiryStatus } =
    request.body;

  // Validate messageTitle
  if (!messageTitle) {
    return response.status(422).json({ message: "Message Title is required" });
  }

  // Validate messageDescription
  if (!messageDescription) {
    return response
      .status(422)
      .json({ message: "Message Description is required" });
  }

  // Validate messageDate format
  let date;
  try {
    date = new Date(messageDate);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }
  } catch (error) {
    return response.status(422).json({ message: "Invalid date format" });
  }

  const replyTitle = "";
  const replyDescription = "";
  const replyDate = "";

  // Validate inquiryStatus
  const allowedStatus = ["PENDING", "REPLY", "DISABLE"];
  if (!inquiryStatus || !allowedStatus.includes(inquiryStatus)) {
    return response.status(422).json({ message: "Invalid inquiry status" });
  }

  const id = crypto.randomUUID();
  inquiries.push({
    id,
    messageTitle,
    messageDescription,
    messageDate: date.toISOString(),
    replyTitle,
    replyDescription,
    replyDate,
    inquiryStatus,
  });

  response.status(201).json({ message: "Inquiry created successfully", id });
};

exports.updateInquiry = (request, response) => {
  try {
    const inquiryId = request.params.id;
    const inquiry = inquiries.find((inquiry) => inquiry.id == inquiryId);

    if (!inquiry) {
      return response.status(404).json({ message: "Inquiry not found" });
    }

    const {
      messageTitle,
      messageDescription,
      messageDate,
      inquiryStatus,
      replyTitle,
      replyDescription,
      replyDate,
    } = request.body;

    if (!Object.keys(request.body).length) {
      return response
        .status(400)
        .json({ message: "Request body cannot be empty" });
    }
    if (messageTitle) {
      inquiry.messageTitle = messageTitle;
    }
    if (messageDescription) {
      inquiry.messageDescription = messageDescription;
    }
    if (messageDate) {
      inquiry.messageDate = messageDate;
    }
    if (inquiryStatus) {
      inquiry.inquiryStatus = inquiryStatus;
    }
    if (replyTitle) {
      inquiry.replyTitle = replyTitle;
    }
    if (replyDescription) {
      inquiry.replyDescription = replyDescription;
    }
    if (replyDate) {
      inquiry.replyDate = replyDate;
    }

    response.status(200).json({ message: "Inquiry updated successfully" });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteInquiry = (request, response) => {
  const inquiryIndex = inquiries.findIndex(
    (inquiry) => inquiry.id == request.params.id
  );

  if (inquiryIndex == -1) {
    return response.status(404).json({ message: "inquiry not found" });
  }

  inquiries.splice(inquiryIndex, 1);

  response.status(200).json({ message: "inquiry deleted successfully." });
};
