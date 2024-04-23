const crypto = require("crypto");

const inquiries = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "inquiry1",
    description: "inquiry description",
    publishDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "inquiry1",
    description: "inquiry description",
    publishDate: "01/05/2024",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "inquiry1",
    description: "inquiry description",
    publishDate: "01/05/2024",
    active: true,
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
  const { title, description, publishDate, active } = request.body;

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  const id = crypto.randomUUID();

  inquiries.push({
    id,
    title,
    description,
    publishDate,
    active,
  });

  response.status(201).json({ message: "inquiry created successfully", id });
};

exports.updateInquiry = (request, response) => {
  const inquiry = inquiries.find((inquiry) => inquiry.id == request.params.id);

  if (!inquiry) {
    return response.status(404).json({ message: "inquiry not found" });
  }

  const { title, description, publishDate, active } = request.body;

  if (title) {
    inquiry.title = title;
  }

  if (description) {
    inquiry.description = description;
  }

  if (publishDate) {
    inquiry.publishDate = publishDate;
  }

  if ("active" in request.body) {
    inquiry.active = active;
  }

  response.status(200).json({ message: "inquiry updated successfully" });
};

exports.deleteInquiry = (request, response) => {
  const inquiryIndex = inquiries.findIndex((inquiry) => inquiry.id == request.params.id);

  if (inquiryIndex == -1) {
    return response.status(404).json({ message: "inquiry not found" });
  }

  inquiries.splice(inquiryIndex, 1);

  response.status(200).json({ message: "inquiry deleted successfully." });
};
