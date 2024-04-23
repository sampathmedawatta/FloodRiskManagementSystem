const crypto = require("crypto");

const news = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "News1",
    location: "Location1",
    publishedDate: "22/05/2024",
    description: "News description",
    imageURL: "image URL",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "News1",
    location: "Location1",
    publishedDate: "22/05/2024",
    description: "News description",
    imageURL: "image URL",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "News1",
    location: "Location1",
    publishedDate: "22/05/2024",
    description: "News description",
    imageURL: "image URL",
    active: true,
  },
];

exports.getAllNews = (request, response) => {
  response.status(200).json(news);
};

exports.getNewsById = (request, response) => {
  const news = news.find((news) => news.id == request.params.id);

  if (!news) {
    return response.status(404).json({ message: "news not found" });
  }

  response.status(200).json(news);
};

exports.createNews = (request, response) => {
  const { title, location, description, imageURL, active } = request.body;

  if (!name) {
    return response.status(422).json({ message: "Name is required" });
  }

  const id = crypto.randomUUID();

  news.push({
    id,
    title,
    location,
    description,
    imageURL,
    active,
  });

  response.status(201).json({ message: "news created successfully", id });
};

exports.updateNews = (request, response) => {
  const news = news.find((news) => news.id == request.params.id);

  if (!news) {
    return response.status(404).json({ message: "news not found" });
  }

  const { name, title, location, description, imageURL, active } = request.body;

  if (title) {
    news.title = title;
  }

  if (location) {
    news.location = location;
  }

  if (description) {
    news.description = description;
  }

  if (imageURL) {
    news.imageURL = imageURL;
  }

  if ("active" in request.body) {
    news.active = active;
  }

  response.status(200).json({ message: "news updated successfully" });
};

exports.deleteNews = (request, response) => {
  const newsIndex = news.findIndex(
    (news) => news.id == request.params.id
  );

  if (newsIndex == -1) {
    return response.status(404).json({ message: "news not found" });
  }

  news.splice(newsIndex, 1);

  response.status(200).json({ message: "news deleted successfully." });
};
