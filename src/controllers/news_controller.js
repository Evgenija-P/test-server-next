const NewsModel = require("../schemas/news_schema");

exports.getAllNews = async (req, res) => {
  try {
    const allNews = await NewsModel.find();
    res.status(200).json(allNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNewsBySlug = async (req, res) => {
  try {
    const news = await NewsModel.findOne({ slug: req.params.slug });
    if (!news) {
      return res.status(404).json({ message: "news not found" });
    }
    res.status(200).json(news);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createNews = async (req, res) => {
  try {
    const news = new NewsModel(req.body);
    const result = await news.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
