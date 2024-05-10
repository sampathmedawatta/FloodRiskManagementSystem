const router = require("express").Router();

const authController = require("../controllers/authController");

router.post("/", authController.login);
router.post("/:id/change-password", authController.changePassword);

module.exports = router;
