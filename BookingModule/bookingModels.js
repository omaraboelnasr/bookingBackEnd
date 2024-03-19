const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "users",
			required: true,
		},
		roomId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "rooms",
			required: true,
		},
		guests: {
			type: Number,
			required: true,
		},
		checkIn: {
			type: String,
			required: true,
		},
		checkOut: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true, collection: "bookings" }
);

const bookingsModel = mongoose.model("bookings", BookingSchema);

module.exports = bookingsModel;
