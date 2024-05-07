const router = require("express").Router();

const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

// Authentication route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const result = await userController.authenticateUser(email, password);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(401).json(result);
    }
  });
  
  // Password change route
  router.put("/:id/change-password", async (req, res) => {
    const { currentPassword, newPassword } = req.body;
    const userId = req.params.id;
    const result = await userController.changePassword(userId, currentPassword, newPassword);
    if (result.success) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  });
  
module.exports = router;
