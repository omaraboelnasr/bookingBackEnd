const express = require("express");
const router = express.Router();
const {
	createRoom,
	getAllRooms,
	getAllRoomsForHotel,
	getRoom,
	updateRoom,
	deleteRoom,
} = require("./roomControllers");

router.route("/:id").post(createRoom).get(getAllRoomsForHotel);
router.route("/room/:id").get(getRoom).patch(updateRoom).delete(deleteRoom);
router.route("/").get(getAllRooms);

module.exports = router;
