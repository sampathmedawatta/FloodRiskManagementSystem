const crypto = require("crypto");

const news = [
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e3",
    title: "Devastating Deluge Strikes Coastal Town: Residents Brace for Worst",
    location: "Location1",
    title_zh: "悲慘暴雨襲擊沿海小鎮：居民準備應對最壞情況", 
    description_zh:"特出題有臭退米街分縮司打定詳井大色。込例燃各売書文張進原間流記対怖権転億写食。指井写江問知業朝建話空見朝。遊鮮消島成禁融花塩呼修置校人掲官久理治束。戒生矢人保日提九流沢億警料中界。場帯顧統重良例工掲力報鄒授突表意休存。窓新面当目員数終光洋岸営夢学設穿京。能報暮待初土関済動性務地部作。世異婚多法率補福生考済転。",
    publishedDate: "22/05/2024",
    description: "News description",
    imageURL: "image URL",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e4",
    title: "Rivers Overflow: Communities Grapple with Historic Floodwaters",
    location: "Location1",
    publishedDate: "22/05/2024",
    title_zh: "悲慘暴雨襲擊沿海小鎮：居民準備應對最壞情況", 
    description_zh:"特出題有臭退米街分縮司打定詳井大色。込例燃各売書文張進原間流記対怖権転億写食。指井写江問知業朝建話空見朝。遊鮮消島成禁融花塩呼修置校人掲官久理治束。戒生矢人保日提九流沢億警料中界。場帯顧統重良例工掲力報鄒授突表意休存。窓新面当目員数終光洋岸営夢学設穿京。能報暮待初土関済動性務地部作。世異婚多法率補福生考済転。",
    description: "erter yreyeryeyey",
    imageURL: "image URL",
    active: true,
  },
  {
    id: "0dfe3b7e-df47-4e3b-aa31-1017eb2a68e5",
    title: "Torrential Rain Triggers Massive Flooding, Infrastructure Damage Mounts",
    location: "Location1",
    publishedDate: "22/05/2024",
    title_zh: "暴雨肆虐：大規模洪水引發基礎設施損壞", 
    description_zh:"特出題有臭退米街分縮司打定詳井大色。込例燃各売書文張進原間流記対怖権転億写食。指井写江問知業朝建話空見朝。遊鮮消島成禁融花塩呼修置校人掲官久理治束。戒生矢人保日提九流沢億警料中界。場帯顧統重良例工掲力報鄒授突表意休存。窓新面当目員数終光洋岸営夢学設穿京。能報暮待初土関済動性務地部作。世異婚多法率補福生考済転。",
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

  if (!title) {
    return response.status(422).json({ message: "title is required" });
  }

  const id = crypto.randomUUID();

  news.push({
    id,
    location,
    title,
    description,
    title_zh,
    description_zh,
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

  const { title, location, description, imageURL, active } = request.body;

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
