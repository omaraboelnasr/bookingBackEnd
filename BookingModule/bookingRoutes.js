const express = require("express");
const router = express.router();
const { createBooking } = require("./bookingControllers");

router.route("/").post(createBooking);
