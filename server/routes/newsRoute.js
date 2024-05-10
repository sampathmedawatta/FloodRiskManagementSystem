const router = require("express").Router();
const multer = require("multer");

const upload = multer({ dest: "uploads/" });
const newsController = require("../controllers/newsController");

router.get("/", newsController.getAllNews);
router.get("/:id", newsController.getNewsById);
router.post("/", newsController.createNews);
router.post("/upload/", upload.single("File"), newsController.uploadFile);
router.put("/:id", newsController.updateNewsById);
router.delete("/:id", newsController.deleteNewsById);

module.exports = router;
