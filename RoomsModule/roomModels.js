const mongoose = require("mongoose");

const RoomSchema = mongoose.Schema(
	{
		hotelId: {
			type: mongoose.SchemaTypes.ObjectId,
			ref: "hotels",
		},
		roomType: {
			type: String,
			enum: ["single room", "double room", "triple room"],
			required: true,
		},
		bedType: {
			type: String,
			enum: ["single bed", "double beds"],
			required: true,
		},
		guestNumber: {
			type: Number,
			required: [true, "Number of guests is required"],
		},
		price: {
			type: Number,
			min: [10, "your price must be more than 10 $"],
			max: [100000, "your price must be little than 100000$"],
			required: true,
		},
	},
	{ collcetion: "rooms" }
);

const roomsModel = mongoose.model("rooms", RoomSchema);

module.exports = roomsModel;
