const express = require("express");
const router = express.Router();
const {
	adminAuthentication,
	adminAuthorization,
} = require("./adminMiddleware");
const { register, login } = require("./adminControllers");
const {
	getAllUsers,
	updateUserById,
	deleteUserById,
} = require("../UsersModule/userControllers");

router.route("/").post(register);
router.route("/login").post(login);
router.use("/hotels", adminAuthentication);
router.use("/bookings", adminAuthentication);
router.use("/users", adminAuthentication);
router.route("/users").get(getAllUsers);
router
	.route("/users/:id")
	.patch(adminAuthorization, updateUserById)
	.delete(adminAuthorization, deleteUserById);

module.exports = router;
