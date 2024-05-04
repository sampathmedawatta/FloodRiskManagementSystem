const router = require("express").Router();

const newsController = require("../controllers/newsController");

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);
router.post("/", newsController.createNews);
router.put("/:id", newsController.updateNewsById);
router.delete("/:id", newsController.deleteNewsById);

module.exports = router;
