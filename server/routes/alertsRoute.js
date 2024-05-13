const router = require("express").Router();
const alertsController = require("../controllers/alertsController");

// Specific route for getting alerts by days
router.get("/days", alertsController.getAlertsByDays);

// Generic routes for CRUD operations
router.get("/", alertsController.getAllAlerts);
router.get("/:id", alertsController.getAlertById);
router.get("/ByDate/", alertsController.getAlertsByDate);
router.post("/", alertsController.createAlert);
router.put("/:id", alertsController.updateAlert);
router.delete("/:id", alertsController.deleteAlert);

module.exports = router;