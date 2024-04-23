const crypto = require("crypto");

const faqs = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "FAQ1",
    description: "FAQ description",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "FAQ1",
    description: "FAQ description",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "FAQ1",
    description: "FAQ description",
    active: true,
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
  const { name, title, description, active } = request.body;

  if (!name) {
    return response.status(422).json({ message: "Name is required" });
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
  const faq = faqs.find((faq) => faq.id == request.params.id);

  if (!faq) {
    return response.status(404).json({ message: "faq not found" });
  }

  const { title, description, active } = request.body;

  if (title) {
    faq.title = title;
  }

  if (description) {
    faq.description = description;
  }

  if ("active" in request.body) {
    faq.active = active;
  }

  response.status(200).json({ message: "faq updated successfully" });
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
