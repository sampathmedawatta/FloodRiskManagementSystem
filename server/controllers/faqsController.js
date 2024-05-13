const Faq = require("../modules/faqModel");

exports.getAllFAQs = async (request, response) => {
  try {
  const faqs = await Faq.find();
  response.status(200).json(faqs);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

exports.getFAQById = async (request, response) => {
  const faqId = request.params.id;

  try {
    // Find the FAQ by ID in the database
    const faq = await Faq.findById(faqId);

    // If FAQ is not found, return 404
    if (!faq) {
      return response.status(404).json({ message: "FAQ not found" });
    }

    // Respond with the found FAQ
    response.status(200).json(faq);
  } catch (error) {
    // If an error occurs, respond with an error message
    response.status(500).json({ message: error.message });
  }
};


exports.createFAQ = async (request, response) => {
  const { title, description, active } = request.body;

  try {
    // Create FAQ in the database
    const faq = await Faq.create({ title, description, active });

    // Respond with success message and created FAQ's ID
    response.status(201).json({ message: "FAQ created successfully", id: faq._id });
  } catch (error) {
    // If an error occurs, respond with an error message
    response.status(500).json({ message: error.message });
  }
};


exports.updateFAQ = async (request, response) => {
  const { title, description, active } = request.body;
  const faqId = request.params.id;

  try {
    // Update the FAQ in the database
    const updatedFAQ = await Faq.findByIdAndUpdate(faqId, { title, description, active }, { new: true });

    // If FAQ is not found, return 404
    if (!updatedFAQ) {
      return response.status(404).json({ message: "FAQ not found" });
    }

    // Respond with success message and updated FAQ
    response.status(200).json({ message: "FAQ updated successfully", updatedFAQ });
  } catch (error) {
    // If an error occurs, respond with an error message
    response.status(500).json({ message: error.message });
  }
};


exports.deleteFAQ = async (request, response) => {
  const faqId = request.params.id;

  try {
    // Attempt to delete the FAQ from the database
    const deletedFAQ = await Faq.findByIdAndDelete(faqId);

    // If FAQ is not found, return 404
    if (!deletedFAQ) {
      return response.status(404).json({ message: "FAQ not found" });
    }

    // Respond with success message
    response.status(200).json({ message: "FAQ deleted successfully" });
  } catch (error) {
    // If an error occurs, respond with an error message
    response.status(500).json({ message: error.message });
  }
};

