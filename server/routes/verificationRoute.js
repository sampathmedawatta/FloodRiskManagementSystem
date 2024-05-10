const router = require("express").Router();

const verificationController = require("../controllers/verificationController");

router.get("/otp/", verificationController.getAllOTPs);
router.post("/otp/:id", verificationController.verifyOTP);

router.get("/email/", verificationController.getAllEmails);
router.post("/email/:id", verificationController.verifyEmail);

module.exports = router;
