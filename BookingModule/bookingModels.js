const mongoose = require("mongoose");

const BookingSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "user",
			required: [true, "Insert user Id"],
		},
		room: [
			{
				type: mongoose.SchemaTypes.ObjectId,
				ref: "rooms",
				required: [true, "Insert room Id"],
			},
		],
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
		totalPrice: {
			type: Number,
			required: [true, "Insert total price"],
		},
	},
	{ timestamps: true, collection: "bookings" }
);

const bookingsModel = mongoose.model("bookings", BookingSchema);

module.exports = bookingsModel;
