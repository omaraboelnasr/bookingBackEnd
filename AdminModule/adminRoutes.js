const express = require("express");
const router = express.Router();
const {
	adminAuthentication,
	adminAuthorization,
} = require("./adminMiddleware");

// Admin Routes
const { register, login } = require("./adminControllers");
router.route("/").post(register);
router.route("/login").post(login);

// Users Routes
const {
	getAllUsers,
	updateUserById,
	deleteUserById,
} = require("../UsersModule/userControllers");
router.use("/users", adminAuthentication);
router.route("/users").get(getAllUsers);
router
	.route("/users/:id")
	// .patch(adminAuthorization, updateUserById)
	.delete(adminAuthorization, deleteUserById);

// Hotels Routes
const {
	createHotel,
	getAllHotel,
	getHotel,
	updateHotel,
	deleteHotel,
} = require("../HotelsModule/hotelControllers");
router.use("/hotels", adminAuthentication);
router.route("/hotels").get(getAllHotel).post(createHotel);
router
	.route("/hotels/:id")
	.patch(adminAuthorization, updateHotel)
	.delete(adminAuthorization, deleteHotel);

// Rooms Routes
const {
	createRoom,
	getAllRooms,
	getRoom,
	updateRoom,
	deleteRoom,
} = require("../RoomsModule/roomControllers");

router.route("/hotels/rooms/:id").post(createRoom).get(getAllRooms);

router
	.route("/hotels/room/:id")
	.get(getRoom)
	.patch(adminAuthorization, updateRoom)
	.delete(adminAuthorization, deleteRoom);

// Bookings Routes
router.use("/bookings", adminAuthentication);

module.exports = router;
