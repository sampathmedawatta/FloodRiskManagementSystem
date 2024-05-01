const router = require("express").Router();

const locationController = require("../controllers/locationController");

router.get("/", locationController.getAllLocations);
router.get("/:id", locationController.getLocationByName);
router.post("/", locationController.createLocation);
router.put("/:id", locationController.updateLocation);
router.delete("/:id", locationController.deleteLocation);

module.exports = router;
