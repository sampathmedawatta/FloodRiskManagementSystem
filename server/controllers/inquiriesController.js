const crypto = require("crypto");

const inquiries = [
  {
    id: "1a2b3c4d-5e6f-7g8h-9i0j-1k2l3m4n5o6",
    messageTitle: "Inquiry 1",
    messageDescription: "This is the first inquiry message description.",
    messageDate: "2024-04-01T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p",
    messageTitle: "Inquiry 2",
    messageDescription: "This is the second inquiry message description.",
    messageDate: "2024-04-15T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "3c4d5e6f-7g8h-9i0j-1k2l-3m4n5o6p7q",
    messageTitle: "Inquiry 3",
    messageDescription: "This is the third inquiry message description.",
    messageDate: "2024-04-20T00:00:00.000Z",
    userid:"662c4e93312931e3091ce72f",
    inquiryStatus: "REPLY",
    replyTitle: "Reply to Inquiry 3",
    replyDescription: "This is the reply to the third inquiry.",
    replyDate: "2024-04-21T00:00:00.000Z",
  },
  {
    id: "4d5e6f7g-8h9i-0j1k-2l3m-4n5o6p7q8r",
    messageTitle: "Inquiry 4",
    messageDescription: "This is the fourth inquiry message description.",
    messageDate: "2024-04-25T00:00:00.000Z",
    userid:"662b88f73d3f48e2ac19ec8a",
    inquiryStatus: "DISABLE",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "5e6f7g8h-9i0j-1k2l-3m4n-5o6p7q8r9s",
    messageTitle: "Inquiry 5",
    messageDescription: "This is the fifth inquiry message description.",
    messageDate: "2024-05-01T00:00:00.000Z",
    userid:"662b8e69e452dd7cd0626de6",
    inquiryStatus: "REPLY",
    replyTitle: "Reply to Inquiry 5",
    replyDescription: "This is the reply to the fifth inquiry.",
    replyDate: "2024-05-02T00:00:00.000Z",
  },
  {
    id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t",
    messageTitle: "Inquiry 6",
    messageDescription: "This is the sixth inquiry message description.",
    messageDate: "2024-05-10T00:00:00.000Z",
    userid:"662c4e93312931e3091ce72f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "6f7g8h9i-0j1k-2l3m-4n5o-6p7q8r9s0t",
    messageTitle: "Inquiry 13",
    messageDescription: "This is the sixth inquiry message description.",
    messageDate: "2024-05-12T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p",
    messageTitle: "Inquiry 7",
    messageDescription: "This is the seventh inquiry message description.",
    messageDate: "2024-05-15T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "PENDING",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "2b3c4d5e-6f7g-8h9i-0j1k-2l3m4n5o6p",
    messageTitle: "Inquiry 8",
    messageDescription: "This is the eighth inquiry message description.",
    messageDate: "2024-05-20T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "DISABLE",
    replyTitle: "",
    replyDescription: "",
    replyDate: "",
  },
  {
    id: "9i0j1k2l-3m4n-5o6p-7q8r-9s0t1u2v3w",
    messageTitle: "Inquiry 9",
    messageDescription: "This is the ninth inquiry message description.",
    messageDate: "2024-05-25T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
    inquiryStatus: "REPLY",
    replyTitle: "Reply to Inquiry 9",
    replyDescription: "This is the reply to the ninth inquiry.",
    replyDate: "2024-05-26T00:00:00.000Z",
  },
  {
    id: "0j1k2l3m-4n5o-6p7q-8r9s-0t1u2v3w4x",
    messageTitle: "Inquiry 10",
    messageDescription: "This is the tenth inquiry message description.",
    messageDate: "2024-05-30T00:00:00.000Z",
    userid:"662b8de4a5f8ca34ba28b58f",
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

  if (!messageTitle) {
    return response.status(422).json({ message: "Message Title is required" });
  }

  const id = crypto.randomUUID();
  const date = new Date();
  // messageDate= date.toISOString();
  // replyDate= date.toISOString();

  inquiries.push({
    id,
    messageTitle,
    messageDescription,
    messageDate,
    replyTitle,
    replyDescription,
    replyDate,
    inquiryStatus, //PENDING,REPLY,DISABLE
  });

  response.status(201).json({ message: "inquiry created successfully", id });
};

exports.updateInquiry = (request, response) => {
  const inquiry = inquiries.find((inquiry) => inquiry.id == request.params.id);

  if (!inquiry) {
    return response.status(404).json({ message: "Inquiry not found" });
  }

  const { messageTitle, messageDescription, messageDate, inquiryStatus } = request.body;

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
  response.status(200).json({ message: "inquiry updated successfully" });
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
