const express = require("express");
const router = express.Router();
const {
	adminAuthentication,
	adminAuthorization,
} = require("./adminMiddleware");
const { register, login } = require("./adminControllers");
const {
	updateUserById,
	deleteUserById,
} = require("../UsersModule/userControllers");

router.route("/").post(register);
router.route("/login").post(login);
router.use("/users", adminAuthentication);
router.use("/hotels", adminAuthentication);
router.use("/bookings", adminAuthentication);
router
	.route("/users/:id")
	.patch(adminAuthorization, updateUserById)
	.delete(adminAuthorization, deleteUserById);

module.exports = router;
