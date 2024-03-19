const express = require("express");
const router = express.Router();
const {
	createBooking,
	getAllBookings,
	getBookingsForUser,
} = require("./bookingControllers");

router.route("/").post(createBooking).get(getAllBookings);
router.route("/:id").get(getBookingsForUser);

module.exports = router;
