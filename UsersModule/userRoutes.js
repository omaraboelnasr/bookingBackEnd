const express = require("express");
const router = express.Router();
const { checkUserIdInToken } = require("./userMiddleware");
const {
	register,
	getAllUsers,
	updateUserById,
	deleteUserById,
	login,
	getUser,
} = require("./userControllers");

router.post("/", register);
router.get("/profile", checkUserIdInToken, getUser);
router.get("/", getAllUsers);
router.patch("/:id", checkUserIdInToken, updateUserById);
router.delete("/:id", checkUserIdInToken, deleteUserById);
router.post("/login", login);

module.exports = router;
