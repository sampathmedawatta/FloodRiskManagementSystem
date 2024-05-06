const crypto = require("crypto");
const Inquiries = require("../modules/inquiriesModel");
const User = require("../modules/userModel");

exports.getAllInquiries = async (request, response) => {
  const inquiries = await Inquiries.find();
  response.status(200).json(inquiries);
};

exports.getInquiryById = async (request, response) => {
  const inquiry = inquiries.findOne({ _id: request.params.id });
  if (!inquiry) {
    return response.status(404).json({ message: "inquiry not found" });
  }
  response.status(200).json(inquiry);
};

exports.createInquiry = async (request, response) => {
  const {
    messageTitle,
    messageDescription,
    messageDate,
    inquiryStatus,
    userId,
  } = request.body;

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

  // Validate inquiryStatus
  const allowedStatus = ["PENDING", "REPLY", "DISABLE"];
  if (!inquiryStatus || !allowedStatus.includes(inquiryStatus)) {
    return response.status(422).json({ message: "Invalid inquiry status" });
  }
  const user = await User.findById(userId);

  if (!user) {
    return response
      .status(400)
      .json({ success: false, error: "Invalid user ID" });
  }
  try {
    const inquiry = await Inquiries.create({
      messageTitle,
      messageDescription,
      messageDate: date.toISOString(),
      inquiryStatus,
      userId,
    });
    response.status(201).json({ success: true, inquiry });
  } catch (error) {
    response.status(500).json({ success: false, error: error.message });
  }
};

exports.updateInquiry = async (request, response) => {
  try {
    const inquiryId = request.params.id;
    const { inquiryStatus, replyTitle, replyDescription, replyDate } =
      request.body;

    if (!Object.keys(request.body).length) {
      return response
        .status(400)
        .json({ message: "Request body cannot be empty" });
    }

    const updateFields = {};
    if (inquiryStatus) {
      updateFields.inquiryStatus = inquiryStatus;
    }
    if (replyTitle) {
      updateFields.replyTitle = replyTitle;
    }
    if (replyDescription) {
      updateFields.replyDescription = replyDescription;
    }
    if (replyDate) {
      updateFields.replyDate = replyDate;
    }

    const updateResponse = await Inquiries.findByIdAndUpdate(
      inquiryId,
      updateFields,
      { new: true }
    );

    if (!updateResponse) {
      return response.status(404).json({ message: "Inquiry not found" });
    }

    response
      .status(200)
      .json({
        message: "Inquiry updated successfully",
        inquiry: updateResponse,
      });
  } catch (error) {
    console.error("Error:", error);
    response.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteInquiry = async (request, response) => {
  try {
    const deleteResponse = await Inquiries.findOneAndDelete({
      _id: request.params.id,
    });

    if (deleteResponse) {
      return response
        .status(200)
        .json({ message: "inquiry deleted successfully" });
    }
  } catch (error) {
    response.status(500).send({ message: "Something went wrong in inquiry !" });
  }
};
