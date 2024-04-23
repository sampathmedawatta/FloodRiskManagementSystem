const router = require("express").Router();

const alertsController = require("../controllers/alertsController");

router.get("/", alertsController.getAllAlerts);
router.get("/:id", alertsController.getAlertById);
router.post("/", alertsController.createAlert);
router.put("/:id", alertsController.updateAlert);
router.delete("/:id", alertsController.deleteAlert);

module.exports = router;
