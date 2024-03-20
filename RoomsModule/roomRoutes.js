const express = require("express");
const router = express.Router();
const {
	createRoom,
	getAllRooms,
	getRoom,
	updateRoom,
	deleteRoom,
} = require("./roomControllers");

router.route("/:id").post(createRoom).get(getAllRooms);
router.route("/room/:id").get(getRoom).patch(updateRoom).delete(deleteRoom);

module.exports = router;
