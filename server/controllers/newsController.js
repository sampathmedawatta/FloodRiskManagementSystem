const News = require("../modules/newsModel");
const User = require("../modules/userModel");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

//Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (request, file, cb) => {
    cb(null, path.join(__dirname, "/Users/chankx/Desktop/Uni/TInnovationP/git-flood/FloodRiskManagementSystem/server/news-images")); // Change the destination path as per your requirement
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}_${file.originalname}`);
  },
});

const upload = multer({ storage });

exports.getAllNews = async (request, response) => {
  const news = await News.find();
  response.status(200).json(news);
};

exports.getNewsById = async (request, response) => {
  const news = await News.findOne({ _id: request.params.id });

  if (!news) {
    return response.status(404).json({ message: "news item not found" });
  }

  response.status(200).json(news);
};

exports.createNews = async (request, response) => {
  //console.log("Received file:", request.file);
  try {
    const {
      location,
      title,
      description,
      title_zh,
      imageURL,
      description_zh,
      createdBy,
    } = request.body;

    // Check if file was uploaded
    /* if (!request.file) {
      return response.status(400).json({ success: false, error: "No file uploaded" });
    }*/

    // Check if the user exists
    const user = await User.findById(createdBy);
    if (!user) {
      return response
        .status(400)
        .json({ success: false, error: "Invalid user ID" });
    }

    const publishedDate = new Date();

    // Create a new news item
    const newsItem = await News.create({
      title,
      location,
      publishedDate,
      title_zh,
      description_zh,
      description,
      createdBy,
      imageURL,
      active: true,
    });

    response.status(201).json({ success: true, news: newsItem });
  } catch (error) {
    response.status(500).json({ success: false, error: error.message });
  }
};
exports.deleteNewsById = async (request, response) => {
  try {
    const deleteResponse = await News.findOneAndDelete({
      _id: request.params.id,
    });

    if (deleteResponse) {
      return response
        .status(200)
        .json({ message: "News Item deleted successfully" });
    }
  } catch (error) {
    response.status(500).send({ message: "Something went wrong!" });
  }
};
exports.updateNewsById = async (request, response) => {
  try {
    const { id } = request.params;
    const { active } = request.body;

    // Check if the news item exists
    const news = await News.findById(id);
    if (!news) {
      return response.status(404).json({ message: "News item not found" });
    }

    // Update the active status
    news.active = active;
    await news.save();

    return response
      .status(200)
      .json({ message: "News item updated successfully" });
  } catch (error) {
    return response.status(500).json({ message: "Something went wrong!" });
  }
};
