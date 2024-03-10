const express = require("express");
const router = express.Router();
const { checkUserIdInToken } = require("./userMiddleware");
const {
	register,
	getAllUsers,
	updateUserById,
	deleteUserById,
	login,
} = require("./userControllers");

router.route("/").post(register).get(getAllUsers);
router
	.route("/:id")
	.patch(checkUserIdInToken, updateUserById)
	.delete(checkUserIdInToken, deleteUserById);
router.post("/login", login);

module.exports = router;
