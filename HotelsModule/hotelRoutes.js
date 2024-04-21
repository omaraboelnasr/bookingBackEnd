const express = require("express");
const router = express.Router();
const {
	createHotel,
	getAllHotel,
	getAllHotelDashboard,
	getHotel,
	getHotelByOwner,
	updateHotel,
	deleteHotel,
} = require("./hotelControllers");

router.route("/").post(createHotel).get(getAllHotel).get(getAllHotelDashboard);
router.route("/getall").get(getAllHotelDashboard);
router.route("/:id").get(getHotel).patch(updateHotel).delete(deleteHotel);
router.route("/owners").post(createHotel);
router.route("/owners/:id").get(getHotelByOwner);

module.exports = router;
