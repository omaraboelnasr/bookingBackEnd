const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
	{
		userId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "users",
			required: [true, "Insert user Id"],
		},
		roomId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "rooms",
			required: [true, "Insert room Id"],
		},
		guests: {
			type: Number,
			required: [true, "Insert guest number"],
		},
		checkIn: {
			type: String,
			required: [true, "Insert check in date"],
		},
		checkOut: {
			type: String,
			required: [true, "Insert check out date"],
		},
	},
	{ timestamps: true, collection: "bookings" }
);

const bookingsModel = mongoose.model("bookings", BookingSchema);

module.exports = bookingsModel;
