const router = require("express").Router();

const inquiriesController = require("../controllers/inquiriesController");

router.get("/", inquiriesController.getAllInquiries);
router.get("/:id", inquiriesController.getInquiryById);
router.post("/", inquiriesController.createInquiry);
router.put("/:id", inquiriesController.updateInquiry);
router.delete("/:id", inquiriesController.deleteInquiry);

module.exports = router;
