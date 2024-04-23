const router = require("express").Router();

const faqsController = require("../controllers/faqsController");

router.get("/", faqsController.getAllFAQs);
router.get("/:id", faqsController.getFAQById);
router.post("/", faqsController.createFAQ);
router.put("/:id", faqsController.updateFAQ);
router.delete("/:id", faqsController.deleteFAQ);

module.exports = router;
