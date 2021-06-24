const router = require("express").Router();
const userControllers = require("../controllers/user.controller");

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getOneUser);
router.post("/", userControllers.addNewUser);
router.put("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
