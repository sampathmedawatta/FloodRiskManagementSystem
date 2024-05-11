const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/", authController.login);
router.post(
  "/password/reset/:id/",
  authController.changePassword
);

module.exports = router;
