const crypto = require("crypto");

const faqs = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "FAQ1",
    description: "FAQ description 2024-04-25",
    active: true,
    createdTime: "2024-04-25T12:30:45.678Z"
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "FAQ1",
    description: "FAQ description 2024-04-23",
    active: false,
    createdTime: "202-04-23T12:30:45.678Z"
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "FAQ1",
    description: "FAQ description 2024-04-22",
    active: false,
    createdTime: "2024-04-22T12:30:45.678Z"
  },
];

exports.getAllFAQs = (request, response) => {
  response.status(200).json(faqs);
};

exports.getFAQById = (request, response) => {
  const faq = faqs.find((faq) => faq.id == request.params.id);

  if (!faq) {
    return response.status(404).json({ message: "faq not found" });
  }

  response.status(200).json(faq);
};

exports.createFAQ = (request, response) => {
  const { title, description, active } = request.body;

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  const id = crypto.randomUUID();

  faqs.push({
    id,
    title,
    description,
    active,
  });

  response.status(201).json({ message: "faq created successfully", id });
};

exports.updateFAQ = (request, response) => {
  const faq = faqs.find((faq) => faq.id === request.params.id);

  if (!faq) {
    return response.status(404).json({ message: "FAQ not found" });
  }

  const { title, description, active } = request.body;

  if (title !== undefined) {
    faq.title = title;
  }

  if (description !== undefined) {
    faq.description = description;
  }

  if (active !== undefined) {
    faq.active = active;
  }

  response.status(200).json({ message: "FAQ updated successfully" });
};

exports.deleteFAQ = (request, response) => {
  const faqIndex = faqs.findIndex(
    (faq) => faq.id == request.params.id
  );

  if (faqIndex == -1) {
    return response.status(404).json({ message: "faq not found" });
  }

  faqs.splice(faqIndex, 1);

  response.status(200).json({ message: "faq deleted successfully." });
};
